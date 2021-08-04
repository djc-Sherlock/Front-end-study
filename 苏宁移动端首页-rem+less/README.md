# 苏宁移动端首页 --2021/08/02

1、 技术选型

方案：我们采取单独制作移动页面方案

技术：布局采取 rem 适配布局（**less + rem + 媒体查询**）

设计图： 本设计图采用 750px 设计尺寸

2、设置视口标签以及引入初始化样式

```
<meta name="viewport" content="width=device-width, user-scalable=no,         initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="css/normalize.css">
```

3、设置公共 common.less 文件

-   新建 common.less 设置好最常见的屏幕尺寸，利用媒体查询设置不同的 html 字体大小，因为除了首页其他页面也需要
-   我们关心的尺寸有 320px、360px、375px、384px、400px、414px、424px、480px、540px、720px、750px
-   划分的份数我们定为 15 等份

4、计算公式

-   页面元素 rem 计算公式： 页面元素的 px / html 字体大小 50
