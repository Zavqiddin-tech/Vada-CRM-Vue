<script setup>
import { onMounted } from "vue";
import personsDialog from "@/components/dialog/persons-dialog.vue";


// store
import { usePersonsStore } from "@/stores/data/persons/persons";
const {getAllPersons} = usePersonsStore()
// store
import personsTable from "@/components/table/personsTable.vue"




onMounted(async ()=> {
  await getAllPersons()
})
</script>
<template>
  <div class="persons">
    <div class="pb-10 flex justify-between items-center">
      <div class="flex gap-5">
        <div class="text-2xl">Persons</div>
      </div>
      <div>
        <personsDialog />
      </div>
    </div>
    <personsTable />
  </div>

</template>

<style lang="scss" scoped></style>
