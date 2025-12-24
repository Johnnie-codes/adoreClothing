<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <!-- Loading Screen -->
    <div v-if="showLoadingScreen" class="fixed inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center z-[9999]">
      <div class="text-center">
        <div class="text-7xl font-black mb-4 text-white tracking-tight">ADORE</div>
        <div class="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <p class="text-xl text-gray-400 tracking-widest font-light">LOADING COLLECTION</p>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed w-full z-50 bg-white shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex items-center justify-between h-16 sm:h-20">
          <!-- Logo -->
          <a href="#" class="text-xl sm:text-2xl font-bold text-gray-900">ADORE</a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#" class="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">Home</a>
            <a href="#collection" class="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">Collection</a>
            <a href="#products" class="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">Products</a>
            <a href="#features" class="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">Features</a>
            <a href="#reviews" class="text-sm sm:text-base text-gray-700 hover:text-gray-900 transition-colors">Reviews</a>
            <button @click="toggleTheme" class="p-2 rounded-full text-gray-700 hover:bg-gray-100">
              <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'" class="text-sm sm:text-base"></i>
            </button>
            <a href="#contact" class="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-colors whitespace-nowrap">Contact</a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="flex md:hidden">
            <button 
              type="button" 
              @click="toggleMobileMenu"
              class="text-gray-500 hover:text-gray-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <i :class="isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'" class="text-2xl"></i>
            </button>
          </div>
        </div>
        
        <!-- Mobile Menu -->
        <div v-if="isMobileMenuOpen" class="md:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800">
          <div class="px-6 py-4 space-y-4">
            <a href="#" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Home</a>
            <a href="#collection" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Collection</a>
            <a href="#products" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Products</a>
            <a href="#features" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Features</a>
            <a href="#reviews" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Reviews</a>
            <div class="pt-2">
              <a href="#contact" class="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-center transition-colors">Contact</a>
            </div>
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden bg-white/95 dark:bg-gray-900/95 border-t border-gray-200 dark:border-gray-800">
        <div class="px-6 py-4 space-y-4">
          <a href="#" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Home</a>
          <a href="#collection" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Collection</a>
          <a href="#products" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Products</a>
          <a href="#features" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Features</a>
          <a href="#reviews" class="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white py-2">Reviews</a>
          <div class="pt-2">
            <a href="#contact" class="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-center transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden border-b border-gray-200">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-10 sm:top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-20 sm:top-40 right-4 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <!-- Hero Content -->
          <div data-aos="fade-up" class="text-center lg:text-left">
            <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 shadow-sm text-sm sm:text-base">
              <i class="fas fa-bolt"></i>
              <span class="font-semibold">NEW DROP JUST LANDED</span>
            </div>

            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Fast Fashion for <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Every Mood</span>
            </h1>

            <p class="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Discover on-trend pieces with premium feel at everyday prices. Weekly drops. Limited runs. Don't miss the heat.
            </p>

            <!-- Stats -->
            <div class="flex flex-wrap gap-6 sm:gap-8 mb-6 sm:mb-8 justify-center lg:justify-start">
              <div class="text-center">
                <div class="text-3xl sm:text-4xl font-bold text-pink-500">ETB 1,500+</div>
                <div class="text-gray-500 text-xs sm:text-sm">Free Shipping</div>
              </div>
              <div class="text-center">
                <div class="text-3xl sm:text-4xl font-bold text-pink-500">Weekly</div>
                <div class="text-gray-500 text-xs sm:text-sm">New Drops</div>
              </div>
              <div class="text-center">
                <div class="text-3xl sm:text-4xl font-bold text-pink-500">30 Days</div>
                <div class="text-gray-500 text-xs sm:text-sm">Free Returns</div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <button @click="scrollToSection('products')" class="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base">
                <i class="fas fa-bag-shopping"></i>
                <span class="whitespace-nowrap">Shop Now</span>
              </button>
              <button @click="scrollToSection('collection')" class="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition-all flex items-center gap-2 text-sm sm:text-base">
                <i class="fas fa-compass"></i>
                <span class="whitespace-nowrap">Explore</span>
              </button>
            </div>
          </div>

          <!-- Hero Visual - Featured Product Card -->
          <div data-aos="fade-left" class="relative">
            <div class="bg-gradient-to-b from-gray-900 to-black rounded-2xl shadow-2xl p-6 animate-float overflow-hidden dark:bg-gradient-to-b dark:from-gray-900 dark:to-black">
              <div class="relative h-64 w-full rounded-xl overflow-hidden">
                <img :src="featuredProduct.image" :alt="featuredProduct.name" class="w-full h-full object-cover" />
                <div class="absolute top-4 left-4 flex gap-2">
                  <span class="bg-teal-500 text-black text-xs font-bold px-2 py-1 rounded">NEW</span>
                  <span v-if="featuredProduct.compareAt" class="bg-teal-500 text-black text-xs font-bold px-2 py-1 rounded">-{{ discountPercent(featuredProduct) }}%</span>
                </div>
              </div>
              <div class="mt-4">
                <div class="flex items-start justify-between gap-4">
                  <div>
                    <h3 class="text-xl font-semibold">{{ featuredProduct.name }}</h3>
                    <div class="flex items-center gap-2 mt-1">
                      <span class="text-teal-500 font-bold">ETB {{ formatPrice(featuredProduct.price) }}</span>
                      <span v-if="featuredProduct.compareAt" class="text-gray-400 line-through text-sm">ETB {{ formatPrice(featuredProduct.compareAt) }}</span>
                    </div>
                  </div>
                  <button @click="toggleWishlist(featuredProduct)" class="p-2 rounded-lg hover:bg-white/5">
                    <i :class="['fas', featuredProduct.__wish ? 'fa-heart text-teal-500' : 'fa-heart text-gray-400']"></i>
                  </button>
                </div>
                <div class="flex items-center gap-2 mt-3">
                  <span v-for="(c, idx) in featuredProduct.colors" :key="idx" class="w-5 h-5 rounded-full border border-white/20" :style="{ background: c }"></span>
                </div>
                <div class="mt-4 flex gap-3">
                  <button @click="addToCart(featuredProduct)" class="flex-1 bg-teal-500 text-black py-2 rounded-lg font-semibold hover:opacity-90 transition">Add to Bag</button>
                  <button @click="scrollToSection('products')" class="px-4 py-2 rounded-lg border border-white/10 hover:bg-white/5 transition">Shop</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Collection Section -->
    <section id="collection" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">New Collection</div>
          <h2 class="text-5xl font-extrabold text-white mb-4">Streetwear Essentials 2025</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">Curated silhouettes, premium fabrics, bold fits. Built for everyday motion. Designed to turn heads.</p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div data-aos="fade-right" class="relative h-80 rounded-2xl overflow-hidden group">
            <img src="/adore pics/hoodie.jpg" alt="Streetwear Collection" class="w-full h-full object-cover group-hover:scale-105 transition" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-6 left-6">
              <div class="text-sm text-blue-600 font-semibold">Trending</div>
              <div class="text-3xl font-bold">Streetwear Drop</div>
              <button @click="scrollToSection('products')" class="mt-4 px-5 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90">Shop Now</button>
            </div>
          </div>
          <div data-aos="fade-left" class="relative h-80 rounded-2xl overflow-hidden group">
            <img src="/adore pics/hoodie2.jpg" alt="Essentials Collection" class="w-full h-full object-cover group-hover:scale-105 transition" />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div class="absolute bottom-6 left-6">
              <div class="text-sm text-blue-600 font-semibold">Best Seller</div>
              <div class="text-3xl font-bold">Everyday Essentials</div>
              <button @click="scrollToSection('products')" class="mt-4 px-5 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-8 sm:mb-10" data-aos="fade-up">
          <div class="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Shop the Drop</div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">New Arrivals</h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">Fresh fits dropping weekly. Limited stock — grab yours now.</p>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-6">
          <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
            <button 
              v-for="tab in tabs" 
              :key="tab" 
              @click="setTab(tab)" 
              :class="[
                'px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-all', 
                activeTab === tab 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
            >
              {{ tab }}
            </button>
          </div>
          <div class="relative w-full sm:w-64 md:w-80">
            <input 
              v-model="searchQuery" 
              type="text" 
              placeholder="Search products..." 
              class="w-full bg-gray-50 border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
            />
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>
          </div>
        </div>

        <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          <div 
            v-for="product in filteredProducts" 
            :key="product.id" 
            data-aos="fade-up" 
            class="bg-white border border-gray-100 rounded-xl overflow-hidden group hover:shadow-md transition-shadow"
          >
            <div class="relative aspect-[3/4] overflow-hidden">
              <img 
                :src="product.image" 
                :alt="product.name" 
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
              />
              <!-- Badges -->
              <div class="absolute top-3 left-3 flex flex-col gap-1.5">
                <span 
                  v-if="product.tags?.includes('New')" 
                  class="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded whitespace-nowrap"
                >
                  NEW
                </span>
                <span 
                  v-if="product.compareAt" 
                  class="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded whitespace-nowrap"
                >
                  -{{ discountPercent(product) }}% OFF
                </span>
              </div>
              
              <!-- Wishlist Button -->
              <button 
                @click="toggleWishlist(product)" 
                class="absolute top-3 right-3 p-2 rounded-full bg-white/90 hover:bg-white transition-colors shadow-sm"
                aria-label="Add to wishlist"
              >
                <i :class="[
                  'fas', 
                  product.__wish 
                    ? 'fa-heart text-red-500' 
                    : 'fa-heart text-gray-400 hover:text-red-500'
                ]"></i>
              </button>
              
              <!-- Quick Add Button -->
              <div class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <button 
                  @click="addToCart(product)" 
                  class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg font-semibold transition-colors text-sm sm:text-base flex items-center justify-center gap-2"
                >
                  <i class="fas fa-shopping-bag"></i>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
            
            <!-- Product Info -->
            <div class="p-3 sm:p-4">
              <div class="flex items-start justify-between gap-2">
                <h3 class="font-medium text-gray-900 text-sm sm:text-base line-clamp-2">
                  {{ product.name }}
                </h3>
                <div class="flex items-center gap-1 text-xs sm:text-sm text-amber-500 bg-amber-50 px-1.5 py-0.5 rounded">
                  <i class="fas fa-star"></i>
                  <span>{{ product.rating }}</span>
                </div>
              </div>
              
              <div class="mt-2 flex items-center gap-2">
                <span class="text-gray-900 font-bold text-sm sm:text-base">
                  ETB {{ formatPrice(product.price) }}
                </span>
                <span 
                  v-if="product.compareAt" 
                  class="text-gray-400 line-through text-xs sm:text-sm"
                >
                  ETB {{ formatPrice(product.compareAt) }}
                </span>
              </div>
              
              <div class="mt-3 flex items-center gap-1.5 flex-wrap">
                <span 
                  v-for="(c, idx) in product.colors" 
                  :key="idx" 
                  class="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border border-gray-200" 
                  :style="{ backgroundColor: c }"
                  :title="'Color ' + (idx + 1)"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-12 sm:py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-12 md:mb-16" data-aos="fade-up">
          <div class="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">Why Shop With Us</div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">Built For Speed & Style</h2>
          <p class="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">Seamless experience from browse to bag to doorstep.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          <div 
            class="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 text-center hover:shadow-md transition-shadow" 
            data-aos="fade-up"
          >
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i class="fas fa-truck-fast text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Free Shipping</h3>
            <p class="text-sm sm:text-base text-gray-600">Orders over ETB 1,500 ship free nationwide.</p>
          </div>
          
          <div 
            class="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 text-center hover:shadow-md transition-shadow" 
            data-aos="fade-up" 
            data-aos-delay="100"
          >
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i class="fas fa-rotate-left text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Easy Returns</h3>
            <p class="text-sm sm:text-base text-gray-600">30-day hassle-free returns on all items.</p>
          </div>
          
          <div 
            class="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 text-center hover:shadow-md transition-shadow" 
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i class="fas fa-lock text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">Secure Checkout</h3>
            <p class="text-sm sm:text-base text-gray-600">Encrypted payments and trusted gateways.</p>
          </div>
          
          <div 
            class="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 text-center hover:shadow-md transition-shadow" 
            data-aos="fade-up" 
            data-aos-delay="300"
          >
            <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <i class="fas fa-headset text-lg sm:text-xl"></i>
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p class="text-sm sm:text-base text-gray-600">We're here anytime you need us.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section id="reviews" class="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-12 md:mb-16" data-aos="fade-up">
          <div class="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">TESTIMONIALS</div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">Voices of Adore</h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Real experiences from our valued customers</p>
        </div>

        <!-- Reviews Summary -->
        <div data-aos="fade-up" class="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-10 sm:mb-12">
          <div class="flex items-center gap-2 text-sm sm:text-base text-gray-700">
            <div class="flex items-center gap-1">
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star-half-alt text-amber-400"></i>
            </div>
            <span class="font-medium">4.7 / 5.0</span>
          </div>
          <div class="hidden sm:block w-px h-6 bg-gray-200"></div>
          <div class="text-sm sm:text-base text-gray-600">
            <i class="fas fa-check-circle text-green-500 mr-1"></i>
            Verified buyers only
          </div>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-10 sm:mb-12">
          <div 
            v-for="review in filteredReviews" 
            :key="review.id" 
            data-aos="fade-up"
            class="bg-white border border-gray-100 rounded-xl p-5 sm:p-6 hover:shadow-md transition-shadow"
          >
            <div class="flex items-center gap-2 mb-3">
              <div class="flex">
                <i 
                  v-for="n in 5" 
                  :key="n" 
                  class="fas text-sm sm:text-base" 
                  :class="{
                    'fa-star text-amber-400': n <= Math.round(review.rating), 
                    'fa-star-half-alt text-amber-400': n - 0.5 === review.rating,
                    'fa-star text-gray-200': n > Math.ceil(review.rating)
                  }"
                ></i>
              </div>
              <span class="text-xs sm:text-sm text-gray-500">{{ review.rating.toFixed(1) }}</span>
            </div>
            
            <p class="text-sm sm:text-base text-gray-600 line-clamp-3 mb-4">"{{ review.comment }}"</p>
            
            <div class="flex items-center justify-between pt-3 border-t border-gray-100">
              <div class="flex items-center gap-2 sm:gap-3">
                <img 
                  :src="review.avatar" 
                  :alt="review.user" 
                  class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border-2 border-white shadow-sm" 
                />
                <div>
                  <div class="text-sm sm:text-base font-medium text-gray-900">{{ review.user }}</div>
                  <div class="text-xs text-gray-500">{{ formatDate(review.date) }}</div>
                </div>
              </div>
              <div class="text-xs text-gray-500 hidden sm:block">on {{ review.product }}</div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button 
            class="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200"
            @click="loadMoreReviews"
          >
            <i class="fas fa-plus text-sm"></i>
            <span>Load More Reviews</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="relative py-12 sm:py-16 lg:py-20 bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="text-center mb-10 sm:mb-12 md:mb-16" data-aos="fade-up">
          <div class="inline-block bg-blue-100 text-blue-600 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">GET IN TOUCH</div>
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4">We'd Love to Hear From You</h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">Our team is here to help with any questions about our products or services.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Contact Info -->
          <div data-aos="fade-right" class="space-y-6 lg:col-span-1">
            <div class="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100">
              <h3 class="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <p class="text-gray-600 mb-6">
                Have questions or need assistance? We're here to help you with anything you need.
              </p>
              
              <div class="space-y-5">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                    <i class="fas fa-map-marker-alt"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-500 mb-1">Our Location</h4>
                    <p class="text-gray-900">123 Fashion Street, Addis Ababa, Ethiopia</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                    <i class="fas fa-phone-alt"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-500 mb-1">Phone Number</h4>
                    <p class="text-gray-900">+251 911 123 456</p>
                    <p class="text-gray-900">+251 911 789 012</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h4 class="text-sm font-medium text-gray-500 mb-1">Email Address</h4>
                    <p class="text-gray-900">hello@adore.com</p>
                    <p class="text-gray-900">support@adore.com</p>
                  </div>
                </div>
              </div>
              
              <div class="pt-6 mt-6 border-t border-gray-100">
                <h4 class="text-sm font-medium text-gray-500 mb-3">Business Hours</h4>
                <ul class="space-y-2">
                  <li class="flex justify-between text-sm">
                    <span class="text-gray-600">Monday - Friday</span>
                    <span class="font-medium text-gray-900">9:00 AM - 9:00 PM</span>
                  </li>
                  <li class="flex justify-between text-sm">
                    <span class="text-gray-600">Saturday - Sunday</span>
                    <span class="font-medium text-gray-900">10:00 AM - 7:00 PM</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl p-6 text-white">
              <h4 class="font-bold text-lg mb-3">Need help right away?</h4>
              <p class="text-blue-100 text-sm mb-4">Our customer support team is available 24/7 to assist you with any questions.</p>
              <a href="tel:+251911123456" class="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2.5 rounded-lg font-medium transition-colors">
                <i class="fas fa-phone-alt"></i>
                <span>Call Us Now</span>
              </a>
            </div>
          </div>

          <!-- Contact Form -->
          <div data-aos="fade-left" class="lg:col-span-2">
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
              <p class="text-gray-600 mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
              
              <form class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label for="first-name" class="block text-sm font-medium text-gray-700">First Name <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="first-name" 
                      required
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Your first name"
                    />
                  </div>
                  
                  <div class="space-y-1.5">
                    <label for="last-name" class="block text-sm font-medium text-gray-700">Last Name <span class="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      id="last-name" 
                      required
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label for="email" class="block text-sm font-medium text-gray-700">Email Address <span class="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div class="space-y-1.5">
                    <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all" 
                      placeholder="+251 911 123 456"
                    />
                  </div>
                </div>
                
                <div class="space-y-1.5">
                  <label for="subject" class="block text-sm font-medium text-gray-700">Subject <span class="text-red-500">*</span></label>
                  <select 
                    id="subject" 
                    required
                    class="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjdjEwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im03IDE1IDUgNSA1LTUiLz48cGF0aCBkPSJNMTIgMjBWNyIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_1rem_center] bg-[length:1.25em_1.25em] hover:border-gray-300 transition-colors"
                  >
                    <option value="" disabled selected>Select a subject</option>
                    <option value="order">Order Status</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="product">Product Information</option>
                    <option value="shipping">Shipping & Delivery</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                
                <div class="space-y-1.5">
                  <label for="message" class="block text-sm font-medium text-gray-700">Your Message <span class="text-red-500">*</span></label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    required
                    class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none" 
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <div class="pt-2">
                  <button 
                    type="submit" 
                    class="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Message</span>
                    <i class="fas fa-paper-plane text-sm transition-transform group-hover:translate-x-1"></i>
                  </button>
                </div>
              </form>
            </div>
            
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="#" class="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 transition-colors">
                <i class="fab fa-facebook-messenger text-blue-500 text-xl"></i>
                <span class="text-sm font-medium text-gray-700">Live Chat</span>
              </a>
              <a href="https://wa.me/251911123456" target="_blank" class="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 transition-colors">
                <i class="fab fa-whatsapp text-green-500 text-xl"></i>
                <span class="text-sm font-medium text-gray-700">WhatsApp</span>
              </a>
              <a href="mailto:support@adore.com" class="flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg p-3 sm:p-4 transition-colors">
                <i class="fas fa-envelope text-gray-500 text-xl"></i>
                <span class="text-sm font-medium text-gray-700">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-black text-gray-400 py-12 border-t border-gray-800 dark:bg-black dark:text-gray-400 dark:border-gray-800">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="text-sm tracking-wider">
          &copy; 2024 Adore Fashion. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

const showLoadingScreen = ref(true);

const theme = ref(localStorage.getItem('theme') || 'dark');

watch(theme, (newTheme) => {
  localStorage.setItem('theme', newTheme);
  if (newTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, { immediate: true });

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
};

const values = [
  { letter: 'S', title: 'Sincerity', icon: 'fa-handshake', delay: '0' },
  { letter: 'E', title: 'Excellence', icon: 'fa-trophy', delay: '100' },
  { letter: 'B', title: 'Bravery', icon: 'fa-shield-alt', delay: '200' },
  { letter: 'N', title: 'Neutrality', icon: 'fa-balance-scale', delay: '300' },
  { letter: 'A', title: 'Adaptability', icon: 'fa-sync-alt', delay: '400' },
];

// (removed legacy services data)

// (removed legacy metrics data)

const banks = [
  {
    image: '/search_images/oMF3X7wxIJ0X.jpg',
    name: 'Commercial Bank of Ethiopia',
    desc: 'Ethiopia\'s largest bank with nationwide coverage and digital banking solutions.',
    features: ['Mobile Banking', 'Online Transfer', '24/7 Support'],
    delay: '100',
  },
  {
    image: '/search_images/vCjGSjoXohCH.png',
    name: 'Dashen Bank',
    desc: 'Leading private bank known for innovation and customer service excellence.',
    features: ['Digital Wallet', 'Quick Transfer', 'Investment Advisory'],
    delay: '200',
  },
  {
    image: '/search_images/yWqmB1gqtEEQ.jpg',
    name: 'Awash Bank',
    desc: 'Pioneering private bank with comprehensive financial services and modern technology.',
    features: ['Internet Banking', 'SMS Banking', 'Corporate Services'],
    delay: '300',
  },
  {
    image: '/search_images/GE0ArumTXX7m.png',
    name: 'NIB International Bank',
    desc: 'International banking services with focus on trade finance and foreign exchange.',
    features: ['Foreign Exchange', 'Trade Finance', 'International Transfer'],
    delay: '400',
  },
];

// (removed legacy news data)

const contactInfo = [
  { icon: 'fa-map-marker-alt', title: 'Visit Our Store', content: '123 Fashion Avenue\nNew York, NY 10001' },
  { icon: 'fa-phone', title: 'Call Us', content: '+1 (555) 123-4567\n+1 (555) 987-6543' },
  { icon: 'fa-envelope', title: 'Email Us', content: 'info@adorefashion.com\nsupport@adorefashion.com' },
  { icon: 'fa-clock', title: 'Store Hours', content: 'Monday - Friday: 10:00 AM - 8:00 PM\nSaturday - Sunday: 11:00 AM - 7:00 PM' },
];

// UI State
const isMobileMenuOpen = ref(false);

// Fast-fashion shop state
const cartCount = ref(0);
const wishlistCount = ref(0);

// Format date for reviews
const formatDate = (dateString) => {
  if (!dateString) return '';
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const tabs = ['All', 'Men', 'Women', 'Unisex', 'Sale'];
const activeTab = ref('All');
const searchQuery = ref('');

const products = ref([
  { id: 1, name: 'Oversized Graphic Tee', price: 899.0, compareAt: 1099.0, image: '/adore pics/tshirt.jpg', colors: ['#111827', '#F3F4F6'], tags: ['New'], rating: 4.6, category: 'Unisex' },
  { id: 2, name: 'Utility Cargo Pants', price: 1799.0, compareAt: 0, image: '/adore pics/womentrouser.jpg', colors: ['#374151', '#111827'], tags: ['Trending'], rating: 4.8, category: 'Men' },
  { id: 3, name: 'Ribbed Knit Dress', price: 1599.0, compareAt: 1899.0, image: '/adore pics/tshirt3.jpg', colors: ['#F472B6', '#111827'], tags: ['New'], rating: 4.7, category: 'Women' },
  { id: 4, name: 'Puffer Jacket Lite', price: 2499.0, compareAt: 2999.0, image: '/adore pics/hoodie3.jpg', colors: ['#111827', '#6B7280'], tags: ['Sale'], rating: 4.5, category: 'Unisex' },
  { id: 5, name: 'Relaxed Fit Hoodie', price: 1299.0, compareAt: 0, image: '/adore pics/hoodie.jpg', colors: ['#111827', '#F59E0B'], tags: ['Bestseller'], rating: 4.9, category: 'Unisex' },
  { id: 6, name: 'Pleated Tennis Skirt', price: 1199.0, compareAt: 1399.0, image: '/adore pics/tshirt2.jpg', colors: ['#F3F4F6', '#111827'], tags: ['New'], rating: 4.4, category: 'Women' },
  { id: 7, name: 'Boxy Denim Jacket', price: 2199.0, compareAt: 0, image: '/adore pics/sweater.jpg', colors: ['#1F2937', '#9CA3AF'], tags: ['Trending'], rating: 4.6, category: 'Men' },
  { id: 8, name: 'Seamless Biker Shorts', price: 799.0, compareAt: 999.0, image: '/adore pics/womentrouser2.jpg', colors: ['#111827', '#F472B6'], tags: ['Sale'], rating: 4.3, category: 'Women' },
  { id: 9, name: 'Layered Chain Necklace', price: 349.0, compareAt: 0, image: '/adore pics/glass1.jpg', colors: ['#F3F4F6'], tags: ['Accessory'], rating: 4.8, category: 'Unisex' },
  { id: 10, name: 'Athletic Track Jacket', price: 1899.0, compareAt: 0, image: '/adore pics/hoodie2.jpg', colors: ['#111827', '#10B981'], tags: ['New'], rating: 4.7, category: 'Men' },
  { id: 11, name: 'Cropped Top Set', price: 1399.0, compareAt: 1699.0, image: '/adore pics/tshirt1.jpg', colors: ['#F472B6', '#111827'], tags: ['Set'], rating: 4.5, category: 'Women' },
  { id: 12, name: 'Everyday Sneakers', price: 2099.0, compareAt: 2499.0, image: '/adore pics/shoe.jpg', colors: ['#111827', '#F3F4F6'], tags: ['Sale'], rating: 4.6, category: 'Unisex' },
]);

const featuredProduct = computed(() => products.value[0]);

const formatPrice = (n) => (Number(n) || 0).toFixed(2);
const discountPercent = (p) => p.compareAt && p.compareAt > p.price ? Math.round(((p.compareAt - p.price) / p.compareAt) * 100) : 0;

const setTab = (tab) => { activeTab.value = tab; };

const filteredProducts = computed(() => {
  const q = searchQuery.value.trim().toLowerCase();
  return products.value.filter(p =>
    (activeTab.value === 'All' || p.category === activeTab.value || (activeTab.value === 'Sale' && p.compareAt && p.compareAt > p.price)) &&
    (q === '' || p.name.toLowerCase().includes(q))
  );
});

const toggleWishlist = (product) => {
  product.__wish = !product.__wish;
  wishlistCount.value = products.value.filter(p => p.__wish).length;
};

const addToCart = (product) => {
  cartCount.value += 1;
};

// Reviews
const reviews = ref([
  { id: 1, user: 'Selam A.', rating: 4.8, comment: 'The oversized tee is so comfy and the print is vibrant. Love it!', date: '2025-12-01', product: 'Oversized Graphic Tee', avatar: '/search_images/4u2kdUqkvMAv.jpg' },
  { id: 2, user: 'Mebrahtom G.', rating: 4.6, comment: 'Cargo pants fit perfectly and feel durable. Great for daily wear.', date: '2025-12-02', product: 'Utility Cargo Pants', avatar: '/search_images/42fr15EGxcLv.jpg' },
  { id: 3, user: 'Rahwa K.', rating: 4.9, comment: 'The knit dress looks stunning. Fabric is soft and stretchy.', date: '2025-12-03', product: 'Ribbed Knit Dress', avatar: '/search_images/3WKayx05pJw1.jpg' },
  { id: 4, user: 'Yonatan H.', rating: 4.7, comment: 'Puffer is lightweight but warm. Perfect for evenings.', date: '2025-12-04', product: 'Puffer Jacket Lite', avatar: '/search_images/NDWoPWeMGLZ3.jpg' },
  { id: 5, user: 'Hanna T.', rating: 4.5, comment: 'Hoodie quality surprised me for the price. Would recommend.', date: '2025-12-05', product: 'Relaxed Fit Hoodie', avatar: '/search_images/oMF3X7wxIJ0X.jpg' },
  { id: 6, user: 'Daniel N.', rating: 4.4, comment: 'Sneakers are comfy and match anything. True to size.', date: '2025-12-06', product: 'Everyday Sneakers', avatar: '/search_images/42fr15EGxcLv.jpg' },
  { id: 7, user: 'Saron Y.', rating: 4.7, comment: 'Denim jacket is boxy in the best way. Love the look.', date: '2025-12-06', product: 'Boxy Denim Jacket', avatar: '/search_images/3WKayx05pJw1.jpg' },
  { id: 8, user: 'Henok B.', rating: 4.6, comment: 'Track jacket is sleek and breathable. Good for gym and city.', date: '2025-12-07', product: 'Athletic Track Jacket', avatar: '/search_images/NDWoPWeMGLZ3.jpg' },
]);

const filteredReviews = computed(() => reviews.value);

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const initializePriceChart = () => {};

const initializePerformanceChart = () => {};

const initializePortfolioChart = () => {};

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    offset: 100,
    mirror: true,
  });

  setTimeout(() => {
    showLoadingScreen.value = false;
  }, 2000);

  window.addEventListener('scroll', () => {
    AOS.refresh();
  });

  initializePriceChart();
  initializePerformanceChart();
  initializePortfolioChart();
});
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
.animate-float {
  animation: float 6s ease-in-out infinite;
}
@keyframes blob {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
}
.animate-blob {
  animation: blob 7s infinite;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.line-clamp-2 {
  line-clamp: 2;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
