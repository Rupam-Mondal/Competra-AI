import SignInPage from "@/components/Auth/Sign-in";
import SignUpPage from "@/components/Auth/Sign-up";
import Home from "@/pages/home";
import { Route, Routes } from "react-router-dom";

function Routing(){
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sign-in/*" element={<SignInPage/>} />
                <Route path="/sign-up/*" element={<SignUpPage/>} />
            </Routes>
        </>
    )
}

export default Routing;