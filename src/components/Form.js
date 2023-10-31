import {React, useState, useRef} from "react";

import "./Form.css"
function CafeForm(props){
     const [cafeInfo, setCafeInfo] = useState({name:'', CustomerNums: 0, averageSpend: 0.00, subed: true});
     const [rev, setRev] = useState(0.00);
     const handleSubmit = (e) => {
        e.preventDefault();

      }
     const sub = ()=>{
        setCafeInfo({name:'', CustomerNums:0, averageSpend:0.00, subed: true})
     }
    return(
        <div className="main">
        <form className="mainForm" onSubmit={handleSubmit}>
         <div className="lab cafeName">  
            <label className="cafeName">Cafe Name: </label>
            <input className="input cafeName"
                value={cafeInfo.name} 
                onChange={(e)=>{
                    setCafeInfo({...cafeInfo, name: e.target.value});
                    }
                }
             //   placeholder = "Please insert name of the cafe"
                ></input>
            </div>
            <div className="lab cusNum">
                <label className="cusNum">CustomerNums: </label>
                <input className="input cusNum"
                    //value={CustomerNums} 
                    onChange={(e)=>{
                            setCafeInfo({...cafeInfo, CustomerNums: e.target.value, });
                     }
                 }
              //   placeholder = "Please insert number of the customers"
                 ></input>
            </div>
            <div className="lab avSpend">
            <label className="avSpend">Average Spend: </label>
            <input className="input avSpend"
                //value={averageSpend} 
                onChange={(e)=>{
                        setCafeInfo({...cafeInfo, averageSpend: e.target.value});
                        setRev(e.target.value * cafeInfo.CustomerNums);
                    }
                }
               // placeholder = "Please insert the average spend per customers"
                ></input>
            </div>
            

            <button className="btn" 
                onClick={()=> {
                    props.sendData(cafeInfo, rev)
                    sub()
                    }}>SUBMIT</button>
        </form>
        </div>

    );
}
export default CafeForm;