import React, { useState } from "react";
import "./TodoItem.css";

function Todo(props) {
  const [text, setText] = useState("sss")
  const { content } = props;

  const removeTask = () => {
    
    props.removeHandler(content)
  }
  const lineHandler = () => {
    if(text === "sss") {
      setText("sss text");
    }
    else{
      setText("sss");
    }
    
  }
  
  return <div onClick={lineHandler} className={text}>
    {content}
    <button className="btn btn-danger" onClick={removeTask}>Sil</button>
    </div>
}

export default Todo;
