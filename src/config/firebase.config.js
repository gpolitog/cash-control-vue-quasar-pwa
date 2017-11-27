import Firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBX_Ihtt-t_ZXsUqhbgPgCPwXuq5rNQs44',
  authDomain: 'cashcontrol-50fd5.firebaseapp.com',
  databaseURL: 'https://cashcontrol-50fd5.firebaseio.com',
  projectId: 'cashcontrol-50fd5',
  storageBucket: '',
  messagingSenderId: '869689214748'
}

const app = Firebase.initializeApp(config)
const db = app.database()

export default {
  gastosRef: db.ref('gastos')
}
