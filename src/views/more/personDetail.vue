<script setup>
// shadcn ui
import personSheet from "@/components/sheet/person-sheet.vue";
// shadcn ui

import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const { id } = useRoute().params;
import { convertDate } from "@/func/date";
import contractTable from "@/components/table/contract-table.vue";
const person = ref({});

// store
import { usePersonsStore } from "@/stores/data/persons/persons";
const { getOnePerson, setOnePerson } = usePersonsStore();
// store

onMounted(async () => {
  let res = await getOnePerson(id);
  if (res.status == 200) {
    person.value = { ...res.data };
  }
  setOnePerson(person.value)
});
</script>
<template>
  <div class="person flex gap-6">
    <!-- content page -->
    <div class="w-8/12 p-3 rounded-xl">
      <div class="flex justify-between items-center">
        content
        <personSheet />
      </div>
      <contractTable />
    </div>

    <!-- user page -->
    <div class="w-4/12 p-3 rounded-xl shadow-xl shadow-white/40">
      <div class="flex justify-between items-center">
        <i class="fa-regular fa-bell text-2xl"></i>
        <i class="fa-solid fa-ellipsis-vertical text-2xl"></i>
      </div>
      <div class="flex justify-center items-center flex-col">
        <img
          class="w-[150px] h-[150px] object-cover rounded-full shadow-lg shadow-white/50"
          src="@/assets/images/face-1.jpg"
          alt=""
        />
        <div class="px-3 py-2 rounded-3xl bg-black/50 -translate-y-4">
          Exclusive card
        </div>
      </div>
      <div class="text-xl font-medium flex justify-center items-center gap-2">
        <span class="capitalize">{{ person.fname }} {{ person.lname }}</span>
        <img class="w-5" src="@/assets/images/w-verify.png" alt="" />
      </div>
      <div class="p-4 relative">
        <img class="m-auto w-full" src="@/assets/images/visa-1.png" alt="" />
        <div class="absolute bottom-10 left-10">
          <div>Total Balance</div>
          <div class="text-3xl">342,12 <span class="t text-lg">sum</span></div>
        </div>
        <div class="date-wrapper absolute bottom-10 right-10">
          <div>Sana</div>
          <div>{{ convertDate(person.createdAt, 1) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
