import { Route, Routes, Navigate } from "react-router-dom";

const AppRoutes = ()=>{
    return(
        <Routes>
            <Route path="/" element={<span>Home Page</span>}></Route>
            <Route path="/user-profile" element={<span>User Profile</span>}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
        </Routes>
    )
}

export default AppRoutes
