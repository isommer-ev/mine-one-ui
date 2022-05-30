import MButton from './Button/index'
import MDialog from './Dialog/index'
import MInput from './Input/index'
import MSwitch from './Switch/index'
import MRadio from './Radio/index'
import MRadioGroup from './RadioGroup/index'
import MCheckbox from './Checkbox/index'
import MCheckboxGroup from './CheckboxGroup/index'
import MForm from './Form/index'
import MFormItem from './FormItem/index'
import './fonts/iconfont.css'

const components=[
  MButton,
  MDialog,
  MInput,
  MSwitch,
  MRadio,
  MRadioGroup,
  MCheckbox,
  MCheckboxGroup,
  MForm,
  MFormItem
]

const install=(Vue)=>{
  components.forEach(item=>{
    Vue.component(item.name,item)
  })
}

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if(typeof window !=='undefined' && window.Vue){
  install(window.Vue)
}

export default {
  install
}


