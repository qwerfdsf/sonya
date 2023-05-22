<template>
  <div class="auth">
    <div class="auth__logo">

    </div>
    <div>
      <v-text-field
        label="Логин"
        solo
      ></v-text-field>
      <v-text-field
        label="Пароль"
        solo
      ></v-text-field>
    </div>
    <v-btn
      depressed
      @click="login($router)"
    >
      Войти
    </v-btn>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AuthPage",
  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style scoped lang="sass">
.auth
  display: flex
  flex-direction: column
  background-color: #0066FF
  width: 100%
  height: 100%
  justify-content: center
  align-items: center
  &__logo
    background-image: url('logo-autoriz.png')
    background-size: cover
    width: 1080px
    height: 300px
</style>
