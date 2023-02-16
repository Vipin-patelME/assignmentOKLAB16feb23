// 1. import area

//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library

//2. functional component defination area

export const LeftAsideBtnContainer = ()=>{
    // every function should return something

    return(
        <div className="laside-btn-cont">
            <button className="intro-btn" type="button">Introduction</button>
            <div className="btns-cont">
                <button className="all-btns" type="button">Downloads</button>
                <button className="all-btns" type="button">Contens</button>
                <button className="all-btns" type="button">Browsers & Devices</button>
                <button className="all-btns" type="button">JavaScript</button>
                <button className="all-btns" type="button">Webpack</button>
                <button className="all-btns" type="button">Parcel</button>
                <button className="all-btns" type="button">Vite</button>
                <button className="all-btns" type="button">Accessibility</button>
                <button className="all-btns" type="button">RFS</button>
                <button className="all-btns" type="button">RTL</button>
                <button className="all-btns" type="button">Contribute</button>
            </div>
        </div>
    )
}



//3. export area

//3.1 default export

//3.2 named export