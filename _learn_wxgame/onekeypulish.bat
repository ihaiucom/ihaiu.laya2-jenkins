
rem https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html
set PATH=%PATH%;D:\Program Files (x86)\Tencent\微信web开发者工具
(

 REM start /wait cli_open.bat
  cli_open.bat
REM TIMEOUT /T 10
 cli_upload.bat
 
echo "5秒后关闭"
TIMEOUT /T 5  /NOBREAK
cli_close.bat
 
echo "3秒后退出" /NOBREAK
cli_quit.bat
)
