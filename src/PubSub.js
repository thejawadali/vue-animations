export default class PubSub {
  constructor() {
    this.subscribers = {}
  }

  publish ( event, data ) {
    if ( !this.subscribers[event] ) {
      return
    }

    this.subscribers[event].forEach( ( subscriber ) => {
      subscriber( data )
    } )
  }

  subscribe ( event, subscriber ) {
    if ( !this.subscribers[event] ) {
      this.subscribers[event] = []
    }

    this.subscribers[event].push( subscriber )
  }

  unsubscribe ( event, subscriber ) {
    if ( !this.subscribers[event] ) {
      return
    }

    this.subscribers[event] = this.subscribers[event].filter( ( s ) => s !== subscriber )
  }
}
