<template>
  <div>
    <header>
      <h1>Login</h1>
    </header>
    <div class="content">
      <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
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