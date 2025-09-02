<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover object-center" />
    <div class="p-4">
      <h3 class="text-lg font-semibold text-gray-800">{{ product.name }}</h3>
      <p class="text-sm text-gray-600 mt-1">{{ product.description }}</p>
      <div class="mt-3 flex justify-between items-center">
        <span class="text-lg font-bold text-indigo-600">${{ product.price.toFixed(2) }}</span>
        <button class="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>