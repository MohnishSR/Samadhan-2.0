<script setup>
import ProductList from './components/ProductList.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-indigo-600 text-white py-4">
      <div class="container mx-auto px-4">
        <h1 class="text-2xl font-bold">Product Showcase</h1>
      </div>
    </header>
    <main>
      <ProductList />
    </main>
  </div>
</template>

<style>
/* Global styles can be added here */
</style>
