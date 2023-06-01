<template>
  <div class="relative p-5 font-Poppins top-96 mt-96 justify-center align-middle">
    <div class="flex flex-col gap-5 mt-96 absolute z-10 top-96 text-black p-20 justify-center">
      <span class="text-4xl font-semibold justify-center mt-40">
        Core Technologies
      </span>
      <p class="text-xl text-black-500">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex odio, turpis accumsan congue euisque blandit. Pellen tesque habitant.
      </p>
      <ul class="flex justify-center p-5 rounded-full shadow-2xl">
        <li><button class="btn btn-ghost hover:text-blue-500">Design</button></li>
        <li><button class="btn btn-ghost border-l-2 border-l-black rounded-none hover:text-blue-500">Development</button></li>
        <li><button class="btn btn-ghost border-l-2 border-l-black rounded-none hover:text-blue-500">Marketing</button></li>
      </ul>
      <div class="flex flex-wrap gap-5">
        <img v-for="(image, index) in images" :key="index" :src="image.url" :alt="image.name"  class="shadow-xl p-5 bg-slate-100 rounded-xl border-2 border-blue-500 hover:bg-blue-600"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

async function importAllImages() {
  const imageFiles = import.meta.globEager('../../public/tech/*.{png,jpeg,jpg,svg}');
  const images = Object.entries(imageFiles).map(([path, module]) => {
    const imageName = path.match(/.\w+$/);
    const imageUrl = module.default;
    return { name: imageName, url: imageUrl };
  });
  return images;
}

onMounted(async () => {
  images.value = await importAllImages();
});
</script>

<style scoped>
/* Add your custom styles here */
</style>
