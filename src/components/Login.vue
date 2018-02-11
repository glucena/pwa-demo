<template>
  <header>
    <h1>Login</h1>

    <video id="preview" ref="preview"></video>
  </header>
</template>

<script>
const Instascan = require('instascan')

export default {
  data: {
    scanner: null,
    activeCameraId: null,
    cameras: [],
    scans: []
  },
  mounted: function () {
    debugger
    console.log('YAI', this.$refs)
    this.initializeScanner()
  },
  methods: {
    initializeScanner: function () {
      var self = this
      self.scanner = new Instascan.Scanner({ video: this.$refs.preview, scanPeriod: 5 })
      self.scanner.addListener('scan', function (content, image) {
        console.log(content)
        // self.scans.unshift({ date: +(Date.now()), content: content })
        self.$router.push({ name: 'Home', params: { qrId: content } })
        self.scanner.stop()
      })
      Instascan.Camera.getCameras().then(function (cameras) {
        self.cameras = cameras
        if (cameras.length > 0) {
          self.activeCameraId = cameras[0].id
          self.scanner.start(cameras[0])
        } else {
          console.error('No cameras found.')
        }
      }).catch(function (e) {
        console.error(e)
      })
    }
  }
}
</script>

<style>
#preview {
    border: 1px solid #666666;
}
</style>