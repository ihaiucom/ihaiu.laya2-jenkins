
rem https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html
set PATH=%PATH%;D:\Program Files (x86)\Tencent\΢��web�����߹���
(

 REM start /wait cli_open.bat
  cli_open.bat
REM TIMEOUT /T 10
 cli_upload.bat
 
echo "5���ر�"
TIMEOUT /T 5  /NOBREAK
cli_close.bat
 
echo "3����˳�" /NOBREAK
cli_quit.bat
)
