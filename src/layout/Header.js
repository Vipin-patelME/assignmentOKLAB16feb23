// 1. import area

//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library
import { NavBar } from "./NavBar";
//2. functional component defination area

const Header = ()=>{
    // every function should return something
    return(
        <>
            <header className='header-cont'><NavBar /></header>
        </>
    )
}



//3. export area

//3.1 default export
export default Header;

//3.2 named export