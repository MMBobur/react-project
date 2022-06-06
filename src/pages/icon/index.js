import React, {useEffect, useState, useRef} from 'react'

function Icon() {

    const [data, setData] = useState("")
    const inputRef = useRef();
    var a = 0;

    useEffect(() => {
        console.log(a+" hello");
        a++;
    }, [inputRef])

    const handleClick = () => {
        setData("asdads");
    }

    return (
        <>
            <input ref={inputRef} type="text" name="" id="" />
            {data}
            <button onClick={handleClick}>ok</button>
        </>
    )
}

export default Icon