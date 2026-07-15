import { SignIn } from "@clerk/react";

function SignInPage(){
    return (
        <>
            <div className="flex justify-center items-center h-screen w-full">
                <SignIn forceRedirectUrl={"/"} />
            </div>
        </>
    )
}

export default SignInPage;