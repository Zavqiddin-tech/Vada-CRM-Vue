import { defineStore } from "pinia";
import { useApiStore } from "@/stores/api/api";
import router from "@/router";
import cookies from "vue-cookies";
import { useTokenStore } from "@/stores/auth/token";




import { useToast } from "@/components/ui/toast/use-toast";
const { toast } = useToast();

export const useAuthStore = defineStore("auth", () => {
    const api = useApiStore();
    const tokenStore = useTokenStore();
  
    const login = async (data) => {
      await api
        .postAxios({
          url: "auth/login",
          data,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.token) {
            tokenStore.setToken(res.data.token);
            router.push("/dashboard");
          } 
          else if (res.data.message) {
            toast({
              title: 'Xatolik',
              description: res.data.message,
            });
          }
        });
    };
  
    const checkAdmin = async () => {
      if (cookies.isKey("factory-token")) {
        tokenStore.setToken(cookies.get("factory-token"));
      }
      await api.getAxios({
        url: "auth/checkadmin",
      }).then(res => {
        console.log(res);
      })
    };
  
    const checkUser = async () => {
      if (cookies.isKey("factory-token")) {
        tokenStore.setToken(cookies.get("factory-token"));
      }
      let res = await api.getAxios({
        url: "auth/checkcompany",
      });
      if (res.status == 200) {
        console.log("success");
      }
    };
  
    return {
      login,
      checkAdmin,
      checkUser,
    };
  });