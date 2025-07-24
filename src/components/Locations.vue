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
  // Add all pharmacy locations from pharmacyMap.vue
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
  },
  {
    id: 6,
    name: "Kenema Pharmacy, Lideta Condominium",
    address: "Ledeta",
    phone: "+0111566018",
    email: "info@kenemapharmacy.com",
    latitude: 9.016266952320276,
    longitude: 38.73789844696694,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 7,
    name: "Kenema Pharmacy, Number 8",
    address: "Ledeta",
    phone: "+0913706970",
    email: "info@kenemapharmacy.com",
    latitude: 9.027169437917687,
    longitude: 38.79614906935321,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 8,
    name: "Kenema Pharmacy, Number 17",
    address: "Menelik",
    phone: "+0911874157",
    email: "info@kenemapharmacy.com",
    latitude: 9.015535138037157,
    longitude: 38.76656234787673,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 9,
    name: "Kenema Pharmacy, Merkato",
    address: "Merkato",
    phone: "+0112132006",
    email: "info@kenemapharmacy.com",
    latitude: 9.029098135194726,
    longitude: 38.78699005133013,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 10,
    name: "Kenema Pharmacy, Number 7",
    address: "Shola",
    phone: "+0944229932",
    email: "info@kenemapharmacy.com",
    latitude: 9.028250462810908,
    longitude: 38.78784835819792,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 11,
    name: "Kenema Pharmacy, Number 5",
    address: "Denberua",
    phone: "+0913368701",
    email: "info@kenemapharmacy.com",
    latitude: 9.024520680651904,
    longitude: 38.788020019571476,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 12,
    name: "Kenema Pharmacy, Number 9",
    address: "Addis Ababa",
    phone: "+0911080034",
    email: "info@kenemapharmacy.com",
    latitude: 9.004345281849222,
    longitude: 38.75094116288295,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 13,
    name: "Kenema Pharmacy, Number 12",
    address: "Mechare",
    phone: "+0930014763",
    email: "info@kenemapharmacy.com",
    latitude: 9.0046843734906,
    longitude: 38.74252975557861,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 14,
    name: "Kenema Pharmacy, Stadium",
    address: "Stadium",
    phone: "+0111566018",
    email: "info@kenemapharmacy.com",
    latitude: 9.049289426194287,
    longitude: 38.87967035986613,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 15,
    name: "Kenema Pharmacy, Nifas Silk",
    address: "Nifas silk",
    phone: "+0913072806",
    email: "info@kenemapharmacy.com",
    latitude: 9.023348525526949,
    longitude: 38.78673389162476,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 16,
    name: "Kenema Pharmacy, Arada",
    address: "Addis Ababa",
    phone: "+0911239250",
    email: "info@kenemapharmacy.com",
    latitude: 9.074715,
    longitude: 38.737810,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 17,
    name: "Kenema Pharmacy, No. 19",
    address: "Addis Ababa",
    phone: "+0111566018",
    email: "info@kenemapharmacy.com",
    latitude: 9.06651960551578,
    longitude: 38.872324666733924,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 18,
    name: "Kenema Pharmacy, Number 14",
    address: "Addis Ababa",
    phone: "+0932354518",
    email: "info@kenemapharmacy.com",
    latitude: 9.059569686802346,
    longitude: 38.71989604398679,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  }
])

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
  <div id="Locations" class="bg-orange-500 w-full py-20">
    <div class="max-w-[1296px] mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-white mb-4">Locations</h2>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col lg:flex-row gap-6">
        <!-- Map Section (Left Side) -->
        <div class="lg:w-2/3 w-full">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden h-[500px]">
            <Map
              :latitude="mapCenter.latitude"
              :longitude="mapCenter.longitude"
            />
            <!-- <div class="absolute bottom-4 right-4 bg-orange-500 text-white px-4 py-2 rounded">
              Navigate
            </div> -->
          </div>
        </div>

        <!-- Search and List Section (Right Side) -->
        <div class="lg:w-1/3 w-full">
          <div class="bg-white rounded-lg shadow-lg overflow-hidden">
            <!-- Search Bar -->
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

            <!-- Location List -->
            <div class="max-h-[400px] overflow-y-auto">
              <div
                v-for="(location, index) in filteredLocations.slice(0, 10)"
                :key="location.id"
                @click="selectLocation(location)"
                :class="[
                  'p-4 border-b cursor-pointer hover:bg-gray-50 transition-colors',
                  selectedLocation?.id === location.id ? 'bg-orange-100' : '',
                  index === 0 ? 'bg-orange-500 text-white' : 'text-gray-800'
                ]"
              >
                <div class="flex items-center gap-3">
                  <div :class="[
                    'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                    index === 0 ? 'bg-white text-orange-500' : 'bg-orange-500 text-white'
                  ]">
                    {{ index + 1 }}
                  </div>
                  <div class="flex-1">
                    <div class="font-semibold text-sm">{{ location.name }}</div>
                    <div :class="[
                      'text-xs',
                      index === 0 ? 'text-orange-100' : 'text-gray-500'
                    ]">
                      {{ location.address }}
                    </div>
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

