import React, {useState} from 'react';

const Test=()=>{

    const [value, setValue] = useState(Math.floor(Math.random()*257));

    const onClickFunction=()=>{
        setValue((pre=>pre+4));
    }

    return(
        <div>
            <button onClick={()=>onClickFunction()}>Click to add</button>
                <div>{`Current value is ${value}`}</div>
        </div>   
    )
}

export default Test;