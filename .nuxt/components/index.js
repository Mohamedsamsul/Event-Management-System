export { default as EventCreation } from '../..\\components\\EventCreation.vue'
export { default as EventListing } from '../..\\components\\EventListing.vue'
export { default as Notify } from '../..\\components\\notify.vue'
export { default as Userlogin } from '../..\\components\\userlogin.vue'
export { default as UserProfile } from '../..\\components\\UserProfile.vue'
export { default as Userregister } from '../..\\components\\userregister.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
