// 1. import area
import { Component } from "react"
//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library

//2. class component defination area

export class QuickStart extends Component{  //extends keyword used to inherit the properties and method of the parent
	//1. properties

	
	//2. constructor
	// constructor method is used to intialize the properties


	//3. method
	
	// every class component must have render method

	render() {
		// every method should return something
		return(
            <div className="quick-start-comp">
                <h1>Quick start  </ h1>
                <p>Get started by including Bootstrap’s production-ready CSS and JavaScript via CDN without the need for any build steps. See it in practice with this <a href="https://codepen.io/team/bootstrap/pen/qBamdLj" target="_blank">Bootstrap CodePen demo.</a></p>
            </div>
        )


	}
}

//3. export area

//3.1 default export

//3.2 named export