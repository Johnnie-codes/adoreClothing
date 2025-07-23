<template>
  <div id="contact" class="flex h-auto w-full bg-black py-20">
    <div class="flex flex-col mx-auto w-full md:w-10/12 lg:w-[1152px] border border-blue-400 border-opacity-30 rounded-md p-6">
      <h2 class="text-white text-2xl mb-6">Contact us</h2>
      
      <div class="flex flex-col md:flex-row gap-8">
        <!-- Contact Form -->
        <div class="w-full md:w-2/3">
          <div class="mb-4">
            <label for="name" class="block text-white mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Name" 
              class="w-full p-2 bg-gray-800 text-white rounded"
            >
          </div>
          
          <div class="mb-4">
            <label for="email" class="block text-white mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="contact@gmail.com" 
              class="w-full p-2 bg-gray-800 text-white rounded"
            >
          </div>
          
          <div class="mb-4">
            <label for="subject" class="block text-white mb-2">Subject</label>
            <input 
              type="text" 
              id="subject" 
              placeholder="contact@gmail.com" 
              class="w-full p-2 bg-gray-800 text-white rounded"
            >
          </div>
          
          <div class="mb-6">
            <label for="message" class="block text-white mb-2">Message</label>
            <textarea 
              id="message" 
              rows="5" 
              placeholder="Write your message here" 
              class="w-full p-2 bg-gray-800 text-white rounded"
            ></textarea>
          </div>
          
          <button class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded">
            Submit
          </button>
        </div>
        
        <!-- Company Info -->
        <div class="w-full md:w-1/3 mt-8 md:mt-0">
          <div class="mb-8">
            <h3 class="text-white mb-2">Company</h3>
            <ul class="text-gray-300">
              <li class="mb-1">About</li>
              <li class="mb-1">Company values</li>
              <li class="mb-1">Our executives</li>
              <li class="mb-1">Locations</li>
            </ul>
          </div>
          
          <div>
            <h3 class="text-white mb-2">Contact us</h3>
            <ul class="text-gray-300">
              <li class="mb-1">• kenemaenterprise@gmail.com</li>
              <li class="mb-1">• +251911678707</li>
              <li class="mb-1">• Bole sub city, 22 Awraris building<br>3rd floor, Room number 302</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="mt-12 pt-6 border-t border-gray-700 flex justify-between items-center">
        <p class="text-gray-400 text-sm">© Kenema.com All rights reserved.</p>
        <p class="text-gray-400 text-sm">Powered by Medco</p>
        <div class="flex gap-3">
          <a href="#" class="text-gray-400 hover:text-white">
            <span class="sr-only">Instagram</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <span class="sr-only">Twitter</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <span class="sr-only">Email</span>
            <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


