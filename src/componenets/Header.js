import { HEADER_IMAGE } from "../config"
import { useState } from "react";
import Body from "./Body";


const Header = () => {

    const [anim , setAnimation] = useState("false") ; 

    return (
        
        <>
            <div className = "header d-flex flex-column gap-3 align-items-center p-5" >
                <img src = {HEADER_IMAGE}  height="300px" width="500px" className={anim === "true"? 'animation' : ''}/>
                <div className="fs-1 h1 textColor cursive">
                Name It !</div>
            </div>

            <Body anim = {anim} setAnimation = {setAnimation} />
        </>
    )

}

export default Header ; 