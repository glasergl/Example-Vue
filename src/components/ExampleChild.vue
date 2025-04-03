<script setup lang="ts">
const { variable1, variable2, variable3 } = defineProps<{
  variable1: string;
  variable2: string;
  variable3: number;
  variable4: boolean;
  variable5: {
    id: number;
    test: string;
  };
}>();
</script>

<template>
  <div class="example-child">
    <div>child</div>
    <div>{{ variable1 }}</div>
    <div>{{ variable2 }}</div>
    <div>{{ variable3 }}</div>
    <div>{{ variable4 }}</div>
    <div>{{ variable5 }}</div>
  </div>
</template>

<style scoped></style>
