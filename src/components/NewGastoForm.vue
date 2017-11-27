<template>
  <div>
    <h6 class="form-title">Novo Gasto</h6>

    <!-- valor -->
    <q-field icon="local_atm" helper="Quanto vc gastou motherfucker?" :error="valorHasError" error-label="Digite um valor correto" :count="10" :labelWidth="12">
      <q-input v-model="entryValue" type="number" float-label="Valor" max-length="10" prefix="R$" />
    </q-field>

    <q-field icon="today" helper="Quando vc gastou motherfucker?" :labelWidth="12">
      <q-datetime v-model="entryDate" type="date" float-label="Data" format="D/M/YYYY" @change="transformToTimestamp()" ok-label="Selecionar" cancel-label="Cancelar" no-clear />
    </q-field>

    <q-field icon="subject" helper="Com que porra vc gastou? De um excelente motivo" :count="30" :labelWidth="12">
      <q-input v-model="entryDescription" type="text" float-label="Descrição" max-length="30" />
    </q-field>

    <q-field icon="place" helper="Onde?" :count="30" :labelWidth="12">
      <q-input v-model="entryWhere" type="text" float-label="Local" max-length="30" />
    </q-field>

    <q-field icon="rotate_right" helper="Compra parcelada" :count="2" :labelWidth="12">
      <q-input v-model="entryParcelas" type="text" float-label="Parcelas" max-length="2" />
    </q-field>

    <!-- Category Select Dialog Box with Radios -->
    <q-field icon="folder_open" label="Categoria">
      <q-dialog-select v-model="entryCategory" :options="categoriesOptions" ok-label="Selecionar" cancel-label="Cancelar" title="Categorias" message="Em qual área da sua vida esse gasto é importante?" clearable color="lime" :before="categoriesSelectBefore" />
    </q-field>
    <br>
    <q-btn class="full-width" big flat color="primary" @click="addNewGasto()">Adicionar</q-btn>
  </div>
</template>

<script>
import FirebaseRefs from '../config/firebase.config'

export default {
  name: 'NewGastoForm',
  data() {
    return {
      entryDate: undefined,
      entryDescription: '',
      entryValue: '',
      entryWhere: '',
      entryParcelas: undefined,
      entryCategory: '',
      valorHasError: false,
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
      categoriesSelectBefore: [
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
  firebase: {
    gastosRef: FirebaseRefs.gastosRef,
  },
  methods: {
    transformToTimestamp() {
      this.entryDate = new Date(this.entryDate).getTime()
    },
    clearFields() {
      this.entryDate = undefined
      this.entryDescription = ''
      this.entryValue = undefined
    },
    addNewGasto() {
      console.log(this.gastosRef)
      this.$firebaseRefs.gastosRef.push({
        valor: 50.00,
        data: '26/11/2017',
        categoria: 'combustível'
      })
    }
  },
}
</script>

