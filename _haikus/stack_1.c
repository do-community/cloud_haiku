#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int top,front;
int stack[50];
void create()
{
	top=-1;
	front=0;
} 
void push(char a)
{
    top++;
    stack[top]=a;
}
void pop()
{
    top--;
}
int main()
{
    int i,p=1,c;
    char s[50],b;
    while(p==1)
    {
        printf("Press 1 to Enter the string\n");
        printf("Press 2 to exit\n");
        scanf("%d",&c);
        switch(c)
        {
        case 1:
            printf("Enter the String\n");
            scanf("%s",s);
            int l=strlen(s);
            for(i=0;s[i]!='\0';i++)
            {
                b=s[i];
                push(b);
            }
            for (i=0;i<(l/2);i++)
            {
                if (stack[top]==stack[front])
                {
                    pop();
                    front++;
                }
                else
                {
                    printf("%s is not a palindrome\n", s);
                    break; 
                }
            }
            if((l/2)==front)
                printf("%s is palindrome\n",  s);
            front=0;
            top=-1;
            break;
        case 2:
            p=0;
        default:
            printf("Wrong choice\n");
        }
    }
    return 0;
}
