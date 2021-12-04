const link = document.querySelector('[data-js="link"]')

class App {
  myValue = '2'

  value() {
    return this.value
  }

  handleClick(e) {
    alert(this.value())
  }

  render() {
    link.addEventListener('click', this.handleClick)
  } 
}

const app = new App()
const app2 = new App()

console.log('app.value(): ', app.value())
console.log('app2.value()', app2.value())
console.log('app == app2', app === app2)
console.log('app.value == app2.value', app.value === app2.value)
