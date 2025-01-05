"use client";

import { Card } from "./event-card";

export default function CardGrid() {
  const cards = [
    {
      title: "恋爱记录",
      subtitle: "相识",
      name: "两小无拆",
      englishName: "Ink Pha",
      quotes: [
        "长得比我高的都可以",
        "我喜欢在一起笑得好开心的人",
        "那和我呢,你觉得舒服吗",
        "当然",
      ],
      date: "2021.10.29",
      bgColor: "from-gray-700/80",
      image: "/SomPrae.jpeg",
    },
    {
      title: "恋爱记录",
      subtitle: "相知",
      name: "反之亦爱",
      englishName: "Som Prae",
      quotes: ["我的伞永远向你倾斜", "我是prae"],
      date: "2022.07.23",
      bgColor: "from-green-300/60",
      image: "/SomPrae.jpeg",
    },
    {
      title: "恋爱记录",
      subtitle: "相恋",
      name: "地球倾斜23.5度",
      englishName: "Ongsa Sun",
      quotes: [
        "地球倾斜了吗",
        "嗯，以一个最好的角度",
        "请允许我再次重新回到你的轨道吧",
      ],
      date: "2024.03.08",
      bgColor: "from-blue-700/80",
      image: "/SomPrae.jpeg",
    },
    {
      title: "恋爱记录",
      subtitle: "相伴",
      name: "鲸鱼杂货铺",
      englishName: "Wan Maewnam",
      quotes: [
        "找女朋友前先毕业吧，小孩",
        "我一定要追到Wan,等着瞧吧",
        "我真的能拥有爱情吗我不想再被骗了",
        "老板，这里出售爱情吗",
      ],
      date: "2024.11.26推介会",
      bgColor: "from-purple-700/80",
      image: "/SomPrae.jpeg",
    },
    {
      title: "恋爱记录",
      subtitle: "相爱",
      name: "女孩规则",
      englishName: "Shasha Gorya",
      quotes: ["你不是说我不是你的菜吗", "只是今晚", "我只想拥你入怀"],
      date: "2024.11.26推介会",
      bgColor: "from-amber-800/80",
      image: "/SomPrae.jpeg",
    },
    {
      title: "恋爱记录",
      subtitle: "相守",
      name: "GMM第一对GL官配",
      englishName: "MILK LOVE",
      quotes: [
        "感谢你让我等得那天不会没有我们了",
        "我们一起走了很久",
        "我们会走得更久",
      ],
      date: "EVERY DAY IN THE FUTURE",
      bgColor: "from-red-900/80",
      image: "/SomPrae.jpeg",
    },
  ];

  return (
    <div className="w-full px-8 sm:px-12 md:px-16 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mx-auto">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
}
