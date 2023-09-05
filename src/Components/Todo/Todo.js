import React, { useState , useContext} from "react";
import classes from "./Todo.module.css";
import sun from "./icon-sun.svg";
import moon from './icon-moon.svg'
import Wrapper from "../Wrapper/Wrapper";
import TodoList from "../TodoList/TodoList";
import AuthContext from "../Store/Auth-Context";
const Todo = () => {
  const arr = [
    "Complete online javascript course",
    "Jog around the park 3x",
    "10 minutes meditation",
    "Read for 1 hour",
    "Pick up groceries",
    "Complete Todo app on Frontend mentor",
  ];
  const [completedTasks, setCompletedTasks] = useState([]);
  const [tasks, setTasks] = useState(arr);
  const [val, setVal] = useState("");
  const [all, setAll] = useState(arr);
  const [arc, setArc]=useState(true)
  const [adv, setAdv]=useState(false)
  const [pro, setPro]=useState(false)
const [minus, setMinus]= useState(0)
  const ctx=useContext(AuthContext)
  const arr6=[sun,moon]
  const submit = (e) => {
    e.preventDefault()
  if(val){
    setAll((e) => {
      return [...e,val];
    })
    setTasks((e) => {
      return [...e,val];
    });
  }

    setVal("");
  };

  const cross = (a) => {
    const arr1 = [];
    for (let i = 0; i < all.length; i++) {
      if (i !== a) {
        arr1.push(all[i]);
      } else {
        arr1.push("");
      }
    }
    setMinus((val)=>{
 return val=val+1
    })
    setAll((val) => {
      return ( [...arr1])
    });
    setTasks((val) => {
      return (val = [...arr1]);
    });
  };

  const change = (e) => {
    if (val.length > 47) {
      const arr2 = [...val];
      const a = [];
      for (let i = 0; i < 47; i++) {
        a.push(arr2[i]);
      }
      return setVal(a.join(""));
    }
    setVal(e.target.value);
  };

  const completed = (num) => {
    setCompletedTasks((val) => {
      if(completedTasks.indexOf(tasks[num])<0){
      return [...val, tasks[num]];
      }
      else{
        return [...val]
      }
    });
  };

  const comt = () => {
    setArc(false);setAdv(false); setPro(true)
    const arr4 = all.map((data) => {
      if (completedTasks.indexOf(data) > -1) { return data;}
       else {  return "";  }
    });
    setTasks(() => {
      return [...arr4];
    });
  };
  
  const allFun = () => {
    setArc(true); setAdv(false); setPro(false)
    setTasks(() => {return [...all];  });
  };

  const active = () => {
    setArc(false); setAdv(true); setPro(false);
    const arr4 = all.map((data) => {
      if (completedTasks.indexOf(data) < 0) {return data; } 
      else {return "" }
    });
    setTasks(() => {
      return [...arr4];
    });
  };


  const clear = () => {
    setArc(true)
    setAdv(false)
    setPro(false)
    const arr4 = all.map((data) => {
      if (completedTasks.indexOf(data) < 0) {
        return data;
      } else {
        return "";
      }
    });
    setAll(() => {
      return [...arr4];
    });
    setTasks(() => {
      return [...arr4];
    });
  };

const switcher=()=>{
   ctx.setMode()
}
  return (
    <React.Fragment>
      <div className={ctx.mode?`${classes.divd}`:`${classes.divl}`}></div>
      <div className={ctx.mode?`${classes.backd}`:`${classes.backl}`}></div>

      <Wrapper>
        <section className={classes.sec}>
          <div className={classes.div}>
            <p className={classes.p}>T</p>
            <p className={classes.p}>O</p>
            <p className={classes.p}>D</p>
            <p className={classes.p}>O</p>
          </div>
          <div>
            <img className={classes.img} onClick={switcher} src={ctx.mode?`${arr6[0]}`:`${arr6[1]}`} alt="toggle" />
          </div>
        </section>
        <form onSubmit={submit} className={ctx.mode?`${classes.div2}`:`${classes.div2l}`}>
          <div className={ctx.mode?`${classes.circle}`:`${classes.circlel}`} ></div>
          <input
            type="text"
            onChange={change}
            value={val}
            placeholder="Create a new todo..."
            className={ctx.mode?`${classes.input}`:`${classes.inputl}`}
          />
          <button  type='submit' className={ctx.mode?`${classes.add}`:`${classes.addl}`}>ADD</button>
        </form>
        <main className={ctx.mode?`${classes.maind}`:`${classes.mainl}`}>
          <div className={classes.scroll}>
          {tasks.map((data, index) => {
            if (data === "") {
              return        <TodoList
              key={index}
              task={data}
              num={index}
              completed={completed}
              cross={cross}
              display={'none'}
            />;
            }
            return (
              <TodoList
                key={index}
                task={data}
                num={index}
                completed={completed}
                cross={cross}
              display={'flex'}

              />
            );
          }).reverse()}
          </div>
          <div className={ctx.mode?`${classes.div3a}`:`${classes.div3al}`}>
            <p className={classes.p2a}>
              {all.length - completedTasks.length-Number(minus)} items left
            </p>
            <div className={classes.div4}>
              <p className={arc?`${classes.selected}`:`${classes.p2}`} onClick={allFun}>
                All
              </p>
              <p className={adv?`${classes.selected}`:`${classes.p2}`} onClick={active}>
                Active
              </p>
              <p className={pro?`${classes.selected}`:`${classes.p2}`} onClick={comt}>
                Completed
              </p>
            </div>
            <p className={classes.p2a} onClick={clear}>
              Clear Completed
            </p>
          </div>
          <div className={ctx.mode?`${classes.div4p}`:`${classes.div4pl}`}>
              <p className={arc?`${classes.selected}`:`${classes.p2}`} onClick={allFun}>
                All
              </p>
              <p className={adv?`${classes.selected}`:`${classes.p2}`} onClick={active}>
                Active
              </p>
              <p className={pro?`${classes.selected}`:`${classes.p2}`} onClick={comt}>
                Completed
              </p>
            </div>
        </main>

      </Wrapper>
    </React.Fragment>
  );
};
export default Todo;
