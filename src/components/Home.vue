<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div id="Home" class="flex flex-col w-full items-center">
    <!-- Navigation Bar -->
    <div class="w-full bg-orange-500 py-4 px-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <div class="flex items-center gap-2">
          <div class="bg-white rounded-full p-1">
            <img src="/img/Vector.svg" alt="Logo" class="h-6 w-6" />
          </div>
          <span class="text-white text-sm">Kenema Pharmacies Enterprise</span>
        </div>
        <div class="hidden md:flex gap-6 text-white">
          <a href="#Home" @click.prevent="scrollToSection('Home')" class="hover:underline cursor-pointer">Home</a>
          <a href="#AboutUS" @click.prevent="scrollToSection('AboutUS')" class="hover:underline cursor-pointer">About</a>
          <a href="#our" @click.prevent="scrollToSection('our')" class="hover:underline cursor-pointer">Executives</a>
          <a href="#news" @click.prevent="scrollToSection('news')" class="hover:underline cursor-pointer">News</a>
          <a href="#Locations" @click.prevent="scrollToSection('Locations')" class="hover:underline cursor-pointer">Locations</a>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <div class="w-full bg-orange-500 py-20 px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">Kenema Pharmacies Enterprise</h1>
        <p class="text-white text-lg mb-10 max-w-2xl mx-auto">
          Ensuring every resident of Addis Ababa has access to high-quality medicines and medical supplies, we are committed to
          delivering safe, effective, and affordable healthcare solutions with our reliable services.
        </p>
        <div class="flex gap-4 justify-center">
          <button
            @click="scrollToSection('Locations')"
            class="bg-white text-orange-500 px-6 py-2 rounded-md hover:bg-gray-100 transition-colors duration-200"
          >
            Pharmacy Locations
          </button>
          <button
            @click="scrollToSection('contact')"
            class="bg-transparent text-white border border-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
          >
            Contact Us
          </button>
        </div>

      </div>
    </div>
  </div>
  </template>
