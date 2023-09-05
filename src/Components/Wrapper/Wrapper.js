import React from "react";
import classes from './Wrapper.module.css'
const Wrapper=(props)=>{
    return <React.Fragment>
<div className={classes.div}>
{props.children}
</div>
    </React.Fragment>
}
export default Wrapper