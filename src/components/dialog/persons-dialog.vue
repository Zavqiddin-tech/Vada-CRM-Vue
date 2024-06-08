<script setup>
import { ref, watch, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { vAutoAnimate } from "@formkit/auto-animate/vue";

// store
import { usePersonsStore } from "@/stores/data/persons/persons";
import { useToggleStore } from "@/stores/toggle/toggle";
const { getOnePerson, newPerson, updatePerson } = usePersonsStore();
const { toggle, editToggle, oneId } = storeToRefs(useToggleStore());
const { setToggle, setEditToggle, setOneId } = useToggleStore();
// store

const user = ref({ verify: false, status: 0, date: new Date() });
const formSchema = toTypedSchema(
  z.object({
    fname: z.string().min(3).max(50),
    lname: z.string().min(3).max(50),
  })
);

const { handleSubmit } = useForm({
  validationSchema: formSchema,
});

const handleClose = () => {
  setToggle(false);
  setEditToggle(false);
  setOneId("");
  user.value = { verify: false, status: 0, date: new Date() };
};

watch(editToggle, async () => {
  if (editToggle.value) {
    let res = await getOnePerson(oneId.value);
    user.value = res.data;
  } else {
    handleClose()
  }
});

const onSubmit = handleSubmit((values) => {
  if (editToggle.value) {
    updatePerson(user.value)
    handleClose()
  } else {
    newPerson(user.value);
    handleClose();
  }
});
</script>

<template>
  <Dialog v-model:open="toggle">
    <DialogTrigger
      ><Button class="bg-violet-600 hover:bg-violet-500"
        >Registration</Button
      ></DialogTrigger
    >
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ma'lumotlarni kiriting</DialogTitle>
        <DialogDescription>
          <form class="space-y-6" @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="fname">
              <FormItem v-auto-animate>
                <FormLabel>Ism</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="ismini kiriting"
                    v-bind="componentField"
                    v-model="user.fname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="lname">
              <FormItem v-auto-animate>
                <FormLabel>Familya</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="familyasini kiriting"
                    v-bind="componentField"
                    v-model="user.lname"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="phone1">
              <FormItem v-auto-animate>
                <FormLabel>Telefon</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="raqamini kiriting"
                    v-bind="componentField"
                    v-model="user.phone1"
                  />
                </FormControl>
                <FormDescription> Majburiy emas ! </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
          </form>
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button @click="onSubmit()">Qo'shish</Button></DialogFooter
      >
    </DialogContent>
  </Dialog>
</template>

<style lang="scss" scoped></style>
