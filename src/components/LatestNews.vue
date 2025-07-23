<template>
  <div class="bg-[#FFFAF5] flex sm:h-[961px] w-full text-white items-center">
    <div id="news" class="w-3/4 h-3/4 mx-auto flex flex-col justify-between text-black">
      <div class="w-full flex text-center font-bold text-2xl">
        Latest Highlights
      </div>

      <!-- Carousel Container -->
      <div class="relative w-full sm:w-9/10 sm:h-[651px] overflow-hidden">
        <div class="flex transition-transform duration-500 ease-in-out h-full"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <!-- Slide 1 -->
          <div class="w-full flex-shrink-0 flex gap-2 justify-around">
            <div class="w-full sm:w-2/5 h-full flex flex-col gap-3 text-black bg-[#FFF5EC] p-4">
              <div class="flex justify-between">
                <span class="text-sm p-1 font-bold">ቁጥር 3 ስታዲየም ቅርንጫፍ</span>
                <span>May 14</span>
              </div>
              <p class="text-justify">
                ከነማ ቁጥር 3 ስታዲየም ቅርንጫፍ ለድርጅቱ መድሃኒት የሚያቀርብ የከተማውን የልማት ተጋሪነት ስሜት
                ባደረባቸው በመድሃኒት አቅራቢ ባለሃብቶች የእድሣት ወጪዉ የተሸፈነው ፋርማሲ የድርጅቱ የቦርድ አባላት እና
                ባለድርሻ አካላት በተገኙበት ተመርቆ ለአገልግሎት ዋለ
              </p>
              <img src="/src/assets/img/highlight.svg" alt="" class="flex-1 object-cover" />
              <button class="bg-[#F18A2D] text-center w-1/4 h-8 rounded-sm ml-auto" @click="readMore('stadium-branch')">Read more</button>
            </div>
            <div class="w-full sm:w-2/5 h-full flex flex-col gap-3 text-black bg-[#FFF5EC] p-4">
              <div class="flex justify-between">
                <span class="text-sm p-1 font-bold">የሰንሰለት ፕሮጀክት አጋር ድርጅቶች ከነማን ጎበኙ።</span>
                <span>April 20</span>
              </div>
              <p class="text-justify">
                በአዲስ አበባ ዩኒቨርሲቲ የፋርማሲ ት/ቤት መሪነት የጤና አቅርቦት ሰንሰለት አስተዳደር እና ትምህርት ላይ
                የአቅም ግንባታ ስራ እየሰራ ያለው የሰንሰለት ፕሮጀክት ባለፉት 6 ወራት ከ120 በላይ ለሚሆኑ የከነማ
                ፋርማሲ ባለሙያዎች የአቅም ግንባታ ስልጠና የሰጠ ሲሆን፣
              </p>
              <img src="/src/assets/img/hightight2.svg" alt="" class="flex-1 object-cover" />
              <button class="bg-[#F18A2D] text-center w-1/4 h-8 rounded-sm ml-auto" @click="readMore('chain-project')">Read more</button>
            </div>
          </div>

          <!-- Slide 2
          <div class="w-full flex-shrink-0 flex gap-2 justify-around">
            <div class="w-full sm:w-2/5 h-full flex flex-col gap-3 text-black bg-[#FFF5EC] p-4">
              <div class="flex justify-between">
                <span class="text-sm p-1 font-bold">የአዲስ ቅርንጫፍ መክፈት</span>
                <span>March 15</span>
              </div>
              <p class="text-justify">
                የከነማ ፋርማሲዎች ድርጅት በአዲስ አበባ ከተማ አዲስ ቅርንጫፍ መክፈቱን አስታወቀ። ይህ ቅርንጫፍ ለህብረተሰቡ
                የተሻለ የመድሃኒት አገልግሎት ለመስጠት ታስቦ የተዘጋጀ ሲሆን፣ ዘመናዊ መሳሪያዎችና ባለሙያዎች ይገኛሉ።
              </p>
              <img src="/src/assets/img/highlight.svg" alt="" class="flex-1 object-cover" />
              <button class="bg-[#F18A2D] text-center w-1/4 h-8 rounded-sm ml-auto" @click="readMore('new-branch')">Read more</button>
            </div>
            <div class="w-full sm:w-2/5 h-full flex flex-col gap-3 text-black bg-[#FFF5EC] p-4">
              <div class="flex justify-between">
                <span class="text-sm p-1 font-bold">የጤና ትምህርት ፕሮግራም</span>
                <span>February 28</span>
              </div>
              <p class="text-justify">
                ለህብረተሰቡ የጤና ትምህርት ለመስጠት የተዘጋጀው ፕሮግራም በተሳካ ሁኔታ ተጠናቋል። በዚህ ፕሮግራም
                ከ500 በላይ ተሳታፊዎች የተሳተፉ ሲሆን፣ የመድሃኒት አጠቃቀምና የጤና ጥበቃ ትምህርት ተሰጥቷል።
              </p>
              <img src="/src/assets/img/hightight2.svg" alt="" class="flex-1 object-cover" />
              <button class="bg-[#F18A2D] text-center w-1/4 h-8 rounded-sm ml-auto" @click="readMore('health-education')">Read more</button>
            </div>
          </div> -->

          <!-- Slide 3 -->
          <div class="w-full flex-shrink-0 flex gap-2 justify-around">
            <div class="w-full sm:w-2/5 h-full flex flex-col gap-3 text-black bg-[#FFF5EC] p-4">
              <div class="flex justify-between">
                <span class="text-sm p-1 font-bold">የአዲስ ቴክኖሎጂ መተግበር</span>
                <span>January 10</span>
              </div>
              <p class="text-justify">
                Today marks the official launch of our infrastructure development project for
                #Kenema_Pharmacies_Enterprise (G+2) at Nifas Silk Lafto, Addis Ababa, Ethiopia!

                The construction is scheduled to be completed within 2 months, bringing to life a new Center of
                Excellence in Community Pharmacy Services. This will be the first of its kind—offering comprehensive and
                essential pharmacy services tailored to meet community health needs.

                With a strong commitment to healthcare access, innovation, and excellence, Kenema Pharmacies is proud to
                take this important step forward.
                We build the future of pharmacy—together!

              </p>
              <img src="/src/assets/img/SefieTractor.jpg" alt="" class="flex-1 object-cover" />
              <button class="bg-[#F18A2D] text-center w-1/4 h-8 rounded-sm ml-auto" @click="readMore('infrastructure-project')">Read more</button>
            </div>

          </div>
        </div>

        <!-- Navigation Arrows -->
        <button @click="prevSlide"
          class="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#F18A2D] text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
          ←
        </button>
        <button @click="nextSlide"
          class="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#F18A2D] text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
          →
        </button>

        <!-- Dots Indicator -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <button v-for="(slide, index) in 3" :key="index" @click="goToSlide(index)" :class="[
            'w-3 h-3 rounded-full transition-colors',
            currentSlide === index ? 'bg-[#F18A2D]' : 'bg-gray-300'
          ]"></button>
        </div>
      </div>
    </div>

    <!-- Modal for full article -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-start mb-4">
            <div>
              <h2 class="text-2xl font-bold text-[#363940]">{{ selectedArticle?.title }}</h2>
              <p class="text-gray-500 text-sm">{{ selectedArticle?.date }}</p>
            </div>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700 text-2xl">&times;</button>
          </div>
          
          <img :src="selectedArticle?.image" alt="" class="w-full h-64 object-cover rounded-lg mb-4" />
          
          <div class="text-gray-700 leading-relaxed whitespace-pre-line">
            {{ selectedArticle?.content }}
          </div>
          
          <div class="mt-6 flex justify-end">
            <button @click="closeModal" class="bg-[#F18A2D] text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentSlide = ref(0)
const totalSlides = 3
let autoSlideInterval = null
const showModal = ref(false)
const selectedArticle = ref(null)

const articles = {
  'stadium-branch': {
    title: 'ቁጥር 3 ስታዲየም ቅርንጫፍ',
    date: 'May 14',
    content: `ከነማ ቁጥር 3 ስታዲየም ቅርንጫፍ ለድርጅቱ መድሃኒት የሚያቀርብ የከተማውን የልማት ተጋሪነት ስሜት ባደረባቸው በመድሃኒት አቅራቢ ባለሃብቶች የእድሣት ወጪዉ የተሸፈነው ፋርማሲ የድርጅቱ የቦርድ አባላት እና ባለድርሻ አካላት በተገኙበት ተመርቆ ለአገልግሎት ዋለ።
    
    ይህ አዲስ ቅርንጫፍ ለአካባቢው ህብረተሰብ የተሻለ የመድሃኒት አገልግሎት ለመስጠት የተዘጋጀ ሲሆን፣ ዘመናዊ መሳሪያዎችና ባለሙያዎች ይገኛሉ። ቅርንጫፉ በሳምንት 7 ቀን 24 ሰዓት አገልግሎት ይሰጣል።`,
    image: '/src/assets/img/highlight.svg'
  },
  'chain-project': {
    title: 'የሰንሰለት ፕሮጀክት አጋር ድርጅቶች ከነማን ጎበኙ',
    date: 'April 20',
    content: `በአዲስ አበባ ዩኒቨርሲቲ የፋርማሲ ት/ቤት መሪነት የጤና አቅርቦት ሰንሰለት አስተዳደር እና ትምህርት ላይ የአቅም ግንባታ ስራ እየሰራ ያለው የሰንሰለት ፕሮጀክት ባለፉት 6 ወራት ከ120 በላይ ለሚሆኑ የከነማ ፋርማሲ ባለሙያዎች የአቅም ግንባታ ስልጠና የሰጠ ሲሆን፣
    
    ይህ ፕሮጀክት የመድሃኒት አቅርቦት ሰንሰለትን ማሻሻል እና የባለሙያዎችን አቅም ማጎልበት ዋና ዓላማ ያደረገ ነው። በዚህ ስልጠና የተሳተፉ ባለሙያዎች የተሻለ አገልግሎት መስጠት ይችላሉ።`,
    image: '/src/assets/img/hightight2.svg'
  },
  'new-branch': {
    title: 'የአዲስ ቅርንጫፍ መክፈት',
    date: 'March 15',
    content: `የከነማ ፋርማሲዎች ድርጅት በአዲስ አበባ ከተማ አዲስ ቅርንጫፍ መክፈቱን አስታወቀ። ይህ ቅርንጫፍ ለህብረተሰቡ የተሻለ የመድሃኒት አገልግሎት ለመስጠት ታስቦ የተዘጋጀ ሲሆን፣ ዘመናዊ መሳሪያዎችና ባለሙያዎች ይገኛሉ።
    
    አዲሱ ቅርንጫፍ በዘመናዊ ቴክኖሎጂ የተገነባ ሲሆን፣ የመድሃኒት ማከማቻ፣ የምክር አገልግሎት እና የጤና ምርመራ አገልግሎቶችን ያካትታል። ቅርንጫፉ በሳምንት 7 ቀን አገልግሎት ይሰጣል።`,
    image: '/src/assets/img/highlight.svg'
  },
  'health-education': {
    title: 'የጤና ትምህርት ፕሮግራም',
    date: 'February 28',
    content: `ለህብረተሰቡ የጤና ትምህርት ለመስጠት የተዘጋጀው ፕሮግራም በተሳካ ሁኔታ ተጠናቋል። በዚህ ፕሮግራም ከ500 በላይ ተሳታፊዎች የተሳተፉ ሲሆን፣ የመድሃኒት አጠቃቀምና የጤና ጥበቃ ትምህርት ተሰጥቷል።
    
    ፕሮግራሙ የተለያዩ የጤና ጉዳዮችን ያካተተ ሲሆን፣ የመድሃኒት ትክክለኛ አጠቃቀም፣ የበሽታ መከላከያ ዘዴዎች እና የመጀመሪያ እርዳታ ስልጠናዎችን ያካትታል። ተሳታፊዎች በጣም ተጠቃሚ መሆናቸውን ገልጸዋል።`,
    image: '/src/assets/img/hightight2.svg'
  },
  'infrastructure-project': {
    title: 'የአዲስ ቴክኖሎጂ መተግበር',
    date: 'January 10',
    content: `Today marks the official launch of our infrastructure development project for Kenema Pharmacies Enterprise (G+2) at Nifas Silk Lafto, Addis Ababa, Ethiopia!

    The construction is scheduled to be completed within 2 months, bringing to life a new Center of Excellence in Community Pharmacy Services. This will be the first of its kind—offering comprehensive and essential pharmacy services tailored to meet community health needs.

    With a strong commitment to healthcare access, innovation, and excellence, Kenema Pharmacies is proud to take this important step forward. We build the future of pharmacy—together!`,
    image: '/src/assets/img/SefieTractor.jpg'
  }
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % totalSlides
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? totalSlides - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const readMore = (articleId) => {
  selectedArticle.value = articles[articleId]
  showModal.value = true
  stopAutoSlide() // Stop auto-slide when modal is open
}

const closeModal = () => {
  showModal.value = false
  selectedArticle.value = null
  startAutoSlide() // Resume auto-slide when modal is closed
}

const startAutoSlide = () => {
  autoSlideInterval = setInterval(() => {
    nextSlide()
  }, 10000)
}

const stopAutoSlide = () => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
    autoSlideInterval = null
  }
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  stopAutoSlide()
})
</script>
