<template>
  <div class="homeGastos">
    <div class="row no-wrap mounth-carousel">
      <div class="col-2 left-arrow">
        <q-btn flat round color="secondary">
          <q-icon name="navigate_before" />
          <span>mês anterior</span>
        </q-btn>
      </div>
      <div class="col-8 mounth-label">
        <time datetime="Nov 17">
          <b>Novembro</b><br>
          <small>2017</small>
        </time>
      </div>
      <div class="col-2 right-arrow">
        <q-btn flat round color="secondary">
          <q-icon name="navigate_next" />
          <span>próximo mês</span>
        </q-btn>
      </div>
    </div>
    <!-- ultimo gasto -->
    <q-list dense>
      <q-list-header>Último Gasto</q-list-header>
      <q-item>
        <q-item-side>
          <q-item-tile>
            <big>
              <time datetime="2017-11-15T00:00">15</time>
            </big>
          </q-item-tile>
        </q-item-side>
        <q-item-main>
          <div class="row">
            <div class="col first-content-column">
              <q-item-tile label class="text-bold">R$24,90</q-item-tile>
              <q-item-tile sublabel>
                <q-icon name="place" color="faded" class="no-padding q-icon-place-margin" />
                <small><a href="#">Siq Grill</a></small>
              </q-item-tile>
            </div>
            <div class="col text-faded">
              <small>almoco</small>
            </div>
          </div>
        </q-item-main>
        <q-item-side right>
          <q-item-tile>
            <q-icon name="restaurant" color="faded" size="35px"></q-icon>
          </q-item-tile>
        </q-item-side>
      </q-item>
    </q-list>

    <!-- Histórico de gastos -->
    <q-list sparse inset-separator>
      <q-list-header>Histórico</q-list-header>
      <q-item v-for="(index, item) in gastos" key="index">
        <q-item-side>
          <q-item-tile>
            <big>
              <time datetime="2017-11-15T00:00">15</time>
            </big>
          </q-item-tile>
        </q-item-side>
        <q-item-main>
          <div class="row">
            <div class="col first-content-column">
              <q-item-tile label class="text-bold">R$24,90</q-item-tile>
              <q-item-tile sublabel>
                <q-icon name="place" color="faded" class="no-padding q-icon-place-margin" />
                <small><a href="#">Siq Grill</a></small>
              </q-item-tile>
            </div>
            <div class="col text-faded">
              <small>pintura da parede de gesso</small>
            </div>
          </div>
        </q-item-main>
        <q-item-side right>
          <q-item-tile>
            <q-icon name="restaurant" color="faded" size="35px"></q-icon>
          </q-item-tile>
        </q-item-side>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gastos: [1, 2, 3]
    }
  }
}
</script>

<style lang="stylus" scoped>
.homeGastos
  text-align left

.ultimo-gasto
  padding 10px

.mounth-carousel
  margin 10px
  .left-arrow
    span
      text-indent -9999px
      display block
      position absolute

  .right-arrow
    span
      text-indent -9999px
      display block
      position absolute

  .mounth-label
    text-align center
    padding 10px

.q-list
  .col
    &.first-content-column
      padding-right: 10px

    .q-icon-place-margin
      margin 0 -2px


</style>
