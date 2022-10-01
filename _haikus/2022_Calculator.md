---
layout: haiku
title: Calculator
author: Taj Muhammed
---


import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.SwingConstants;

public class Calculator implements ActionListener {
	JButton OP;
	String oldnum;
	Boolean operatorClicks=false;
	JFrame jf;
	JLabel jl; //jl=display text
	JButton jb,jb1,jb2,jb3,jb4,jb5,jb6,jb7,jb8,jb9,jb10,jb11,jb12,jb13,jb14,jb15,jb16;
	float result;
	public Calculator() {
		jf=new JFrame("Calculator");
		jf.setSize(600,600);
		jf.setLayout(null);
		jf.setLocation(450,200);
		jl=new JLabel();
		jl.setBounds(100, 10, 310, 50);
		jl.setFont(new Font("Arial", Font.PLAIN,40));
		jl.setBackground(Color.DARK_GRAY);
		jl.setForeground(Color.white);
		jl.setHorizontalAlignment(SwingConstants.RIGHT);
		
		jl.setOpaque(true);
		jf.add(jl);
		
		
		jb=new JButton("7");
		jb.setBounds(100,150,70,70);		/*jb- Button name of 7*/
		jf.add(jb);
		jb.addActionListener(this);
		jb.setFont(new Font("Arial", Font.PLAIN,40));
		jb1=new JButton("8");
		jb1.setBounds(180,150,70,70);
		jf.add(jb1);
		jb1.addActionListener(this);
		jb1.setFont(new Font("Arial", Font.PLAIN,40));
		jb2=new JButton("9");
		jb2.setBounds(260,150,70,70);
		jf.add(jb2);
		jb2.setFont(new Font("Arial", Font.PLAIN,40));
		jb2.addActionListener(this);
		jb3=new JButton("4");
		jb3.setBounds(100,230,70,70);
		jf.add(jb3);
		jb3.setFont(new Font("Arial", Font.PLAIN,40));
		jb3.addActionListener(this);
		jb4=new JButton("5");
		jb4.setBounds(180,230,70,70);
		jf.add(jb4);
		jb4.setFont(new Font("Arial", Font.PLAIN,40));
		jb4.addActionListener(this);
		jb5=new JButton("6");
		jb5.setBounds(260,230,70,70);
		jf.add(jb5);
		jb5.setFont(new Font("Arial", Font.PLAIN,40));
		jb5.addActionListener(this);
		jb6=new JButton("1");
		jb6.setBounds(100,310,70,70);
		jf.add(jb6);
		jb6.setFont(new Font("Arial", Font.PLAIN,40));
		jb6.addActionListener(this);
		jb7=new JButton("2");
		jb7.setBounds(180,310,70,70);
		jf.add(jb7);
		jb7.setFont(new Font("Arial", Font.PLAIN,40));
		jb7.addActionListener(this);
		jb8=new JButton("3");
		jb8.setBounds(260,310,70,70);
		jf.add(jb8);
		jb8.setFont(new Font("Arial", Font.PLAIN,40));
		jb8.addActionListener(this);
		jb9=new JButton("0");
		jb9.setBounds(100,390,150,70);
		jf.add(jb9);
		jb9.setFont(new Font("Arial", Font.PLAIN,40));
		jb9.addActionListener(this);
		jb10=new JButton(".");
		jb10.setBounds(260,390,70,70);
		jf.add(jb10);
		jb10.setFont(new Font("Arial", Font.PLAIN,40));
		jb10.addActionListener(this);
		jb11=new JButton("X");
		jb11.setBounds(340,150,70,70);
		jf.add(jb11);
		jb11.setFont(new Font("Arial", Font.PLAIN,40));
		jb11.addActionListener(this);
		jb12=new JButton("-");
		jb12.setBounds(340,230,70,70);
		jf.add(jb12);
		jb12.setFont(new Font("Arial", Font.PLAIN,40));
		jb12.addActionListener(this);
		jb13=new JButton("+");
		jb13.setBounds(340,310,70,70);
		jf.add(jb13);
		jb13.setFont(new Font("Arial", Font.PLAIN,40));
		jb13.addActionListener(this);
		jb14 = new JButton("=");
		jb14.setBounds(340,390,70,70);
		jf.add(jb14);
		jb14.setFont(new Font("Arial", Font.PLAIN,40));
		jb14.addActionListener(this);
		jb15 = new JButton("C");
		jb15.setBounds(100,70,70,70);
		jf.add(jb15);
		jb15.setFont(new Font("Arial", Font.PLAIN,40));
		jb15.addActionListener(this);
		jb16=new JButton("/");
		jb16.setBounds(340,70,70,70);
		jf.add(jb16);
		jb16.setFont(new Font("Arial", Font.PLAIN,40));
		jb16.addActionListener(this);
		
		jf.setVisible(true);
		jf.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	}
	public static void main(String[] args) {
		new Calculator();
	}
	@Override
	public void actionPerformed(ActionEvent e) {
		
		if(e.getSource()==jb) {
			jl.setText(jl.getText()+"7");
		}else if(e.getSource()==jb1) {
			jl.setText(jl.getText()+"8");
		}else if(e.getSource()==jb2) {
			jl.setText(jl.getText()+"9");
		}else if(e.getSource()==jb3) {
			jl.setText(jl.getText()+"4");
		}
		else if(e.getSource()==jb4) {
			jl.setText(jl.getText()+"5");
		}else if(e.getSource()==jb5) {
			jl.setText(jl.getText()+"6");
		}else if(e.getSource()==jb6) {
			jl.setText(jl.getText()+"1");
		}else if(e.getSource()==jb7) {
			jl.setText(jl.getText()+"2");
		}else if(e.getSource()==jb8) {
			jl.setText(jl.getText()+"3");
		}else if(e.getSource()==jb9) {
			jl.setText(jl.getText()+"0");
		}else if(e.getSource()==jb10) {
			jl.setText(jl.getText()+".");
		}else if(e.getSource()==jb15) {
			jl.setText("");
		}
		else if(e.getSource()==jb13) {
			OP=jb13;
			oldnum=jl.getText();
			if(operatorClicks=true) {
				jl.setText("");
			}
		}
		else if(e.getSource()==jb11) {
			OP=jb11;
			oldnum=jl.getText();
			if(operatorClicks=true) {
				jl.setText("");
			}
			
		}
		else if(e.getSource()==jb12) {
			OP=jb12;
			oldnum=jl.getText();
			if(operatorClicks=true) {
				jl.setText("");
			}
			
		}
		else if(e.getSource()==jb16) {
			OP=jb16;
			oldnum=jl.getText();
			if(operatorClicks=true) {
				jl.setText("");
			}
			
		}
		else if(e.getSource()==jb14) {
			jl.setText(result+"");
				
			}
		
			String newnum=jl.getText();
			float oldnumF=Float.parseFloat(oldnum);
			float newnumF=Float.parseFloat(newnum);
			
			if(OP==jb13) {
			result=newnumF+oldnumF;
			}
			else if(OP==jb11) {
				
			result=newnumF*oldnumF;
			}
			else if(OP==jb12) {
			result=oldnumF-newnumF;
			}
			else if(OP==jb16) {
			result=oldnumF/newnumF;
			}
		
		}
		
	}

