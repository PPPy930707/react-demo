let stompClient = null
let subscriptions = []
export default {
  /**
   * websocket建立长连接
   */
  connect: (wsURL, destinations, sucFn, header) => {
    if ('WebSocket' in window) {
      // 建立连接对象(还未发起连接),也可通过WebSocket建立连接
      let socket = new window.SockJS(wsURL)
      // 获取 STOMP 子协议的客户端对象
      stompClient = window.Stomp.over(socket)
      // 向服务器发起websocket连接并发送CONNECT帧
      stompClient.connect(header || {}, (frame) => {
        console.log('Connected ' + frame)
        const onMessage = (message) => {
          sucFn(message.body)
        }
        for (let destination in destinations) {
          subscriptions.push(stompClient.subscribe(destination, onMessage))
        }
      }, (error) => {
        // 连接失败时的回调函数
        console.log('Connected failed! ' + error)
      })
      return stompClient
    } else {
      console.log('您的浏览器不支持WebSocket！')
    }
  },
  /**
   * 发送消息
   */
  send: (url, header, body) => {
    if (stompClient) {
      stompClient.send(url, header, body)
    }
  },
  /**
   * 取消订阅unsubscribe
   */
  unsubscribe: () => {
    for (let subscription in subscriptions) {
      subscription.unsubscribe()
    }
  },
  /**
   * 断开websocket连接
   */
  disconnect: () => {
    if (stompClient) {
      stompClient.disconnect(() => {
        alert('断开连接！')
      })
    }
    console.log('Disconnected')
  }
}
