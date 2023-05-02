import { useState } from "react";
import SearchResult from "./SearchResult";
import { nameGenerator } from "../config";

const Body = (props) => {

    let [inputText , setInputText] = useState("") ; 
    let [searchResult , setSearchResult] = useState([]) ; 

    function SetAnimation() {
        (props.anim === "false" ) ? props.setAnimation("true") :  props.setAnimation("false") 
    }

    function GenerateNames(input){
        setSearchResult(nameGenerator(input))
    }

    return (

            <div className="d-flex flex-column  align-items-center gap-5 h-100">

                <div>
                    <input type = "text"  placeholder="Search some Keywords......" className="px-3" value = {inputText}
                    onChange={
                        (e) => {
                            setInputText(e.target.value) ;
                            e.target.value !== "" ? (GenerateNames(e.target.value) ): (setSearchResult([]))   
                        }
                    }
                    onFocus={
                        ()=> {
                            SetAnimation()
                        }
                    }
                    onBlur={
                        ()=> {
                            SetAnimation()
                        }
                    }
                    /> 
                </div>
                
                <>
               {
                (searchResult.length !==0) ? 

                    (<SearchResult searchArray = {searchResult}/>) : (<></>)

               }
                </>

            </div>

    )

}

export default Body ; 