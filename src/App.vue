<template>
  <div>
    <nav class="bg-gray-800 p-4">
      <router-link class="text-white" to="/">Home</router-link>
      <router-link class="text-white" to="/about">About</router-link>
    </nav>
    <router-view v-slot="{ Component }">
      <!-- <transition name="fade" mode="out-in"> -->
      <transition mode="out-in" enter-active-class="animate__animated animate__fadeInLeft"
        leave-active-class="animate__animated animate__fadeOutLeft">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
// import { RouterView } from "vue-router"
</script>
