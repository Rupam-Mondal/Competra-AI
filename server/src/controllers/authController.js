import { RegisterUserService } from "../service/authService.js";

export async function RegisterUserController(req , res){
    try {
        const {
            clerkId , email , firstName , lastName , imageUrl
        } = req.body

        const lastLoginAt = new Date();

        if(!clerkId || !email){
            throw new Error("Clerk ID and Email is required");
        }

        const result = await RegisterUserService(clerkId , email , firstName , lastName , imageUrl , lastLoginAt);

        return res.json({
            success: true,
            message: "User registration is done",
            data: result
        })

    } catch (error) {
        return res.json({
            success: false,
            message: `User Registration is failed :- ${error.message}`
        })
    }
}