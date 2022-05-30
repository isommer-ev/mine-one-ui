<template>
  <button 
    @click="handleClick"
    :disabled='disabled'
    class="m-button" 
    :class="[`m-button-${type}`,{
      'is-plain':plain,
      'is-round':round,
      'is-circle':circle,
      'is-disabled':disabled,
      'm-button-mini':size}]"
  >
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name:'MButton',
  props:{
    type:{
      type:String,
      default:'default'
    },
    plain:{
      type:Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false
    },
    circle:{
      type:Boolean,
      default:false
    },
    icon:{
      type:String,
      default:''
    },
    disabled:{
      type:Boolean,
      default:false
    },
    size:{
      type:String,
      default:''
    }
  },
  methods:{
    handleClick(e){
      this.$emit('click',e)
    }
  }
}
</script>

<style lang='scss'>
  .m-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border:1px solid #dcdfe6;
    color:#606266;
    // 此属性非标准且渲染效果在不同浏览器下不同，有些属性值甚至不支持
    // -webkit-appearance: nh;
    text-align: center;
    box-sizing: border-box;
    outline: nh;
    margin: 0;
    transition: 0.1;
    font-weight: 500;
    user-select: nh;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color:#409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
  .m-button-primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
    }
  }
  .m-button-success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
    }
  }
  .m-button-info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
    }
  }
  .m-button-warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
    }
  }
  .m-button-danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
    }
  }
  .m-button.is-plain{
    &:hover,
    &:focus{
      background: #fff;
      border-color: #489eff;
      color: #409eff;
    }
  }
  .m-button-primary.is-plain{
    color: #409eff;
    background-color: #ecf5ff;
    &:hover,
    &:focus{
      background: #409eff;
      border-color: #409eff;
      color: #fff;
    }
  }
  .m-button-success.is-plain{
    color: #67c23a;
    background: #c2e7b0;
    &:hover,
    &:focus{
      background: #67c23a;
      border-color: #67c23a;
      color: #fff;
    }
  }
  .m-button-info.is-plain{
    color: #909399;
    background: #d3d4d6;
    &:hover,
    &:focus{
      background: #909399;
      border-color: #909399;
      color: #fff;
    }
  }
  .m-button-warning.is-plain{
    color: #e6a23c;
    background: #f5dab1;
    &:hover,
    &:focus{
      background: #e6a23c;
      border-color: #e6a23c;
      color: #fff;
    }
  }
  .m-button-danger.is-plain{
    color: #f56c6c;
    background: #fbc4c4;
    &:hover,
    &:focus{
      background: #f56c6c;
      border-color: #f56c6c;
      color: #fff;
    }
  }
  .m-button.is-round{
    border-radius: 20px;
    padding: 12px 23px;
  }
  .m-button.is-circle{
    border-radius: 50%;
    padding: 12px;
  }
  .m-button [class*=m-icon]+span{
    margin-left:5px ;
  }
  .m-button.is-disabled{
    cursor: no-drop;
  }
  .m-button.m-button-mini{
    padding: 7px 15px;
    font-size: 12px;
  }
</style>