import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Layout>HomePage</Layout>}></Route>
            <Route path="/user-profile" element={<span>User Profile</span>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    )
}

export default AppRoutes
