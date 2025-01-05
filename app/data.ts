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
  directUrl?:
    | {
        link: string;
        name: string;
      }[]
    | string; // 直接链接 (有的是微博转到其他的平台)
  author: string; // 作者
  description?: string; // 描述
  endType?: EndType; // 类型
  coverImage: string; // 封面图
}

interface WorkGroup {
  title: string; // 标题
  items: WorkItem[]; // 作品
}

export interface OtherWorkItem {
  title: string; // 标题
  weiboUrl: string; // 微博链接
  description?: string; // 描述
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
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-6f69bbf12b77bd84a3cf7c126c323f70.jpg",
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
        directUrl: [
          {
            link: "https://pan.quark.cn/s/287a67cc896a",
            name: "夸克",
          },
        ],
        description: "如果ongsa在小时候就遇见sun会怎样？本文就是这样一个故事。",
        author: "阿三今天又磕到了",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-0d4617e2671872c6a09180f8ff00937d.jpg",
      },
      {
        category: Category.TEXT,
        title: "笑春风",
        weiboUrl: "http://t.cn/A6uiB1d7",
        directUrl: [
          {
            link: "https://paste.to/?f3914e1e6ad00603#DyU8JQ5dTUD7AckA4KQhNM8xbYWRy96ntKEhz8Rqx1ox",
            name: "paste.to",
          },
        ],
        author: "俞青lll",
        endType: EndType.BE,
        description: "风会代替我拥抱你",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-2c9a8b77479bf15d20c53b592fe72f7c.jpg",
      },
      {
        category: Category.TEXT,
        title: "小爱神",
        weiboUrl: "http://t.cn/A6uiudiz",
        directUrl: [
          {
            link: "https://www.asianfanfics.com/story/view/1614477",
            name: "asianfanfics",
          },
          {
            link: "https://paste.to/?badd46cfe9df525b#7LTXJha4Xmdyc1XtUwJTVkVN8utnQEdMuvoYCspRxUft&continueFlag=ab9a4de3cd3b7c2812aff2dc150221fb",
            name: "paste.to",
          },
        ],
        author: "星河宓町",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-17de74e20083ca38a427857a1c061103.jpg",
        description:
          "绽放过的情意，如烟花般绚烂，沉寂着却不曾熄灭，如炙热的地脉游走各处，只需轻风鼓动，便从余烬中挣扎着燃起烈焰。",
      },
      {
        category: Category.TEXT,
        title: "春生",
        weiboUrl: "http://t.cn/A6uimuFZ",
        description: `一个属于她们的春天。“她哪会是什么春生，她顶多是春寒料峭。”*oe`,
        author: "TTTTTTTideFog",
        directUrl: [
          {
            link: "https://www.asianfanfics.com/story/view/1614510/n-a",
            name: "asianfanfics",
          },
        ],
        endType: EndType.OE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-eb83d87c37b3a63686fe1f28be3fe5f5.jpg",
      },
      {
        category: Category.TEXT,
        title: "小吊梨汤",
        weiboUrl: "http://t.cn/A6uiB1dz",
        directUrl: [
          {
            link: "https://weibo.com/ttarticle/p/show?id=2309405117797905859043",
            name: "微博",
          },
        ],
        author: "优雅的野生阿婆粉",
        description: "花落三朵时到家",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-32920883a38def9021fb983827ab9496.jpg",
      },
      {
        category: Category.TEXT,
        title: "天灾系统",
        weiboUrl: "http://t.cn/A6uiB1dh",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-da85e5779c793bf0abc10b7a10d2e752.jpg",
        description: `“欢迎来到天灾系统—Disaster”
*oe`,
        directUrl: [
          {
            link: "https://www.asianfanfics.com/story/view/1614529/n-a",
            name: "asianfanfics",
          },
        ],
        author: "咖啡head-Caffeine",
        endType: EndType.HE,
      },
      {
        category: Category.TEXT,
        title: "遇见你之前",
        weiboUrl: "http://t.cn/A6uiB1dA",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-b901c11b49316beebe9e94b8ca0fa90e.jpg",
        directUrl: [
          {
            link: "https://www.asianfanfics.com/story/view/1614498/n-a",
            name: "asianfanfics（第一章至第五章）",
          },
          {
            link: "https://www.asianfanfics.com/story/view/1614499/n-a",
            name: "asianfanfics（第六章至第十章）",
          },
        ],
        author: "水果湖居士",
        endType: EndType.HE,
        description: `我不是她，也改不了自己应对人生的方法，对你的无奈喜欢，只能像在冬日等候蝉鸣，在夏夜期待雪花。（提示，故事中除了milk love以外的角色请自动代入《女孩规则》中同名角色）`,
      },
      {
        category: Category.TEXT,
        title: "玛丽苏豪赌案例",
        directUrl: [
          {
            link: "https://pan.baidu.com/share/init?surl=ekjpXRVVMGuUFWl_9aunPQ&pwd=4x76",
            name: "百度网盘",
          },
        ],
        weiboUrl: "http://t.cn/A6u66kii",
        author: "哼哼心想事成",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-024c78e600dadaaaca6ea3e7b6759ac6.jpg",
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
          {
            link: "https://weibo.com/ttarticle/p/show?id=2309405118000960241688",
            name: "微博",
          },
        ],
        description: "城南小陌又逢春，只见梅花不见人",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-e72bec524a36a464e2ec48edfa391483.jpg",
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
东京夜里的烟花、南意海岸的柠檬、曼谷房间的体温`,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-2e8a58cc84d9c689cba68b08773d4548.jpg",
      },
      {
        category: Category.TEXT,
        title: "我可否将你比作一个夏日",
        weiboUrl: "http://t.cn/A6u6UYEA",
        author: "一个不太清楚来历的账户001",
        description: `
“你说，love她会答应吗？” “白痴！谁都看得出来，她——喜——欢——你。”（双视角  推荐阅读配乐：Mree版本《Mystery of Love》）`,
        endType: EndType.HE,
        directUrl: [
          {
            link: "https://pan.quark.cn/s/cab0ee2feaae#/list/share",
            name: "夸克",
          },
        ],
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-22787478abfadfd0d490c3e73b1301d5.jpg",
      },
      {
        category: Category.TEXT,
        title: "一盏荼蘼",
        weiboUrl: "http://t.cn/A6u6cft5",
        author: "菠萝包不是菠萝味",
        description: "“P Milk 谈过恋爱吗？PMilk知道该怎么处理一段亲密关系吗？”",
        directUrl: [
          {
            link: "https://www.asianfanfics.com/story/view/1614569",
            name: "asianfanfics",
          },
        ],
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-9b788eb83dc927bfe06572f48c831764.jpg",
      },
      {
        category: Category.VIDEO,
        title: "梦",
        description: "从梦境到现实   我的眼里只有你",
        directUrl: [
          {
            link: "https://www.bilibili.com/video/BV1PQ6SYXE7Y",
            name: "bilibili",
          },
        ],
        weiboUrl: "http://t.cn/A6u647J1",
        author: "雨蜜米泰多辣",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-4ab0d49bf21afe98456526b99b4cd4b8.jpg",
      },
      {
        category: Category.TEXT,
        title: "完美落点",
        weiboUrl: "http://t.cn/A6u6UKF3",
        author: "我又在挖挖挖挖挖",
        directUrl: [
          {
            link: "https://www.kdocs.cn/l/cbmyH4rLVX5l",
            name: "金山文档",
          },
        ],
        description:
          "原来输了比赛也会有奖励，不完美的小孩也可以得到世界的偏爱。",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-da5b9cf893ccfeda2200950b5e68175b.jpg",
      },
      {
        category: Category.TEXT,
        title: "蓝火",
        directUrl: [
          {
            link: "https://paste.to/?0f249af1cce452d4#ByzGERP9JA3NiuQ2KyLcZCTCYmgKx5zAp9cd9Jtt3Jz9",
            name: "paste.to",
          },
          {
            link: "https://www.asianfanfics.com/story/view/1614562",
            name: "asianfanfics",
          },
        ],
        weiboUrl: "http://t.cn/A6u64ioS",
        author: "默名_04",
        description: " “太激烈的心跳声也是一种告白。”",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-579e20b22e4b98b9e63715e24d926621.jpg",
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
          {
            link: "https://paste.to/?3eaad39dec27443a#2vVQDDMq3pNJ7szv1Eh8Ue6q7mijwsMQ3rsSHLdr9Gwf",
            name: "paste.to",
          },
        ],
        description: "“Dear myself, I don't know you very well either.”",
        author: "小白_Zara",
        endType: EndType.BE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-fb97c87f43ce3b46a993746a29649dbb.jpg",
      },
      {
        category: Category.TEXT,
        title: "穿回过去后竟然被攻略了",
        weiboUrl: "http://t.cn/A6u6mOJL",
        directUrl: [
          {
            link: "https://docs.qq.com/pdf/DZUZTdkFpWGZCZk1H",
            name: "腾讯文档",
          },
          {
            link: "https://www.asianfanfics.com/story/view/1614615",
            name: "asianfanfics",
          },
        ],
        author: "陈季OoO",
        description: "“love，我知道你是来爱我的”",
        endType: EndType.OE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-39bf09b20af81fa502c121ea56709671.jpg",
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
          "https://pictures.kazoottt.top/2025/01/20250106-024c78e600dadaaaca6ea3e7b6759ac6.jpg",
      },
      {
        category: Category.TEXT,
        title: "蝉泣",
        weiboUrl: "http://t.cn/A6u68DZ8",
        directUrl: [
          {
            link: "https://www.kdocs.cn/l/cueTQaZFDaf6",
            name: "金山文档",
          },
        ],
        author: "-知-白-",
        description: "我们没有未来，我们更没有明天",
        endType: EndType.BE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-781f84ebc1b5755fe3962492f2e45cc5.jpg",
      },
      {
        category: Category.TEXT,
        title: "等",
        weiboUrl: "http://t.cn/A6u6RXvl",
        author: "纳什均衡_",
        endType: EndType.HE,
        description:
          "富二代Love✖️运动康复高材生Milk，一个关于相遇和重逢的小故事。\n故事里富二代有短暂的婚姻，介意勿入，无论看或不看都祝你开心[2025]🥛💖",
        directUrl: [
          {
            link: "https://www.asianfanfics.com/story/view/1614586",
            name: "asianfanfics",
          },
        ],
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-80b50110a887d6c422a9b95cdf8abaa0.jpg",
      },
      {
        category: Category.TEXT,
        title: "早悟兰因",
        weiboUrl: "http://t.cn/A6u68DZR",
        author: "银河系分布",
        endType: EndType.OE,
        description: "我们之间差一场正式的告别。",
        directUrl: [
          {
            link: "https://weibo.com/ttarticle/p/show?id=2309405117976495128640",
            name: "微博",
          },
        ],
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-129c7f8d8e10dcdad18647a599e8df58.jpg",
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
          "https://pictures.kazoottt.top/2025/01/20250106-1fab8c5fa63e77b36b68955b264fe4a1.jpg",
      },
      {
        category: Category.VIDEO,
        title: "当我呼唤你的名字",
        description: "如果声音有回响，不同时空的你能听见吗",
        weiboUrl: "http://t.cn/A6uXl6jo",
        author: "炸鸡烧烤麻辣烫火锅",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-b6f4494bb5c9ef4fe0d43dd274c9b7e1.jpg",
      },
      {
        category: Category.TEXT,
        title: "味道",
        weiboUrl: "http://t.cn/A6uXl6jH",
        description: `我想做你在热烈阳光下奔跑时的树下阴影，也想做你冰天雪地里前行时的壁炉火光`,
        directUrl: [
          {
            link: "https://www.asianfanfics.com/story/view/1614636",
            name: "asianfanfics",
          },
        ],
        author: "啪你脸上有蚊子",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-2e3e065f543c55d9b0a0ce7f4f0899e3.jpg",
      },
      {
        category: Category.TEXT,
        title: "希声",
        weiboUrl: "http://t.cn/A6uXl6jj",
        description: `亚洲人传递爱意的含蓄，总是会让人感觉受伤，从心出发100的爱，在到达诉说的时候被削减了一半，传递给对方，在倾听的时候，在理解中又会被削弱一半，爱意从100的温度，骤降为只有0的冬季`,
        author: "一叶轻舟未过",
        endType: EndType.HE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-7046f57d0a0b0397845ef95e2bc22255.jpg",
        directUrl: [
          {
            link: "https://pan.quark.cn/s/87cb934944dd",
            name: "夸克",
          },
        ],
      },
      {
        category: Category.IMAGE,
        title: "冬日奇迹",
        description: "冬日暖怀 ​​​",
        weiboUrl: "http://t.cn/A6uXl6jS",
        author: "安安圩",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-5957d89de4a62c00f39be1fe8d0a417f.jpg",
      },
      {
        category: Category.TEXT,
        title: "五线谱禁止条例",
        weiboUrl: "http://t.cn/A6uXl6jp",
        author: "陳_Charon",
        directUrl: [
          {
            link: "https://paste.to/?efa748d42bbf48e1#4kws34G6R96HqqcR3nVxZ6Ye2BbUbbTvpMNKJDuP61ec&continueFlag=ab9a4de3cd3b7c2812aff2dc150221fb",
            name: "paste.to",
          },
          {
            link: "https://pan.quark.cn/s/496434918e22",
            name: "夸克",
          },
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
          "https://pictures.kazoottt.top/2025/01/20250106-3aaafa73a847155f65024e0b4996c4da.jpg",
      },
      {
        category: Category.TEXT,
        title: "I SEE YOU",
        weiboUrl: "http://t.cn/A6uXl6jN",
        author: "milklove_暗号",
        endType: EndType.HE,
        description: `你知道我想念你，请不要离我太远。💚
你知道我需要你，请不要离我太远。💗`,
        directUrl: [
          {
            link: "https://www.bilibili.com/video/BV1rD6oYiELj",
            name: "bilibili",
          },
        ],
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
          "https://pictures.kazoottt.top/2025/01/20250106-024c78e600dadaaaca6ea3e7b6759ac6.jpg",
        directUrl: "https://www.bilibili.com/video/BV1AD6SYWE7h",
      },
      {
        category: Category.TEXT,
        title: "Find You",
        weiboUrl: "http://t.cn/A6uXl6jC",
        directUrl: [
          {
            link: "https://pan.quark.cn/s/8b0ec8d31292",
            name: "夸克",
          },
        ],
        description:
          "无止境的思念不如陷入无边际的梦游，穿过碎片，窥见往事岁岁年年。",
        author: "鸟宝的专属小1s",
        endType: EndType.OE,
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-3acc22904cb0a12382aebc2ff48c73a6.jpg",
      },
      {
        category: Category.IMAGE,
        description: "我们一起过的第一个冬天",
        title: "卧雪",
        weiboUrl: "http://t.cn/A6uXl6j9",
        author: "榴芒超棒",
        coverImage:
          "https://pictures.kazoottt.top/2025/01/20250106-47a59f410ee85b27cc313728f79bc487.jpg",
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

export const otherWorks: OtherWorkItem[] = [
  {
    title: "汇总",
    weiboUrl: "https://weibo.com/7754282622/P7tcqlgRK",
  },
  {
    title: "活动总结",
    weiboUrl: "https://weibo.com/7754282622/P7CKraG4l",
  },
  {
    title: "图片预告",
    weiboUrl: "https://weibo.com/7754282622/P7ocS6Dpk",
  },
  {
    title: "后厨记录本（1）",
    weiboUrl: "https://weibo.com/7754282622/P6GnXCYIx",
  },
  {
    title: "后厨记录本（2）",
    weiboUrl: "https://weibo.com/7754282622/P77NBhjrq",
  },
  {
    title: "预告视频",
    weiboUrl: "https://weibo.com/7754282622/P6Q8BtnUf",
  },
  {
    title: "❆大厨名单❆大公布",
    weiboUrl: "https://weibo.com/7754282622/P6sRbr2OL",
  },
];
