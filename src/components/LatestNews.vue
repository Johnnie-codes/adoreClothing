<template>
  <section class="bg-gradient-to-br from-orange-50 to-orange-100 py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed with the latest developments, achievements, and announcements from Kenema Pharmacies
        </p>
        
        <!-- PDF Download Button -->
        <div class="mt-8">
          <button 
            @click="downloadPDF"
            class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center mx-auto shadow-lg hover:shadow-xl"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
            Download KPE Strategic Roadmap (2018- 2024EC) (PDF)
          </button>
        </div>
      </div>

      <!-- Featured Article -->
      <div class="mb-12">
        <article class="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div class="md:flex">
            <div class="md:w-1/2">
              <img 
                :src="featuredArticle.image" 
                :alt="featuredArticle.title"
                class="w-full h-64 md:h-full object-cover"
              />
            </div>
            <div class="md:w-1/2 p-8">
              <div class="flex items-center mb-4">
                <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">Featured</span>
                <span class="text-gray-500 text-sm ml-4">{{ featuredArticle.date }}</span>
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ featuredArticle.title }}</h3>
              <p class="text-gray-600 mb-6 leading-relaxed">{{ featuredArticle.excerpt }}</p>
              <div class="flex gap-4">
                <button 
                  @click="openArticle(featuredArticle)"
                  class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
                >
                  Read Full Story
                </button>
                <!-- <button 
                  @click="downloadPDF"
                  class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  </svg>
                  Download PDF
                </button> -->

              </div>
            </div>
          </div>
        </article>
      </div>

      <!-- News Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="article in regularArticles" 
          :key="article.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div class="relative">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-48 object-cover"
            />
            <div class="absolute top-4 left-4">
              <span :class="getCategoryClass(article.category)" class="px-3 py-1 rounded-full text-xs font-medium">
                {{ article.category }}
              </span>
            </div>
          </div>
          
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-500 mb-3">
              <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
              </svg>
              {{ article.date }}
            </div>
            
            <h3 class="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">{{ article.title }}</h3>
            <p class="text-gray-600 text-sm mb-4 line-clamp-3">{{ article.excerpt }}</p>
            
            <button 
              @click="openArticle(article)"
              class="text-orange-500 hover:text-orange-600 font-medium text-sm flex items-center transition-colors duration-200"
            >
              Read More
              <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </article>
      </div>

      <!-- Load More Button -->
      <div class="text-center mt-12">
        <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
          Load More Articles
        </button>
      </div>
    </div>

    <!-- Article Modal -->
    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div class="relative">
          <img 
            :src="selectedArticle?.image" 
            :alt="selectedArticle?.title"
            class="w-full h-64 object-cover"
          />
          <button 
            @click="closeModal" 
            class="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        <div class="p-8 overflow-y-auto max-h-[calc(90vh-16rem)]">
          <div class="flex items-center mb-4">
            <span :class="getCategoryClass(selectedArticle?.category)" class="px-3 py-1 rounded-full text-sm font-medium">
              {{ selectedArticle?.category }}
            </span>
            <span class="text-gray-500 text-sm ml-4">{{ selectedArticle?.date }}</span>
          </div>
          
          <h1 class="text-3xl font-bold text-gray-900 mb-6">{{ selectedArticle?.title }}</h1>
          
          <div class="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p v-for="paragraph in selectedArticle?.content" :key="paragraph" class="mb-4">
              {{ paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const showModal = ref(false)
const selectedArticle = ref(null)

// PDF download function
const downloadPDF = () => {
  // Create a link element
  const link = document.createElement('a')
  
  // Set the PDF file path to your actual file
  link.href = '/src/assets/Final_report_KPE_strategic_roadmap_July2025.pdf'
  
  // Set the download attribute with desired filename
  link.download = 'Kenema-Pharmacy-Enterprises-Strategic-Roadmap-2018-2024EC.pdf'
  
  // Append to body, click, and remove
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const articles = ref([
  {
    id: 1,
    title: "New Kenema Pharmacy Branch Opens in Stadium Area",
    excerpt: "Our latest branch at Stadium No. 3 brings modern pharmaceutical services to the community with state-of-the-art facilities and expert pharmacists.",
    content: [
      "Kenema Pharmacy is proud to announce the opening of our newest branch at Stadium No. 3, marking another milestone in our commitment to accessible healthcare.",
      "This new facility features modern pharmaceutical equipment, a comprehensive medication inventory, and consultation services provided by our experienced pharmacists.",
      "The branch operates 24/7 to ensure community members have access to essential medications and health services whenever needed.",
      "We thank our partners and stakeholders who made this expansion possible, furthering our mission to serve the healthcare needs of our community."
    ],
    date: "December 15, 2024",
    category: "Expansion",
    image: "/src/assets/img/highlight.svg",
    featured: true
  },
  {
    id: 2,
    title: "Partnership with Addis Ababa University Pharmacy School",
    excerpt: "Strengthening healthcare education through our collaboration with AAU's Pharmacy School, providing training to over 120 professionals.",
    content: [
      "Our partnership with Addis Ababa University's School of Pharmacy has reached a significant milestone with the completion of capacity building training for over 120 Kenema pharmacy professionals.",
      "The 6-month program focused on supply chain management and pharmaceutical education, enhancing the skills of our workforce.",
      "This collaboration represents our commitment to continuous professional development and maintaining the highest standards in pharmaceutical care.",
      "The training program will continue to benefit our staff and ultimately improve the quality of service we provide to our customers."
    ],
    date: "December 10, 2024",
    category: "Education",
    image: "/src/assets/img/hightight2.svg"
  },
  {
    id: 3,
    title: "Infrastructure Development Project Launch",
    excerpt: "Construction begins on our new Center of Excellence in Community Pharmacy Services at Nifas Silk Lafto, set to complete in 2 months.",
    content: [
      "Today marks the official launch of our infrastructure development project for Kenema Pharmacies Enterprise (G+2) at Nifas Silk Lafto, Addis Ababa.",
      "The construction is scheduled to be completed within 2 months, bringing to life a new Center of Excellence in Community Pharmacy Services.",
      "This will be the first of its kind—offering comprehensive and essential pharmacy services tailored to meet community health needs.",
      "With a strong commitment to healthcare access, innovation, and excellence, Kenema Pharmacies is proud to take this important step forward. We build the future of pharmacy—together!"
    ],
    date: "December 5, 2024",
    category: "Infrastructure",
    image: "/src/assets/img/SefieTractor.jpg"
  },
  {
    id: 4,
    title: "Community Health Education Program Success",
    excerpt: "Over 500 participants benefited from our comprehensive health education program focusing on medication safety and disease prevention.",
    content: [
      "Our community health education program has successfully concluded with over 500 participants gaining valuable knowledge about health and medication management.",
      "The program covered essential topics including proper medication usage, disease prevention methods, and first aid training.",
      "Participants expressed high satisfaction with the program, noting the practical value of the information provided.",
      "This initiative reflects our commitment to not just providing medications, but also educating our community about health and wellness."
    ],
    date: "November 28, 2024",
    category: "Community",
    image: "/src/assets/img/hightight2.svg"
  },
  {
    id: 5,
    title: "Digital Health Services Integration",
    excerpt: "Introducing new digital services including online consultations, prescription management, and health monitoring tools.",
    content: [
      "Kenema Pharmacies is embracing digital transformation with the launch of our comprehensive digital health services platform.",
      "Our new services include online pharmaceutical consultations, digital prescription management, and health monitoring tools.",
      "Customers can now access our services remotely, making healthcare more convenient and accessible.",
      "This digital initiative represents our commitment to innovation and meeting the evolving needs of our community in the digital age."
    ],
    date: "November 20, 2024",
    category: "Technology",
    image: "/src/assets/img/highlight.svg"
  }
])

const featuredArticle = computed(() => articles.value.find(article => article.featured))
const regularArticles = computed(() => articles.value.filter(article => !article.featured))

const getCategoryClass = (category) => {
  const classes = {
    'Expansion': 'bg-green-100 text-green-800',
    'Education': 'bg-blue-100 text-blue-800',
    'Infrastructure': 'bg-purple-100 text-purple-800',
    'Community': 'bg-yellow-100 text-yellow-800',
    'Technology': 'bg-indigo-100 text-indigo-800'
  }
  return classes[category] || 'bg-gray-100 text-gray-800'
}

const openArticle = (article) => {
  selectedArticle.value = article
  showModal.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  showModal.value = false
  selectedArticle.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.prose {
  max-width: none;
}
</style>
