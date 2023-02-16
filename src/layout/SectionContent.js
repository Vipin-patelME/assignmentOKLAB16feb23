// 1. import area
import { Component } from "react"
//1.1 import somedefaultImport from some location/library
import ImageCont from "./ImageCont" 
//1.2 import {someNamedImport} from some location /library
import { QuickStart } from "./QuickStartComp"

//2. class component defination area

export class SectionContent extends Component{  //extends keyword used to inherit the properties and method of the parent
	//1. properties

	
	//2. constructor
	// constructor method is used to intialize the properties
    constructor(props){
        super(props)
        this.heading = "Get started with Bootstrap"
        this.imgUrl = "https://cdn4.buysellads.net/uu/1/127419/1670531697-AdobeTeams.jpg"
    }

	//3. method
	
	// every class component must have render method

	render() {
		// every method should return something
		return(
                <div className="section-mai-cont">
                    <div className="section-mai-head-cont">
                        <h1>{this.heading}</h1>
                        <button className="view-btn" type="button">View on GitHub</button>
                    </div>
                    <p className="intro-para">{this.props.intro}</p>
                    <ImageCont imageUrl={this.imgUrl}/>
                    <QuickStart />
                </div>
            )

	}
}

//3. export area

//3.1 default export

//3.2 named export