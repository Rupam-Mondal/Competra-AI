import { SignUp } from "@clerk/react";

function SignUpPage(){
    return (
        <>
            <div className="flex justify-center items-center h-screen w-full">
                <SignUp/>
            </div>
        </>
    )
}

export default SignUpPage;