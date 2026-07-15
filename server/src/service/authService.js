import User from "../schema/User.js";

export async function RegisterUserService(
  clerkId,
  email,
  firstName,
  lastName,
  imageUrl,
  lastLoginAt,
) {
  try {
    const existingUser = await User.findOne({
      clerkId
    });

    if(existingUser){
        return existingUser;
    }

    const result = await User.create({
      clerkId,
      email,
      firstName,
      lastName,
      imageUrl,
      lastLoginAt,
    });

    return result;
    
  } catch (error) {
    throw error;
  }
}
