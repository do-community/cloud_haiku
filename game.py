from random import randint

#create play option
t=["rock","paper","scissors"]

computer=t[randint(0,2)]
player=False

while player==False:
    player=input("rock,paper,scissors")
    if player==computer:
        print("Tie!")
        break
    elif player=="rock":
        if computer=="paper":
            print("you lose!",computer,"coverc",player)
        else:
            print("you win!", player ,"covers",computer)
            break
    elif player=="paper":
        if computer=="scissors":
            print("you lose!",computer,"covers", player)
        else:
            print("you win!", player ,"covers",computer)
            break
    elif player=="scissors":
        if computer=="rock":
            print("you lose!",computer ,"covers",player)
        else:
            print("you win!", player ,"covers",computer)
            break

    else:
        print("that's not a valid play. check your spelling")
        break
    player=False
    computer=t[randint(0,2)]
