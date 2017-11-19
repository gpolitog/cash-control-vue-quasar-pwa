<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <q-layout ref="layout" view="lHH Lpr lFF" left-breakpoint="10000" :reveal="true">
      <!-- Header -->
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layout.toggleLeft()">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title>
          Cash Control
          <span slot="subtitle">Controle financeiro simples e rápido</span>
        </q-toolbar-title>
      </q-toolbar>

      <!-- Left Side Panel -->
      <div slot="left">
        <q-list no-border link inset-separator>
          <q-list-header>Essential Links</q-list-header>
          <q-side-link item to="/docs">
            <q-item-side icon="school" />
            <q-item-main label="Docs" sublabel="quasar-framework.org" />
          </q-side-link>
        </q-list>
      </div>

      <!-- sub-routes get injected here: -->
      <router-view />

      <q-modal ref="newEntryModal" maximized @close="clearFields()">
        <q-modal-layout>
          <q-toolbar slot="header">
            <q-btn flat @click="toggleNewEntryModal()">
              <q-icon name="keyboard_arrow_left" />
            </q-btn>
            <div class="q-toolbar-title">
              Novo gasto
            </div>
          </q-toolbar>

          <div class="layout-padding">
            <!-- valor -->
            <q-field icon="attach_money" helper="Quanto vc gastou motherfucker?" :error="valorHasError" error-label="Digite um valor correto" :count="10" labelWidth="12">
              <q-input v-model="entryValue" type="number" float-label="Valor" max-length="10" prefix="R$" />
            </q-field>

            <q-field icon="today" helper="Quando vc gastou motherfucker?" labelWidth="12">
              <q-datetime v-model="entryDate" type="date" float-label="Data" format="D/M/YYYY" @change="transformToTimestamp()" ok-label="Selecionar" cancel-label="Cancelar" no-clear />
            </q-field>

            <q-field icon="subject" helper="Com que porra vc gastou? De um excelente motivo" :count="30" labelWidth="12">
              <q-input v-model="entryDescription" type="text" float-label="Descrição" max-length="30" />
            </q-field>

            <q-field icon="place" helper="Onde?" :count="30" labelWidth="12">
              <q-input v-model="entryWhere" type="text" float-label="Local" max-length="30" />
            </q-field>

            <q-field icon="rotate_right" helper="Compra parcelada" :count="2" labelWidth="12">
              <q-input v-model="entryParcelas" type="text" float-label="Parcelas" max-length="2" />
            </q-field>

            <!-- Category Select Dialog Box with Radios -->
            <q-field icon="folder_open" label="Categoria">
              <q-dialog-select v-model="entryCatrgory" :options="categoriesOptions" ok-label="Selecionar" cancel-label="Cancelar" title="Categorias" message="Em qual área da sua vida esse gasto é importante?" clearable color="lime" :before="addNewCategory" />
            </q-field>
            <br>
            <q-btn big flat color="faded" @click="toggleNewEntryModal()">Cancelar</q-btn>
            <q-btn big flat color="primary" @click="toggleNewEntryModal()">Adicionar</q-btn>
          </div>
        </q-modal-layout>
      </q-modal>

      <q-fixed-position corner="bottom-right" :offset="[16, 16]" style="z-index: 2500">
        <q-fab @open="openTooltips()" @close="closeTooltips()" color="primary" icon="note_add" direction="up">
          <!-- actions -->
          <q-fab-action color="purple" @click="toggleNewEntryModal()" icon="shopping_basket">
            <!-- action tooltip -->
            <q-tooltip ref="gastosTooltip" anchor="center left" self="center right" :offset="[20, 0]">Novo Gasto</q-tooltip>
          </q-fab-action>
        </q-fab>
      </q-fixed-position>
    </q-layout>
  </div>
</template>

<script>
import { Dialog, Toast } from 'quasar'

/*
 * Root component
 */
export default {
  data() {
    return {
      entryDate: undefined,
      entryDescription: '',
      entryValue: '',
      valorHasError: false,
      entryCatrgory: '',
      categoriesOptions: [
        {
          label: 'Casa',
          value: '1'
        },
        {
          label: 'Carro',
          value: '2'
        }
      ],
      addNewCategory: [
        {
          icon: 'note_add',
          content: false,
          handler() {
            console.log('add new category')
          }
        }
      ],
    }
  },
  methods: {
    alert() {
      Dialog.create({
        title: 'FAB',
        message: 'Good job! Keep it going.'
      })
    },
    toast(icon) {
      Toast.create({
        icon,
        html: 'So you want your ' + icon + 's, huh?'
      })
    },
    openTooltips() {
      setTimeout(() => {
        this.$refs.gastosTooltip.open()
      }, 300)
    },
    closeTooltips() {
      setTimeout(() => {
        this.$refs.gastosTooltip.close()
      }, 0)
    },
    toggleNewEntryModal() {
      this.$refs.newEntryModal.toggle()
    },
    transformToTimestamp() {
      this.entryDate = new Date(this.entryDate).getTime()
    },
    clearFields() {
      this.entryDate = undefined
      this.entryDescription = ''
      this.entryValue = undefined
    }
  }
}
</script>

<style lang="stylus">

main
  text-align center

h1
  clear left

ul.breadcrumb
  margin-top -40px

</style>
