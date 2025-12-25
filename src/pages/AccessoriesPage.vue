<template>
  <div class="min-h-screen bg-gray-900 text-gray-100">
    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between h-20">
          <router-link to="/" class="text-2xl font-bold text-gray-900 dark:text-white">ADORE</router-link>
          <div class="hidden md:flex items-center space-x-8">
            <router-link to="/" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Home</router-link>
            <router-link to="/shoes" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Shoes</router-link>
            <router-link to="/trousers" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Trousers</router-link>
            <router-link to="/t-shirts" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">T-Shirts</router-link>
            <router-link to="/hoodies" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Hoodies</router-link>
            <router-link to="/accessories" class="text-pink-500 font-medium hover:text-pink-600 dark:text-pink-400 dark:hover:text-pink-300 transition-colors">Accessories</router-link>
            <button @click="toggleTheme" class="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
              <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
            </button>
          </div>
          <div class="md:hidden flex items-center space-x-4">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800">
        <div class="px-6 py-4 space-y-4">
          <router-link to="/" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Home</router-link>
          <router-link to="/shoes" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Shoes</router-link>
          <router-link to="/trousers" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Trousers</router-link>
          <router-link to="/t-shirts" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">T-Shirts</router-link>
          <router-link to="/hoodies" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Hoodies</router-link>
          <router-link to="/accessories" class="block text-pink-500 font-medium py-2">Accessories</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-white mb-6">Accessories</h1>
        <p class="text-xl text-gray-300 max-w-3xl mx-auto">Dial in the details. Caps, jewelry, and sunglasses to finish every fit.</p>
      </div>

      <!-- Accessory Categories -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div class="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer">
          <div class="bg-gray-700/50 rounded-lg p-4 mb-4">
            <i class="fas fa-sun text-4xl text-pink-500"></i>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Sunglasses</h3>
          <p class="text-gray-400">UV-protected lenses with modern frames for any style.</p>
        </div>
        <div class="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer">
          <div class="bg-gray-700/50 rounded-lg p-4 mb-4">
            <i class="fas fa-hat-cowboy text-4xl text-pink-500"></i>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Caps & Beanies</h3>
          <p class="text-gray-400">Top off your look with seasonal headwear.</p>
        </div>
        <div class="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/80 transition-all duration-300 cursor-pointer">
          <div class="bg-gray-700/50 rounded-lg p-4 mb-4">
            <i class="fas fa-link text-4xl text-pink-500"></i>
          </div>
          <h3 class="text-xl font-semibold text-white mb-2">Jewelry</h3>
          <p class="text-gray-400">Chains, rings, and earrings to elevate your fit.</p>
        </div>
      </div>

      <!-- Featured Accessories -->
      <div class="mb-16">
        <h2 class="text-3xl font-bold text-white mb-8">Featured Accessories</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
            <div class="relative overflow-hidden h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <img src="/adore pics/glass1.jpg" alt="Sunglasses" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold text-white">Polarized Shades</h3>
                <span class="text-pink-500 font-bold">ETB 349.00</span>
              </div>
              <p class="text-gray-400 text-sm mb-4">Anti-glare lenses with lightweight frame</p>
              <button class="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition-colors">Add to Cart</button>
            </div>
          </div>

          <div class="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
            <div class="relative overflow-hidden h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <img src="/adore pics/sweater.jpg" alt="Beanie" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full">SALE</div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold text-white">Ribbed Beanie</h3>
                <div>
                  <span class="text-gray-400 line-through text-sm mr-2">ETB 499.00</span>
                  <span class="text-pink-500 font-bold">ETB 399.00</span>
                </div>
              </div>
              <p class="text-gray-400 text-sm mb-4">Soft knit with minimal branding</p>
              <button class="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition-colors">Add to Cart</button>
            </div>
          </div>

          <div class="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-300">
            <div class="relative overflow-hidden h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <img src="/adore pics/hoodie2.jpg" alt="Chain Necklace" class="w-full h-full object-cover hover:scale-105 transition-transform duration-500">
              <div class="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">NEW</div>
            </div>
            <div class="p-6">
              <div class="flex justify-between items-start mb-2">
                <h3 class="text-lg font-semibold text-white">Layered Chain Necklace</h3>
                <span class="text-pink-500 font-bold">ETB 549.00</span>
              </div>
              <p class="text-gray-400 text-sm mb-4">Stainless steel with adjustable length</p>
              <button class="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-medium transition-colors">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Why Accessories Matter -->
      <div class="bg-gradient-to-r from-pink-900/30 to-purple-900/30 rounded-2xl p-8 md:p-12 mb-16">
        <div class="max-w-4xl mx-auto text-center">
          <h2 class="text-3xl font-bold text-white mb-6">Finish The Look</h2>
          <p class="text-gray-300 mb-8 text-lg">Small details, big impact. Elevate any outfit with the right accent.</p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div class="w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-gem text-2xl text-pink-400"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">Premium Materials</h3>
              <p class="text-gray-400">Quality metals and fabrics built to last.</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div class="w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-swatchbook text-2xl text-pink-400"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">Versatile Styles</h3>
              <p class="text-gray-400">From minimal to bold, tailor to your vibe.</p>
            </div>
            <div class="bg-white/5 p-6 rounded-xl backdrop-blur-sm">
              <div class="w-14 h-14 bg-pink-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <i class="fas fa-infinity text-2xl text-pink-400"></i>
              </div>
              <h3 class="text-xl font-semibold text-white mb-2">Mix & Match</h3>
              <p class="text-gray-400">Layer pieces for a unique personalized look.</p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-black/80 text-gray-400 py-12 border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="mb-6 md:mb-0">
            <span class="text-2xl font-bold text-white">ADORE</span>
            <p class="mt-2 text-sm">Complete your look with premium accessories</p>
          </div>
          <div class="flex space-x-6">
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-facebook-f"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-twitter"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-gray-400 hover:text-white"><i class="fab fa-pinterest"></i></a>
          </div>
        </div>
        <div class="border-t border-gray-800 mt-8 pt-8 text-sm">
          <p>&copy; 2025 Adore Accessories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isMobileMenuOpen = ref(false);
const theme = ref('dark');

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  if (theme.value === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

onMounted(() => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark');
    theme.value = 'dark';
  } else {
    document.documentElement.classList.remove('dark');
    theme.value = 'light';
  }
});
</script>

<style scoped>
.router-link-active {
  color: #ec4899;
  font-weight: 500;
}
</style>
