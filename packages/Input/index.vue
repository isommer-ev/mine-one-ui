<template>
  <div class="m-input" :class="{'m-input_suffix':showSuffix}">
    <input
      class="m-input_inner"
      :class="{ 'is-disabled': disabled }"
      :disabled="disabled"
      :placeholder="placeholder"
      :type="showPassword?(showPwd?'text':'password'):type"
      :name="name"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <span class="m-input_suffix" v-if="showSuffix">
      <i class="m-input_icon m-icon-iov-clear" v-if="clearable && value" @click="$emit('input','')"></i>
      <i class="m-input_icon m-icon-yanjing" v-if="showPassword && !showPwd && value" @click="showPwd=!showPwd"></i>
      <i class="m-input_icon m-icon-yanjing_yincang_o" v-if="showPassword && showPwd && value" @click="showPwd=!showPwd"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: "MInput",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    showPassword:{
        type:Boolean,
        default:false
    },
    clearable:{
        type:Boolean,
        default:false
    }
  },
  data(){
    return {
        showPwd:false
    }
  },
  computed:{
    showSuffix(){
        return this.clearable || this.showPassword
    }
  }
};
</script>

<style lang="scss" >
.m-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .m-input_inner {
    background-color: #fff;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .m-input_suffix {
    .m-input_inner {
      padding-right: 30px;
    }
    .m-input_icon {
      position: absolute;
      right: 10px;
      height: 100%;
      top: 0;
      line-height: 40px;
      text-align: center;
      color: #c0c4cc;
      transition: all 0.3s;
      z-index: 900;
      i {
        color: #c0c4cc;
        font-size: 14px;
        cursor: pointer;
        transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      }
    }
  }
}
</style>
