<template>
  <div class="welcome">
    <img src="../assets/logo.png" alt="Vue.js PWA">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  }
}
</script>


<style>
img {
  height: 5em;
}
.welcome {
    margin-top: 40px;
}
</style>