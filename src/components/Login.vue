<template>
  <div id="login">
    <header>
      <h1>Login</h1>
    </header>
    <div class="content">
      <div class="mdl-grid" v-if="formEnabled">
        <md-empty-state
            md-icon="devices_other"
            md-label="Please login"
            md-description="Enter your personal id and click to log in.">
          <form class="mdl-cell mdl-cell--6-col" novalidate @submit.prevent="validateId">
            <md-field :class="getValidationClass('id')">
              <label for="id">ID</label>
              <md-input name="id" id="id" v-model="form.id" :disabled="sending" />
              <span class="md-error" v-if="!$v.form.id.required">The id is required</span>
              <span class="md-error" v-else-if="!$v.form.id.minlength">Invalid id</span>
            </md-field>
            <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
              Login
            </button>
          </form>
        </md-empty-state>
        
      </div>
      <div class="mdl-grid" v-else>
        <div class="mdl-cell mdl-cell--12-col">
          <qrcode-reader @decode="onDecode" :paused="paused"></qrcode-reader>
        </div>
        <div class="mdl-cell mdl-cell--12-col">
          <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                  v-on:click="enableForm">
            Enter id manually
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import {
  required,
  minLength
} from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  data () {
    return {
      paused: false,
      formEnabled: false,
      sending: false,
      form: {
        id: null
      }
    }
  },
  validations: {
    form: {
      id: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    onDecode: function (qrCode) {
      console.log(qrCode)
      this.paused = true
      this.$router.push({ name: 'Home', params: { qrId: qrCode } })
    },
    enableForm: function () {
      this.paused = true
      this.formEnabled = true
    },
    getValidationClass: function (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    },
    validateId: function () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.login()
      }
    },
    login: function () {
      let self = this
      this.$root.$firebaseRefs.users.orderByChild('username').equalTo(this.form.id).limitToFirst(1).on('child_added', function (snapshot) {
        self.$router.push({ name: 'Home', params: { qrId: snapshot.val().name } })
      })
    }
  }
}
</script>

<style>
#login header {
  color: white;
  height: 65px;
  margin-top: -24px;
  background: linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
              linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
              linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
              linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
}
#login h1 {
  font-size: 25px;
  line-height: 65px;
}
#login .content {
  display: flex;
  justify-content: center;
}
.md-field:after {
  background-color: rgba(0,0,0,.42);
}

.qrcode-reader {
  display: flex;
  justify-content: center;
}
</style>