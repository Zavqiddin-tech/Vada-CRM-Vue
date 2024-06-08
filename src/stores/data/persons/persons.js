import { ref, computed } from "vue";
import { defineStore } from "pinia";

import { useApiStore } from "@/stores/api/api";

export const usePersonsStore = defineStore("counter", () => {
  const api = useApiStore();

  const persons = ref([]);
  const onePerson = ref({})
  const setOnePerson = (val) => onePerson.value = val

  const getAllPersons = async () => {
    await api.getAxios({ url: "person" }).then((res) => {
      persons.value = [...res.data];
    });
  };

  const getOnePerson = async (id) => {
    return api.getAxios({ url: `person/${id}` });
  };

  const newPerson = async (payload) => {
    await api.postAxios({ url: "person", data: payload }).then((res) => {
      persons.value = [...res.data];
    });
  };

  const updatePerson = async (payload) => {
    await api
      .putAxios({ url: `person/${payload._id}`, data: payload })
      .then((res) => {
        persons.value = [...res.data];
      });
  };

  const deletePerson = async (id) => {
    await api.deleteAxios({ url: `person/${id}` }).then((res) => {
      persons.value = [...res.data];
    });
  };

  return {
    persons,
    onePerson,
    setOnePerson,
    getAllPersons,
    getOnePerson,
    newPerson,
    updatePerson,
    deletePerson,
  };
});
