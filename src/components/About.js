import React from 'react'

export default function About(props) {
    
    // const [myStyle,newStyle] = useState( {
    //     color : 'black',
        
    // }
    // );
    // const [btnText,toggleText] = useState("Enable Dark Mode");

    // const toggle = ()=>{
    //     if(myStyle.color === 'black'){
    //         newStyle ({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border : '1px solid white'
    //         })
    //         toggleText("Disable Dark Mode");
    //     }
    //     else{
    //         newStyle ({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         })
    //         toggleText("Enable Dark Mode");
    //     }
        
    // }
    let myStyle = {
        color : props.mode === 'dark'?'white':'black',
        backgroundColor : props.mode === 'dark'?'black':'white'
    }
  return (
    <div className='container' style={{color : props.mode === 'dark'?'white':'black',backgroundColor : props.mode === 'dark'?'#1a2c60':'white'}}>
        <h1>About Me</h1>
        <div className="accordion" id="accordionExample" >
    <div className="accordion-item">
    <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
        Accordion Item #1
        </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
        <div className="accordion-body" style={myStyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
            Accordion Item #2
            </button>
        </h2>
        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        <div className="accordion-item">
        <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
            Accordion Item #3
            </button>
        </h2>
        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
        </div>
        </div>
        </div>
        {/* <div className="container my-3">
        <button type="button" className="btn btn-dark"  onClick={toggle}>{btnText}</button>
        </div> */}
      
    </div>
  )
}
