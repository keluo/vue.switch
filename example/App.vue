<template>
<div>
  <vue-switch :value="switchValue" v-model="switchValue"></vue-switch>
</div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      switchValue:true
    }
  },
  watch: {
    switchValue (value) {
      console.log(value);
    }
  },
  methods: {
  }
}
</script>
