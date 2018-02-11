<template>
  <div class="welcome">
    <img src="../assets/logo.png" alt="Vue.js PWA">
    <h1>{{ msg }}</h1>

    <router-link to="/login" tag="button"
                 class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Get started
    </router-link>

    <router-link to="/home" tag="button"
                 class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Register
    </router-link>
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