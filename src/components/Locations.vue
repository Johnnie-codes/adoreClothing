<script setup>
import { ref, computed } from 'vue'
import Map from './Map.vue'

const selectedLocation = ref(null)
const searchQuery = ref('')

// Keep all existing location data
const locations = ref([
  {
    id: 1,
    name: "Kiz Bole Bulbula",
    address: "Street 6110-00, Tamrat Centre",
    phone: "+251911234567",
    email: "bulbula@kenemapharmacy.com",
    latitude: 8.9806,
    longitude: 38.7578,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 2,
    name: "Kiz Gerji Jackros Street",
    address: "Street 6, Gerji 100 Jackros Centre",
    phone: "+251911234568",
    email: "gerji@kenemapharmacy.com",
    latitude: 9.0579,
    longitude: 38.7199,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 3,
    name: "Kenema Pharmacy, No.5",
    address: "Gotera",
    phone: "+0114653339",
    email: "info@kenemapharmacy.com",
    latitude: 8.984783146177843,
    longitude: 38.74978976654747,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 4,
    name: "Kenema Pharmacy, No. 7",
    address: "Saris",
    phone: "+0114423175",
    email: "info@kenemapharmacy.com",
    latitude: 8.974017198633828,
    longitude: 38.760694887916834,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 5,
    name: "Kenema Pharmacy, No. 18",
    address: "Shola",
    phone: "+0114423175",
    email: "info@kenemapharmacy.com",
    latitude: 9.0265150589028,
    longitude: 38.79686896748762,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  }
])

// Set first location as default selected
selectedLocation.value = locations.value[0]

const filteredLocations = computed(() => {
  if (!searchQuery.value) return locations.value
  return locations.value.filter(location =>
    location.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const mapCenter = computed(() => {
  if (selectedLocation.value) {
    return {
      latitude: selectedLocation.value.latitude,
      longitude: selectedLocation.value.longitude
    }
  }
  return {
    latitude: 9.0265,
    longitude: 38.7967
  }
})

const selectLocation = (location) => {
  selectedLocation.value = location
  console.log('Selected:', location.name)
}

const navigateToLocation = (location = selectedLocation.value) => {
  if (!location) return
  
  // Create Google Maps navigation URL
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}&destination_place_id=${encodeURIComponent(location.name)}`
  
  // Open in new tab
  window.open(googleMapsUrl, '_blank')
}
</script>

<template>
  <div id="Locations" class="bg-orange-500 w-full py-20">
    <div class="max-w-[1296px] mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-4">Locations</h2>
      </div>

      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Map Section -->
        <div class="lg:w-2/3 w-full relative">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden h-[500px]">
            <Map
              :latitude="mapCenter.latitude"
              :longitude="mapCenter.longitude"
            />
            <button 
              @click="navigateToLocation()"
              class="absolute bottom-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition-colors cursor-pointer"
            >
              Navigate
            </button>
          </div>
        </div>

        <!-- Location List -->
        <div class="lg:w-1/3 w-full">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- Search -->
            <div class="p-4 border-b">
              <div class="relative">
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search anything"
                  class="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                
              </div>
            </div>

            <!-- List -->
            <div class="max-h-[400px] overflow-y-auto">
              <div
                v-for="(location, index) in filteredLocations"
                :key="location.id"
                @click="selectLocation(location)"
                @dblclick="navigateToLocation(location)"
                class="p-4 border-b cursor-pointer transition-colors"
                :class="selectedLocation?.id === location.id ? 'bg-orange-500 text-white' : 'hover:bg-gray-50'"
              >
                <div class="flex items-center gap-3">
                  <div 
                    class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                    :class="selectedLocation?.id === location.id ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'"
                  >
                    {{ index + 1 }}
                  </div>
                  <div class="flex-1">
                    <div class="font-semibold text-sm">{{ location.name }}</div>
                    <div 
                      class="text-xs"
                      :class="selectedLocation?.id === location.id ? 'text-orange-100' : 'text-gray-500'"
                    >
                      {{ location.address }}
                    </div>
                  </div>
                  <div 
                    v-if="selectedLocation?.id === location.id"
                    @click.stop="navigateToLocation(location)"
                    class="text-white hover:text-orange-200 cursor-pointer"
                    title="Navigate to this location"
                  >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

h2, h3 {
  font-family: "Ubuntu", sans-serif;
}

p, span {
  font-family: "Ubuntu", sans-serif;
}
</style>



