<template>
  <div
    class="m-switch"
    :class="{ 'is-checked': value }"
    @click="$emit('input', !value)"
  >
    <span class="m-switch_core" ref="core">
      <span class="m-switch_button"></span>
    </span>
    <input type="checkbox" :name="name" class="m-switch_input" ref="input">
  </div>
</template>

<script>
export default {
  name: "MSwitch",
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    activeColor:{
        type:String,
        default:''
    },
    inactiveColor:{
        type:String,
        default:''
    },
    name:{
        type:String,
        default:''
    }
  },
  watch:{
    value:{
        immediate:true,
        async handler(val){
            if(this.activeColor || this.inactiveColor){
                let color=val?this.activeColor:this.inactiveColor
                await this.$nextTick()
                this.$refs.core.style.borderColor=color
                this.$refs.core.style.backgroundColor=color
                this.$refs.input.checked=val
            }
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.m-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .m-switch_core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .m-switch_button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .m-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
.is-checked {
  .m-switch_core {
    border-color: #409eff;
    background-color: #409eff;
    .m-switch_button {
      transform: translateX(20px);
    }
  }
}
</style>
 