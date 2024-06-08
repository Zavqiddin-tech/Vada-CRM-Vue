import { ref } from "vue";
import { defineStore } from "pinia";

export const useToggleStore = defineStore("toggle", () => {
  const toggle = ref(false);
  const editToggle = ref(false)
  const setToggle = (val) => (toggle.value = val);
  const setEditToggle = (val) => (editToggle.value = val);

  const oneId = ref('')
  const setOneId = (id) => oneId.value = id

  return {
    toggle,
    editToggle,
    oneId,
    setToggle,
    setEditToggle,
    setOneId
  };
});
