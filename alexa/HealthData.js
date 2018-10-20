// Created at Oktober Cloud workshop
// Source: https://github.com/InternetOfHealthcare/aws-nursingskill/src/HealthData

var AWS = require('aws-sdk');
const Alexa = require('alexa-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const iotData = new AWS.IotData({ endpoint: "a2p4fyajwx9lux.iot.us-east-1.amazonaws.com" });
const config = {};
const SkillMessagesUS = {
    'welcome'       :'Welcome to Cloud Experience Rio de Janeiro! I love Samba and Caipirinhas!!',
    'help'          :'you can say things my blood sugar is 100 or measure my blood pressure',
    'cancel'        :'goodbye',
    'stop'          :'goodbye',
    'starting_bloodpressure_device':'Starting Blood Pressure Bluetooth device...',
    'turn_on_relay': 'Turning relay on!',
    'turn_off_relay':'Turning relay off!'
};


var SkillMessages = {};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    SkillMessages = SkillMessagesUS;
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('MyIntent');
    },
    'MyIntent': function () {
        this.response.speak(SkillMessages.welcome).listen('try again');
        this.emit(':responseReady');
    },
    'sample_intent': function () {
        this.response.speak("Thanks everybody for coming to Cloud Experience. Now we have a 30 minutes break and the sessions will begin 10:45AM. Let's build on Amazon Web Services! Have a great conference.");
        this.emit(':responseReady');
    },
    'how_is_my_bloodpressure' : function() {
        checkLastBloodPressure(res=> {
            if(res!=null) {
                this.response.speak("Your systolic is " + res.systolic +
                " your diastolic is " + res.diastolic + " and your heart beat is " + res.bpm).listen("try again");
                this.emit(':responseReady');

            }
        })

    },
    'turn_on_relay' : function() {
        turnOnRelay(res=> {
            if(res=="ok") {
                this.response.speak(SkillMessages.turn_on_relay);
                this.emit(':responseReady');
            }
        })
        
    },
    'turn_off_relay' : function() {
        turnOffRelay(res=> {
            if(res=="ok") {
                this.response.speak(SkillMessages.turn_off_relay);
                this.emit(':responseReady');
            }
        })
        
    },
    'start_bloodpressure_ble' : function() {
        startBloodPressureDevice(res=> {
            if(res=="ok") {
                this.response.speak(SkillMessages.starting_bloodpressure_device).listen("try again");
                this.emit(':responseReady');
            }
        })
        
    },
    'how_will_won_world_cup' : function() {
        startBloodPressureDevice(res=> {
            if(res=="ok") {
                this.response.speak("Better not discuss about soccer!").listen("try again");
                this.emit(':responseReady');
            }
        })
        
    },

    'glucuse_avg_hour': function () {
        readAvg(data=> {
            /*console.log(data);
            console.log(this.event);
            console.log(typeof this.event);
            console.log(this.event.request);
            console.log(this.event.request.intent.slots);
            console.log(this.event.request.intent.slots.hourok);
            console.log(this.event.request.intent.slots.hourok.value);*/
            
            var v = this.event.request.intent.slots.hourok.value;
            data = JSON.parse(data);
            var txt;
            if(data['h' +v]==null) txt="I don't have records at this time!";
            else txt = "Your average glucose at " + v + " is " + data['h' + v];
            this.response.speak(txt).listen(txt);
            this.emit(':responseReady');
        })
    },
    'glucose_status': function () {
        readAvg(data=> {
            console.log(data);
            data = JSON.parse(data);
            var txt = "Your average glucose is " + data.glucose_avg;
            this.response.speak(txt).listen(txt);
            this.emit(':responseReady');
        })
    },
    'AMAZON.HelpIntent': function () {
        this.response.speak(SkillMessages.help).listen(SkillMessages.help);
        this.emit(':responseReady');

    },
    'AMAZON.StopIntent': function () {
        this.response.speak(SkillMessages.stop);
        this.emit(':responseReady');

    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(SkillMessages.cancel);
        this.emit(':responseReady');
    },
    'SessionEndedRequest': function() {
        this.emit('AMAZON.StopIntent');
    },
    'Unhandled': function() {
        this.response.speak(SkillMessages.help).listen("teste");
        this.emit(':responseReady');
    }

};
function turnOnRelay(callback) {
    var params = {
        topic: 'iotsurfboard/command',
        payload: '{ "command" : "relay?1"}'
    }
    iotData.publish(params, (err, res) => {
      if (err) { 
          console.log(err);
          callback("error");
      }
      else {
          console.log("message IoT sent!")
          callback("ok");
      }
    });
}
function turnOffRelay(callback) {
    var params = {
        topic: 'iotsurfboard/command',
        payload: '{ "command" : "relay?0"}'
    }
    iotData.publish(params, (err, res) => {
      if (err) { 
          console.log(err);
          callback("error");
      }
      else {
          console.log("message IoT sent!")
          callback("ok");
      }
    });
}

function startBloodPressureDevice(callback) {
    var params = {
        topic: 'healthcare/bloodpressure',
        payload: '{ "on" : true}'
    }
    iotData.publish(params, (err, res) => {
      if (err) { 
          console.log(err);
          callback("error");
      }
      else {
          console.log("message IoT sent!")
          callback("ok");
      }
    });
}
function checkLastBloodPressure(callback) {
    var table = process.env.blood_pressure_table_name;
    var name = "Blood Pressure BLE Device";
    var params;

    params = {
        TableName: table,
        ProjectionExpression: "diastolic, systolic, bpm",
        FilterExpression: "#name = :namev",
        ExpressionAttributeNames: {
            "#name" : "name"
        },
        ExpressionAttributeValues: {
             ":namev" : name
        }
    };

    dynamoDB.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log(data.Items.length);
            console.log(data.Items[0]);
            var responseData = data.Items[data.Items.length-1];
            console.log(responseData);
            callback(responseData);
        }
    });
}
function readAvg(callback) {
    var table = process.env.table_name;
    var name = process.env.patient;
    console.log(name);
    var params;

    params = {
        TableName: table,
        ProjectionExpression: "input_type, glucose_readout, time_stamp_hour",
        FilterExpression: "#t = :v and #name = :namev",
        ExpressionAttributeNames: {
            "#t": "input_type",
            "#name" : "name",
        },
        ExpressionAttributeValues: {
             ":v": "1",
             ":namev" : name
        }
    };

    dynamoDB.scan(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            var avg = 0;
            var totalElements = data.Items.length;
            var totalGlucose = 0;
            var hours_value =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var hours_entries =[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
            var hour=0, readout=0;
            console.log("Number of records " + totalElements);
            for(var x=0;x<data.Items.length;x++) {
                hour = data.Items[x].time_stamp_hour;
                readout = parseInt(data.Items[x].glucose_readout);
                hours_value[hour]+=readout;
                hours_entries[hour]++;
                totalGlucose = totalGlucose + readout;
            }
            avg =parseInt(totalGlucose/totalElements);
            var responseData;
            responseData = '{ "glucose_avg" : ' + avg + ',';
            for(var x=0;x<24;x++) {
                if(hours_value[x]!=null && hours_value[x]>0) {
                    responseData+= '"h' + x +'" : ' + parseInt(hours_value[x] / hours_entries[x]) + ',';
                }
            }
            responseData = responseData.substring(0,responseData.length-1);
            responseData +="}"
            callback(responseData);
        }
    });
}