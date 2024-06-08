<script setup>
import { ref } from "vue";
import {storeToRefs} from 'pinia'

import {useMenuStore} from "@/router/menu.js"
const {menuStore} = storeToRefs(useMenuStore())


const exchange = (id) => {
  menuStore.value.forEach((item) => {
    if (item.id == id) {
      item.status = true;
    } else {
      item.status = false;
    }
  });
};
</script>

<template>
  <div
    class="sidebar w-28 h-screen sticky top-0 flex justify-center items-center"
  >
    <ul
      class="sidebar-lists ml-4 px-5 py-7 flex items-center flex-col gap-3 bg-white/10 backdrop-blur"
    >
      <router-link :to="item.path" v-for="item of menuStore">
        <li
          @click="exchange(item.id)"
          :class="
            item.status
              ? 'w-10 h-10 flex justify-center items-center rounded-full bg-blue-400'
              : 'w-10 h-10 flex justify-center items-center rounded-full'
          "
        >
          <i :class="item.icon"></i>
        </li>
      </router-link>
      <li class="w-10 h-10 flex justify-center items-center rounded-full">
        <i class="fa-solid fa-arrow-right-from-bracket"></i>
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.sidebar {
  color: #fff;
  &-lists {
    border-radius: 100vw;
    li {
      cursor: pointer;
    }
  }
}
</style>
