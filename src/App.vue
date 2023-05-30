<template>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum, natus, reiciendis cumque ex sunt doloribus
      id nostrum culpa officia perspiciatis repudiandae recusandae similique officiis debitis explicabo magnam quo labore.
    </p>
    <button @click="store.increment">Increase no.</button>
  </div>
</template>

<script setup>
import { useStore } from "@/store"
import { onMounted } from "vue"


const store = useStore()

onMounted( () => {
  store.pubsub.subscribe( 'count', ( data ) => {
    console.log( "Count changed:", data )
  } )
} )
</script>
