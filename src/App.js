import React from "react" 
import ReactDOM from "react-dom/client" 
import Header from "./componenets/Header";
import Body from "./componenets/Body";
import 'bootstrap/dist/css/bootstrap.css';

/** Structure of our App will be like 
 * 
 * <Header>
 * 
 *      <img/>
 *      <AppName></AppName>
 * 
 * </Header>
 * 
 * <Body>
 * 
 *      <Search></Search>
 *      <Output></Output>
 * 
 * </Body>
 * 
 * 
 *
 */

const appLayout = (
    <Header/>
)

const root = ReactDOM.createRoot(document.getElementById("root")) ; 
root.render(appLayout) ; 