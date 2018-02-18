<template>
  <header>
    <h1>Login</h1>

    <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
  </header>
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
#preview {
    border: 1px solid #666666;
}
</style>