<template>
  <q-layout>
    <div slot="navigation" class="fixed-top" style="color: #000">
      <q-toolbar slot="header">
        <q-btn flat @click="selfClose()">
          <q-icon name="keyboard_arrow_left" />
        </q-btn>
        <div class="q-toolbar-title">
          Novo registro
        </div>
      </q-toolbar>

      <q-tabs>
        <!-- Tabs -->
        <q-tab default @select="showGastoForm()" slot="title" icon="shopping_basket" />
        <q-tab @select="showRecebimentoForm()" slot="title" icon="account_balance_wallet" />
        <q-tab @select="showContaFixaForm()" slot="title" icon="rotate_right" />
        <q-tab @select="showInvestimentoForm()" slot="title" icon="accessibility" />
      </q-tabs>
    </div>

    <div class="layout-padding" style="margin-top: 103px;">
      <component :is="currentTab" v-on:self-close="selfClose()"></component>
    </div>
  </q-layout>
</template>

<script>
const LoadingComp = {
  template: 'loading'
}

const ErrorComp = {
  template: 'error'
}

const AsyncNewGastoComp = () => ({
  // The component to load. Should be a Promise
  component: import('@/NewGasto.vue'),
  // A component to use while the async component is loading
  loading: LoadingComp,
  // A component to use if the load fails
  error: ErrorComp,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

const AsyncNewRecebimentoComp = () => ({
  // The component to load. Should be a Promise
  component: import('@/NewRecebimento.vue'),
  // A component to use while the async component is loading
  loading: LoadingComp,
  // A component to use if the load fails
  error: ErrorComp,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

const AsyncNewContaFixaComp = () => ({
  // The component to load. Should be a Promise
  component: import('@/NewContaFixa.vue'),
  // A component to use while the async component is loading
  loading: LoadingComp,
  // A component to use if the load fails
  error: ErrorComp,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

const AsyncNewInvestimentoComp = () => ({
  // The component to load. Should be a Promise
  component: import('@/NewInvestimento.vue'),
  // A component to use while the async component is loading
  loading: LoadingComp,
  // A component to use if the load fails
  error: ErrorComp,
  // Delay before showing the loading component. Default: 200ms.
  delay: 200,
  // The error component will be displayed if a timeout is
  // provided and exceeded. Default: Infinity.
  timeout: 3000
})

export default {
  name: 'NewEntryModal',
  data() {
    return {
      currentTab: AsyncNewGastoComp,
    }
  },
  methods: {
    showGastoForm() {
      this.currentTab = AsyncNewGastoComp
    },
    showRecebimentoForm() {
      this.currentTab = AsyncNewRecebimentoComp
    },
    showContaFixaForm() {
      this.currentTab = AsyncNewContaFixaComp
    },
    showInvestimentoForm() {
      this.currentTab = AsyncNewInvestimentoComp
    },
    selfClose() {
      this.$emit('self-close')
    }
  }
}
</script>

<style lang="stylus">
.q-tabs-head
  margin-top -1px

.form-title
  text-align center
</style>


