<template>
  <div>
    <header>
      <h1>Login</h1>
    </header>
    <div class="content">
      <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--12-col">
          <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <router-link to="/login" tag="button"
                      class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Enter id manually
          </router-link>
        </div>
      </div>      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paused: false
    }
  },
  methods: {
    onDecode: function (qrCode) {
      console.log(qrCode)
      this.paused = true
      this.$router.push({ name: 'Home', params: { qrId: qrCode } })
    }
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: center;
}
</style>