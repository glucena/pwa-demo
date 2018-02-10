<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Sample PWA made with Vue.js'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header {
  height: 200px;
  margin-top: -24px;
  background: linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%);
}

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
  color: #35495E;
}
</style>
