import React,{useState, useContext} from "react";
import classes from './TodoList.module.css'
import check from './icon-check.svg'
import cross from './icon-cross.svg'
import AuthContext from "../Store/Auth-Context";

const TodoList=(props)=>{
  const [show, setShow]= useState(true)
  const [checked, setChecked]= useState(false)
  const ctx= useContext(AuthContext)
  const fun=()=>{

    if(checked){
      return setShow((val)=>{return true})

    }
    else{
    return setShow((val)=>{return !val})

    }
  }
const click=()=>{
 setChecked((val)=>{return true})
 setShow((val)=>{return true})
 props.completed( props.num)

}

const crossFun=()=>{
  props.cross(props.num)
  
 setChecked((val)=>{return false})

}
    return <React.Fragment>
  <div  onMouseEnter={fun}style={{display:`${props.display}`}} onMouseLeave={fun} className={ctx.mode?`${classes.div3}`:`${classes.div3l}`}>
    <div onClick={click} className={classes.div}>
    <div className={checked?`${classes.circled}`:ctx.mode?`${classes.circle}`:`${classes.circlel}`}><img  className={checked?`${classes.check}`:`${classes.checkn}`} src={check} alt='check'/></div>
        
        <p className={ctx.mode &&checked?`${classes.p1n}`:ctx.mode?`${classes.p1}`:checked?`${classes.p1nl}`:`${classes.p1l}`}>{props.task}</p>
    </div>
           <div className={classes.phone}>
<img src={cross}  onClick={crossFun} className={checked?`${classes.hide}`:`${classes.show}`} alt='cross'/>
           </div>
           <div className={classes.laptop}>
            <img src={cross}  onClick={crossFun} className={show?`${classes.hide}`:`${classes.show}`} alt='cross'/>
           </div>
            </div>
    </React.Fragment>
}
export default TodoList