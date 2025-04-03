<script setup lang="ts">
import { ref } from 'vue';

const counter = ref(0);

function incrementCounter() {
  counter.value++;
}
</script>

<template>
  <div class="counter">
    <button @click="incrementCounter">Increment</button>
    <div>{{ counter }}</div>
  </div>
</template>

<style scoped></style>
