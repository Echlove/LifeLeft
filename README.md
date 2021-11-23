# TimeLeft - 人生倒计时
*a plugin for Typecho inspired by [Joe](https://github.com/HaoOuBa/Joe)*

## 使用方法

> 如果是handsome主题，可以直接启用，已适配，在设置中选择位置就行

在侧边栏中，复制一下代码到你想要的位置
```php
<!-- 人生倒计时代码 -->
<?php if (array_key_exists('LifeLeft', Typecho_Plugin::export()['activated'])) : ?>
  <div class="widget widget_categories wrapper-md clear timelife"> //这里随便改，保留<timelife>关键字就行
  <div class="echo-contain"></div>
  </div>
<?php endif; ?>
```
然后启用就行（本插件文件夹名为LifeLeft，建议直接clone）

> PS：如果启用了pjax，在回调函数里加上`lifeleft()`

## 更新计划
- [ ] 添加自定义字段
- [x] 取消手动插入操作
- [x] sidebar位置指定
- [ ] 适配所有主题
- [ ] 也许有其他新功能
