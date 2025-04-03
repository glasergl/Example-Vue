<script setup lang="ts">
import { ref } from 'vue';
import { printSomethingFunny } from '@/scripts/test-script.ts';

const items = ref([
  {
    id: '0',
    entry1: 'A',
    entry2: 'B'
  },
  {
    id: '1',
    entry1: 'C',
    entry2: 'D'
  },
  {
    id: '2',
    entry1: 'E',
    entry2: 'F'
  }
]);

function addItem() {
  items.value.push({
    id: '',
    entry1: 'FGH',
    entry2: 'asd'
  });
  printSomethingFunny();
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Spalte 1</th>
        <th>Spalte 2</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.entry1 }}</td>
        <td>{{ item.entry2 }}</td>
      </tr>
    </tbody>
  </table>
  <button @click="addItem">Add Item</button>
</template>

<style scoped lang="scss">
table {
  background-color: gray;
}
</style>
