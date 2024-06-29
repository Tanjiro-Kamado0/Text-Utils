import React, {useState} from 'react';




export default function TextForm(props) {
    



    const handleOnChange = (event) =>
    {
        console.log("oNcHANGE")
        setText(event.target.value);
    }
    const handleUpClick = () =>
    {
        
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to UpperCase", "success");
    }
    const handleLpClick = () =>
    {
        
        let newText = text.toLowerCase();
        setText(newText)
        // props.showAlert("Converted to LowerCase", "success");
    }
    const handleClearClick = () =>
    {
        
        let newText = "";
        setText(newText)
    }
    const handleCopy = () =>
    {
        
        // var text = document.getElementById("TextArea");
        // text.select();
        // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text); 
        // props.showAlert("Copied!", "success"); 
    }
    const handleExtraSpaces = ()=>
    {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        // props.showAlert("Removed Extra space", "success");
    }
    

    const [text,setText] = useState('Enter text here');
   

    return (
        <>
        <div className='container' style={{color: props.mode==="dark"?"white":"black"}}>
            <h1 style={{color: props.mode==="dark"?"#fcbe32":"black"}}>{props.heading}</h1> 
            <div className="mb-3">
                <label htmlFor="TextArea" className="form-label" ></label>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="dark"?"#F6F5F2":"white"}}id="TextArea" rows="7"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To UpperCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleLpClick}>Convert To LowerCase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>ClearText</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
        
        
        </div>
        <div className="container my-3 "  >
            <h1 style={{color: props.mode==="dark"?"#fcbe32":"black"}}>Text Summary</h1>
            <p style={{color: props.mode==="dark"?"white":"black"}}> {text.split(/\s+/).filter((element)=>{ return element.length !== 0}).length} words and {text.length} characters</p>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{0.008 * text.split(" ").filter((element)=>{ return element.length !== 0}).length} Minutes to read</p>
            <h4 style={{color: props.mode==="dark"?"#fcbe32":"black"}}>Preview</h4>
            <p style={{color: props.mode==="dark"?"white":"black"}}>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        </>
    )
}
