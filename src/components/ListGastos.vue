<template>
  <div class="homeGastos">
    <!-- ultimo gasto -->
    <q-list dense>
      <q-list-header>Último Gasto</q-list-header>
      <q-item>
        <q-item-side>
          <q-item-tile class="text-center dia">
            <small full-width>dia</small>
            <big>
              <time datetime="2017-11-15T00:00">15</time>
            </big>
          </q-item-tile>
        </q-item-side>
        <q-item-main>
          <div class="row">
            <div class="col first-content-column">
              <q-item-tile label class="text-bold">R$24,90</q-item-tile>
              <q-item-tile sublabel class="text-bold">
                Alimentacao
              </q-item-tile>
              <q-item-tile sublabel>
                <q-icon name="place" color="faded" class="no-padding q-icon-place-margin" />
                <small>
                  <a href="#">Siq Grill</a>
                </small>
              </q-item-tile>
            </div>
            <div class="col text-faded">
              <small>almoco</small>
            </div>
          </div>
        </q-item-main>
        <q-item-side right>
          <q-item-tile>
            <q-icon name="local_dining" color="faded" size="35px"></q-icon>
          </q-item-tile>
        </q-item-side>
      </q-item>
    </q-list>

    <!-- Histórico de gastos -->
    <q-list sparse inset-separator>
      <q-list-header>Histórico</q-list-header>
      <q-item v-for="gasto in gastosComputed" :key="gasto['.key']">
        <q-item-side>
          <q-item-tile class="text-center dia">
            <small full-width>dia</small>
            <big>
              <time datetime="2017-11-15T00:00">{{ gasto.data }}</time>
            </big>
          </q-item-tile>
        </q-item-side>
        <q-item-main>
          <div class="row no-wrap">
            <div class="col first-content-column">
              <q-item-tile label class="text-bold">R$ {{ gasto.valor }}</q-item-tile>
              <q-item-tile sublabel class="text-bold">
                {{ gasto.categoria }}
              </q-item-tile>
              <q-item-tile sublabel>
                <q-icon name="place" color="faded" class="no-padding q-icon-place-margin" />
                <small>
                  <a href="#">{{ gasto.local }}</a>
                </small>
              </q-item-tile>
            </div>
            <div class="col text-faded">
              <small>{{ gasto.descricao }}</small>
            </div>
          </div>
        </q-item-main>
        <q-item-side right>
          <q-item-tile>
            <q-icon :name="gasto.icon" color="faded" size="35px"></q-icon>
          </q-item-tile>
        </q-item-side>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ['gastos'],
  computed: {
    ultimoGasto: function() {
      console.log(Boolean(this.gastos[0]))
      if (this.gastos[0]) {
        return Object.assign(this.gastos[0], {
          data: this.formatDate(this.gastos[0].data),
          icon: this.getIconByDescription(this.gastos[0].categoria)
        })
      }

      return null
    },
    gastosComputed: function() {
      return this.gastos.map(gasto => {
        return Object.assign(gasto, {
          icon: this.getIconByDescription(gasto.categoria),
          data: this.formatDate(gasto.data)
        })
      })
    },
  },
  methods: {
    formatDate(date) {
      return parseInt(date.split('/')[0])
    },
    getIconByDescription(description) {
      let icon = ''

      switch (description) {
        case 'alimentacão':
        case 'restaurante':
        case 'almoço':
        case 'janta':
          icon = 'local_dinning'
          break
        case 'moto':
          icon = 'motorcycle'
          break
        case 'doação':
        case 'presente':
          icon = 'redeem'
          break
        case 'suplemento':
        case 'suplementação':
        case 'saúde':
        case 'academia':
          icon = 'fitness_center'
          break
        case 'mercado':
        case 'supermercado':
          icon = 'shopping_cart'
          break
        case 'supérfulos':
        case 'supérfulo':
          icon = 'store'
          break
        case 'entretenimento':
        case 'cultura':
          icon = 'theathers'
          break
        case 'viagem':
          icon = 'work'
          break
        case 'música':
          icon = 'library_music'
          break
        case 'eu':
          icon = 'recent_actions'
          break
        case 'filmes e seriados':
          icon = 'video_library'
          break
        case 'estudos':
        case 'cursos':
        case 'educação':
          icon = 'school'
          break
        case 'livros':
          icon = 'local_library'
          break
        case 'balada':
          icon = 'blur_circular'
          break
        case 'casa':
          icon = 'format_paint'
          break
        case 'farmácia':
          icon = 'local_pharmacy'
          break
        case 'remédio':
          icon = 'healing'
          break
        case 'transporte':
          icon = 'subway'
          break
        case 'hospital':
        case 'médico':
        case 'exame':
        case 'exame médico':
          icon = 'local_hospital'
          break
        case 'lanche':
          icon = 'free_breakfest'
          break
        case 'carro':
        case 'possante':
        case 'nave':
          icon = 'directions_car'
          break
        case 'gasolina':
        case 'álcool':
        case 'combustível':
          icon = 'local_hospital'
          break
        case 'hotel':
        case 'motel':
        case 'hospedagem':
          icon = 'directions_car'
          break
        default:
          icon = 'payment'
      }

      return icon
    }
  }
}
</script>

<style lang="stylus" scoped>
.homeGastos
  text-align left

.ultimo-gasto
  padding 10px

  .mounth-label
    text-align center
    padding 10px

.q-list
  .q-item-side
    max-width 41px
  .row
    padding 2px
    min-width 200px
  .col
    margin 2px
    min-width 90px

    &.first-content-column
      padding-right: 10px

    .q-icon-place-margin
      margin 0 -2px

  .dia
    padding-right 10px

    small
      display block
      margin-bottom -5px

  .q-item-side-right
    @media screen and (max-width: 319px)
      display none


</style>
