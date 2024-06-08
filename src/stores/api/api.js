import { defineStore, storeToRefs } from "pinia";
import axios from "axios";
import router from "@/router";
import { useTokenStore } from "@/stores/auth/token";
import { useUrlStore } from "@/stores/api/url";

// shadcn ui
import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();
// shadcn ui

export const useApiStore = defineStore("api", () => {
  const { url } = storeToRefs(useUrlStore());
  const tokenStore = useTokenStore();

  const getAxios = (payload) => {
    return axios
      .get(`${url.value}/${payload.url}`, {
        headers: { Authorization: `Bearer ${tokenStore.token}` },
      })
      .catch((e) => {
        if (e.response.status == 401) {
          toast("Log in", {
            description: "You are not logged in",
            cancel: {
              label: "cancel",
            },
          });
          toast({
            title: 'Ogohlantirish',
            description: 'Login orqali tizimga kiring',
          });
          router.push("/auth");
          return false;
        }
      });
  };

  const postAxios = (payload) => {
    console.log(payload);
    return axios
      .post(`${url.value}/${payload.url}`, payload.data, {
        headers: { Authorization: `Bearer ${tokenStore.token}` },
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const postAxiosFile = (payload) => {
    console.log(payload);
    let formData = new FormData();
    formData.append("file", payload.data.file);
    formData.append("firstName", payload.data.firstName);
    formData.append("lastName", payload.data.lastName);
    formData.append("date", payload.data.date);
    formData.append("verify", payload.data.verify);
    return axios
      .post(`${url.value}/${payload.url}`, formData, {
        headers: { Authorization: `Bearer ${tokenStore.token}` },
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const putAxios = (payload) => {
    return axios
      .put(`${url.value}/${payload.url}`, payload.data, {
        headers: { Authorization: `Bearer ${tokenStore.token}` },
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  const putAxiosFile = (payload) => {
    console.log(payload);
    let formData = new FormData();
    formData.append("file", payload.data.file);
    formData.append("firstName", payload.data.firstName);
    formData.append("lastName", payload.data.lastName);
    formData.append("date", payload.data.date);
    formData.append("verify", payload.data.verify);
    formData.append("img", payload.data.img);
    formData.append("user", payload.data.user);
    return axios
      .put(`${url.value}/${payload.url}`, formData, {
        headers: { Authorization: `Bearer ${tokenStore.token}` },
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const patchAxios = (payload) => {
    return axios
      .patch(`${url.value}/${payload.url}`, payload.data, {
        headers: { Authorization: `Bearer ${tokenStore.token}` },
      })
      .catch((e) => {
        console.log(e.message);
      });
  };

  const deleteAxios = (payload) => {
    return axios
      .delete(`${url.value}/${payload.url}`, {
        headers: { Authorization: `Bearer ${tokenStore.token}` },
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  return {
    getAxios,
    postAxios,
    postAxiosFile,
    putAxios,
    putAxiosFile,
    patchAxios,
    deleteAxios,
  };
});
