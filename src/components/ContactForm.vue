<template>
  <form @submit.prevent="sendEmail" class="w-full md:w-2/3">
    <div class="mb-4">
      <label for="name" class="block text-white mb-2">Name</label>
      <input
        v-model="form.name"
        type="text"
        id="name"
        placeholder="Name"
        required
        class="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>

    <div class="mb-4">
      <label for="subject" class="block text-white mb-2">Subject</label>
      <input
        v-model="form.subject"
        type="text"
        id="subject"
        placeholder="Enter subject"
        required
        class="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
    </div>

    <div class="mb-6">
      <label for="message" class="block text-white mb-2">Message</label>
      <textarea
        v-model="form.message"
        id="message"
        rows="5"
        placeholder="Write your message here"
        required
        class="w-full p-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
      ></textarea>
    </div>

    <button
      type="submit"
      class="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded"
    >
      Submit
    </button>
  </form>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    async sendEmail() {
      try {
        await emailjs.send(
          "YOUR_SERVICE_ID",    // replace with EmailJS service ID
          "YOUR_TEMPLATE_ID",   // replace with EmailJS template ID
          {
            to_email: "kenemaenterprise@gmail.com", // fixed recipient
            from_name: this.form.name,
            subject: this.form.subject,
            message: this.form.message,
          },
          "6iubNcVl_nzdGNtHR"     // replace with EmailJS public key
        );

        alert("✅ Message sent successfully!");
        this.form.name = "";
        this.form.subject = "";
        this.form.message = "";
      } catch (error) {
        console.error("❌ Failed to send message:", error);
        alert("❌ Failed to send message. Please try again.");
      }
    },
  },
};
</script>
