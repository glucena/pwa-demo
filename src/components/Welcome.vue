<template>
  <div class="welcome">
    <img src="../assets/logo.png" alt="Vue.js PWA">
    <h1>{{ msg }}</h1>

    <router-link to="/login" tag="button"
                 class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
        Get started
    </router-link>

    <router-link to="/home" tag="button"
                 class="md-raised">
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
body.welcome {
  background: linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
              linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
              linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
              linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
}
div.welcome {
    margin-top: 40px;
}
div.welcome > h1 {
  color: white;
}
</style>