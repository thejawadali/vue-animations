<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <router-link class="text-white" to="/">Home</router-link>
      <router-link class="text-white" to="/about">About</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <!-- <transition name="fade" mode="out-in"> -->
      <transition mode="out-in" enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100" leave-to-class="opacity-0">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// import { RouterView } from "vue-router"
</script>
