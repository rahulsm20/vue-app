<script setup>
import Navbar from '../components/Navbar.vue';
import About from '../components/About.vue'
import Services from '../components/Services.vue'
import CoreTech from '../components/CoreTech.vue';
import Contact from '../components/Contact.vue';
</script>

<template>
  <div class="relative font-Poppins">
    <Navbar />
    <div class="flex flex-col flex-wrap absolute">
      <img class="image" src="/MaskGroup4.svg">
      <section class="flex flex-col gap-5 mt-0 absolute z-10 top-40 font-Poppins">
      <p class="text-5xl w-2/3">
        Lorem Ipsum is simply dummy text of the printing and typesetting.
      </p>
      <p class="left-0 text-teal-100 w-2/3">
        Our products are fully custom-made, built with the latest technologies and cloud-architectures.
      </p>
      <button class="btn bg-white btn-ghost text-black w-52 p-2 hover:bg-white"> Get started >> </button>
    </section>
    <About/>
    <Services/>
    <CoreTech/>
  </div>
</div>
</template>

<style scoped>
.image {
  transform: scale(1.185);
}
</style>
