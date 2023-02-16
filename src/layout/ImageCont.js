// 1. import area

//1.1 import somedefaultImport from some location/library

//1.2 import {someNamedImport} from some location /library

//2. functional component defination area

const ImageCont = props =>{
    const imageDescreption = "Adobe Creative Cloud for Teams. Put creativity to work."
    //every function should return something
    return(
        <div className="img-cont">
            <img className="ad-image" src={props.imageUrl} alt="ad" />
            <div>
                <p>{imageDescreption}</p>
                <p>ads by Carbon</p>
            </div>
        </div>
    )
}



//3. export area

//3.1 default export
export default ImageCont;
//3.2 named export