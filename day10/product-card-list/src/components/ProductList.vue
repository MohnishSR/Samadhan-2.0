<template>
  <div class="container mx-auto px-4 py-8">
    <h2 class="text-2xl font-bold text-gray-800 mb-6">Our Products</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script>
import ProductCard from './ProductCard.vue'

export default {
  name: 'ProductList',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: 'Wireless Headphones',
          description: 'Premium noise-cancelling wireless headphones with 20-hour battery life',
          price: 199.99,
          image: '/src/assets/placeholder.svg'
        },
        {
          id: 2,
          name: 'Smart Watch',
          description: 'Fitness tracker with heart rate monitor and sleep analysis',
          price: 149.99,
          image: '/src/assets/placeholder.svg'
        },
        {
          id: 3,
          name: 'Portable Speaker',
          description: 'Waterproof Bluetooth speaker with 360-degree sound',
          price: 79.99,
          image: '/src/assets/placeholder.svg'
        },
        {
          id: 4,
          name: 'Laptop Stand',
          description: 'Adjustable aluminum laptop stand for better ergonomics',
          price: 49.99,
          image: '/src/assets/placeholder.svg'
        },
        {
          id: 5,
          name: 'Wireless Charger',
          description: 'Fast-charging Qi wireless charging pad',
          price: 29.99,
          image: '/src/assets/placeholder.svg'
        },
        {
          id: 6,
          name: 'Mechanical Keyboard',
          description: 'RGB backlit mechanical gaming keyboard with custom switches',
          price: 129.99,
          image: '/src/assets/placeholder.svg'
        },
      ]
    }
  }
}
</script>