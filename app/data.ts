export enum Category {
  TEXT, // 文章
  IMAGE, // 绘画
  VIDEO, // 视频
}

export enum EndType {
  HE,
  BE,
  OE,
}

export interface WorkItem {
  category: Category; // 类型
  title: string; // 标题
  weiboUrl: string; // 微博链接
  directUrl?: string[] | string; // 直接链接 (有的是微博转到其他的平台)
  author: string; // 作者
  description?: string; // 描述
  endType?: EndType; // 类型
  coverImage: string; // 封面图
}
interface WorkGroup {
  title: string; // 标题
  items: WorkItem[]; // 作品
}

export const workGroups: WorkGroup[] = [
  {
    title: "00:00 | 四季组",
    items: [
      {
        category: Category.IMAGE,
        title: "年年岁岁",
        weiboUrl: "http://t.cn/A6uiB1dL",
        author: "泥的墙",
        description: "没错  这就是小情侣的日常​​​",
        endType: EndType.HE,
        coverImage:
          "https://wx4.sinaimg.cn/mw690/008Fl9Pkly1hx4bzywhq9j30zk8j7x6p.jpg",
      },
    ],
  },
  {
    title: "00:01 | 春天组",
    items: [
      {
        category: Category.TEXT,
        title: "浅绿苏打",
        weiboUrl: "http://t.cn/A6uiB1dw",
        directUrl: ["https://pan.quark.cn/s/287a67cc896a"],
        description: "如果ongsa在小时候就遇见sun会怎样？本文就是这样一个故事。",
        author: "阿三今天又磕到了",
        endType: EndType.HE,
        coverImage:
          "https://wx3.sinaimg.cn/large/008yErrbly1hx4jljoc7fj30u00i0dj9.jpg",
      },
      {
        category: Category.TEXT,
        title: "笑春风",
        weiboUrl: "http://t.cn/A6uiB1d7",
        directUrl: [
          "https://paste.to/?f3914e1e6ad00603#DyU8JQ5dTUD7AckA4KQhNM8xbYWRy96ntKEhz8Rqx1ox",
        ],
        author: "俞青lll",
        endType: EndType.BE,
        description: "风会代替我拥抱你",
        coverImage:
          "https://wx4.sinaimg.cn/large/006UIwoxly1hx4kv7oqldj30u00i0ad2.jpg",
      },
      {
        category: Category.TEXT,
        title: "小爱神",
        weiboUrl: "http://t.cn/A6uiudiz",
        directUrl: [
          "https://www.asianfanfics.com/story/view/1614477",
          "https://paste.to/?badd46cfe9df525b#7LTXJha4Xmdyc1XtUwJTVkVN8utnQEdMuvoYCspRxUft&continueFlag=ab9a4de3cd3b7c2812aff2dc150221fb",
        ],
        author: "星河宓町",
        endType: EndType.HE,
        coverImage:
          "https://wx3.sinaimg.cn/large/006JnRTAly1hx4fw55qn3j30rs0fmtb4.jpg",
        description:
          "绽放过的情意，如烟花般绚烂，沉寂着却不曾熄灭，如炙热的地脉游走各处，只需轻风鼓动，便从余烬中挣扎着燃起烈焰。",
      },
      {
        category: Category.TEXT,
        title: "春生",
        weiboUrl: "http://t.cn/A6uimuFZ",
        description: `一个属于她们的春天。“她哪会是什么春生，她顶多是春寒料峭。”*oe`,
        author: "TTTTTTTideFog",
        directUrl: ["https://www.asianfanfics.com/story/view/1614510/n-a"],
        endType: EndType.OE,
        coverImage:
          "https://wx2.sinaimg.cn/large/008e4ZeOgy1hx4afnx92jj30wr0igq6c.jpg",
      },
      {
        category: Category.TEXT,
        title: "小吊梨汤",
        weiboUrl: "http://t.cn/A6uiB1dz",
        directUrl: [
          "https://weibo.com/ttarticle/p/show?id=2309405117797905859043",
        ],
        author: "优雅的野生阿婆粉",
        description: "花落三朵时到家",
        endType: EndType.HE,
        coverImage:
          "https://wx1.sinaimg.cn/large/7f504281ly1hx4k2b8004j20u00i0jty.jpg",
      },
      {
        category: Category.TEXT,
        title: "天灾系统",
        weiboUrl: "http://t.cn/A6uiB1dh",
        coverImage:
          "https://wx2.sinaimg.cn/large/006bd1vngy1hx4leii5mij30k00b9jsw.jpg",
        description: `“欢迎来到天灾系统—Disaster”
*oe`,
        directUrl: ["https://www.asianfanfics.com/story/view/1614529/n-a"],
        author: "咖啡head-Caffeine",
        endType: EndType.HE,
      },
      {
        category: Category.TEXT,
        title: "遇见你之前",
        weiboUrl: "http://t.cn/A6uiB1dA",
        coverImage:
          "https://wx4.sinaimg.cn/large/7434641bly1hx4jsbnpslj20rs0fmn0a.jpg",
        directUrl: [
          "https://www.asianfanfics.com/story/view/1614498/n-a",
          "https://www.asianfanfics.com/story/view/1614499/n-a",
        ],
        author: "水果湖居士",
        endType: EndType.HE,
        description: `
                我不是她，也改不了自己应对人生的方法，对你的无奈喜欢，只能像在冬日等候蝉鸣，在夏夜期待雪花。（提示，故事中除了milk love以外的角色请自动代入《女孩规则》中同名角色）
  `,
      },
      {
        category: Category.TEXT,
        title: "玛丽苏豪赌案例",
        directUrl: [
          "https://pan.baidu.com/share/init?surl=ekjpXRVVMGuUFWl_9aunPQ&pwd=4x76",
        ],
        weiboUrl: "http://t.cn/A6u66kii",
        author: "哼哼心想事成",
        endType: EndType.HE,
        coverImage:
          "https://wx4.sinaimg.cn/large/008s7SBfgy1hx504dxetyj30v90hltaw.jpg",
        description: "走啊一起去当玛丽苏",
      },
    ],
  },
  {
    title: "06:00 | 夏天组",
    items: [
      {
        category: Category.TEXT,
        title: "其时",
        weiboUrl: "http://t.cn/A6u6Drxc",
        author: "04年光之崽种",
        endType: EndType.BE,
        directUrl: [
          "https://weibo.com/ttarticle/p/show?id=2309405118000960241688",
        ],
        description: "城南小陌又逢春，只见梅花不见人",
        coverImage:
          "https://wx1.sinaimg.cn/large/0086xrXZgy1hx57cb2ozvj30u00i0tdg.jpg",
      },
      {
        category: Category.IMAGE,
        title: "夏天",
        weiboUrl: "http://t.cn/A6u6UKF1",
        author: "知道了我就磕一下",
        description: `泰国的夏季是黏腻、燥热、漫长的
没有期待过夏天 
因为这里只有夏天但现在是有你的夏天
于是对夏天的记忆变成了
东京夜里的烟花、南意海岸的柠檬、曼谷房间的体温​​`,
        coverImage:
          "https://wx1.sinaimg.cn/mw690/0076wlltly1hx4tybh39pj31ww2pgb2b.jpg",
      },
      {
        category: Category.TEXT,
        title: "我可否将你比作一个夏日",
        weiboUrl: "http://t.cn/A6u6UYEA",
        author: "一个不太清楚来历的账户001",
        description: `
“你说，love她会答应吗？” “白痴！谁都看得出来，她——喜——欢——你。”（双视角  推荐阅读配乐：Mree版本《Mystery of Love》）`,
        endType: EndType.HE,
        directUrl: ["https://pan.quark.cn/s/cab0ee2feaae#/list/share"],
        coverImage:
          "https://wx2.sinaimg.cn/large/00865nITgy1hx4u9imgwuj319k0pndkg.jpg",
      },
      {
        category: Category.TEXT,
        title: "一盏荼蘼",
        weiboUrl: "http://t.cn/A6u6cft5",
        author: "菠萝包不是菠萝味",
        description: "“P Milk 谈过恋爱吗？PMilk知道该怎么处理一段亲密关系吗？”",
        directUrl: ["https://www.asianfanfics.com/story/view/1614569"],
        coverImage:
          "https://wx2.sinaimg.cn/large/007fAq4Sgy1hx4xkrwa2xj30zo0k3wi0.jpg",
      },
      {
        category: Category.VIDEO,
        title: "梦",
        description: "从梦境到现实   我的眼里只有你",
        directUrl: ["https://www.bilibili.com/video/BV1PQ6SYXE7Y"],
        weiboUrl: "http://t.cn/A6u647J1",
        author: "雨蜜米泰多辣",
        coverImage:
          "https://wx4.sinaimg.cn/large/008E4omcgy1hx53v6sbsqj30u00i0wkc.jpg",
      },
      {
        category: Category.TEXT,
        title: "完美落点",
        weiboUrl: "http://t.cn/A6u6UKF3",
        author: "我又在挖挖挖挖挖",
        directUrl: ["https://www.kdocs.cn/l/cbmyH4rLVX5l"],
        description:
          "原来输了比赛也会有奖励，不完美的小孩也可以得到世界的偏爱。",
        endType: EndType.HE,
        coverImage:
          "https://wx4.sinaimg.cn/large/006fMAhOgy1hx4aonvp7sj30u00i0n1c.jpg",
      },
      {
        category: Category.TEXT,
        title: "蓝火",
        directUrl: [
          "https://paste.to/?0f249af1cce452d4#ByzGERP9JA3NiuQ2KyLcZCTCYmgKx5zAp9cd9Jtt3Jz9",
          "https://www.asianfanfics.com/story/view/1614562",
        ],
        weiboUrl: "http://t.cn/A6u64ioS",
        author: "默名_04",
        description: " “太激烈的心跳声也是一种告白。”",
        endType: EndType.HE,
        coverImage:
          "https://wx3.sinaimg.cn/large/006cRK8bgy1hx4vjg3a9aj30n00cy3zl.jpg",
      },
    ],
  },
  {
    title: "12:00 | 秋天组",
    items: [
      {
        category: Category.TEXT,
        title: "Mirror",
        weiboUrl: "http://t.cn/A6u68DZE",
        directUrl: [
          "https://paste.to/?3eaad39dec27443a#2vVQDDMq3pNJ7szv1Eh8Ue6q7mijwsMQ3rsSHLdr9Gwf",
        ],
        description: "“Dear myself, I don't know you very well either.”",
        author: "小白_Zara",
        endType: EndType.BE,
        coverImage:
          "https://wx4.sinaimg.cn/large/0076jZRwgy1hx4ko440qdj30qo0f0gn1.jpg",
      },
      {
        category: Category.TEXT,
        title: "穿回过去后竟然被攻略了",
        weiboUrl: "http://t.cn/A6u6mOJL",
        directUrl: [
          "https://docs.qq.com/pdf/DZUZTdkFpWGZCZk1H",
          "https://www.asianfanfics.com/story/view/1614615",
        ],
        author: "陈季OoO",
        description: "“love，我知道你是来爱我的”",
        endType: EndType.OE,
        coverImage:
          "https://wx2.sinaimg.cn/large/006wgdHzgy1hx44h5odv9j30u00hzn0h.jpg",
      },
      {
        category: Category.VIDEO,
        title: "我站在时间的尽头",
        weiboUrl: "http://t.cn/A6u68DZQ",
        description: `属于奶爱版的《开端》
如果每次循环我都注定会爱上你 那么 循环的始作俑者 到底是谁。 `,
        author: "奇妙能力六",
        endType: EndType.HE,
        coverImage:
          "https://wx4.sinaimg.cn/large/008s7SBfgy1hx504dxetyj30v90hltaw.jpg",
      },
      {
        category: Category.TEXT,
        title: "蝉泣",
        weiboUrl: "http://t.cn/A6u68DZ8",
        directUrl: ["https://www.kdocs.cn/l/cueTQaZFDaf6"],
        author: "-知-白-",
        description: "我们没有未来，我们更没有明天",
        endType: EndType.BE,
        coverImage:
          "https://wx2.sinaimg.cn/large/008sMb8ygy1hx54kaxljkj30u00i0dki.jpg",
      },
      {
        category: Category.TEXT,
        title: "等",
        weiboUrl: "http://t.cn/A6u6RXvl",
        author: "纳什均衡_",
        endType: EndType.HE,
        description:
          "富二代Love✖️运动康复高材生Milk，一个关于相遇和重逢的小故事。\n故事里富二代有短暂的婚姻，介意勿入，无论看或不看都祝你开心[2025]🥛💖",
        directUrl: "https://www.asianfanfics.com/story/view/1614586",
        coverImage:
          "https://wx3.sinaimg.cn/large/006ayzp5ly1hx54zr8zpcj30wr0ig0v6.jpg",
      },
      {
        category: Category.TEXT,
        title: "早悟兰因",
        weiboUrl: "http://t.cn/A6u68DZR",
        author: "银河系分布",
        endType: EndType.OE,
        description: "我们之间差一场正式的告别。",
        directUrl:
          "https://weibo.com/ttarticle/p/show?id=2309405117976495128640",
        coverImage:
          "https://wx3.sinaimg.cn/large/0084hcYVly1hx20ty2ckrj30wi0ib0uu.jpg",
      },
    ],
  },
  {
    title: "18:00 | 冬天组",
    items: [
      {
        category: Category.TEXT,
        title: "录像带",
        weiboUrl: "http://t.cn/A6uaxLDZ",
        directUrl: "https://kdocs.cn/l/ce7TQfmT9Hpi",
        author: "北阪有桑-",
        description: "然而人生辽阔，过去的，就让它过去。",
        endType: EndType.BE,
        coverImage:
          "https://wx4.sinaimg.cn/wap720/0076u4LIgy1hx5fhp5uhtj30u00i0n43.jpg",
      },
      {
        category: Category.VIDEO,
        title: "当我呼唤你的名字",
        description: "如果声音有回响，不同时空的你能听见吗",
        weiboUrl: "http://t.cn/A6uXl6jo",
        author: "炸鸡烧烤麻辣烫火锅",
        coverImage:
          "https://wx2.sinaimg.cn/large/00851dLlgy1hx5fb32qsfj30u00gwdjn.jpg",
      },
      {
        category: Category.TEXT,
        title: "味道",
        weiboUrl: "http://t.cn/A6uXl6jH",
        description: `我想做你在热烈阳光下奔跑时的树下阴影，也想做你冰天雪地里前行时的壁炉火光`,
        directUrl: ["https://www.asianfanfics.com/story/view/1614636"],
        author: "啪你脸上有蚊子",
        endType: EndType.HE,
        coverImage:
          "https://wx2.sinaimg.cn/wap720/006d1LUogy1hx5ewr5r8dj30u00i0di2.jpg",
      },
      {
        category: Category.TEXT,
        title: "希声",
        weiboUrl: "http://t.cn/A6uXl6jj",
        description: `亚洲人传递爱意的含蓄，总是会让人感觉受伤，从心出发100的爱，在到达诉说的时候被削减了一半，传递给对方，在倾听的时候，在理解中又会被削弱一半，爱意从100的温度，骤降为只有0的冬季`,
        author: "一叶轻舟未过",
        endType: EndType.HE,
        coverImage:
          "https://wx2.sinaimg.cn/wap720/adef80a2gy1hx5ell0a7sj20n00cywfl.jpg",
        directUrl: ["https://pan.quark.cn/s/87cb934944dd"],
      },
      {
        category: Category.IMAGE,
        title: "冬日奇迹",
        description: "冬日暖怀 ​​​",
        weiboUrl: "http://t.cn/A6uXl6jS",
        author: "安安圩",
        endType: EndType.HE,
        coverImage:
          "https://wx1.sinaimg.cn/mw690/008icsvEgy1hx551qpztlj30n30xsqbb.jpg",
      },
      {
        category: Category.TEXT,
        title: "五线谱禁止条例",
        weiboUrl: "http://t.cn/A6uXl6jp",
        author: "陳_Charon",
        directUrl: [
          "https://paste.to/?efa748d42bbf48e1#4kws34G6R96HqqcR3nVxZ6Ye2BbUbbTvpMNKJDuP61ec&continueFlag=ab9a4de3cd3b7c2812aff2dc150221fb",
          "https://pan.quark.cn/s/496434918e22",
        ],
        description: `/

 ◎milklove   校园音乐生背景  含穿越元素 

 ◎设定架空  2.2w一篇完 

＂其实仅仅是遇见你这件事情就足够不可思议了。＂

-

特别鸣谢一下@火烧橘子_ 两人打了八个小时电话顺这个逻辑🐈

元旦快乐😗希望大家看这篇文的时候可以感受到温暖🍦还有辛苦所有负责策划、美工、校对、物料、文案、以及各种形式产出的老师们~大家真的准备了很久😺也请大家多多支持所有老师的产出！！`,
        endType: EndType.HE,
        coverImage:
          "https://wx3.sinaimg.cn/large/0085rJdigy1hx5guzjhkpj30k00b9759.jpg",
      },
      {
        category: Category.TEXT,
        title: "I SEE YOU",
        weiboUrl: "http://t.cn/A6uXl6jN",
        author: "milklove_暗号",
        endType: EndType.HE,
        description: `你知道我想念你，请不要离我太远。💚
你知道我需要你，请不要离我太远。💗`,
        directUrl: ["https://www.bilibili.com/video/BV1rD6oYiELj"],
        coverImage:
          "https://pictures.kazoottt.top/2025/20250105-f04d27d448c136dd3b751ff5041eade0.jpeg",
      },
      {
        category: Category.VIDEO,
        title: "着迷",
        weiboUrl: "http://t.cn/A6uXl6jQ",
        author: "静電石英",
        description: `“遇见你，我心花怒放”

时间是关于爱的炼金术。
——大概是“一见钟情”被点石成金的故事吧。`,
        endType: EndType.HE,
        coverImage:
          "https://wx4.sinaimg.cn/large/008s7SBfgy1hx504dxetyj30v90hltaw.jpg",
        directUrl: "https://www.bilibili.com/video/BV1AD6SYWE7h",
      },
      {
        category: Category.TEXT,
        title: "Find You",
        weiboUrl: "http://t.cn/A6uXl6jC",
        directUrl: ["https://pan.quark.cn/s/8b0ec8d31292"],
        description:
          "无止境的思念不如陷入无边际的梦游，穿过碎片，窥见往事岁岁年年。",
        author: "鸟宝的专属小1s",
        endType: EndType.OE,
        coverImage:
          "https://wx2.sinaimg.cn/wap720/c9a0c5d4gy1hx54ahe8krj20u00i0q8y.jpg",
      },
      {
        category: Category.IMAGE,
        description: "我们一起过的第一个冬天 ​​​",
        title: "卧雪",
        weiboUrl: "http://t.cn/A6uXl6j9",
        author: "榴芒超棒",
        coverImage:
          "https://wx3.sinaimg.cn/large/006z1NRsgy1hx5eqjmmyzj316o16ob29.jpg",
      },
    ],
  },
  {
    title: "23:50 | 四季组",
    items: [
      {
        category: Category.VIDEO,
        title: "盗梦空间",
        weiboUrl: "http://t.cn/A6uaxLDz",
        author: "NIEISME",
        directUrl: "https://www.bilibili.com/video/BV1Jh6dYhEqK",
        description: `-无论是现实还是梦境，只要有你在，就是真实的世界。
-前言背景：盗梦者能构建别人的梦境，此时，梦境能与现实世界发生重叠，让两者错乱混淆，梦中的场景在现实中会暂时成真，而现实中的人和物会随机融入梦境，盗梦者也能在此时进入其梦境，改变他们的想法或者摄取他们的梦境，但是一个正在做梦的人突然被现实中的冲击唤醒或者意识觉醒在梦境产生强烈反抗，梦境和现实都可能在瞬间崩塌，所有在梦中的人都会陷入梦境漩涡里，所以盗梦师在工作时，往往需要梦境修复师的帮助。（具体剧情分析见评论区）`,
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/20250105-e451629f1fa67d9f971433271b0992a0.jpeg",
      },
    ],
  },
];
