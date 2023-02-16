// 1. import area
import { Component } from "react"
//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library

//2. class component defination area

export class LeftAsideCustomizeBtnComponent extends Component{  //extends keyword used to inherit the properties and method of the parent
	//1. properties

	
	//2. constructor
	// constructor method is used to intialize the properties


	//3. method
	
	// every class component must have render method

	render() {
		// every method should return something
		return(
            <div className="laside-btn-cont">
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
}

//3. export area

//3.1 default export

//3.2 named export