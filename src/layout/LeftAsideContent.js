// 1. import area
import { Component } from "react"


//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library
import { LeftAsideBtnContainer } from "./LeftAsideBtnComponent";
import { LeftAsideCustomizeBtnComponent } from "./LeftAsideCustomizeBtnContainer";
//2. class component defination area

class LeftAsideContent extends Component{  //extends keyword used to inherit the properties and method of the parent
	//1. properties

	
	//2. constructor
	// constructor method is used to intialize the properties


	//3. method
	
	// every class component must have render method

	render() {
		// every method should return something
		return(
            <div className="left-aside-content-cont">
				<h6 className="get-start">Getting started</h6>
				<LeftAsideBtnContainer />
				<h6 className="get-start mt-5">Customize</h6>
				<LeftAsideCustomizeBtnComponent />
				<h6 className="get-start mt-5">Layout</h6>
				<LeftAsideCustomizeBtnComponent />
            </div>
        )

	}
}

//3. export area
//3.1 default export
export default LeftAsideContent;
//3.2 named export