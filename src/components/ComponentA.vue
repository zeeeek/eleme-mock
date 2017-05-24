<template>
  <div id="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ msgfromfather }}</h1>
    <button v-on:click="onClickme">open mouse!</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello from a ComponentA!'
    }
  },
  props: ['msgfromfather'],
  methods: {
    onClickme () {
      console.log(this.msgfromfather);
      this.$emit('Child-tell-me-something',this.msg);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
