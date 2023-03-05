/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx67657e05932c22d6',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'ac6812dc794471fa2f65ee072c6de055',

  PROVINCE: '黑龙江',
  CITY: '哈尔滨',

  USERS: [
    {
      // 想要发送的人的名字
      name: '睡觉',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olURh5-sl63biyE_GsjzcsuowSKs',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'mdDZXHfSF8sLSBW8zNcWBSuR3d9lNxDNjaDTa8gVM_s',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-14',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '猫猫', year: '2000', date: '11-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '狗狗', year: '2001', date: '10-05',
        },
        {
          type: '节日', name: '相识纪念日', year: '2017', date: '01-16',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-12-25' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-12-25' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'mdDZXHfSF8sLSBW8zNcWBSuR3d9lNxDNjaDTa8gVM_s',

  CALLBACK_USERS: [
    {
      name: '想睡觉',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'olURh5yZ0Q7trx8hlbd5UOpFSsl4',
    }
  ],

}

module.exports = USER_CONFIG

