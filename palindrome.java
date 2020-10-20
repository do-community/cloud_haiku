public class palindrome
{
	public static void main(String[] args) {
	String s="malayalam";
	int i,j,f=0,l;
	i=s.length();
	l=i-1;
        for(j=0;j<(i/2);j++)
	 {if(s.charAt(j)!=s.charAt(l))
	  {f=1;
	  break;}
	 l--;
	}
	if(f==1)
	System.out.println(s+" is Not a Palindrome\n");
	else
	System.out.println(s+" is a Palindrome\n");
	}
}        
