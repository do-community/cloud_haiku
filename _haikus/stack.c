#include <stdio.h>
#include <stdlib.h>
struct queue
{
	int val;
	struct queue *next;
};
int rear=0,front=0,size;
typedef struct queue block;
block *head;
block *insert(block *head)
{
	block *newnode,*p=head;
	newnode=(block *)malloc(sizeof(block));
	if(rear==0) 
	{
		newnode->next=NULL;
		head=newnode;
		printf("Enter: ");
		scanf("%d" ,&newnode->val);     
	}
	else 
	{
		while(p->next!=NULL)
		{
			p=p->next;
		}
		printf("Enter: ");
		scanf("%d" ,&newnode->val);
		p->next=newnode;
		newnode->next=NULL;
	}
	rear++;
    return head;
}
block *delete(block *head)
{
	if(rear==front)
	{
		printf("Queue is Empty\n");
	}
	else
	{
		block *p;
		p=head;
		head=head->next;
		printf("Deleted Value: %d\n",p->val);
		free(p);
		front++;
	}
    return head;
}
block *display(block *head)
{
	if(rear==front)
	{
		printf("Queue is Empty\n");
	}
	else
	{
		block *p;
		p=head;
		while(p!=NULL)
		{
			printf("Value = %d\n",p->val);
			p=p->next;
		}
	}
	return (head);
}
int main()
{
	int t=0;
	int c;
	do
	{
		printf("Enter 1 to insert\n");
		printf("Enter 2 to deletion\n");
		printf("Enter 3 to display\n");
		printf("Enter 4 to exit\n");
		scanf("%d",&c);
		switch(c)
		{
			case 1:
			{
				head=insert(head);
				break;
			}
			case 2:
			{
				head=delete(head);
				break;
			}
			case 3:
			{
				head=display(head);
				break;
			}
			case 4:
			{
				t=1;
				printf("Exit...");
				break;
			}
			default:
			{
				printf("Enter again\n: ");
				break;
			}
		}
	}while(t==0);
}
