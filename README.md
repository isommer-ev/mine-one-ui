# mine-one-ui

## 简介

一个vue的ui组件,模仿element-ui学习创建ui组件库

## 使用

1. 安装

```
npm i mine-one-ui
```

2. 完整引入

```js
import Vue from 'vue';
import MineUI from 'mine-one-ui';
import 'mine-one-ui/dist/mine-one-ui.css';
import App from './App.vue';

Vue.use(MineUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

<br>

---

<br>

## 组件

### Button 按钮

<br>

* 基本用法
```js
<m-button type='primary'></m-button>
```

| 属性     | 类型     | 描述                                          |
|--------- |-------- |----------------------------------------------|
| type     | String  | 按钮类型：primary,success,danger,info,warning | 
| plain    | Boolean | 朴素按钮,默认为false                          |
| round    | Boolean | 圆角边框,默认为false                          |
| circle   | Boolean | 圆形按钮,默认为false                          |
| icon     | String  | 字体图标                                     |
| disabled | Boolean | 是否禁用按钮,默认为false                      |
| size     | String  | 按钮尺寸,可添加值'mini'                       |

<br>

| 事件  | 类型      | 描述     |
| ---   | ---------| --------|
| click | Function | 点击事件 |

---

### Switch 开关

* 基本用法

```js
<m-switch
  v-model='value'
  active-color="#13ce66" 
  inactive-color="#ff4949"
  >
</m-switch>

<script>
export default {
  data(){
    return {
      value:true
    }
  }
}
</script>
```

| 属性           | 类型    | 描述                |
| --------------|---------|---------------------|
| value/v-model | Boolean | 绑定值               |
| active-color  | String  | switch 打开时的背景色 |
| inactive-color | String  | switch 关闭时的背景色 |
| name           | String  |switch 对应的 name 属性 |

---

### Dialog 对话框

* 基础用法

```js
<m-button type='primary' @click='dialogVisible=true'>打开Dialog</m-button>

<m-dialog :visible.sync='dialogVisible'>
  <span>这是一段信息</span>
  <template v-slot:footer>
    <m-button  @click="dialogVisible=false">取消</m-button>
    <m-button type="primary"  @click="dialogVisible=false">确定</m-button>
  </template>
</m-dialog>

<script>
export default {
  data(){
    return {
      dialogVisible:false
    }
  }
}
</script>
```
| 属性           | 类型    | 描述                               |
| --------------|---------|------------------------------------|
| visible       | Boolean | 是否显示 Dialog，支持 .sync 修饰符   |
| title         | String  | Dialog 的标题，也可通过具名 slot 传入 |
| width         | String  | Dialog 的宽度                       |
| top           | String  | Dialog CSS 中的 margin-top 值       |
| before-close  | Function | 关闭前的回调，会暂停 Dialog 的关闭,done 用于关闭 Dialog |

---

### Input 输入框

| 属性            | 类型             | 描述                 |
| ----------------|------------------|--------------------|
| type            | String          | 输入框类型           |
| placeholder      String           | 输入框占位文本       |
| name            | String          | 原生属性             |
| disabled        | Boolean         | 禁用,默认false       |
| value / v-model	| String / Number | 绑定值               |
| show-password	  | Boolean         | 是否显示切换密码图标 |
| clearable	      | Boolean         | 是否可清空          |

---

### Radio 单选框

| 属性           | 类型                       | 描述           |
| -------------- |---------                  |----------------|
| value / v-model| string / number / boolean | 绑定值          |
| label          | string / number / boolean | Radio 的 value  |
| name           | String                    | 原生 name 属性  |

### RadioGroup 单选框组

* 用法

```js
<m-radio-group v-model="gender">
  <m-radio v-bid:label='1'>男</m-radio>
  <m-radio v-bind:label='0'>女</m-radio>
</m-radio-group>

<script>
export default {
  data(){
    return {
      gender:1
    }
  }
}
</script>
```

| 属性           | 类型                       | 描述     |
| -------------- |---------                  |----------|
| value / v-model| string / number / boolean | 绑定值    |

---

### Checkbox 复选框

| 属性           | 类型                       | 描述                                 |
| -------------- |---------                  |-------------------                   |
| value / v-model| string / number / boolean | 单独使用时，默认绑定变量的值会是Boolean |
| label          | string / number / boolean | Checkbox 的 value                    |
| name           | String                    | 原生 name 属性                       |

### CheckboxGroup 复选框

* 用法

```js
<m-checkbox-group v-model="gender">
  <m-checkbox v-bid:label='1'>1</m-checkbox>
  <m-checkbox v-bind:label='0'>2</m-checkbox>
</m-checkbox-group>

<script>
export default {
  data(){
    return {
      gender:[]
    }
  }
}
</script>

```
| 属性           | 类型   | 描述     |
| -------------- |-------|----------|
| value / v-model| Array | 绑定值    |

---

### Form 表单

| 属性        | 类型  | 描述     |
| -----------|-------|----------|
| model      | Object | 表单数据对象    |
| label-width| String | 表单域标签的宽度  |

### FotmItem 表单项

| 属性        | 类型  | 描述     |
| -----------|-------|----------|
| label      | String | 标签文本 |


