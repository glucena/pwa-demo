<template>
  <div>
    <header>
      <h1>Home</h1>
      <div id="welcome">
        <md-avatar class="md-avatar-icon md-large md-primary">
          {{ (qrId || "A").slice(0,1) }}
        </md-avatar>
        Hello {{ qrId }}!</div>
    </header>
    <div class="content">

        <md-card>
          <md-card-media-cover md-solid >
            <md-card-media md-ratio="16:9">
              <img src="../assets/card-sky.jpg" alt="Skyscraper">
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title" v-on:click="goToMap()">Profile</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/countryside.jpg" alt="Skyscraper">
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title">Web</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>

        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/montains.jpg" alt="Skyscraper">
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title">Map</span>
              </md-card-header>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        
        <md-card>
          <md-card-media-cover md-solid>
            <md-card-media md-ratio="16:9">
              <img src="../assets/card-sky.jpg" alt="Skyscraper">
            </md-card-media>
            <md-card-area>
              <md-card-header>
                <span class="md-title">Settings</span>
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
  },
  methods: {
    goToMap: function () {
      this.$router.push({ name: 'Map' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
header {
  color: white;
  height: 200px;
  margin-top: -24px;
  background: linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
              linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
              linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
              linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
}
header > #welcome {
  font-size: 3vh;
}
h1 {
  color: white;
  font-size: 4vh;
  font-weight: bold;
  line-height: 60px;
}

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

.content {
  min-height: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}

.flex-row {
  display: flex;
}

.md-card {
  display: flex; 
  flex-basis: calc(48%);  
  justify-content: center;
  flex-direction: column;
  margin: 1%;
}

.md-card .md-card-header {
  padding: 8px;
}

.md-card .md-card-area {
  height: 40%;
}

.md-card .md-title {
  margin-top: 0px !important;
  font-size: 1.5rem;
}

</style>
