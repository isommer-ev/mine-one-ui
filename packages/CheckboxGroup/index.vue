<template>
  <div class="one-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'MCheckboxGroup',
  provide(){
    return {
      CheckboxGroup:this
    }
  },
  props:{
    value:{
      type:Array
    }
  }
}
</script>

<style>

</style>