<script setup>
import { ref, computed } from 'vue'
import Map from './Map.vue'

// Location data for Kenema Pharmacies
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
    name: "Kenema Pharmacy, Number 14",
    address: "Addis Ababa",
    phone: "+0932354518",
    email: "info@kenemapharmacy.com",
    latitude: 9.059569686802346,
    longitude: 38.71989604398679,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 4,
    name: "Kenema Pharmacy Piassa",
    address: "Piassa District, Near Arat Kilo",
    phone: "+251911234569",
    email: "piassa@kenemapharmacy.com",
    latitude: 9.0348,
    longitude: 38.7596,
    isOpen: true,
    hours: "7:00 AM - 11:00 PM"
  },
  {
    id: 5,
    name: "Kenema Pharmacy Merkato",
    address: "Merkato Commercial Area, Building 45",
    phone: "+251911234570",
    email: "merkato@kenemapharmacy.com",
    latitude: 9.0092,
    longitude: 38.7441,
    isOpen: true,
    hours: "8:00 AM - 9:00 PM"
  },
  {
    id: 6,
    name: "Kenema Pharmacy Kazanchis",
    address: "Kazanchis Business District",
    phone: "+251911234571",
    email: "kazanchis@kenemapharmacy.com",
    latitude: 9.0184,
    longitude: 38.7571,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 7,
    name: "Kenema Pharmacy Megenagna",
    address: "Megenagna, Near CMC Hospital",
    phone: "+251911234572",
    email: "megenagna@kenemapharmacy.com",
    latitude: 9.0421,
    longitude: 38.7893,
    isOpen: true,
    hours: "24 Hours"
  },
  {
    id: 8,
    name: "Kenema Pharmacy Lebu",
    address: "Lebu District, Main Road",
    phone: "+251911234573",
    email: "lebu@kenemapharmacy.com",
    latitude: 9.0156,
    longitude: 38.7234,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 9,
    name: "Kenema Pharmacy Sarbet",
    address: "Sarbet Area, Near Ethio Telecom",
    phone: "+251911234574",
    email: "sarbet@kenemapharmacy.com",
    latitude: 9.0267,
    longitude: 38.7456,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 10,
    name: "Kenema Pharmacy Kotebe",
    address: "Kotebe University Area",
    phone: "+251911234575",
    email: "kotebe@kenemapharmacy.com",
    latitude: 8.9876,
    longitude: 38.7823,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 11,
    name: "Kenema Pharmacy Hayat",
    address: "Hayat Hospital Area",
    phone: "+251911234576",
    email: "hayat@kenemapharmacy.com",
    latitude: 9.0512,
    longitude: 38.7634,
    isOpen: true,
    hours: "24 Hours"
  },
  {
    id: 12,
    name: "Kenema Pharmacy Bole Atlas",
    address: "Bole Atlas, Near Edna Mall",
    phone: "+251911234577",
    email: "atlas@kenemapharmacy.com",
    latitude: 8.9934,
    longitude: 38.7889,
    isOpen: true,
    hours: "8:00 AM - 11:00 PM"
  },
  {
    id: 13,
    name: "Kenema Pharmacy No. 11",
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234578",
    email: "no11@kenemapharmacy.com",
    latitude: 9.0601735,
    longitude: 38.7372069,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 14,
    name: "Kenema Pharmacy No. 38",
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234579",
    email: "no38@kenemapharmacy.com",
    latitude: 9.053177,
    longitude: 38.742285,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 15,
    name: "Kenema Pharmacy (Piassa Kenema Public Pharmacy)",
    address: "Piassa District, Addis Ababa",
    phone: "+251911234580",
    email: "piassapublic@kenemapharmacy.com",
    latitude: 9.032403,
    longitude: 38.753659,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 16,
    name: "Kenema Pharmacy (Kenema Public Pharmacy, Number 4, 4Kilo)",
    address: "4Kilo Area, Addis Ababa",
    phone: "+251911234581",
    email: "4kilo@kenemapharmacy.com",
    latitude: 9.0337673,
    longitude: 38.7618262,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 17,
    name: "Kenema Public Pharmacy (Kenema Pharmacy, No.12, Infront of Filwuha)",
    address: "Infront of Filwuha, Addis Ababa",
    phone: "+251911234582",
    email: "filwuha@kenemapharmacy.com",
    latitude: 9.0167,
    longitude: 38.7565,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 18,
    name: "Kenema Pharmacy",
    latitude: 9.0142589,
    longitude: 38.757301,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234583",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 19,
    name: "Kenema pharmacy lideta condominium block 41",
    latitude: 9.0162133,
    longitude: 38.7378949,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234584",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 20,
    name: "Kenema Public Pharmacy Lideta Church, No. 08",
    latitude: 9.0107966,
    longitude: 38.7376213,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234585",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 21,
    name: "Kenema Pharmacy Number 12",
    latitude: 9.001841,
    longitude: 38.741997,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234586",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 22,
    name: "Kenema Pharmacy No. 3",
    latitude: 8.9670958,
    longitude: 38.7280262,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234587",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 23,
    name: "Kenema 40",
    latitude: 8.980332,
    longitude: 38.710412,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234588",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 24,
    name: "Kenema 53",
    latitude: 8.9849856,
    longitude: 38.7886375,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234589",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 25,
    name: "Kenema 31",
    latitude: 8.9825993,
    longitude: 38.666013,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234590",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 26,
    name: "Kenema 24",
    latitude: 8.97042,
    longitude: 38.675461,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234591",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 27,
    name: "Kenema 26",
    latitude: 8.961737,
    longitude: 38.70584,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234592",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 28,
    name: "Kenema 37",
    latitude: 8.9569435,
    longitude: 38.713759,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234593",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 29,
    name: "Kenema 46",
    latitude: 8.908858,
    longitude: 38.736664,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234594",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 30,
    name: "Kenema 21",
    latitude: 8.877951,
    longitude: 38.766642,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234595",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 31,
    name: "Kenema No. 06 (Akaki)",
    latitude: 8.866631,
    longitude: 38.789579,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234596",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 32,
    name: "Kenema 36",
    latitude: 8.887346,
    longitude: 38.795854,
    address: "Addis Ababa, Ethiopia",
    phone: "+251911234597",
    email: "info@kenemapharmacy.com",
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  }
])

const selectedLocation = ref(null)
const searchQuery = ref('')

// Filter locations based on search query
const filteredLocations = computed(() => {
  if (!searchQuery.value) return locations.value
  
  return locations.value.filter(location => 
    location.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    location.address.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

// Get center coordinates for map (average of all locations)
const mapCenter = computed(() => {
  if (selectedLocation.value) {
    return {
      latitude: selectedLocation.value.latitude,
      longitude: selectedLocation.value.longitude
    }
  }
  
  const avgLat = locations.value.reduce((sum, loc) => sum + loc.latitude, 0) / locations.value.length
  const avgLng = locations.value.reduce((sum, loc) => sum + loc.longitude, 0) / locations.value.length
  
  return {
    latitude: avgLat,
    longitude: avgLng
  }
})

const selectLocation = (location) => {
  selectedLocation.value = location
}

const clearSelection = () => {
  selectedLocation.value = null
}

const navigateToLocation = (location) => {
  const url = `https://www.google.com/maps/dir/?api=1&destination=${location.latitude},${location.longitude}`
  window.open(url, '_blank')
}
</script>

<template>
  <div id="Locations" class="bg-[#FFFCFA] w-full py-20">
    <div class="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-[#363940] mb-4">Our Locations</h2>
        <p class="text-[#666666] text-lg max-w-2xl mx-auto">
          Find the nearest Kenema Pharmacy location to you. We're committed to serving communities across Addis Ababa.
        </p>
      </div>

      <!-- Search Bar -->
      <div class="mb-8">
        <div class="relative max-w-md mx-auto">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search anything..."
            class="w-full px-4 py-3 pl-10 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
          >
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        
        </div>
      </div>

      <!-- Main Content: Locations List and Map Side by Side -->
      <div class="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">

        <!-- Locations List (Left Side) -->
        <div class="lg:w-1/3 w-full">
          <div class="bg-white rounded-lg shadow-lg p-6 h-fit max-h-[600px] overflow-y-auto">
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Pharmacy Locations</h3>
            <div class="space-y-3">
              <div
                v-for="(location, index) in filteredLocations"
                :key="location.id"
                class="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden cursor-pointer transition-all duration-200"
                :class="selectedLocation?.id === location.id ? 'bg-orange-500 text-white border-orange-500' : 'hover:shadow-md hover:border-orange-300'"
                @click="selectLocation(location)"
              >
                <div class="p-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                      <div
                        class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                        :class="selectedLocation?.id === location.id ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'"
                      >
                        {{ index + 1 }}
                      </div>
                      <div class="flex-1">
                        <h4
                          class="font-semibold text-sm"
                          :class="selectedLocation?.id === location.id ? 'text-white' : 'text-gray-900'"
                        >
                          {{ location.name }}
                        </h4>
                        <p
                          class="text-xs mt-1"
                          :class="selectedLocation?.id === location.id ? 'text-orange-100' : 'text-gray-500'"
                        >
                          {{ location.address }}
                        </p>
                        <p
                          class="text-xs mt-1"
                          :class="selectedLocation?.id === location.id ? 'text-orange-100' : 'text-gray-400'"
                        >
                          {{ location.hours }}
                        </p>
                      </div>
                    </div>
                    <div class="flex flex-col items-end space-y-1">
                      <div
                        class="w-2 h-2 rounded-full"
                        :class="location.isOpen ? 'bg-green-400' : 'bg-red-400'"
                      ></div>
                      <button
                        @click.stop="navigateToLocation(location)"
                        class="text-xs font-medium hover:underline"
                        :class="selectedLocation?.id === location.id ? 'text-white' : 'text-orange-500'"
                      >
                        Navigate
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <!-- No results message -->
              <div v-if="filteredLocations.length === 0" class="text-center py-8">
                <p class="text-gray-500 text-sm">No locations found matching your search.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Map Section (Right Side) -->
        <div class="lg:w-2/3 w-full">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <div class="p-4 bg-orange-500 text-white">
              <div class="flex items-center justify-between">
                <div>
                  <h3 class="text-xl font-semibold">
                    {{ selectedLocation ? selectedLocation.name : 'All Kenema Pharmacy Locations' }}
                  </h3>
                  <p class="text-orange-100 text-sm mt-1">
                    {{ selectedLocation ? selectedLocation.address : `Showing ${filteredLocations.length} locations` }}
                  </p>
                </div>
                <button
                  v-if="selectedLocation"
                  @click="clearSelection"
                  class="text-sm bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded transition-colors duration-200"
                >
                  Show All
                </button>
              </div>
            </div>
            <div class="h-96 lg:h-[500px]">
              <Map
                :latitude="mapCenter.latitude"
                :longitude="mapCenter.longitude"
              />
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
