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
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a href="#" class="text-2xl font-bold text-gray-900 ">ADORE</a>
          
          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a href="#" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Home</a>
            <a href="#collection" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Collection</a>
            <a href="#products" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Products</a>
            <a href="#features" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Features</a>
            <a href="#reviews" class="text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors">Reviews</a>
            <button @click="toggleTheme" class="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
              <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
            </button>
            <a href="#contact" class="bg-teal-600 hover:bg-teal-500 text-white px-6 py-2 rounded-full transition-colors">Contact</a>
          </div>
          
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center space-x-4">
            <button @click="toggleTheme" class="p-2 rounded-full text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
              <i :class="theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon'"></i>
            </button>
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
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
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-32 pb-20 bg-gradient-to-r from-gray-50 to-gray-100 relative overflow-hidden border-b border-gray-200">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div data-aos="fade-up">
            <div class="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 shadow-sm">
              <i class="fas fa-bolt"></i>
              <span class="font-semibold">NEW DROP JUST LANDED</span>
            </div>

            <h1 class="text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              Fast Fashion for <span class="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Every Mood</span>
            </h1>

            <p class="text-xl text-gray-700 mb-8 leading-relaxed">
              Discover on-trend pieces with premium feel at everyday prices. Weekly drops. Limited runs. Don’t miss the heat.
            </p>

            <!-- Stats -->
            <div class="flex gap-12 mb-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-pink-500">ETB 1,500+</div>
                <div class="text-gray-400 text-sm">Free Shipping</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-pink-500">Weekly</div>
                <div class="text-gray-400 text-sm">New Drops</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-pink-500">30 Days</div>
                <div class="text-gray-400 text-sm">Free Returns</div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex gap-4 flex-wrap">
              <button @click="scrollToSection('products')" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                <i class="fas fa-bag-shopping"></i>
                Shop New Arrivals
              </button>
              <button @click="scrollToSection('collection')" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all flex items-center gap-2">
                <i class="fas fa-compass"></i>
                Explore Collection
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
    <section id="products" class="py-20 bg-white border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-10" data-aos="fade-up">
          <div class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Shop the Drop</div>
          <h2 class="text-5xl font-extrabold text-white mb-4">New Arrivals</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">Fresh fits dropping weekly. Limited stock — grab yours now.</p>
        </div>

        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div class="flex gap-2">
            <button v-for="tab in tabs" :key="tab" @click="setTab(tab)" :class="['px-4 py-2 rounded-full text-sm font-semibold transition-all', activeTab === tab ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10']">{{ tab }}</button>
          </div>
          <div class="relative w-full md:w-80">
            <input v-model="searchQuery" type="text" placeholder="Search products..." class="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all" />
            <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div v-for="product in filteredProducts" :key="product.id" data-aos="fade-up" class="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group dark:bg-gray-800/50 dark:border-gray-700/50">
            <div class="relative h-64 overflow-hidden">
              <img :src="product.image" :alt="product.name" class="w-full h-full object-cover group-hover:scale-105 transition" />
              <div class="absolute top-3 left-3 flex gap-2">
                <span v-if="product.tags?.includes('New')" class="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">NEW</span>
                <span v-if="product.compareAt" class="bg-blue-100 text-blue-600 text-xs font-bold px-2 py-1 rounded">-{{ discountPercent(product) }}%</span>
              </div>
              <button @click="toggleWishlist(product)" class="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 dark:bg-white/50 dark:hover:bg-white/70">
                <i :class="['fas', product.__wish ? 'fa-heart text-blue-600' : 'fa-heart text-white dark:text-gray-400']"></i>
              </button>
              <div class="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition p-3">
                <button @click="addToCart(product)" class="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:opacity-90 dark:bg-blue-600 dark:text-white">Quick Add</button>
              </div>
            </div>
            <div class="p-4">
              <div class="flex items-start justify-between gap-3">
                <h3 class="font-semibold line-clamp-2">{{ product.name }}</h3>
                <div class="text-xs text-gray-400 flex items-center gap-1"><i class="fas fa-star text-yellow-400"></i>{{ product.rating }}</div>
              </div>
              <div class="mt-2 flex items-center gap-2">
                <span class="text-blue-600 font-bold">ETB {{ formatPrice(product.price) }}</span>
                <span v-if="product.compareAt" class="text-gray-400 line-through text-sm">ETB {{ formatPrice(product.compareAt) }}</span>
              </div>
              <div class="mt-3 flex items-center gap-2">
                <span v-for="(c, idx) in product.colors" :key="idx" class="w-4 h-4 rounded-full border border-white/20 dark:border-gray-700/50" :style="{ background: c }"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Shop Features -->
    <section id="features" class="py-20 bg-gray-100 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Why Shop With Us</div>
          <h2 class="text-5xl font-extrabold text-white mb-4">Built For Speed & Style</h2>
          <p class="text-xl text-gray-300 max-w-2xl mx-auto">Seamless experience from browse to bag to doorstep.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center dark:bg-gray-800/50 dark:border-gray-700/50" data-aos="fade-up">
            <div class="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4"><i class="fas fa-truck-fast"></i></div>
            <h3 class="text-lg font-semibold">Free Shipping</h3>
            <p class="text-gray-400 text-sm mt-2">Orders over ETB 1,500 ship free nationwide.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center dark:bg-gray-800/50 dark:border-gray-700/50" data-aos="fade-up" data-aos-delay="100">
            <div class="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4"><i class="fas fa-rotate-left"></i></div>
            <h3 class="text-lg font-semibold">Easy Returns</h3>
            <p class="text-gray-400 text-sm mt-2">30-day hassle-free returns on all items.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center dark:bg-gray-800/50 dark:border-gray-700/50" data-aos="fade-up" data-aos-delay="200">
            <div class="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4"><i class="fas fa-lock"></i></div>
            <h3 class="text-lg font-semibold">Secure Checkout</h3>
            <p class="text-gray-400 text-sm mt-2">Encrypted payments and trusted gateways.</p>
          </div>
          <div class="bg-white/5 border border-white/10 rounded-2xl p-6 text-center dark:bg-gray-800/50 dark:border-gray-700/50" data-aos="fade-up" data-aos-delay="300">
            <div class="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4"><i class="fas fa-headset"></i></div>
            <h3 class="text-lg font-semibold">24/7 Support</h3>
            <p class="text-gray-400 text-sm mt-2">We’re here anytime you need us.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section id="reviews" class="py-20 bg-gray-50 border-t border-gray-200">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block bg-white/5 text-gray-300 border border-gray-700 px-4 py-2 rounded-full text-xs font-light tracking-widest mb-4">TESTIMONIALS</div>
          <h2 class="text-4xl font-light text-white tracking-tight mb-4">Voices of Adore</h2>
          <p class="text-gray-500 max-w-2xl mx-auto tracking-wider text-sm">EXPERIENCES FROM OUR COMMUNITY</p>
        </div>

        <!-- Reviews Summary -->
        <div data-aos="fade-up" class="flex gap-6 justify-center mb-12 flex-wrap">
          <div class="flex items-center gap-2 text-sm text-gray-400">
            <i class="fas fa-star text-gray-300"></i>
            <span class="tracking-wider">4.7 / 5.0</span>
          </div>
          <div class="text-sm text-gray-400">Verified buyers only</div>
        </div>

        <!-- Reviews Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div v-for="review in filteredReviews" :key="review.id" data-aos="fade-up" class="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow dark:bg-gray-800/50 dark:border-gray-700/50">
            <div class="flex items-center gap-2 mb-2">
              <i v-for="n in 5" :key="n" class="fas fa-star" :class="{'text-teal-400': n <= Math.round(review.rating), 'text-gray-700': n > Math.round(review.rating)}"></i>
              <span class="text-sm text-gray-500">{{ review.rating.toFixed(1) }}</span>
            </div>
            <p class="text-gray-700 line-clamp-2 mb-4">"{{ review.comment }}"</p>
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img :src="review.avatar" alt="" class="w-8 h-8 rounded-full object-cover" />
                <div>
                  <div class="text-sm font-semibold text-gray-900">{{ review.user }}</div>
                  <div class="text-xs text-gray-500">{{ review.date }}</div>
                </div>
              </div>
              <div class="text-xs text-gray-500">on {{ review.product }}</div>
            </div>
          </div>
        </div>

        <div class="text-center">
          <button class="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-lg font-semibold hover:bg-pink-600 hover:text-white transition-all flex items-center gap-2 mx-auto">
            <i class="fas fa-plus"></i>
            Load More Reviews
          </button>
        </div>
      </div>
    </section>

    <!-- Contact Section - Nordstrom Inspired -->
    <section id="contact" class="relative py-24 bg-white border-t border-gray-200 overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4yIj48cGF0aCBkPSJNMCAwaDQwdjQwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
      </div>
      
      <div class="relative max-w-6xl mx-auto px-6 xl:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-3xl md:text-4xl font-light text-white tracking-tight mb-4">Need Help?</h2>
          <p class="text-gray-300 max-w-2xl mx-auto text-base">
            Our customer care team is available by phone, email or chat.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Contact Info -->
          <div data-aos="fade-right" class="lg:col-span-1 space-y-6">
            <div class="space-y 1">
              <h3 class="text-xl font-light text-white mb-6">Contact Information</h3>
              <p class="text-gray-300 text-sm leading-relaxed">
                Our customer care team is available to assist you with any questions or concerns you may have.
              </p>
            </div>
            
            <div class="space-y-4 pt-4 border-t border-gray-800 dark:border-gray-700">
              <div v-for="(contact, idx) in contactInfo" :key="idx" class="group flex items-start space-x-4 hover:bg-gray-800/30 p-3 -mx-3 rounded-lg transition-all duration-200 dark:hover:bg-gray-700/30">
                <div class="flex-shrink-0 w-10 h-10 rounded-full bg-teal-500/10 flex items-center justify-center group-hover:bg-teal-500/20 transition-colors dark:bg-teal-500/20 dark:group-hover:bg-teal-500/30">
                  <i :class="`fas ${contact.icon} text-teal-400 text-lg`"></i>
                </div>
                <div>
                  <h4 class="text-sm font-medium text-gray-300 mb-1">{{ contact.title }}</h4>
                  <p class="text-sm text-gray-400 leading-relaxed">{{ contact.content }}</p>
                </div>
              </div>
            </div>
            
            <div class="pt-4 border-t border-gray-800 dark:border-gray-700">
              <h4 class="text-sm font-medium text-gray-300 mb-3">Business Hours</h4>
              <ul class="space-y-1.5">
                <li class="flex justify-between text-sm">
                  <span class="text-gray-400">Monday - Friday</span>
                  <span class="text-white">9:00 AM - 9:00 PM EST</span>
                </li>
                <li class="flex justify-between text-sm">
                  <span class="text-gray-400">Saturday - Sunday</span>
                  <span class="text-white">10:00 AM - 7:00 PM EST</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Contact Form -->
          <div data-aos="fade-left" class="lg:col-span-2 bg-gray-800/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50 dark:bg-gray-800/30 dark:border-gray-700/50">
            <h3 class="text-xl font-light text-white mb-6">Send Us a Message</h3>
            <form class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-1.5">
                  <label class="block text-sm font-medium text-gray-300">First Name</label>
                  <input type="text" class="w-full bg-gray-700/30 border border-gray-600/50 rounded-md px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all" placeholder="Your first name" />
                </div>
                <div class="space-y-1.5">
                  <label class="block text-sm font-medium text-gray-300">Last Name</label>
                  <input type="text" class="w-full bg-gray-700/30 border border-gray-600/50 rounded-md px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all" placeholder="Your last name" />
                </div>
              </div>
              
              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-300">Email Address</label>
                <input type="email" class="w-full bg-gray-700/30 border border-gray-600/50 rounded-md px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all" placeholder="your.email@example.com" />
              </div>
              
              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-300">Phone Number</label>
                <input type="tel" class="w-full bg-gray-700/30 border border-gray-600/50 rounded-md px-4 py-2.5 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all" placeholder="+1 (___) ___-____" />
              </div>
              
              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-300">How can we help?</label>
                <select class="w-full bg-gray-700/30 border border-gray-600/50 rounded-md px-4 py-2.5 text-gray-100 focus:outline-none focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 appearance-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiAjd2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im03IDE1IDUgNSA1LTUiLz48cGF0aCBkPSJNMTIgMjBWNyIvPjwvc3ZnPg==')] bg-no-repeat bg-[right_0.75rem_center] bg-[length:1.25em_1.25em] hover:border-gray-500/50 transition-colors">
                  <option class="bg-gray-800 text-gray-100">Select a topic</option>
                  <option class="bg-gray-800 text-gray-100">Order Status</option>
                  <option class="bg-gray-800 text-gray-100">Returns & Exchanges</option>
                  <option class="bg-gray-800 text-gray-100">Product Information</option>
                  <option class="bg-gray-800 text-gray-100">Technical Support</option>
                  <option class="bg-gray-800 text-gray-100">Other</option>
                </select>
              </div>
              
              <div class="space-y-1.5">
                <label class="block text-sm font-medium text-gray-300">Message</label>
                <textarea rows="4" class="w-full bg-gray-700/30 border border-gray-600/50 rounded-md px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all resize-none" placeholder="How can we assist you today?"></textarea>
              </div>
              
              <div class="pt-2">
                <button type="submit" class="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-3 px-6 rounded-md transition-all duration-200 flex items-center justify-center gap-2 group">
                  <span>Send Message</span>
                  <i class="fas fa-arrow-right text-sm transition-transform group-hover:translate-x-1"></i>
                </button>
              </div>
            </form>
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

// Fast-fashion shop state
const cartCount = ref(0);
const wishlistCount = ref(0);

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
