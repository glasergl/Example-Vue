<script setup lang="ts">
import ExampleChild from '@/components/ExampleChild.vue';

const test = {
  id: 5,
  test: 'test69'
};
</script>

<template>
  <div class="example-parent">
    parent
    <ExampleChild variable1="test123" variable2="42a" :variable3="42" :variable4="true" :variable5="test" />
  </div>
</template>

<style scoped></style>
