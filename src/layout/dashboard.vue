<script setup>
import sidebar from "../components/sidebar/sidebar.vue";
</script>

<template>
  <div class="dashboard min-h-screen">
    <div class="dashboard-content m-auto flex">
      <div>
        <sidebar />
      </div>
      <div
        class="router-content h-screen overflow-y-scroll pl-5 pt-10 pr-5 pb-10"
      >
        <div class="router-wrapper p-6 rounded-3xl bg-black/20 text-white">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard {
  background-image: url("@/assets/images/bg-2.png");
  background-size: cover;
  &-content {
    max-width: 1600px;
  }
  .router-content {
    width: calc(100% - 112px);

    & {
      scrollbar-width: thin; /* "auto" or "thin" */
      scrollbar-color: rgba(255, 255, 255, 0.384) rgba(255, 255, 255, 0); /* thumb color and track color */
    }
  }
}
</style>
