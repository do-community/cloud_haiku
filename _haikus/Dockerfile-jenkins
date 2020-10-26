FROM centos

RUN dnf install java-11-openjdk.x86_64 -y

RUN yum install wget -y

RUN wget -O /etc/yum.repos.d/jenkins.repo http://pkg.jenkins.io/redhat-stable/jenkins.repo

RUN rpm --import https://pkg.jenkins.io/redhat-stable/jenkins.io.key

RUN yum install git -y

RUN yum install jenkins -y

RUN echo "jenkins ALL=(ALL) NOPASSWD: ALL">>/etc/sudoers

RUN yum install python3 -y

CMD java -jar /usr/lib/jenkins/jenkins.war
