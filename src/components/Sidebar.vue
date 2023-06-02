<script setup>

</script>

<template>
    <div class="left-0 ms-0 fixed">
        <div class="w-56 h-screen shadow-2xl">
            <ul class="flex flex-col gap-5 p-5 justify-center items-center h-full">
                <li class="hover:bg-slate-200 flex align-middle justify-center flex-col rounded-xl w-24 h-24">
                    <img src="/metrics.svg" class="p-7"/>
                    <span class="text-xl text-slate-500">Dashboard</span>
                </li>
                <li class="hover:bg-slate-200 align-middle justify-center flex flex-col rounded-xl w-24">
                    <img src="/analytics.svg" class="p-8"/>
                    <span class="text-lg text-slate-500">Analytics</span>
                </li>
                <li class="hover:bg-slate-200 align-middle justify-center flex flex-col rounded-xl w-24">
                    <img src="/currency-exchange-2.svg" class="p-8"/>
                    <span class="text-xl text-slate-500">Trading</span>
                </li>
                <li class="hover:bg-slate-200 align-middle justify-center flex flex-col rounded-xl w-24">
                    <img src="/sound-wave.svg" class="p-8"/>
                    <span class="text-xl text-slate-500">Notifications</span>
                </li>
                <a href="/login">
                <li class="hover:bg-slate-200 align-middle justify-center flex flex-col rounded-xl w-24 flex-auto bottom-0">
                    <img src="/logout.svg" class="p-8"/>
                      <span class="text-xl text-slate-500">Logout</span>
                    </li>
                </a>  
            </ul>
        </div>
    </div>
</template>

<style scoped>
.left-0 {
        left: 0;
    }
    .ms-0 {
        margin-left: 0;
    }
</style>