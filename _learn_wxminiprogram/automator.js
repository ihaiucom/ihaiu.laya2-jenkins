const automator = require('miniprogram-automator')

automator.launch({
  // cliPath: 'path/to/cli', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
  cliPath: 'D:/Program Files (x86)/Tencent/微信web开发者工具/cli.bat', // 工具 cli 位置，如果你没有更改过默认安装位置，可以忽略此项
  projectPath: 'D:/zengfeng/GameJJSGH5/client/client/GameWX/wxgame', // 项目文件地址
}).then(async miniProgram => {
  const page = await miniProgram.reLaunch('/page/component/index')
  await page.waitFor(500)
  const element = await page.$('.kind-list-item-hd')
  console.log(await element.attribute('class'))
  await element.tap()

  await miniProgram.close()
})