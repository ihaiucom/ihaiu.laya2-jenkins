set JENKINS_HOME=%cd%/.jenkins
echo %JENKINS_HOME%
java -jar jenkins.war --httpPort=9090
pause