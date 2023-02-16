// 1. import area

//1.1 import somedefaultImport from some location/library
import LeftAsideContent from "./LeftAsideContent"
//1.2 import {someNamedImport} from some location /library

//2. functional component defination area

export const LeftAside = props =>{
    //every function should return something
    return(
            <aside className={`col-2 ${props.clsName}`}>
                <LeftAsideContent />
            </aside>
        )   
}



//3. export area

//3.1 default export

//3.2 named export
