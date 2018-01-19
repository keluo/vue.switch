<template>
  <div class="vue-switch-wrap">
    <label class="vue-switch-label" :class="switchStatusClass">
      <input type="checkbox" name="switch" v-model="realValue">
        <span class="vue-switch-circle"></span>
        <span class="vue-switch-txt-wrap">
        <span class="vue-switch-txt vue-switch-on" v-text="onText" v-if="realValue"></span>
        <span class="vue-switch-txt vue-switch-off" v-text="offText" v-if="!realValue"></span>
        </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'vue-switch',
  props: {
    'onText':{
      default:() => {
        return '开';
      }
    },
    'offText':{
      default:() => {
        return '关';
      }
    },
    'value':{
      default:() => {
        return false;
      },
      type:Boolean
    }
  },
  data () {
    return {
      realValue:this.value
    }
  },
  mounted () {
  },
  computed: {
    switchStatusClass (){
      return this.realValue ? 'on' : 'off';
    }
  },
  watch: {
    realValue (value) {
      this.$emit('input', value);
    }
  },
  methods: {
  }
}
</script>

<style>
.vue-switch-wrap{
    display: inline-block;
    position: relative;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
}
.vue-switch-wrap input{
    display: none;
}
.vue-switch-wrap .vue-switch-label{
    margin: 0;
    display: inline-block;
    position: relative;
    border: 0px;
    outline: 0;
    border-radius: 12px;
    box-sizing: border-box;
    background: #bfcbd9;
    transition: border-color .3s,background-color .3s;
    min-width: 50px;
    cursor: pointer;
}
.vue-switch-wrap .vue-switch-label.on{
    border-color: #20a0ff;
    background-color: #20a0ff;
}
.vue-switch-wrap .vue-switch-label .vue-switch-circle{
    top: 3px;
    left: 3px;
    position: absolute;
    border-radius: 100%;
    transition: all .3s,width .3s;
    width: 16px;
    height: 16px;
    background-color: #fff;
}
.vue-switch-wrap .vue-switch-label.on .vue-switch-circle{
    left: 100%;
    margin-left: -19px;
}
.vue-switch-wrap .vue-switch-label .vue-switch-txt-wrap{
    display: inline-block;
}
.vue-switch-wrap .vue-switch-label .vue-switch-txt{
    position: relative;
    display: inline-block;
    color: #fff;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
.vue-switch-wrap .vue-switch-label .vue-switch-on{
    padding-left: 8px;
    padding-right:24px;
}
.vue-switch-wrap .vue-switch-label .vue-switch-off{
    padding-left: 24px;
    padding-right: 8px;
    
}
</style>

