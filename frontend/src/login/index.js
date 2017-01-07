import 'bootstrap/js/alert'

import '../../vendor/limitless/js/plugins/ui/ripple.min'
import initLegitRipple from './initializers/legit-ripple'
import '../../vendor/limitless/js/plugins/forms/styling/uniform.min'

import Turbolinks from 'turbolinks'

Turbolinks.start()
document.addEventListener("turbolinks:load", () => {
  $('.styled').uniform()
  initLegitRipple()
})

import './styles/main/index.less'
import './styles/custom/index.sass'
