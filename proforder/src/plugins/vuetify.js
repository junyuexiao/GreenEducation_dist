import Vue from 'vue'
import 'vuetify/dist/vuetify.min.css'
import {
  Ripple,
} from 'vuetify/lib/directives'
import Vuetify, {
  VApp,
  VBtn,
  VForm,
  VTextField,
  VSelect,
  VCheckbox,
  VCard,
  VToolbar,
  VContainer,
  VRow,
  VCol,
  VSkeletonLoader,
  VRadio,
  VRadioGroup,
  VStepperContent,
  VStepperStep,
  VStepper,
  VStepperHeader,
  VStepperItems,
  VIcon,
} from 'vuetify/lib'

Vue.use(
  Vuetify, {
    components: {
      VApp,
      VBtn,
      VForm,
      VTextField,
      VSelect,
      VCheckbox,
      VCard,
      VToolbar,
      VContainer,
      VRow,
      VCol,
      VSkeletonLoader,
      VRadio,
      VRadioGroup,
      VStepperContent,
      VStepperStep,
      VStepper,
      VStepperHeader,
      VStepperItems,
      VIcon
    },
    directives: {
      Ripple,
      
    }
  }
)
export default new Vuetify()