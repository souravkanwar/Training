import React, {useState,useEffect} from "react";

function MyButton() {
 const [c,setC] = useState(0);
    useEffect(() => {
        setTimeout(() => {
          setC((c) => c + 1);
        }, 1000);
      });
    return (<p>Running {c} times</p>);
};

export default MyButton;