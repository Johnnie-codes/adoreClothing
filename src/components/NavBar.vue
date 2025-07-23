<template>
  <nav class="py-4 px-10 md:px-20">
    <div class="container mx-auto flex justify-between">
      <img class="hidden md:block" src="/src/assets/img/Frame 7.svg" alt="" />
      <div class="hidden md:block">
        <ul class="flex items-center gap-4">
          <li>
            <a href="#Home" class="text-gray-400 hover:text-black">Home</a>
          </li>
          <li>
            <a href="#AboutUS" class="text-gray-400 hover:text-black"
              >About Us</a
            >
          </li>

          <li>
            <a href="#client" class="text-gray-400 hover:text-black">Clients</a>
          </li>

          <li>
            <a href="#our" class="text-gray-400 hover:text-black">Executives</a>
          </li>
          <li>
            <a href="#news" class="text-gray-400 hover:text-black">News</a>
          </li>
          <li>
            <a href="#contact" class="text-gray-400 hover:text-black"
              >Contacts</a
            >
          </li>

          <button
            @click="$router.push('/pharmacy-map')"
            class="hover:bg-green-500"
          >
            pharmacy
            <!-- <img
              src="/src/assets/img/Link.svg"
              class="hover:bg-green-500"
              alt=""
            /> -->
          </button>
        </ul>
      </div>
      <div class="md:hidden">
        <button
          @click="toggleMenu"
          class="text-white bg-black focus:outline-none"
        >
          <svg
            v-if="!menuOpen"
            class="h-6 bg-black w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            v-else
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
    <div v-if="menuOpen" class="md:hidden bg-gray-800">
      <ul class="flex flex-col space-y-2 px-4">
        <li>
          <a href="#our" class="text-gray-400 hover:text-white">Service</a>
        </li>
        <li>
          <a href="#AboutUS" class="text-gray-400 hover:text-white">About Us</a>
        </li>
        <li>
          <a href="#" class="text-gray-400 hover:text-white">Our Partners</a>
        </li>
        <li><a href="#" class="text-gray-400 hover:text-white">News</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Products</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">services</a></li>
        <button class="hover:bg-green-500">
          <img
            src="/src/assets/img/Link.svg"
            class="hover:bg-green-500"
            alt=""
          />
        </button>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>