import { layout } from './components/Layout.js'
import { initRout } from './router.js'

const app = document.getElementById('app')

app.append(layout())

initRout()