set JENKINS_HOME=%cd%/.jenkins
echo %JENKINS_HOME%
java -Dfile.encoding=UTF-8 -Dsun.jnu.encoding=UTF-8 -jar jenkins.war --httpPort=9090
pause