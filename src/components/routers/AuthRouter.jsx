import Login from "../Login";
import Signup from "../Signup";
import NotFound from "../NotFound";
import { Routes, Route, Link } from "react-router-dom";
const AuthRouter = () => {
    return (
        <>

            <div className=" flex justify-between w-screen h-20 border border-b-2">
                <div>Logo</div>
                <ul className="flex text-lg ">
                    <li className="p-2">
                        <Link to="/">Sign Up</Link>
                    </li>
                    <li className="p-2 ">
                        <Link to="login">Login</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};
export default AuthRouter;