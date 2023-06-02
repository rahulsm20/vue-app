<script setup>
import Sidebar from '../components/Sidebar.vue';
import data from '../../public/data.json'
import traders from '../../public/traders.json'
import comparisons from '../../public/comparisons.json'
</script>

<template>
    <section>
        <Sidebar />
        <section id="dashboard_body" class="left-40 relative top-20 text-black">
            <div class="flex justify-between" id="header">
                <div class="flex flex-col gap-5">
                    <p class="font-semibold text-5xl"> Dashboard </p>
                    <span class="flex text-[#8990AD]"> Welcome back, Andrew</span>
                </div>
                <div class="right-96 me-40 flex gap-5 justify-center items-center">
                    <button
                        class="btn bg-[#0F77FA] text-white border-0 hover:bg-blue-800 flex justify-between gap-2 normal-case font-semibold">
                        <img src="/e-add.svg" />
                        <span>
                            Add unit
                        </span>
                    </button>
                    <img class="rounded-full scale-50" src="/headshots/headshot1.png" />
                    <span>
                        Andrew Johnstons
                    </span>
                </div>
            </div>
            <ul class="relative text-black flex top-10 content-between w-[1140px]">
                <li class="flex justify-start items-start flex-col gap-2 border-r-2 p-10">
                    <p class="text-[#8990AD]"> BALANCE </p>
                    <span class="text-4xl">$5900.00</span>
                </li>
                <li class="flex justify-start items-start flex-col gap-2 border-r-2 p-10">
                    <p class="text-[#8990AD]"> PROFITS </p>
                    <span class="text-4xl">$950.00</span>
                </li>
                <li class="flex justify-start items-start flex-col gap-2 border-r-2 p-10">
                    <p class="text-[#8990AD]"> LOSSES </p>
                    <span class="text-4xl">$450.00</span>
                </li>
                <li class="flex justify-start items-start flex-col gap-2 border-r-2 p-10">
                    <p class="text-[#8990AD]"> CURRENCIES </p>
                    <div class="flex gap-5">
                        <div class="rounded-full p-4 btn btn-ghost bg-blue-200">
                            <img src="/bitcoin-2.svg" />
                        </div>
                        <div class="rounded-full p-4 btn btn-ghost bg-blue-200">
                            <img src="/currency-dollar.svg" />
                        </div>
                        <div class="rounded-full p-4 btn btn-ghost bg-blue-200">
                            <img src="/currency-euro.svg" />
                        </div>
                        <div class="rounded-full p-4 btn btn-ghost bg-blue-200">
                            <img src="/currency-yen.svg" />
                        </div>
                    </div>
                </li>
            </ul>
            <ul class="flex gap-10 shadow-2xl p-10 justify-around top-20 mt-20 w-[1140px]">
                <li v-for="country in data" :key="country.id" class="flex flex-col gap-5">
                    <span class="text-xl">
                        {{ country.country }}
                    </span>
                    <span class="text-2xl font-Lato flex justify-center items-center gap-1">    
                        <span>
                            {{ country.profit }}
                        </span>
                        <img :src="country.change" class="scale-50" />
                    </span>
                    <img :src="country.graph" />
                </li>
            </ul>
            <div class="grid grid-cols-2 gap-0">
                <ul class="flex mt-20 flex-col justify-start items-start">
                    <div class="flex justify-between items-center mb-10 gap-5">
                        <p class="text-2xl"> Team Members </p>
                        <button class="btn btn-ghost  text-blue-600"> View all</button>
                    </div>
                    <ul class="flex flex-col gap-5">
                        <li class="flex gap-20 justify-around items-center p-5 shadow-xl rounded-2xl bg-slate-50 hover:bg-slate-100 content-around" v-for="trader in traders" :key="trader.id">
                            <img :src="trader.url" class="scale-50"/>
                            <span class="text-medium">{{trader.trader}}</span>
                            <div class="badge bg-blue-200 border-0 text-blue-600 font-medium p-5 hover:bg-blue-400">{{ trader.badge }}</div>
                        </li>
                    </ul>
                </ul>
                <ul class="flex mt-20 flex-col justify-start items-start">
                    <div class="flex justify-between items-center mb-10 gap-5">
                        <p class="text-2xl">Comparison</p>
                        <button class="btn btn-ghost  text-blue-600"> View all</button>
                    </div>

                    <ul class="flex flex-col gap-10 rounded-2xl shadow-2xl p-10">
                        <li v-for="country in comparisons" :key="country.id" class="flex gap-5 p-10 flex-col">
                            <div class="flex gap-5">
                                <img :src="country.url"/>
                                <p>{{country.country}}</p>
                            </div>
                            <progress :value="country.progress" max=100 class="progress w-80 progress-primary"/>
                            <span class="">{{country.progress}}%</span>
                        </li>
                    </ul>
                </ul>
            </div>
        </section>
    </section>
</template>

<style scoped>
.flex-end {
    justify-content: flex-end;
}
.progress-primary::-moz-progress-bar {
    --tw-bg-opacity: 1;
    background-color: #0F77FA;
}
.progress-primary:indeterminate::after {
    --tw-bg-opacity: 1;
    background-color: #0F77FA;
}
.progress-primary::-webkit-progress-value {
    --tw-bg-opacity: 1;
    background-color: #0F77FA;
    }
</style>