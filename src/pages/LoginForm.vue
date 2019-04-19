<template>
  <q-page class="loginform flex flex-center">
    <div class="row justify-center">

      <div class="col-8 text-center">
        <p class="text-white caption">Inicio de Sesion </p>
      </div>

      <div class="col-8">
        <q-field
        >
        <q-input inverted color="tertiary" v-model="email" type="email" stack-label="Email" />
        </q-field>
      </div>

      <div class="col-8">
        <q-field
        >
        <q-input inverted color="tertiary" v-model="password" type="password" float-label="Password" />
        </q-field>
      </div>

      <div class="col-8">
        <br>
        <q-btn class="full-width" color="tertiary" :loading="loading" @click="login" label="Login"></q-btn>
      </div>
      </div>
  </q-page>
</template>

<script>
const md5 = require('md5')
export default {

  data () {
    return {
      loading: false,
      email: 'admin@admin.com',
      password: 'secret'
    }
  },
  methods: {
    simulateProgress () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    },
    login () {
      let data = {
        email: this.email,
        password: md5(this.password)
      }
      this.$axios.post('api/users/login', data)
        .then((response) => {
          if (response.data !== false) {
            const guardaruser = {
              id: response.data.id,
              name: response.data.name,
              email: response.data.email
            }
            localStorage.setItem('datadelusuario', JSON.stringify(guardaruser))
            this.$q.cookies.set('accToken', 'cookie_value')
            console.log('Logged in')
            this.$router.push('/')
          } else {
            alert('Error al Loguear')
          }
        })
        .catch((errors) => {
          console.log(errors)
          console.log('Error al conectarse con el servidor')
        })
    }
  }
}
</script>

<style scoped>
.loginform {
  background-color: #365552;
}
</style>
