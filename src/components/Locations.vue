<script setup>
import { ref, computed } from 'vue'
import Map from './Map.vue'

const selectedLocation = ref(null)
const searchQuery = ref('')

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
  },
   {
    id: 1,
    name: "Kenema No. 1 (Merkato)",
    address: "",
    phone: "+251911000001",
    email: "kenema01@kenemapharmacy.com",
    latitude: 9.008083,
    longitude: 38.746845,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 7,
    name: "Kenema No. 7 (Gotera)",
    address: "",
    phone: "+251911000007",
    email: "kenema07@kenemapharmacy.com",
    latitude: 8.990556,
    longitude: 38.776389,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 9,
    name: "Kenema No. 9 (Kotebe)",
    address: "",
    phone: "+251911000009",
    email: "kenema09@kenemapharmacy.com",
    latitude: 9.037431,
    longitude: 38.833381,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 13,
    name: "Kenema No. 13 (Minilik)",
    address: "",
    phone: "+251911000013",
    email: "kenema13@kenemapharmacy.com",
    latitude: 9.038169,
    longitude: 38.774638,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 17,
    name: "Kenema No. 17 (Tele Warehouse)",
    address: "",
    phone: "+251911000017",
    email: "kenema17@kenemapharmacy.com",
    latitude: 8.996619,
    longitude: 38.785246,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 19,
    name: "Kenema No. 19 (Yeka Abado)",
    address: "",
    phone: "+251911000019",
    email: "kenema19@kenemapharmacy.com",
    latitude: 9.018191,
    longitude: 38.841889,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 20,
    name: "Kenema No. 20 (Summit)",
    address: "",
    phone: "+251911000020",
    email: "kenema20@kenemapharmacy.com",
    latitude: 9.0022616,
    longitude: 38.8578621,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 23,
    name: "Kenema No. 23 (Arabsa Mazorya)",
    address: "",
    phone: "+251911000023",
    email: "kenema23@kenemapharmacy.com",
    latitude: 8.980294,
    longitude: 38.886021,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 27,
    name: "Kenema No. 27 (Ayat Tafo)",
    address: "",
    phone: "+251911000027",
    email: "kenema27@kenemapharmacy.com",
    latitude: 9.0477637,
    longitude: 38.8794987,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 29,
    name: "Kenema No. 29 (Summit 1)",
    address: "",
    phone: "+251911000029",
    email: "kenema29@kenemapharmacy.com",
    latitude: 8.996133,
    longitude: 38.863032,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 32,
    name: "Kenema No. 32 (Ayat 5 Condominium)",
    address: "",
    phone: "+251911000032",
    email: "kenema32@kenemapharmacy.com",
    latitude: 9.0092107,
    longitude: 38.883846,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 33,
    name: "Kenema No. 33 (49 Ayer Megenagna GBI)",
    address: "",
    phone: "+251911000033",
    email: "kenema33@kenemapharmacy.com",
    latitude: 9.004232,
    longitude: 38.8896077,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 35,
    name: "Kenema No. 35 (France)",
    address: "",
    phone: "+251911000035",
    email: "kenema35@kenemapharmacy.com",
    latitude: 9.062272,
    longitude: 38.761177,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 41,
    name: "Kenema No. 41 (Shala Menafesha)",
    address: "",
    phone: "+251911000041",
    email: "kenema41@kenemapharmacy.com",
    latitude: 9.026844,
    longitude: 38.8815,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 43,
    name: "Kenema No. 43 (Shiromeda)",
    address: "",
    phone: "+251911000043",
    email: "kenema43@kenemapharmacy.com",
    latitude: 9.062272,
    longitude: 38.761177,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 47,
    name: "Kenema No. 47 (Bole Arabsa)",
    address: "",
    phone: "+251911000047",
    email: "kenema47@kenemapharmacy.com",
    latitude: 8.980294,
    longitude: 38.886021,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 49,
    name: "Kenema No. 49 (Ayat Tsebel)",
    address: "",
    phone: "+251911000049",
    email: "kenema49@kenemapharmacy.com",
    latitude: 9.028647,
    longitude: 38.890015,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 50,
    name: "Kenema No. 50 (Goro Slasie)",
    address: "",
    phone: "+251911000050",
    email: "kenema50@kenemapharmacy.com",
    latitude: 8.987079,
    longitude: 38.847677,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 51,
    name: "Kenema No. 51 (Arabsa Jarso)",
    address: "",
    phone: "+251911000051",
    email: "kenema51@kenemapharmacy.com",
    latitude: 9.0,
    longitude: 38.88,
    isOpen: true,
    hours: "8:00 AM - 10:00 PM"
  },
  {
    id: 52,
    name: "Kenema No. 52 (Gelan Gura)",
    address: "",
    phone: "+251911000052",
    email: "kenema52@kenemapharmacy.com",
    latitude: 8.918163,
    longitude: 38.810775,
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



