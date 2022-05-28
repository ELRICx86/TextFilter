import React ,{ useState }from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('');

  

  function countWords(s){

    if(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
    s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
    //return s.split(' ').filter(function(str){return str!="";}).length;
    return s.split(' ').filter(String).length;
    }
}
function getmail(StrObj) {
  var separateEmailsBy = ", ";
  var email = "<none>"; // if no match, use this
  var emailsArray = StrObj.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\\.[a-zA-Z0-9._-]+)/gi);
  if (emailsArray) {
    email = "";
    for (var i = 0; i < emailsArray.length; i++) {
      if (i !== 0) email += separateEmailsBy;
      email += emailsArray[i];
    }
  }
  return email;
}
 const handleUpclick =()=>{
   console.log("Uppercase button was clicked" + text)
   let newtxt=text.toUpperCase();
   setText(newtxt);
   props.showalert("Converted to Uppercase","success");
 }

 const handleLowclick =()=>{
  console.log("Uppercase button was clicked" + text)
  let newtxt=text.toLowerCase();
  setText(newtxt)
  props.showalert("Converted to lowecase","success");
}
const handleClearclick =()=>{
  console.log("Uppercase button was clicked" + text)
  let newtxt="";
  setText(newtxt)
  props.showalert("Textbox cleared","success");
}
const handleEmailclick =()=>{
  console.log("Uppercase button was clicked" + text)
  let newtxt=getmail(text);
  setText(newtxt)
}

const handleCopy =()=>{
  let t = document.getElementById("box1");
  t.select();
  navigator.clipboard.writeText(t.value);
  props.showalert("Copied to clipboard","success");
}

const handleExspaces=()=>{
  let newt= text.split(/[ ]+/);
  setText(newt.join(" "));
  props.showalert("Extra space removed","success");
}

 const handleOnchange =(event)=>{
    setText(event.target.value);
 }

 
  return (
    <>
    <div className='container'>
       <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="box1" className="form-label"></label>
  <textarea className="form-control" value={text} onChange={handleOnchange} id="box1" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 my-2" onClick={handleUpclick}>convert to uppercase </button>
<button className="btn btn-primary mx-2 my-2" onClick={handleLowclick}>convert to lowercase </button>
<button className="btn btn-primary mx-2 my-2" onClick={handleClearclick}>clear text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleEmailclick}>Get Emails</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
<button className="btn btn-primary mx-2 my-2" onClick={handleExspaces}>Remove extra spaces</button>
    </div>

    <div className="container my-3">
      <h1>your text summary</h1>
      <p>{countWords(text)} words and {text.length} character</p>
    </div>

    </>
  )
}
