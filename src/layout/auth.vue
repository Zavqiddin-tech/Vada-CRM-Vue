<script setup>
import { ref } from "vue";
// shadcn ui
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
// shadcn ui

// store
import { useAuthStore } from "@/stores/auth/auth";
const {login} = useAuthStore()
// store

const alertToggle = ref(false);
const user = ref({});
const toggle = ref(true);
const eyeToggle = () => {
  toggle.value = !toggle.value;
};

const submit = () => {
  if (user.value.email && user.value.password) {
    console.log(user.value);
    login(user.value)
    alertToggle.value = false;
  } else {
    alertToggle.value = true;
    return false;
  }
};
</script>
<template>
  <div class="auth min-h-screen">
    <div class="auth-wrapper m-auto h-screen flex">
      <div class="auth-left w-6/12 flex justify-center items-center">
        <img
          class="w-full object-cover"
          src="@/assets/images/illus-1.jpg"
          alt=""
        />
      </div>
      <div class="auth-right w-6/12">
        <form
          @submit.prevent=""
          class="h-full flex flex-col justify-center px-4 py-2 rounded-md"
        >
          <div class="pb-5 text-left text-4xl font-bold">Log in</div>
          <Alert v-if="alertToggle">
            <div class="flex gap-3">
              <i class="fa-solid fa-chevron-right">_</i>
              <div>
                <AlertTitle>Please!</AlertTitle>
                <AlertDescription> Enter login and password </AlertDescription>
              </div>
            </div>
          </Alert>
          <div>
            <label for="login" class="pb-3 inline-block text-sm font-light"
              >User Name</label
            >
            <input
              v-model="user.email"
              type="text"
              class="block w-full px-1 py-1 border border-1 border-gray-300 rounded-md focus:border-2 focus:border-violet-300"
              id="login"
              autocomplete="off"
            />
          </div>
          <div class="mt-5 mb-7">
            <label for="password" class="pb-3 inline-block text-sm font-light"
              >password</label
            >
            <div class="flex relative items-center">
              <input
                v-model="user.password"
                :type="`${toggle ? 'password' : 'text'}`"
                class="block w-full px-1 py-1 border border-1 border-gray-300 rounded-md focus:border-2 focus:border-violet-300"
                id="password"
                autocomplete="off"
              />
              <img
                v-if="toggle"
                class="w-6 absolute right-1"
                @click="eyeToggle()"
                src="@/assets/images/eye-open.png"
                alt=""
              />
              <img
                v-else
                class="w-6 absolute right-1"
                @click="eyeToggle()"
                src="@/assets/images/eye-hide.png"
                alt=""
              />
            </div>
          </div>
          <div>
            <Button @click="submit()">Kirish</Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.auth {
  &-wrapper {
    max-width: 1500px;
  }
}
</style>
