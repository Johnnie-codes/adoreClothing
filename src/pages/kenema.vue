<template>
  <div class="min-h-screen bg-white">
    <!-- Loading Screen -->
    <div v-if="showLoadingScreen" class="fixed inset-0 bg-gradient-to-r from-orange-600 to-orange-500 flex items-center justify-center z-9999">
      <div class="text-center text-white">
        <div class="text-6xl font-bold mb-4">Kenema</div>
        <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p class="text-xl">Loading Kenema Platform...</p>
      </div>
    </div>

    <!-- Navigation -->
    <nav class="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-md border-b border-orange-600 border-opacity-10 z-50">
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div class="flex items-center gap-8">
          <div class="text-2xl font-bold text-orange-600">Kenema</div>
          <div class="hidden md:flex gap-6">
            <a href="#home" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">Home</a>
            <a href="#about" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">About</a>
            <!-- <a href="#services" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">Services</a> -->
            <a href="#banking" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">Banking</a>
            <a href="#news" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">News</a>
            <a href="#contact" class="text-gray-600 hover:text-orange-600 font-medium transition-colors">Contact</a>
          </div>
        </div>
        <div class="flex gap-3">
          <button class="p-2 hover:bg-orange-600 hover:bg-opacity-10 rounded-lg transition-colors">
            <i class="fas fa-user text-gray-600"></i>
          </button>
          
          <div class="flex gap-3">
            <button @click="$router.push('/auth/sign-in')" class="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Sign In
            </button>
            <button @click="$router.push('/dashboard/home')" class="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section id="home" class="pt-32 pb-20 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-30">
        <div class="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-40 right-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 left-1/3 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Hero Content -->
          <div data-aos="fade-up">
            <div class="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
              <i class="fas fa-pills"></i>
              <span class="font-semibold">Trusted by 50,000+ Patients</span>
            </div>

            <h1 class="text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your Health, Our <span class="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Priority</span>
            </h1>

            <p class="text-xl text-gray-600 mb-8 leading-relaxed">
              Kenema Pharmacies provides quality pharmaceutical care with a personal touch. Our experienced pharmacists are dedicated to your health and well-being, offering expert advice and a wide range of medications.
            </p>

            <!-- Stats -->
            <div class="flex gap-12 mb-8">
              <div class="text-center">
                <div class="text-4xl font-bold text-orange-600">50+</div>
                <div class="text-gray-500 text-sm">Locations</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-orange-600">24/7</div>
                <div class="text-gray-500 text-sm">Emergency Service</div>
              </div>
              <div class="text-center">
                <div class="text-4xl font-bold text-orange-600">100%</div>
                <div class="text-gray-500 text-sm">Genuine Medicines</div>
              </div>
            </div>

            <!-- Buttons -->
            <div class="flex gap-4 flex-wrap">
              <button @click="scrollToSection('locations')" class="bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center gap-2">
                <i class="fas fa-map-marker-alt"></i>
                Find a Pharmacy
              </button>
              <button @click="scrollToSection('about')" class="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all flex items-center gap-2">
                <i class="fas fa-play"></i>
                Watch Our Story
              </button>
            </div>
          </div>

          <!-- Hero Visual - Price Card -->
          <div data-aos="fade-left" class="relative">
            <div class="bg-white rounded-2xl shadow-2xl p-8 animate-float">
              <div class="flex items-center justify-between mb-6">
                <h3 class="flex items-center gap-2 text-lg font-semibold text-gray-800">
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Live sold items
                </h3>
                <button class="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <i class="fas fa-sync-alt text-gray-500"></i>
                </button>
              </div>

              <div class="text-center mb-6">
                <span class="text-gray-500 text-lg">ETB</span>
                <span class="text-5xl font-bold text-gray-900 mx-2">{{ currentPrice.toFixed(2) }}</span>
                <span class="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-semibold">+{{ priceChange.toFixed(1) }}%</span>
              </div>

              <div class="h-48 mb-6">
                <canvas id="priceChart"></canvas>
              </div>

              <div class="flex justify-between">
                <div class="text-center">
                  <div class="text-xs text-gray-500 mb-1">24h High</div>
                  <div class="font-semibold text-gray-800">ETB 127.50</div>
                </div>
                <div class="text-center">
                  <div class="text-xs text-gray-500 mb-1">24h Low</div>
                  <div class="font-semibold text-gray-800">ETB 123.20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">About Kenema</div>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">Dedicated to Community Healthcare Excellence</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            At Kenema Pharmacy, we are dedicated to providing our community with the highest quality pharmaceutical care and customer service. Founded with the goal of becoming a trusted healthcare partner for local families and individuals.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Features -->
          <div data-aos="fade-right" class="space-y-6">
            <div v-for="(feature, idx) in features" :key="idx" class="flex gap-4">
              <div class="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <i :class="`fas ${feature.icon} text-white text-2xl`"></i>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
                <p class="text-gray-600">{{ feature.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Images -->
          <div data-aos="fade-left" class="relative">
            <img src="/search_images/3WKayx05pJw1.jpg" alt="Business Meeting" class="w-full rounded-xl shadow-lg" />
            <img src="/search_images/oMF3X7wxIJ0X.jpg" alt="Office Building" class="absolute -bottom-8 -right-8 w-48 h-40 rounded-xl shadow-lg border-4 border-white" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div data-aos="fade-up" class="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-8 text-center">
            <div class="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-bullseye text-3xl"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">Our Mission</h3>
            <p class="text-lg opacity-90">To provide essential medicines and healthcare services that are reliable, safe, and affordable to the community, thereby enhancing their well-being and promoting economic growth through competitive and efficient service delivery.</p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" class="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-8 text-center">
            <div class="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i class="fas fa-eye text-3xl"></i>
            </div>
            <h3 class="text-2xl font-semibold mb-4">Our Vision</h3>
            <p class="text-lg opacity-90">To become a leading service provider in Ethiopia by meeting the community's demand for medicine and healthcare supply and distribution with excellence and innovation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Our Values</div>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">The Kenema Values</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Our core values guide every decision and action we take, ensuring we deliver on our promises.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div v-for="(value, idx) in values" :key="idx" data-aos="fade-up" :data-aos-delay="value.delay" class="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i :class="`fas ${value.icon} text-orange-600 text-2xl`"></i>
            </div>
            <div class="w-12 h-12 bg-gradient-to-r from-orange-600 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">{{ value.letter }}</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ value.title }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- CEO Section -->
    <section class="py-20 bg-gradient-to-b from-orange-500 to-white">
      <div class="max-w-7xl mx-auto px-6">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-8 md:p-12">
            <div class="text-center mb-8" data-aos="fade-up">
              <div class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Leadership</div>
              <h2 class="text-4xl font-bold text-gray-900 mb-4">Meet Our CEO</h2>
            </div>
            
            <div class="flex flex-col lg:flex-row gap-8 items-center">
              <!-- CEO Image -->
              <div class="lg:w-1/3" data-aos="fade-right">
                <div class="relative group">
                  <img 
                    src="/img/seife.png" 
                    alt="Seife Demissie Legesse"
                    class="w-full h-auto rounded-xl shadow-2xl transform transition-transform duration-300 group-hover:scale-105"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div class="text-white">
                      <h3 class="text-2xl font-bold">Seife Demissie Legesse</h3>
                      <p class="text-orange-300 font-medium">Chief Executive Officer</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- CEO Bio -->
              <div class="lg:w-2/3 space-y-6" data-aos="fade-left">
                <p class="text-gray-700 leading-relaxed">
                  The professional has extensive expertise in pharmacy, health supply chain management (HSCM), and leadership, currently serving as CEO of Kenema Pharmacies Enterprise in the City Administration of Addis Ababa, Ethiopia. Previously, as Director of the Pharmaceutical Supply & Service Directorate at the Addis Ababa Health Bureau, they focused on building resilient pharmaceutical and medical device supply chains and advancing good pharmacy practices throughout Ethiopia's healthcare system.
                </p>
                <p class="text-gray-700 leading-relaxed">
                  Guided by a vision to establish an integrated healthcare supply chain that ensures access to quality pharmaceuticals, medical devices, and traditional medicine practices, they spearhead initiatives in policy implementation, emergency preparedness, and stakeholder collaboration.
                </p>
                
                <div class="flex flex-wrap gap-4 pt-4">
                  <a href="#" class="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                    <i class="fab fa-linkedin-in text-lg mr-2"></i>
                    <span>Connect on LinkedIn</span>
                  </a>
                  <a href="#" class="flex items-center text-orange-600 hover:text-orange-700 transition-colors">
                    <i class="fab fa-twitter text-lg mr-2"></i>
                    <span>Follow on Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Executive Team Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Our Team</div>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">Meet Our Leadership</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Our dedicated team of professionals is committed to excellence in pharmaceutical care and community service.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Executive 1 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up">
            <div class="h-80 overflow-hidden">
              <img 
                src="/img/birhanu.png" 
                alt="Birhanu Silamlak Dessie"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Birhanu Silamlak Dessie</h3>
              <p class="text-orange-600 font-semibold">Organization Advisor</p>
              <div class="mt-4 flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Executive 2 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="100">
            <div class="h-80 overflow-hidden">
              <img 
                src="/img/rawda.png" 
                alt="Rawda Kedir"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Rawda Kedir</h3>
              <p class="text-orange-600 font-semibold">Vice Operational Manager</p>
              <div class="mt-4 flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Executive 3 -->
          <div class="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
            <div class="h-80 overflow-hidden">
              <img 
                src="/img/solomon.png" 
                alt="Solomon Regassa Arredo"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-900 mb-1">Solomon Regassa Arredo</h3>
              <p class="text-orange-600 font-semibold">Administration Vice Manager</p>
              <div class="mt-4 flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
                  <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-orange-600 transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <!-- Pharmacy Locations Section -->
    <section id="locations" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-12" data-aos="fade-up">
          <div class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Our Network</div>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">Find a Pharmacy Near You</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Visit one of our conveniently located pharmacies for all your healthcare needs.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-8">
          <!-- Map Section -->
          <div class="lg:w-2/3 w-full" data-aos="fade-right">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden h-[500px]">
              <Map
                :latitude="mapCenter.latitude"
                :longitude="mapCenter.longitude"
                :locations="filteredLocations"
                @marker-click="selectLocation"
                class="w-full h-full"
              />
              <button 
                @click="navigateToLocation()"
                class="absolute mt-4 ml-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-lg flex items-center gap-2"
                v-if="selectedLocation"
              >
                <i class="fas fa-directions"></i>
                Navigate to {{ selectedLocation.name }}
              </button>
            </div>
          </div>

          <!-- Location List -->
          <div class="lg:w-1/3 w-full" data-aos="fade-left">
            <div class="bg-white rounded-2xl shadow-xl overflow-hidden h-[500px] flex flex-col">
              <!-- Search -->
              <div class="p-4 border-b">
                <div class="relative">
                  <input
                    v-model="searchQuery"
                    type="text"
                    placeholder="Search by name or address..."
                    class="w-full pl-4 pr-10 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                  <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              <!-- List -->
              <div class="flex-1 overflow-y-auto">
                <div
                  v-for="(location, index) in filteredLocations"
                  :key="location.id"
                  @click="selectLocation(location)"
                  class="p-4 border-b cursor-pointer transition-colors hover:bg-gray-50"
                  :class="{ 'bg-orange-50': selectedLocation?.id === location.id }"
                >
                  <div class="flex items-start gap-3">
                    <div 
                      class="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold mt-1"
                      :class="selectedLocation?.id === location.id ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-600'"
                    >
                      {{ index + 1 }}
                    </div>
                    <div class="flex-1 min-w-0">
                      <h3 class="font-semibold text-gray-900 truncate">{{ location.name }}</h3>
                      <p class="text-sm text-gray-600 mt-1">{{ location.address }}</p>
                      <div class="text-xs font-semibold mt-1 text-orange-600">
                        📍 {{ location.distance.toFixed(2) }} km away
                      </div>
                      <div class="flex items-center mt-2 text-sm">
                        <span class="flex items-center text-gray-500">
                          <i class="far fa-clock mr-1.5"></i>
                          {{ location.hours || '8:00 AM - 10:00 PM' }}
                        </span>
                        <span 
                          class="ml-3 px-2 py-0.5 rounded-full text-xs font-medium"
                          :class="location.isOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'"
                        >
                          {{ location.isOpen ? 'Open Now' : 'Closed' }}
                        </span>
                      </div>
                    </div>
                    <button 
                      @click.stop="navigateToLocation(location)"
                      class="text-orange-500 hover:text-orange-600 p-2 -mr-2"
                      title="Get directions"
                    >
                      <i class="fas fa-directions"></i>
                    </button>
                  </div>
                </div>
                <div v-if="filteredLocations.length === 0" class="p-8 text-center text-gray-500">
                  <i class="fas fa-map-marker-alt text-4xl mb-4 text-gray-300"></i>
                  <p>No locations found matching your search.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Banking Partners -->
    <section id="banking" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Banking Partners</div>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">Trusted Financial Partners</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Seamless integration with Ethiopia's leading banks for secure and convenient transactions.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="(bank, idx) in banks" :key="idx" data-aos="fade-up" :data-aos-delay="bank.delay" class="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
            <div class="w-24 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <img :src="bank.image" :alt="bank.name" class="max-w-full max-h-full object-contain" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ bank.name }}</h3>
            <p class="text-gray-600 text-sm mb-4">{{ bank.desc }}</p>
            <div class="flex flex-wrap gap-2 justify-center">
              <span v-for="(feature, fidx) in bank.features" :key="fidx" class="bg-orange-100 text-orange-600 px-2 py-1 rounded text-xs font-semibold">
                {{ feature }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- News Section -->
    <section id="news">
      <LatestNews />
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-aos="fade-up">
          <div class="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Get In Touch</div>
          <h2 class="text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to start your investment journey? Get in touch with our expert team.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Info -->
          <div data-aos="fade-right" class="space-y-6">
            <div v-for="(contact, idx) in contactInfo" :key="idx" class="flex gap-4">
              <div class="w-16 h-16 bg-gradient-to-r from-orange-600 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <i :class="`fas ${contact.icon} text-white text-2xl`"></i>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ contact.title }}</h3>
                <p class="text-gray-600 whitespace-pre-line">{{ contact.content }}</p>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div data-aos="fade-left" class="bg-white rounded-xl p-8 shadow-lg">
            <form class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <input type="text" placeholder="First Name" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600" />
                <input type="text" placeholder="Last Name" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600" />
              </div>
              <input type="email" placeholder="Email Address" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600" />
              <input type="tel" placeholder="Phone Number" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600" />
              <select class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600">
                <option>Select a subject</option>
                <option>Investment Inquiry</option>
                <option>Partnership</option>
                <option>Customer Support</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Message" rows="5" class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-orange-600"></textarea>
              <button class="w-full bg-gradient-to-r from-orange-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <i class="fas fa-paper-plane"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-6 text-center">
        <p class="opacity-75">
          2024 Kenema S.C Components Library. Built with Vue and Tailwind CSS.
        </p>
      </div>
    </footer>

  </div>
</template>
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
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
<script setup>
import { ref, computed, onMounted } from 'vue';
import Map from '@/components/Map.vue';
import LatestNews from '@/components/LatestNews.vue';
import locationsData from '@/data/locations.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(faLinkedinIn, faTwitter);
import AOS from 'aos';
import 'aos/dist/aos.css';
import Chart from 'chart.js/auto';

const currentPrice = ref(125.75);
const priceChange = ref(2.8);
const newsFilter = ref('all');
const showLoadingScreen = ref(true);
const locationSearch = ref('');

// Default center point (Addis Ababa city center)
let centerLat = 9.0265;
let centerLon = 38.7967;

// Calculate distance between two coordinates using Haversine formula
const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

// Pharmacy Locations with distance
const pharmacyLocations = ref(locationsData.map(location => ({
  ...location,
  distance: calculateDistance(centerLat, centerLon, location.latitude, location.longitude)
})));

// Update distances for all locations
const updateDistances = (lat, lon) => {
  centerLat = lat;
  centerLon = lon;
  pharmacyLocations.value = pharmacyLocations.value.map(location => ({
    ...location,
    distance: calculateDistance(centerLat, centerLon, location.latitude, location.longitude)
  }));
};

const selectedLocation = ref(pharmacyLocations.value[0]);
const searchQuery = ref('');

// Filter locations based on search query and sort by distance
const filteredLocations = computed(() => {
  let filtered = pharmacyLocations.value;
  if (searchQuery.value) {
    filtered = filtered.filter(location =>
      location.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      location.address.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }
  // Sort by distance (nearest to farthest)
  return filtered.sort((a, b) => a.distance - b.distance);
});

// Set map center based on selected location
const mapCenter = computed(() => {
  if (selectedLocation.value) {
    return {
      latitude: selectedLocation.value.latitude,
      longitude: selectedLocation.value.longitude
    };
  }
  return {
    latitude: 9.0265,
    longitude: 38.7967
  };
});

// Select a location
const selectLocation = (location) => {
  selectedLocation.value = location;
};

// Navigate to location using Google Maps
const navigateToLocation = (location = selectedLocation.value) => {
  if (!location) return;
  
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}&destination_place_id=${encodeURIComponent(location.name)}`;
  window.open(googleMapsUrl, '_blank');
};

let priceChart = null;

// Using locationsData imported from locations.js

/* -----------------------------
   FEATURES / VALUES / SERVICES
------------------------------*/
const features = [
  {
    icon: 'fa-pills',
    title: 'Quality Healthcare',
    desc: 'Our experienced team of pharmacists and technicians work together to ensure every customer receives personalized attention and the medications they need.',
  },
  {
    icon: 'fa-shield-alt',
    title: 'Reliability & Safety',
    desc: 'We are committed to providing reliable, safe, and affordable medicines and healthcare services that enhance community well-being.',
  },
  {
    icon: 'fa-users',
    title: 'Community Focused',
    desc: 'We build lasting relationships with our patients and work collaboratively with local healthcare providers to serve our community.',
  },
];

const values = [
  { letter: 'C', title: 'Competitiveness', icon: 'fa-chart-line', delay: '0' },
  { letter: 'P', title: 'Profitability', icon: 'fa-dollar-sign', delay: '100' },
  { letter: 'S', title: 'Social Responsibility', icon: 'fa-heart', delay: '200' },
  { letter: 'R', title: 'Reliability', icon: 'fa-shield-alt', delay: '300' },
  { letter: 'A', title: 'Accountability', icon: 'fa-check-circle', delay: '400' },
];


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
  // {
  //   image: '/search_images/GE0ArumTXX7m.png',
  //   name: 'NIB International Bank',
  //   desc: 'International banking services with focus on trade finance and foreign exchange.',
  //   features: ['Foreign Exchange', 'Trade Finance', 'International Transfer'],
  //   delay: '400',
  // },
  {
    image: '/search_images/telebirr-logo.png',
    name: 'Telebirr',
    desc: 'Ethiopia\'s leading mobile money service providing seamless digital payments and transfers.',
    features: ['Mobile Money', 'Bill Payments', 'Cash In/Out'],
    delay: '400',
  },
];

const newsData = [
  {
    id: 1,
    title: 'New Kenema Pharmacy Branch Opens in Stadium Area',
    excerpt: 'Our latest branch at Stadium No. 3 brings modern pharmaceutical services with state-of-the-art facilities and expert pharmacists.',
    category: 'expansion',
    date: '2024-12-15',
    image: '/search_images/4u2kdUqkvMAv.jpg',
  },
  {
    id: 2,
    title: 'Partnership with Addis Ababa University Pharmacy School',
    excerpt: 'Strengthening healthcare education through collaboration, providing training to over 120 pharmacy professionals.',
    category: 'education',
    date: '2024-12-10',
    image: '/search_images/3WKayx05pJw1.jpg',
  },
  {
    id: 3,
    title: 'Infrastructure Development Project Launch',
    excerpt: 'Construction begins on new Center of Excellence in Community Pharmacy Services at Nifas Silk Lafto.',
    category: 'infrastructure',
    date: '2024-12-05',
    image: '/search_images/42fr15EGxcLv.jpg',
  },
  {
    id: 4,
    title: 'Wholesale Division Now Available',
    excerpt: 'Kenema launches wholesale services for hospitals, clinics, and retail pharmacies with competitive bulk pricing.',
    category: 'expansion',
    date: '2024-11-20',
    image: '/search_images/oMF3X7wxIJ0X.jpg',
  },
];

const contactInfo = [
  { icon: 'fa-map-marker-alt', title: 'Visit Our Office', content: 'Addis Ababa, Ethiopia\nMultiple Branches Across the City' },
  { icon: 'fa-phone', title: 'Call Us', content: '+251 911 234 567\n+251 914 858 538' },
  { icon: 'fa-envelope', title: 'Email Us', content: 'info@kenemaenterprise.et\nsupport@kenemaenterprise.et' },
  { icon: 'fa-clock', title: 'Business Hours', content: 'Monday - Friday: 8:00 AM - 6:00 PM\n24/7 Emergency Services Available' },
];

/* -----------------------------
   NEWS FILTER
------------------------------*/
const filteredNews = computed(() => {
  return newsFilter.value === 'all'
    ? newsData
    : newsData.filter((n) => n.category === newsFilter.value);
});

/* -----------------------------
   CHART HELPERS
------------------------------*/
const generateTimeLabels = (hours) => {
  const labels = [];
  const now = new Date();
  for (let i = hours; i >= 0; i--) {
    const time = new Date(now.getTime() - i * 60 * 60 * 1000);
    labels.push(
      time.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })
    );
  }
  return labels;
};

const generatePriceData = (points) => {
  const data = [];
  let basePrice = 120;

  for (let i = 0; i < points; i++) {
    basePrice += (Math.random() - 0.5) * 2;
    basePrice = Math.max(100, Math.min(150, basePrice));
    data.push(basePrice);
  }

  return data;
};

const callLocation = (location) => {
  if (!location) return;
  window.location.href = `tel:${location.phone}`;
};

/* Scroll to section helper */
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/* -----------------------------
   INITIALIZE CHARTS & AOS
------------------------------*/
onMounted(() => {
  AOS.init({ duration: 800 });

  setTimeout(() => {
    showLoadingScreen.value = false;
  }, 1500);

  // Get user's geolocation and update distances
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;
        updateDistances(userLat, userLon);
      },
      (error) => {
        console.log('Geolocation error:', error);
        // Use default center if geolocation fails
      }
    );
  }

  const priceCtx = document.getElementById('priceChart');

  if (priceCtx) {
    priceChart = new Chart(priceCtx, {
      type: 'line',
      data: {
        labels: generateTimeLabels(12),
        datasets: [
          {
            data: generatePriceData(13),
            borderWidth: 2,
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
      },
    });
  }
});
</script>
