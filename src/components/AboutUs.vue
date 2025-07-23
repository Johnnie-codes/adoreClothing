<template >
  <div class="bg-[#FFFCFA] w-full">
    <div
      id="AboutUS"
      class="max-w-[1296px] gap-16 flex flex-col mx-auto py-20 px-4 sm:px-6 lg:px-8 space-y-10"
    >
      <div class="text-[#363940] text-4xl font-bold">About Kenema</div>
      <div class="flex flex-col md:flex-row items-center md:space-x-8">
        <img
          src="/src/assets/img/AboutKenema.png"
          class="w-full md:w-[50%]"
          alt=""
        />
        <p class="text-[#666666] text-base md:text-justify md:w-[50%]">
          At Kenema pharmacy, we are dedicated to providing our community with
          the highest quality pharmaceutical care and customer service. Our
          pharmacy was founded in 1975 with the goal of becoming a trusted
          healthcare partner for local families and individuals. <br />
          Our experienced team of pharmacists, pharmacy technicians, and support
          staff work together to ensure that every customer who walks through
          our doors receives personalized attention and the medications or
          medical supplies they need. We take the time to get to know each of
          our patients, understand their unique healthcare needs, and provide
          customized solutions. <br />
          At the heart of our business is a commitment to improving the health
          and wellbeing of our community. We believe in building lasting
          relationships with our patients and working collaboratively with local
          doctors, nurses, and other healthcare providers.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-xl shadow-md p-6">
          <h3 class="text-[#363940] text-3xl font-bold mb-4">Vision</h3>
          <div class="text-[#666666] text-base space-y-4">
            <p>
              To become a leading service provider in Ethiopia by meeting the
              community's demand for medicine and healthcare supply and
              distribution as of 2022.
            </p>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6">
          <h3 class="text-[#363940] text-3xl font-bold mb-4">Mission</h3>
          <div class="text-[#666666] text-base space-y-4">
            <p>
              To provide essential medicines and healthcare services that are
              reliable, safe, and affordable to the community, thereby enhancing
              their well-being and promoting economic growth through competitive
              and efficient service delivery.
            </p>
          </div>
        </div>
        <div class="bg-white rounded-xl shadow-md p-6">
          <h3 class="text-[#363940] text-3xl font-bold mb-4">Values</h3>
          <div class="text-[#666666] text-base space-y-2">
            <p class="flex icon items-center"> Competitiveness</p>
            <p class="flex icon items-center"> Profitability</p>
            <p class="flex icon items-center"> Social Responsibility</p>
            <p class="flex icon items-center"> Reliability</p>
            <p class="flex icon items-center">Accountability</p>
            <p class="flex icon items-center"> Legal Compliance</p>
            <p class="flex icon items-center"> Professional Ethics</p>
            <p class="flex icon items-center"> High-Quality Service</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.icon::before {
  content: "•";
}
</style>
