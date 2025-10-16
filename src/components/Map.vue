<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from "vue";
import { useGeolocation } from "@/components/tables/useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";
const props = defineProps({
  
  latitude: {
    type: Number,
    // default: 9.004745685995223, 
  },
  longitude: {
    type: Number,
    // default: 38.78508250245778,
  },
  locations: {
    type: Array,
    default: () => [],
  },
});
const emit = defineEmits(["marker-click"]);

const GOOGLE_MAPS_API_KEY = "AIzaSyCIA2P9qeYtaXVPJHlGU5CF-mJNE8hpCV0";

const { coords } = useGeolocation();
// const currPos = computed(() => ({
//       lat: coords.value.latitude,
//       lng: coords.value.longitude
//     }))
const currPos = computed(() => ({
  lat: props?.latitude,
  lng: props?.longitude,
}));

console.log("current position", currPos.value);
const sp = computed(() => ({
  lat: coords.value.latitude,
  lng: coords.value.longitude,
}));
console.log("sssssss ss", sp.value);

const otherPos = ref(null);
const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
const mapDiv = ref(null);
let map = ref(null);
let clickListener = null;
let marker = null;
let markers = [];
let infoWindow = null;

onMounted(async () => {
  await loader.load();
  map.value = new google.maps.Map(mapDiv.value, {
    center: currPos.value,
    zoom:15,
  });
  marker = new google.maps.Marker({
    position: currPos.value,
    map: map.value,
  });
  infoWindow = new google.maps.InfoWindow();
  updateLocationMarkers();
  fitBoundsToMarkers();
});

onUnmounted(async () => {
  if (clickListener) clickListener.remove();
});

let line = null;
watch([map, currPos, otherPos], () => {
  if (line) line.setMap(null);
  if (map.value && otherPos.value != null) {
    line = new google.maps.Polyline({
      path: [sp.value, otherPos.value],
      map: map.value,
    });
  }
  // Update marker position if otherPos is set
  if (otherPos.value !== null) {
    marker.setPosition(currPos.value);
  }
});

watch(
  () => props.locations,
  () => {
    updateLocationMarkers();
    fitBoundsToMarkers();
  },
  { deep: true }
);

watch(currPos, (pos) => {
  if (map.value && pos?.lat && pos?.lng) {
    map.value.setCenter(pos);
    marker.setPosition(pos);
  }
});

function clearLocationMarkers() {
  markers.forEach(m => m.setMap(null));
  markers = [];
}

function updateLocationMarkers() {
  if (!map.value) return;
  clearLocationMarkers();
  if (Array.isArray(props.locations) && props.locations.length > 0) {
    props.locations.forEach((loc) => {
      if (typeof loc.latitude === 'number' && typeof loc.longitude === 'number') {
        const m = new google.maps.Marker({
          position: { lat: loc.latitude, lng: loc.longitude },
          map: map.value,
          title: loc.name || '',
        });
        m.addListener('click', () => {
          emit('marker-click', loc);
          if (infoWindow) {
            const content = `<div style="font-family: Ubuntu; font-size: 14px;"><strong>${loc.name || ''}</strong><div>${loc.address || ''}</div></div>`;
            infoWindow.setContent(content);
            infoWindow.open({ map: map.value, anchor: m });
          }
        });
        markers.push(m);
      }
    });
  }
}

function fitBoundsToMarkers() {
  if (!map.value) return;
  const allMarkers = [...markers];
  if (marker) allMarkers.push(marker);
  if (allMarkers.length === 0) return;
  const bounds = new google.maps.LatLngBounds();
  allMarkers.forEach(m => bounds.extend(m.getPosition()));
  map.value.fitBounds(bounds);
}

const haversineDistance = (pos1, pos2) => {
  const R = 3958.8; // Radius of the Earth in miles
  const rlat1 = pos1.lat * (Math.PI / 180); // Convert degrees to radians
  const rlat2 = pos2.lat * (Math.PI / 180); // Convert degrees to radians
  const difflat = rlat2 - rlat1; // Radian difference (latitudes)
  const difflon = (pos2.lng - pos1.lng) * (Math.PI / 180); // Radian difference (longitudes)

  const d =
    2 *
    R *
    Math.asin(
      Math.sqrt(
        Math.sin(difflat / 2) * Math.sin(difflat / 2) +
          Math.cos(rlat1) *
            Math.cos(rlat2) *
            Math.sin(difflon / 2) *
            Math.sin(difflon / 2)
      )
    );
  return d;
};
const distance = computed(() =>
  otherPos.value === null ? 0 : haversineDistance(currPos.value, otherPos.value)
);
</script>

<template>
  <div class="flex my-6 relative w-full">
    <div ref="mapDiv" style="width: 100%; height: 40vh"></div>
   
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Ubuntu");

.shadow-left {
  box-shadow: -5px 0 5px -5px rgba(0, 0, 0, 0.5); /* Adjust the values as needed */
}
h2 {
  color: black;
  font: 800;
  font-size: 16px;
  font-family: "Ubuntu";
}
p {
  font: 800;
  font-size: 14px;
  font-family: "Ubuntu";
}
</style>
