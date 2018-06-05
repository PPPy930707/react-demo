import {observable, computed, autorun, action} from 'mobx'

export class AppState {
  @observable count = 0 // 监督的值
  @observable name = 'Jack'
  @computed get msg () {
    return `${this.name} count is ${this.count}`
  }
  @action add () {
    this.count += 1
  }
  @action clear () {
    this.count = 0
  }
  @action changeName (newName) {
    this.name = newName
  }
}
const appState = new AppState()

const disposer = autorun(() => {
  console.log(appState.msg) // 当该观察值发生改变是触发
  if (appState.count === 10) {
    disposer()
    clearInterval(timer)
  }
})

const timer = setInterval(() => {
  appState.add()
}, 1000)
export default appState
