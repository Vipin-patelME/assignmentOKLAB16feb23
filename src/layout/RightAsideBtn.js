// 1. import area

//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library

//2. functional component defination area

export const RightAsideBtn = () =>{
    //every function should return something
    return(
        <div className="btns-cont">
            <button type="button" className="all-btns">Quick start</button>
            <button type="button" className="all-btns">CDN Links</button>
            <button type="button" className="all-btns">Next steps</button>
            <button type="button" className="all-btns">JS Component</button>
            <button type="button" className="all-btns">Important Globals</button>
        </div>
    )
}



//3. export area

//3.1 default export

//3.2 named export