<script setup>
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="pb-10 flex justify-between items-center">
    <div class="flex gap-5">
      <div class="text-2xl">My Dashboard</div>
    </div>
    <div>
      <div class="avatar w-10 h-10 flex justify-center items-center rounded-full bg-orange-500">J</div>
    </div>
  </div>
  <div class="p-8 flex justify-between rounded-3xl backdrop-blur bg-black/20">
    <div class="flex items-center gap-5">
      <div
        class="w-16 h-16 flex justify-center items-center rounded-full bg-black/10"
      >
      <i class="fa-solid fa-sack-dollar text-2xl"></i>
      </div>
      <div>
        <div class="text-sm pb-1 text-slate-300">Jami Qarzdorlik</div>
        <div class="text-lg font-medium">$548,765.77</div>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <div
        class="w-16 h-16 flex justify-center items-center rounded-full bg-black/10"
      >
      <i class="fa-solid fa-coins text-2xl"></i>
      </div>
      <div>
        <div class="text-sm pb-1 text-slate-300">Qoldi</div>
        <div class="text-lg font-medium">$548,765.77</div>
      </div>
    </div>
    <div class="flex items-center gap-5">
      <div
        class="w-16 h-16 flex justify-center items-center rounded-full bg-black/10"
      >
      <i class="fa-solid fa-credit-card text-2xl"></i>
      </div>
      <div>
        <div class="text-sm pb-1 text-slate-300">To'landi</div>
        <div class="text-lg font-medium">$341,985.11</div>
      </div>
    </div>
    
  </div>
</template>

<style lang="scss" scoped></style>
