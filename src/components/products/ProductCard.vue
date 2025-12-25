<template>
  <div 
    class="bg-white border border-gray-100 rounded-xl overflow-hidden group hover:shadow-md transition-shadow"
    :data-aos="aosEffect"
    :data-aos-delay="aosDelay"
  >
    <!-- Product Image -->
    <div class="relative aspect-[3/4] overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      
      <!-- Badges -->
      <div class="absolute top-3 left-3 flex gap-2">
        <span v-if="product.isNew" class="bg-teal-500 text-black text-xs font-bold px-2 py-1 rounded">NEW</span>
        <span v-if="product.discount" class="bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">-{{ product.discount }}%</span>
      </div>
      
      <!-- Wishlist Button -->
      <button 
        @click="$emit('toggle-wishlist', product)" 
        class="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
        :aria-label="`${product.isWishlisted ? 'Remove from' : 'Add to'} wishlist`"
      >
        <i 
          :class="[
            'fas fa-heart',
            product.isWishlisted ? 'text-red-500' : 'text-gray-400'
          ]"
        ></i>
      </button>
    </div>
    
    <!-- Product Info -->
    <div class="p-4">
      <div class="flex justify-between items-start">
        <div>
          <h3 class="font-medium text-gray-900 line-clamp-1">{{ product.name }}</h3>
          <p class="text-sm text-gray-500 mt-1">{{ product.category }}</p>
          
          <div class="mt-2 flex items-center gap-2">
            <span class="font-semibold text-gray-900">ETB {{ formatPrice(product.price) }}</span>
            <span v-if="product.originalPrice" class="text-xs text-gray-400 line-through">
              ETB {{ formatPrice(product.originalPrice) }}
            </span>
          </div>
        </div>
        
        <!-- Color Swatches -->
        <div v-if="product.colors && product.colors.length > 0" class="flex -space-x-2">
          <span 
            v-for="(color, index) in product.colors.slice(0, 3)" 
            :key="index"
            class="w-4 h-4 rounded-full border border-gray-200"
            :style="{ backgroundColor: color }"
            :title="`Color: ${color}`"
          ></span>
          <span 
            v-if="product.colors.length > 3" 
            class="w-4 h-4 rounded-full bg-gray-100 text-xs flex items-center justify-center text-gray-500"
            :title="`+${product.colors.length - 3} more colors`"
          >
            +{{ product.colors.length - 3 }}
          </span>
        </div>
      </div>
      
      <!-- Add to Cart Button -->
      <button 
        @click="$emit('add-to-cart', product)"
        class="mt-4 w-full bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
      >
        <i class="fas fa-shopping-cart"></i>
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      id: null,
      name: '',
      image: '',
      price: 0,
      originalPrice: null,
      category: '',
      colors: [],
      isNew: false,
      discount: null,
      isWishlisted: false
    })
  },
  aosEffect: {
    type: String,
    default: 'fade-up'
  },
  aosDelay: {
    type: String,
    default: '0'
  }
});

const emit = defineEmits(['add-to-cart', 'toggle-wishlist']);

const formatPrice = (price) => {
  return new Intl.NumberFormat('en-ET', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price);
};
</script>
