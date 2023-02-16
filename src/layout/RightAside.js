// 1. import area
import { Component } from "react"
//1.1 import somedefaultImport from some location/library
import RightAsideBtnCont from "./RightAsideBtnCont";
//1.2 import {someNamedImport} from some location /library

//2. class component defination area

class RightAside extends Component{  //extends keyword used to inherit the properties and method of the parent
	//1. properties

	
	//2. constructor
	// constructor method is used to intialize the properties


	//3. method
	
	// every class component must have render method

	render() {
		// every method should return something
		return(
            <aside className={`col-3 ${this.props.clsName}`}>
                <RightAsideBtnCont />
            </aside>
            )

	}
}

//3. export area

//3.1 default export
export default RightAside;
//3.2 named export