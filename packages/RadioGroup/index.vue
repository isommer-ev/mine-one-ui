<template>
  <div class="one-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
    name:'MRadioGroup',
    provide(){
        return {
            RadioGroup:this
        }
    },
    props:{
        value:{
            type:null
        }
    }
}
</script>
