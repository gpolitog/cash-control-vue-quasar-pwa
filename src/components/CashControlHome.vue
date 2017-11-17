<template>
  <div class="hello-home">
    <q-list inset-separator>
      <q-collapsible icon="account_balance_wallet" label="Recebimentos" sublabel="R$ 6.000,00">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </q-collapsible>
      <q-collapsible icon="rotate_right" label="Contas Fixas" sublabel="R$ 1.100,00">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </div>
      </q-collapsible>
      <q-collapsible icon="shopping_basket" label="Gastos no dia-a-dia" sublabel="R$ 1.600,00">
        <cash-control-gastos>Carregando gastos...</cash-control-gastos>
      </q-collapsible>
    </q-list>
    <q-card>
      <q-card-title>
        <q-icon name="account_balance" color="faded" /> Saldo<br><big class="text-bold text-green">R$ 500,00</big>
      </q-card-title>
    </q-card>
  </div>
</template>

<script>
import { QCollapsible } from 'quasar'
import CashControlGastos from './CashControlGastos.vue'

export default {
  components: {
    QCollapsible,
    CashControlGastos,
  }
}
</script>

<style lang="stylus" scoped>
.hello-home
  clear left
</style>
