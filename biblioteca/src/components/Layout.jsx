import NavBar from "./Navbar";

// eslint-disable-next-line react/prop-types
export default function Layout({children}){

    const containerStyle = {
        with: "90%",
        margin: "100px auto"
    } 
    return <>
        <NavBar/>
        <div style={containerStyle} >{children}</div>
    </>
}