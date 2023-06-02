<script setup>
const handleSubmit = ()=>{
    event.preventDefault();
    console.log('Form submitted')
    window.location.replace('/dashboard')
}
</script>

<template>
<section class="relative font-Poppins">
    <img class="-left-[760px] absolute bg-white z-0" src="/Group35699.svg">
    <form class="flex flex-col text-black gap-5 w-80 z-10 justify-center top-40 left-96 ms-96 absolute" @submit="$event=>handleSubmit()">
        <h2 class="text-2xl font-semibold">Login to access dashboard</h2>
        <label for="email" class="flex items-center font-semibold"> Email <sup class="text-red-500">*</sup></label>
    <input class="input bordered border-slate-400 bg-transparent text-black rounded" required="true" id="email" type="email"/>
    <div class="flex justify-between"> 
        <label for="password" class="font-semibold items-center"> Password <sup class="text-red-500">*</sup></label>
        <!--Could be configured to redirect to account recovery page -->
        <a href="/"><span class="text-red-500 font-semibold">Forgot password?</span></a>
    </div>
    <input class="input bordered border-slate-400 bg-transparent text-black rounded" required="true" id="password" type="password"/>
    <button class="btn btn-ghost normal-case text-blue-500 rounded-full border-blue-500 hover:bg-blue-500 hover:text-white" :on-click="$event=>handleSubmit()"> Login >> </button>
    </form>
</section>

</template>

<style scoped>
</style>