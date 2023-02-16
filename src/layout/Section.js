// 1. import area

//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library
import { SectionContent } from "./SectionContent";
//2. functional component defination area

function Section (){
    const into = "Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes."
    // every function should return something
    return(
        <section className='col-7 section-cont'>
            <SectionContent intro={into} />
        </section>
        )
}




//3. export area

//3.1 default export
export default Section;
//3.2 named export