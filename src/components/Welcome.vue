<template>
  <div class="welcome">
    <img src="../assets/logo.png" alt="Vue.js PWA">
    <h1>{{ msg }}</h1>

    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone">
        <router-link to="/login" tag="button"
                     class="mdl-button mdl-js-button mdl-button--raised">
          Get started
        </router-link>
      </div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone">
        <router-link to="/register" tag="button"
                     class="mdl-button mdl-js-button mdl-button--raised">
          Register
        </router-link>
      </div>
    </div>
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
.wellcome img {
  width: 30%;
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
.welcome button {
  width: 80%;
  background: rgba(0, 0, 0, 0.38);
  color: white;
}
</style>