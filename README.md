# MUV家元旦24H限定食堂

本项目是[MUV家元旦24H限定食堂](https://s.weibo.com/weibo?q=%23muv%E5%AE%B6%E5%85%83%E6%97%A624h%E9%99%90%E5%AE%9A%E9%A3%9F%E5%A0%82%23)的汇总网站，仅用于汇总链接，对应的内容通过链接跳转，不存储内容。非常感谢各位老师的产出。

本项目开源仅供同担参考，欢迎参与维护或提出建议，请勿用于任何商业用途。

---

[访问网站](https://milklovemuv.com/)

点击卡片内的微博图标可以跳转到对应的微博，点击蓝色的外链图标可以直接跳转至查看文章或者视频的平台。

开发本身没有花太多时间，更多的时间是花在了把相关的信息整理为结构化的数据上面（应该有更系统的方法，实现更系统的方法会花费更多时间，虽然以后会受益，但这次想着快速开发就直接人工整理 + 部分 llm 辅助整理了）

![alt text](docs/cover.png)

## 梳理

类型：

- 文
- 图
- 视频

END TYPE:

- OE open end
- HE happy end
- BE bad end

## 参考

<https://weibo.com/7754282622/P7ocS6Dpk> 预告

<https://weibo.com/7754282622/P7CKraG4l> 总结

<https://weibo.com/7754282622/P7tcqlgRK> 汇总

``` plain text
#milklove[超话]##MUV家元旦24H限定食堂#

元旦食堂产出汇总

【00：00｜四季组】
01 图 泥的墙《年年岁岁》http://t.cn/A6uiB1dL

【00：01｜春天组】
01 文 阿三今天又磕到了《浅绿苏打》http://t.cn/A6uiB1dw
02 文 俞青lll《笑春风》http://t.cn/A6uiB1d7
03 文 星河宓町《小爱神》http://t.cn/A6uiudiz
04 文 TTTTTTTideFog《春生》http://t.cn/A6uimuFZ
05 文 优雅的野生阿婆粉《小吊梨汤》http://t.cn/A6uiB1dz
06 文 咖啡head-Caffeine《天灾系统》http://t.cn/A6uiB1dh
07 文 水果湖居士《遇见你之前》http://t.cn/A6uiB1dA
08 文 哼哼心想事成《玛丽苏豪赌案例》 http://t.cn/A6u66kii

【06：00｜【夏天组】
01 文 04年光之崽种《其时》http://t.cn/A6u6Drxc
02 文 知道了我就磕一下《夏天》http://t.cn/A6u6UKF1
03 文 一个不太清楚来历的账户001《我可否将你比作一个夏日》http://t.cn/A6u6UYEA
04 文 菠萝包不是菠萝味《一盏荼蘼》http://t.cn/A6u6cft5
05 文 雨蜜米泰多辣《梦》http://t.cn/A6u647J1
06 文 我又在挖挖挖挖挖《完美落点》http://t.cn/A6u6UKF3
07 文 默名_04《蓝火》http://t.cn/A6u64ioS

【12：00｜秋天组】
01 文 小白_Zara《Mirror》http://t.cn/A6u68DZE
02 文 陈季OoO《穿回过去后竟然被攻略了》http://t.cn/A6u6mOJL
03 文 奇妙能力六《我站在时间的尽头》http://t.cn/A6u68DZQ
04 文 -知-白-《蝉泣》http://t.cn/A6u68DZ8
05 文 纳什均衡_《等》http://t.cn/A6u6RXvl
06 文 银河系分布《早悟兰因》http://t.cn/A6u68DZR

【18：00｜冬天组】
01 文 北阪有桑-《录像带》http://t.cn/A6uaxLDZ
02 文 炸鸡烧烤麻辣烫火锅《当我呼唤你的名字》http://t.cn/A6uXl6jo
03 文 啪你脸上有蚊子《味道》http://t.cn/A6uXl6jH
04 一叶轻舟未过《希声》http://t.cn/A6uXl6jj
05 文 安安圩《冬日奇迹》http://t.cn/A6uXl6jS
06 文 陳_Charon《五线谱禁止条例》http://t.cn/A6uXl6jp
07 文 milklove_暗号《I SEE YOU》http://t.cn/A6uXl6jN
08 视频 静電石英《着迷》http://t.cn/A6uXl6jQ
09 文 鸟宝的专属小1s《Find You》http://t.cn/A6uXl6jC
10 文 榴芒超棒《卧雪》http://t.cn/A6uXl6j9

【23：50｜四季组】
02 视频 he NIEISME《盗梦空间》 http://t.cn/A6uaxLDz

http://t.cn/A6uy0tID
```

# Welcome to Remix + Cloudflare

- 📖 [Remix docs](https://remix.run/docs)
- 📖 [Remix Cloudflare docs](https://remix.run/guides/vite#cloudflare)

## Development

Run the dev server:

```sh
npm run dev
```

To run Wrangle

```sh
npm run build
npm run start
```

## Typegen

Generate types for your Cloudflare bindings in `wrangler.toml`:

```sh
npm run typegen
```

You will need to rerun typegen whenever you make changes to `wrangler.toml`.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then, deploy your app to Cloudflare Pages:

```sh
npm run deploy
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
