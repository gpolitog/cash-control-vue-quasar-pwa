<template>
  <div class="cascontrol-home">
    <div class="row no-wrap mounth-carousel">
      <div class="col-2 arrow">
        <q-btn flat round color="secondary">
          <q-icon name="navigate_before" />
          <span>mês anterior</span>
        </q-btn>
      </div>
      <div class="col-8 mounth-label text-center">
        <time datetime="Nov 17">
          <b>Novembro</b><br>
          <small>2017</small>
        </time>
      </div>
      <div class="col-2 arrow">
        <q-btn flat round color="secondary">
          <q-icon name="navigate_next" />
          <span>próximo mês</span>
        </q-btn>
      </div>
    </div>

    <q-list inset-separator>
      <q-collapsible group="homegroup" icon="account_balance_wallet" label="Recebimentos" sublabel="Renda: R$ 6.000,00">
        <div>
          <p>Dica: encontre uma forma de aumentar sua renda.</p>
          <p>O que vc fez esse mes para tentar aumentar sua renda?</p>
        </div>
      </q-collapsible>
      <q-collapsible group="homegroup" icon="rotate_right" label="Contas Fixas" sublabel="Total: R$ 1.100,00">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </q-collapsible>
      <q-collapsible group="homegroup" icon="shopping_basket" label="Gastos no dia-a-dia" sublabel="Total: R$ 1.600,00">
        <list-gastos :gastos="gastos">Carregando gastos...</list-gastos>
      </q-collapsible>
    </q-list>

    <q-card>
      <q-card-title>
        <q-icon name="account_balance" color="faded" /> Sobra<br>
        <big class="text-bold text-green">R$ 500,00</big>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <p>Dica: encontrar uma forma de poupar mais (gastar menos)</p>
        <ul>
          <li>comer em casa</li>
          <li>vc realmente precisa do que vc esta comprando?</li>
        </ul>
      </q-card-main>
    </q-card>

    <q-collapsible group="homegroup" icon="accessibility" label="Investimentos" sublabel="R$ 1.600,00">
      <div>
        <p>
          <strong>Investir o dinheiro que sobrou</strong>
        </p>
        <p>Dica: faca o dinheiro trabalhar por vc</p>
      </div>
    </q-collapsible>

    <!-- Modal to add new entries -->
    <div v-if="renderWrapperModal">
      <q-modal ref="newEntryModal" v-model="openModal" maximized>
        <q-modal-layout>
          <new-entry-modal v-on:self-close="toggleNewEntryModal()">
            Carregando modal...
          </new-entry-modal>
        </q-modal-layout>
      </q-modal>
    </div>

    <q-fixed-position corner="bottom-right" :offset="[16, 16]">
      <q-btn round color="primary" icon="add" @click="toggleNewEntryModal()" />
    </q-fixed-position>
  </div>
</template>

<script>
import ListGastos from '@/ListGastos.vue'
import NewEntryModal from '@/NewEntryModal.vue'
import FirebaseRefs from '../config/firebase.config'

export default {
  name: 'Home',
  data() {
    return {
      // modal is always opened
      openModal: true,
      // but its wrapper is not rendered
      renderWrapperModal: false,
      newGasto: {},
    }
  },
  firebase: {
    gastos: FirebaseRefs.gastosRef,
  },
  components: {
    ListGastos,
    NewEntryModal,
  },
  methods: {
    toggleNewEntryModal() {
      this.renderWrapperModal = !this.renderWrapperModal
      if (!this.renderWrapperModal) {
        let $body = document.querySelector('body')
        $body.classList.remove('with-modal')
        $body.style.paddingRight = '0'
      }
    },
    addNewGasto() {
      console.log('add new gasto - home:', this.newGasto)
      this.gastos.push(this.newGasto)
    },
  },
}
</script>

<style lang="stylus" scoped>
.cascontrol-home
  clear left

  .mounth-carousel
    margin 30px

    .arrow
      span
        text-indent -9999px
        display block
        position absolute

  .q-tabs
    margin-top -1px
</style>
