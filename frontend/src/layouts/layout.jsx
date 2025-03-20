import Header from "../components/Header";
import Hero from "../components/Hero";

const Layout = ({children})=>{
    console.log(children)
    console.log(Header)
    return(
        <div className="flex flex-col min-h-screen">            
            <Header></Header>
            <Hero></Hero>
            <div className="container mx-auto flex-1 py-10">
                {children}
            </div>
        </div>
    )
}

export default Layout