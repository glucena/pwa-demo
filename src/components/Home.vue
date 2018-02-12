<template>
  <div>
    <header>
      <h1>Hello {{ qrId }}!</h1>
    </header>
    <div class="content">
      <md-card>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="4:3">
            <img src="/assets/examples/card-sky.jpg" alt="Skyscraper">
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <span class="md-title">Solid background</span>
              <span class="md-subhead">4/3 image</span>
            </md-card-header>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      qrId: null
    }
  },
  created: function () {
    this.qrId = this.$route.params.qrId
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
h1 {
  font-size: 4vh;
}

h1,
h2 {
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
  color: #35495e;
}
</style>
