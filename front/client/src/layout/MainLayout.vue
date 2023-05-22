<template>
  <section class="main__layout">
    <div class="main__layout__header">
      <header>
        <div class="d-flex">
          <div class="main__layout__header__employer">
            <router-link
              class="link"
              to="123"
            >
              <div class="main__layout__header__employer-inner">
                Сотрудники
              </div>
            </router-link>
          </div>
          <div class="main__layout__header__employer">
            <router-link
              class="link"
              to="123"
            >
              <div class="main__layout__header__employer-inner">
                Команды
              </div>
            </router-link>
          </div>
        </div>
      </header>
    </div>
    <div class="d-flex">
      <div class="main__layout__left">
        <div class="main__layout__left__info">
          Варшавская Елизавета
        </div>
        <div class="main__layout__left-nav">
          <ul>
            <li><a ><span>Главная</span></a></li>
            <li><a ><span>Профиль</span></a></li>
            <li><a ><span>Регулярные встречи</span></a></li>
          </ul>
        </div>
      </div>
      <v-main>
        <section class="main__inner">
          <router-view />
        </section>
      </v-main>
    </div>
  </section>
</template>

<script>

export default {
  name: 'MainLayout',
};
</script>

<style lang="sass" scoped>
.main__layout
  background-color: #F5F5F5
  height: 100%
  &__header
    height: 80px
    background-color: #0066FF
    &__employer-inner
      text-decoration: none
      width: 150px
      height: 80px
      align-items: center
      justify-content: center
      display: flex
      color: white
      &:hover
        background-color: #52B4FA
  &__left
    width: 285px
    margin-right: 8px
    &__info
      margin: 8px
      background-color: white
      height: 100px
      border: 1px solid white
      border-radius: 10px
      justify-content: center
      display: flex
    &-nav
      box-sizing: border-box
      min-height: 863px
      border-radius: 9px
      background-color: #F2F2F2
      border: 1px solid #75757569
      margin: 0 8px 0 0
      font-size: 0
      color: #666
      ul
        display: block
        box-sizing: border-box
        list-style: none
        position: relative
        padding: 8px 0 0 0
        li
          display: block
          box-sizing: border-box
          position: relative
          height: 48px
          font-size: 20px
          &:hover
            box-shadow: inset
            height: 100%
            background-color: #0095ff1c
            color: #333
          &:active
            background-color: #0095ff1c
            color: #333
          a
            position: relative
            display: flex
            box-sizing: border-box
            padding: 20px 20px 20px 20px
            text-decoration: none

</style>
