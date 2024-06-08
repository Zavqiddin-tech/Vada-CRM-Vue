<script setup>
// shadcn ui
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// shadcn ui

import { ref } from "vue";
import { useRoute } from "vue-router";
const { id } = useRoute().params;
import { useContractStore } from "@/stores/data/persons/contract";
const { newContract } = useContractStore();

const data = ref({ paid: 0, history: [{ name: "", count: "", price: 0 }] });
const toggle = ref(false);
const setToggle = (val) => (toggle.value = val);

const addProduct = () => {
  data.value.history.push({ name: "", count: "", price: 0 });
};
const delProduct = () => {
  data.value.history.pop();
};

const handleClose = () => {
  data.value = { paid: 0, history: [{ name: "", count: "", price: 0 }] };
};

const onSubmit = () => {
  let historyLength = data.value.history.length;
  let count = 0;
  for (let i of data.value.history) {
    let arr = Object.values(i);
    if (arr[0] && arr[1] && arr[2]) {
      count++;
    }
  }
  if (count === historyLength && historyLength > 0) {
    newContract({ data: data.value, id });
    setToggle(false);
    data.value = { paid: 0, history: [{ name: "", count: "", price: 0 }] };
  } else {
    console.log("hamma joyni toldiring");
  }
};
</script>

<template>
  <Sheet v-model:open="toggle">
    <SheetTrigger as-child>
      <Button class="bg-violet-600 hover:bg-violet-500"> Savdo </Button>
    </SheetTrigger>
    <SheetContent class="overflow-y-auto">
      <SheetHeader>
        <SheetTitle>Savdo hajmi</SheetTitle>
        <SheetDescription>
          Xarid qilingan mahsulot va buyumlarni kiriting
        </SheetDescription>
      </SheetHeader>
      <div class="pt-5">
        <div v-for="list of data.history" class="pb-6 flex justify-between">
          <div class="flex items-center gap-2">
            <Label for="name" class="text-right">Mahsulot</Label>
            <Input
              v-model="list.name"
              class="border border-black focus:border-white"
              type="text"
              id="name"
              autocomplete="off"
            />
          </div>
          <div class="flex items-center gap-2">
            <Label for="count" class="text-right">Soni</Label>
            <Input
              v-model="list.count"
              class="border border-black focus:border-white"
              type="text"
              id="count"
              autocomplete="off"
            />
          </div>
          <div class="flex items-center gap-2">
            <Label for="price" class="text-right">Narxi</Label>
            <Input
              v-model="list.price"
              class="border border-black focus:border-white"
              type="number"
              id="price"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="flex justify-center gap-5">
          <Button
            @click="delProduct()"
            class="flex items-center gap-2 bg-red-500 hover:bg-red-400"
            ><span>Ortga</span> <i class="fa-solid fa-arrow-rotate-left"></i
          ></Button>
          <Button @click="addProduct()" class="flex items-center gap-2"
            ><span>Yana</span> <i class="fa-solid fa-cart-plus"></i
          ></Button>
        </div>
        <div class="flex justify-end items-center gap-2">
          <div class="flex items-center gap-2">
            <Label for="price" class="text-right">To'landi</Label>
            <Input
              v-model="data.paid"
              type="number"
              id="price"
              class="border border-black"
              autocomplete="off"
            />
          </div>
          <div>
            <Button @click="onSubmit()"
              ><span class="pr-2">Saqlash</span>
              <i class="fa-solid fa-cloud-arrow-up"></i
            ></Button>
          </div>
        </div>
      </div>
    </SheetContent>
  </Sheet>
</template>
