<template>
  <div class="m-form">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'MForm',
  provide(){
    return {
      Form:this
    }
  },
  props:{
    model:{
      type:Object,
      required:true
    },
    labelWidth:{
      type:String,
      default:'80px'
    }
  }
}
</script>

<style>

</style>