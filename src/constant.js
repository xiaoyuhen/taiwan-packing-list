const LIST = [
  {
    name: '文件类',
    title: 'documents',
    lists: [
      {
        name: '护照',
        id: 1,
        checked: false,
        tips: '大陆居民去台湾旅行并不需要护照，但仍可以使用护照作为身份证明进行办理电话卡/订票等服务'
      },
      {
        name: '护照复印件',
        id: 2,
        checked: false,
        tips: ''
      },
      {
        name: '台湾通行证',
        id: 3,
        checked: false,
        tips: '台湾通行证为大陆颁发的证件，理论上从第三国出发去台湾并不需要此证件',
      },
      {
        name: '台湾通行证复印件',
        id: 4,
        checked: false,
        tips: '如台湾通行证丢失，请立刻联系台湾当地派出所，并通过航空公司联系大陆方面确认入境',
      },
      {
        name: '台湾签注',
        id: 5,
        checked: false,
        tips: '目前大陆已暂停办法自由行赴台签注，已经办理的不受影响。如果从香港/澳门出发去台湾，可以尝试办理医美签',
      },
      {
        name: '入台证彩色复印件',
        id: 6,
        checked: false,
        tips: '赴台证必须彩打，如有丢失请到机场移民署补办。（桃园机场移民属在出境大厅3楼）',
      },
      {
        name: '入台证',
        id: 7,
        checked: false,
        tips: '大陆居民必须通过淘宝旅行社办理，如果未居住在中国大陆，可通过台湾移民署自助办理。',
      },
      {
        name: '机票',
        id: 8,
        checked: false,
      },
      {
        name: '台铁票',
        id: 9,
        checked: false,
        tips: '台铁官网可提前 15 天预订，淘宝也可预订，但需要加收手续费。',
      },
      {
        name: '高铁票',
        id: 10,
        checked: false,
        tips: '台湾高铁官网可提前 30 天预订，有早鸟票优惠 6.5折~9折 不等。另外也可通过淘宝代订或者购买高铁乘车兑换券',
      },
      {
        name: '保险单扫描件',
        id: 11,
        checked: false,
        tips: '推荐安联、美亚相关保险',
      },
      {
        name: '酒店确认单',
        id: 12,
        checked: false,
        tips: '大部分情况下不需要，但有可能入境时需要查验',
      },
      {
        name: '紧急联系人信息',
        id: 13,
        checked: false,
        tips: '大部分情况下不需要，防止意外情况',
      },
    ]
  },
  {
    name: '衣物',
    title: 'clothes',
    lists: [
      {
        name: '换洗衣物',
        id: 14,
        checked: false,
      },
      {
        name: '内衣',
        id: 15,
        checked: false,
      },
      {
        name: '雨衣',
        id: 16,
        checked: false,
        tips: '5~6 月是台湾雨季，可以携带雨衣前往',
      },
      {
        name: '睡衣',
        id: 17,
        checked: false,
      },
      {
        name: '泳装',
        id: 18,
        checked: false,
        tips: '如前往垦丁浮潜或者去花莲溯溪，建议携带泳衣前往',
      },
      {
        name: '拖鞋',
        id: 19,
        checked: false,
        tips: '如有海边行程，建议携带拖鞋前往',
      },
      {
        name: '墨镜',
        id: 20,
        checked: false,
      },
      {
        name: '防晒服',
        id: 21,
        checked: false,
      },
    ]
  },
  {
    name: '包',
    title: 'bags',
    lists: [
      {
        name: '背包',
        id: 22,
        checked: false,
      },
      {
        name: '行李箱',
        id: 23,
        checked: false,
      },
      {
        name: '钱包',
        id: 24,
        checked: false,
      },
       {
        name: '相机包',
        id: 25,
        checked: false,
      },
    ]
  },
  {
    name: '日用品',
    title: 'toiletries',
    lists: [
      {
        name: '牙刷牙膏',
        id: 26,
        checked: false,
      },
      {
        name: '牙线',
        id: 27,
        checked: false,
      },
      {
        name: '洗发水、沐浴露',
        id: 28,
        checked: false,
      },
      {
        name: '防晒霜',
        id: 29,
        checked: false,
      },
      {
        name: '毛巾',
        id: 30,
        checked: false,
      },
      {
        name: '纸巾',
        id: 31,
        checked: false,
      },
      {
        name: '卫生巾',
        id: 32,
        checked: false,
      },
      {
        name: '护肤品',
        id: 33,
        checked: false,
      },
      {
        name: '化妆品',
        id: 34,
        checked: false,
      },
      {
        name: '驱蚊剂',
        id: 35,
        checked: false,
      },
      {
        name: '隐形眼镜',
        id: 36,
        checked: false,
      },
      {
        name: '剃须用品',
        id: 37,
        checked: false,
      },
      {
        name: '耳塞',
        id: 38,
        checked: false,
      },
    ]
  },
  {
    name: '旅行资金',
    title: 'funds',
    lists: [
      {
        name: '信用卡',
        id: 39,
        checked: false,
        tips: '大部分商户均支持银联刷卡，使用银联刷卡比 visa 通过相对汇率优',
      },
      {
        name: '台币',
        id: 40,
        checked: false,
        tips: '目前平安银行汇率较秀，也可携带银联卡在台湾当地 atm 取现。',
      },
      {
        name: '港币',
        id: 41,
        checked: false,
        tips: '如需在香港转机，建议携带部分港币',
      },
    ]
  },
  {
    name: '电子用品',
    title: 'technology',
    lists: [
      {
        name: '手机和充电器',
        id: 42,
        checked: false,
      },
      {
        name: '电脑和充电器',
        id: 43,
        checked: false,
      },
      {
        name: '相机和充电器',
        id: 44,
        checked: false,
      },
      {
        name: '台湾手机卡/出境 wifi',
        id: 45,
        checked: false,
        tips: '如需在台湾打电话，则建议在淘宝购买机场中华电信/大哥大相关的流量卡。如入境时已经凌晨，可能流量卡兑换的柜台已关门，建议提前淘宝买好可邮寄的非通话卡',
      },
      {
        name: '香港手机卡/出境 wifi',
        id: 46,
        checked: false,
        tips: '如需在香港转机，建议购买香港手机一日卡备用（约6元',
      },
      {
        name: '移动电源',
        id: 47,
        checked: false,
        tips: '无法托运，需要注意必须标注毫安数，否则无法通过安检',
      },
      {
        name: '耳机',
        id: 48,
        checked: false,
      },
      {
        name: '相机',
        id: 49,
        checked: false,
      },
    ]
  },
  {
    name: '杂物',
    title: 'others',
    lists: [
      {
        name: '晕车药',
        id: 50,
        checked: false,
        tips: '如有坐船/长途车行程，建议提前备好晕车药',
      },
      {
        name: '防水袋',
        id: 51,
        checked: false,
        tips: '如有水上活动相关，建议提前备好防水袋（约 10 元每个',
      },
      {
        name: '保温杯',
        id: 52,
        checked: false,
      },
      {
        name: '雨伞',
        id: 53,
        checked: false,
      },
      {
        name: '眼罩',
        id: 54,
        checked: false,
      },
    ],
  }
]

export default LIST
