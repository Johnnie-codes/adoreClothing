<template>
  <div class="product-list max-w-7xl mx-auto px-4 sm:px-6 py-8 w-full">
    <!-- Header -->
    <div class="mb-8 text-center" v-if="showHeader" data-aos="fade-up">
      <div 
        v-if="subtitle"
        class="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
      >
        {{ subtitle }}
      </div>
      <h2 v-if="title" class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">
        {{ title }}
      </h2>
      <p v-if="description" class="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>

    <!-- Filters -->
    <div 
      v-if="showFilters" 
      class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6"
      data-aos="fade-up"
    >
      <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
        <button 
          v-for="category in categories" 
          :key="category" 
          @click="setActiveCategory(category)" 
          :class="[
            'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all', 
            activeCategory === category 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          ]"
        >
          {{ category }}
        </button>
      </div>
      
      <div class="flex items-center gap-2 w-full sm:w-auto">
        <div class="relative">
          <select 
            v-model="sortBy"
            class="bg-gray-50 border border-gray-200 rounded-lg pl-3 pr-8 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
            aria-label="Sort products"
          >
            <option value="Featured">Featured</option>
            <option value="PriceAsc">Price: Low to High</option>
            <option value="PriceDesc">Price: High to Low</option>
            <option value="Rating">Rating</option>
          </select>
          <i class="fas fa-sort absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"></i>
        </div>
        <div class="relative w-full sm:w-64 md:w-80">
          <input 
            v-model="searchQuery" 
            type="text" 
            :placeholder="searchPlaceholder || 'Search products...'" 
            class="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
          />
          <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="loading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <div v-for="n in 4" :key="n" class="bg-white rounded-xl p-4 animate-pulse">
        <div class="bg-gray-200 h-64 rounded-lg mb-4"></div>
        <div class="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div class="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>
    </div>

    <!-- Empty State -->
    <div 
      v-else-if="filteredProducts.length === 0" 
      class="text-center py-12"
      data-aos="fade-up"
    >
      <i class="fas fa-search text-4xl text-gray-300 mb-4"></i>
      <h3 class="text-lg font-medium text-gray-900 mb-1">No products found</h3>
      <p class="text-gray-500">Try adjusting your search or filter to find what you're looking for.</p>
      <button 
        v-if="showResetButton"
        @click="resetFilters"
        class="mt-4 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-sm font-medium transition-colors"
      >
        Reset Filters
      </button>
    </div>

    <!-- Products Grid -->
    <div 
      v-else
      :class="[
        'grid gap-4 sm:gap-5 md:gap-6 w-full',
        gridColumns
      ]"
    >
      <ProductCard
        v-for="(product, index) in paginatedProducts"
        :key="product.id || index"
        :product="product"
        :aos-effect="'fade-up'"
        :aos-delay="(index % 4) * 100"
        @add-to-cart="$emit('add-to-cart', $event)"
        @toggle-wishlist="$emit('toggle-wishlist', $event)"
      />
    </div>

    <!-- Pagination -->
    <div 
      v-if="showPagination && totalPages > 1" 
      class="mt-10 flex justify-center"
      data-aos="fade-up"
    >
      <div class="flex items-center gap-1">
        <button 
          @click="currentPage--"
          :disabled="currentPage === 1"
          class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <button 
          v-for="page in visiblePages"
          :key="page"
          @click="currentPage = page"
          :class="[
            'w-10 h-10 rounded-lg flex items-center justify-center',
            currentPage === page 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-700 hover:bg-gray-100'
          ]"
        >
          {{ page }}
        </button>
        
        <button 
          @click="currentPage++"
          :disabled="currentPage === totalPages"
          class="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import ProductCard from './ProductCard.vue';

const props = defineProps({
  products: {
    type: Array,
    required: true,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  categories: {
    type: Array,
    default: () => ['All', 'New Arrivals', 'Bestsellers', 'On Sale']
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  showFilters: {
    type: Boolean,
    default: true
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  itemsPerPage: {
    type: Number,
    default: 8
  },
  searchPlaceholder: {
    type: String,
    default: ''
  },
  gridColumns: {
    type: String,
    default: 'grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['add-to-cart', 'toggle-wishlist']);

// State
const searchQuery = ref('');
const activeCategory = ref('All');
const currentPage = ref(1);
const sortBy = ref('Featured'); // Featured | PriceAsc | PriceDesc | Rating

// Helpers
const isOnSale = (p) => {
  const hasCompare = p.compareAt && Number(p.compareAt) > Number(p.price || 0);
  const tagSale = Array.isArray(p.tags) && (p.tags.includes('Sale') || p.tags.includes('On Sale'));
  return Boolean(p.discount) || hasCompare || tagSale;
};
const isNew = (p) => Boolean(p.isNew) || (Array.isArray(p.tags) && p.tags.includes('New'));
const isBestseller = (p) => Boolean(p.isBestseller) || (Array.isArray(p.tags) && (p.tags.includes('Bestseller') || p.tags.includes('Best Seller')));
const isTrending = (p) => Array.isArray(p.tags) && p.tags.includes('Trending');

// Computed
const filteredProducts = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  return props.products.filter((product) => {
    const name = (product.name || '').toLowerCase();
    const cat = (product.category || '').toLowerCase();
    const tags = Array.isArray(product.tags) ? product.tags.join(' ').toLowerCase() : '';

    const matchesSearch = q === '' || name.includes(q) || cat.includes(q) || tags.includes(q);

    const catVal = activeCategory.value;
    const matchesCategory = (
      catVal === 'All' ||
      catVal === '' ||
      (['New Arrivals', 'New'].includes(catVal) && isNew(product)) ||
      (['On Sale', 'Sale'].includes(catVal) && isOnSale(product)) ||
      (['Bestsellers', 'Bestseller'].includes(catVal) && isBestseller(product)) ||
      (catVal === 'Trending' && isTrending(product)) ||
      product.category === catVal
    );

    return matchesSearch && matchesCategory;
  });
});

const sortedProducts = computed(() => {
  const arr = [...filteredProducts.value];
  switch (sortBy.value) {
    case 'PriceAsc':
      return arr.sort((a, b) => Number(a.price || 0) - Number(b.price || 0));
    case 'PriceDesc':
      return arr.sort((a, b) => Number(b.price || 0) - Number(a.price || 0));
    case 'Rating':
      return arr.sort((a, b) => Number(b.rating || 0) - Number(a.rating || 0));
    default:
      return arr; // Featured: keep original order
  }
});

const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / props.itemsPerPage);
});

const paginatedProducts = computed(() => {
  const source = sortedProducts.value;
  if (!props.showPagination) return source;
  const start = (currentPage.value - 1) * props.itemsPerPage;
  const end = start + props.itemsPerPage;
  return source.slice(start, end);
});

const visiblePages = computed(() => {
  const pages = [];
  const maxVisiblePages = 5;
  
  if (totalPages.value <= maxVisiblePages) {
    for (let i = 1; i <= totalPages.value; i++) {
      pages.push(i);
    }
  } else {
    let startPage = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2));
    let endPage = startPage + maxVisiblePages - 1;
    
    if (endPage > totalPages.value) {
      endPage = totalPages.value;
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
  }
  
  return pages;
});

const showResetButton = computed(() => {
  return Boolean(searchQuery.value) || activeCategory.value !== 'All' || sortBy.value !== 'Featured';
});

// Methods
const setActiveCategory = (category) => {
  activeCategory.value = category;
  currentPage.value = 1;
};

const resetFilters = () => {
  searchQuery.value = '';
  activeCategory.value = 'All';
  sortBy.value = 'Featured';
  currentPage.value = 1;
};

// Watchers
watch(() => props.products, () => {
  currentPage.value = 1;
});

watch(totalPages, (newTotal) => {
  if (currentPage.value > newTotal && newTotal > 0) {
    currentPage.value = newTotal;
  } else if (newTotal === 0) {
    currentPage.value = 1;
  }
});
</script>
