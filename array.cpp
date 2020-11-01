#include<iostream>
#include<array>
using namespace std;
int main()
{
	array<int,5> data={2,5,7,8,6};
	array<int,5> data1={10,20,30,40,50};
	for(int i=0;i<5;i++)
	cout<<data[i];
	cout<<endl;
	cout<<"array index"<<data.at(2)<<endl;	//for return array element given index
	cout<<"front element"<<data.front()<<endl;	//for return front index of element
	cout<<"back element"<<data.back()<<endl;	//for return back index of element
	//data.fill(10);
	//for(int i=0;i<5;i++)		// for replace by 10 of all element
	//cout<<data[i];
	data.swap(data1);
	for(int i=0;i<5;i++)
		cout<<data[i];
	cout<<endl;
	for(int i=0;i<5;i++)
		cout<<data1[i];
	cout<<"size of array"<<data.size();
}
