export default class BaseComponent {
  constructor() {
    if (this.constructor === BaseComponent) {
      throw new Error(
        'Cannot create an instance of abstract class BaseComponent.'
      )
    }
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => target[prop],
      set: (target, prop, newValue) => {
        if (target[prop] !== newValue) {
          target[prop] = newValue
          this.render()
        }

        return true
      },
    })
  }

  render() {
    throw new Error(
      'render() method must be implemented in a subclass.'
    )
  }
}
