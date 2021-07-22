# flex 布局

学习 flex 布局 -2021/07/20

## 父项常见属性

-   flex-direction：设置主轴的方向
    [![WBtYJ1.jpg](https://z3.ax1x.com/2021/07/22/WBtYJ1.jpg)](https://imgtu.com/i/WBtYJ1)
-   justify-content：设置主轴上的子元素排列方式
    [![WBttRx.jpg](https://z3.ax1x.com/2021/07/22/WBttRx.jpg)](https://imgtu.com/i/WBttRx)
-   flex-wrap：设置子元素是否换行
-   align-content：设置侧轴上的子元素的排列方式（多行）
    [![WBtNz6.jpg](https://z3.ax1x.com/2021/07/22/WBtNz6.jpg)](https://imgtu.com/i/WBtNz6)
-   align-items：设置侧轴上的子元素排列方式（单行）
-   flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

## flex 布局子项常见属性

-   flex 子项目占的份数
-   align-self 控制子项自己在侧轴的排列方式
-   order 属性定义子项的排列顺序（前后顺序）

### flex 属性

flex 属性定义子项目分配剩余空间，用 flex 来表示占多少份数。

```
.item {
    flex: <number>; /* 默认值 0 */
}

```

### align-self 控制子项自己在侧轴上的排列方式

align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。

默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```
span:nth-child(2) {
      /* 设置自己在侧轴上的排列方式 */
      align-self: flex-end;
}

```

### order 属性定义项目的排列顺序

数值越小，排列越靠前，默认为 0。

注意：和 z-index 不一样。

```
.item {
    order: <number>;
}
```
