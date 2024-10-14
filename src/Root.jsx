import { Link, Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Root() {
    return (
        <>
            <Navbar/>
            <div>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}