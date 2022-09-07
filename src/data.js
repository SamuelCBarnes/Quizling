import React, { useState } from "react";
import "./App.css";
import { FcExpand, FcCollapse } from "react-icons/fc";

const Data = ({ title, body }) => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    };
    return (
        <div className={show ? "accordian-opened":"accordian-item"}
        onClick={handleClick}
            // onMouseEnter={()=>setShow(true)}
            // onMouseLeave={()=>setShow(false)}
>
            
            <div className="accordian-title">
                <h5>{title}</h5>

                <p> {show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
            </div>
            {show && <p>{body}</p>}
        </div>
    );
};

export default Data;
