import { ref } from "vue";
import { defineStore } from "pinia";
import { useApiStore } from "@/stores/api/api";

export const useContractStore = defineStore("test", () => {
  const api = useApiStore();

  const newContract = async (payload) => {
    await api
      .postAxios({ url: `person/${payload.id}/contract`, data: payload.data })
      .then((res) => {
        console.log(res.data);
      });
  };

  return {
    newContract,
  };
});
