// 1. import area
import { Component } from "react";
//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library
import { RightAsideBtn } from "./RightAsideBtn";
//2. class component defination area

class RightAsideBtnCont extends Component{  //extends keyword used to inherit the properties and method of the parent
	//1. properties

	
	//2. constructor
	// constructor method is used to intialize the properties


	//3. method
	
	// every class component must have render method

	render() {
		// every method should return something
		return(
            <div className="">
                <h6 className="get-start">On this Page</h6>
                <hr className="hori-line" />
                <RightAsideBtn />
            </div>
        )

	}
}

//3. export area

//3.1 default export
export default RightAsideBtnCont;
//3.2 named export