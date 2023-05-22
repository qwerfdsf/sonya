<template>
  <div class="main__page">
    <div class="main__page__workplace">
        <div class="main__page__workplace__first">
          <div class="main__page__workplace__first__left-info">
            <div class="d-flex">
              <!-- Контрольная точка -->
              <div class="main__page__workplace__first__left-info-meeting mr-3">
                <div class="text">Контрольная <br> точка</div>
                <div class="main__page__workplace__first__left-info-time">
                  <div>28 окт</div>
                  <div>Ср</div>
                  <div>15.00 - 16.00</div>
                </div>
              </div>
              <!-- Регулярная встреча -->
              <div class="main__page__workplace__first__left-info-meeting">
                <div class="text">Регулярная встреча</div>
                <div class="main__page__workplace__first__left-info-time">
                  <div>28 окт</div>
                  <div>Ср</div>
                  <div>15.00 - 16.00</div>
                </div>
              </div>
            </div>
            <!-- Кнопки -->
            <div class="main__page__workplace__first__button">
              <div class="ma-0 pa-0 ">
                <ul class="">
                  <li class="main__page__workplace__first__button__item"><a href="#"><span>+ Заполнить протокол</span></a></li>
                  <li class="main__page__workplace__first__button__item"><a href="#"><span>+ Заявка на
                      обучение</span></a></li>
                  <li class="main__page__workplace__first__button__item"><a href="#"><span>+ Поставить цели</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
</div>

  </div>

</template>

<script>
export default {
  name: "MainPage",
}
</script>

<style scoped lang="sass">
.main__page__workplace
  min-height: 979px
  border-radius: 9px
  position: relative
  &__first
    display: flex
    flex-direction: row
    flex-wrap: nowrap
    margin-bottom: 8px
    &__left-info
      width: 13.5%
      margin-right: 8px
      text-align: center
      &-meeting
        min-height: 180px
        border-radius: 14px
        margin-top: 8px
        background-color: #FFFFFF
        font-size: 24px
        font-weight: 600
      &-time
        margin-top: 7px
        font-size: 24px
    &__button
      width: 203%
      min-height: 106px
      max-height: 110px
      border-radius: 13px
      background-color: #FFFFFF
      margin: 8px 8px 0 0
      padding: 0
      ul
        list-style: none
        margin: 0
        padding: 0
      &-item:hover > ul
        display: block
        position: fixed
        background-color: #FFFFFF
        border: 1px solid #CCCCCC
        border-radius: 13px
        padding: 8px 15px 8px 15px
        color: #666666
        font-size: 17px
        font-weight: 400
      &-item:hover > ul > li:hover
        background-color: #6666662f
</style>
