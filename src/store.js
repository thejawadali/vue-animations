import PubSub from "@/PubSub"
import { defineStore } from 'pinia'

export const useStore = defineStore( {
  id: 'store',
  state: () => ( {
    count: 0,
    pubsub: new PubSub(),
  } ),
  actions: {
    increment () {
      this.count++
      this.pubsub.publish( "count", this.count )

    }
  },
} )
