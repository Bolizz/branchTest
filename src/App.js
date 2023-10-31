
import './App.css';
import { useState } from 'react';
import CafeForm from './components/Form';
import  ClimbingBox from 'react-spinners/ClimbingBoxLoader';
function App() {
  const [info, setInfo] = useState({name:'', CustoserNums: 0, averageSpend: 0.00, reve: 0, loading: false});
  
  const timeOut = ()=>{
    if(info.name==='' || info.CustomerNums === 0 || info.averageSpend === 0.00) {
      alert("Please fill out the info")
      setInfo({...info, loading : false})
    }
    else{
    setTimeout(()=>{
      setInfo({...info, loading: false});
    }, 5000);
  }
  }
  if(info.loading === true){
    timeOut();
  }
  
  return (
    <div className="App">
      {info.loading ? ( <ClimbingBox/>) : (
        <div className='content'>
        <div className='img'>
          <h1>Branch</h1>
          {info.reve == 0 ? (<div></div>) : 
          (<div className='cafeRev'>
            <div>
              Revenue of {info.name} is: {info.reve}
            </div>
          </div>)}
      </div>
      <div className='right'>
       <CafeForm className="cafeForm"
       sendData = 
       {(info,rev) => setInfo(
        {name: info.name, CustomerNums: info.CustomerNums,
        averageSpend: info.averageSpend, reve: rev, loading: info.subed}
        )
        }
       ></CafeForm>
      </div>
    </div>
      ) }
    </div>
  );
}

export default App;
