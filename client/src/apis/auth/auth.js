import AxiosInstance from "@/utils/axiosInstance";

export async function ResgisterUser(UserObject) {
  try {
    const result = AxiosInstance.post("/auth/sign-up", UserObject);
    if (!result) throw new Error();

    return result.data;

  } catch (error) {

    console.log(`Error messsage :- ${error.message}`);
    return error;
    
  }
}
