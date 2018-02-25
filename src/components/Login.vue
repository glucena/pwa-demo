<template>
  <div>
    <header>
      <h1>Login</h1>
    </header>
    <div class="content">
      <div class="mdl-grid" v-if="formEnabled">
        <form novalidate @submit.prevent="validateId">
          <md-field :class="getValidationClass('id')">
            <label for="id">ID</label>
            <md-input name="id" id="id" v-model="form.id" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.id.required">The first name is required</span>
            <span class="md-error" v-else-if="!$v.form.id.minlength">Invalid first name</span>
          </md-field>
        </form>
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
import {
  required,
  minLength
} from 'vuelidate/lib/validators'
export default {
  data () {
    return {
      paused: false,
      formEnabled: false,
      form: {
        id: null
      },
      validations: {
        form: {
          firstName: {
            required,
            minLength: minLength(3)
          }
        }
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
      console.log(this.$v)
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
      this.$router.push({ name: 'Home', params: { qrId: this.form.id } })
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