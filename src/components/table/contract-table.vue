<script setup>
// shadcn ui
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// shadcn ui
import { storeToRefs } from "pinia";
import router from "@/router";
import { usePersonsStore } from "@/stores/data/persons/persons";
const { onePerson } = storeToRefs(usePersonsStore());

const qarz = (history) => {
    let max = 0
    for (let i of history) {
        max += i.price
    }
    return max
}
const xarid = (history) => {
    return history
}
</script>

<template>
  <Table>
    <TableCaption class="text-gray-300">
      <span v-if="onePerson">Xaridorlarning savdo jadvali</span>
      <span v-else>Hali hech kim qo'shilmagan</span>
    </TableCaption>
    <TableHeader>
      <TableRow class="hover:bg-black/0">
        <TableHead class="text-lg text-white"> # </TableHead>
        <TableHead class="text-lg text-white"> To'lov  </TableHead>
        <TableHead class="text-lg text-white">Qarzi</TableHead>
        <TableHead class="text-lg text-white">Xarid</TableHead>
        <TableHead class="text-lg text-white text-right">
          Tahrirlash
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow
        v-for="(item, index) in onePerson.contract"
        :key="item._id"
        class="hover:bg-black/30 hover:cursor-pointer"
      >
        <TableCell>{{ index + 1 }}</TableCell>
        <TableCell class="font-medium">{{ item.paid }}</TableCell>
        <TableCell>{{ qarz(item.history) - item.paid }}</TableCell>
        <TableCell>{{ xarid(item.history) }}</TableCell>
        <TableCell class="text-right">
          <Popover>
            <PopoverTrigger>
              <div class="px-3 rounded bg-white/0 border hover:bg-indigo-400">
                <i class="fa-solid fa-ellipsis text-lg"></i>
              </div>
            </PopoverTrigger>
            <PopoverContent
              class="w-[150px] flex flex-col items-center gap-3 bg-white/90"
            >
              <div
                class="py-2 px-3 flex items-center gap-3 rounded-md cursor-pointer hover:bg-black/30"
              >
                <i class="fa-regular fa-pen-to-square"></i>
                <span>tahrirlash</span>
              </div>
              <div
                class="py-2 px-3 rounded-md cursor-pointer hover:bg-black/30"
              >
                <AlertDialog>
                  <AlertDialogTrigger
                    ><span class="flex items-center gap-3"
                      ><i class="fa-solid fa-trash"></i> o'chirish</span
                    ></AlertDialogTrigger
                  >
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle
                        >Are you absolutely sure?</AlertDialogTitle
                      >
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete your account and remove your data from our
                        servers.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction @click="del(person._id)"
                        >Continue</AlertDialogAction
                      >
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </PopoverContent>
          </Popover>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>
<style lang="scss"></style>
