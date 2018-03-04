<template>
  <div id="register">
    <header>
      <h1>Register</h1>
    </header>
    <div class="content">
      <form class="mdl-cell mdl-cell--6-col" novalidate @submit.prevent="validateData">
        <md-field :class="getValidationClass('username')">
          <label for="username">username</label>
          <md-input name="username" id="username" v-model="form.username" :disabled="sending" />
          <span class="md-error" v-if="!$v.form.username.required">The username is required</span>
          <span class="md-error" v-else-if="!$v.form.username.minlength">Invalid username</span>
        </md-field>
        <md-field :class="getValidationClass('name')">
          <label for="name">name</label>
          <md-input name="name" id="name" v-model="form.name" :disabled="sending" />
          <span class="md-error" v-if="!$v.form.name.required">The name is required</span>
          <span class="md-error" v-else-if="!$v.form.name.minlength">Invalid name</span>
        </md-field>
        <md-field :class="getValidationClass('surname')">
          <label for="surname">surname</label>
          <md-input name="surname" id="surname" v-model="form.surname" :disabled="sending" />
          <span class="md-error" v-if="!$v.form.surname.required">The surname is required</span>
          <span class="md-error" v-else-if="!$v.form.surname.minlength">Invalid surname</span>
        </md-field>
        <button type="submit" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
          Register
        </button>
      </form>
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
      sending: false,
      form: {
        username: null,
        name: null,
        surname: null
      }
    }
  },
  validations: {
    form: {
      username: {
        required,
        minLength: minLength(3)
      },
      name: {
        required
      },
      surname: {
        required
      }
    }
  },
  methods: {
    register: function () {
      const self = this
      this.$root.$firebaseRefs.users.push(this.form)
        .then(() => {
          self.$router.push({ name: 'Home', params: { qrId: self.form.name } })
        }).catch((err) => {
          console.error(err)
        })
    },
    validateData: function () {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.register()
      }
    },
    getValidationClass: function (fieldName) {
      const field = this.$v.form[fieldName]

      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        }
      }
    }
  }
}
</script>
<style scoped>
#register header {
  color: white;
  height: 65px;
  margin-top: -24px;
  background: linear-gradient(45deg, hsla(340, 100%, 55%, 1) 0%, hsla(340, 100%, 55%, 0) 70%),
              linear-gradient(135deg, hsla(225, 95%, 50%, 1) 10%, hsla(225, 95%, 50%, 0) 80%),
              linear-gradient(225deg, hsla(140, 90%, 50%, 1) 10%, hsla(140, 90%, 50%, 0) 80%),
              linear-gradient(315deg, hsla(35, 95%, 55%, 1) 100%, hsla(35, 95%, 55%, 0) 70%);
}
#register h1 {
  font-size: 25px;
  line-height: 65px;
}
#register .content {
  display: flex;
  justify-content: center;
}
.md-field:after {
  background-color: rgba(0,0,0,.42);
}

</style>