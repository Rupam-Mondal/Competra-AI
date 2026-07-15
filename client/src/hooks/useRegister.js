import { ResgisterUser } from "@/apis/auth/auth"

export function useUserRegister(UserObject){
    const {isPending, isSuccess, error, mutateAsync} = useMutation({
        mutationFn:ResgisterUser,
        onSuccess: (data) => {
            console.log(data);
        },
        onError: (data) => {
            console.log(data);
        }
    });


    return {
        isPending, 
        isSuccess, 
        error, 
        mutateAsync
    }
}