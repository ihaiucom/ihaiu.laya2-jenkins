rem https://developers.weixin.qq.com/miniprogram/dev/devtools/cli.html
set PATH=%PATH%;D:\Program Files (x86)\Tencent\微信web开发者工具
rem echo %PATH%

rem 上传并将代码包大小等信息存入 /Users/username/info.json
cli -u 1.0.0@D:/zengfeng/GameJJSGH5/client/client/GameWX/wxgame --upload-desc 'initial release' --upload-info-output D:/zengfeng/githubs/ihaiu.laya2-jenkins/_learn_wxgame/info.json
pause
