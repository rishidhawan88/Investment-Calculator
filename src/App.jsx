import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Result from "./components/Result"
import React from "react";



const intialObject={
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 10,
  duration: 5
};


function App() {

  const[calculationObject,setCalculationObject]=React.useState(intialObject);

  function handleInputChange(event, parameterName){
      
        setCalculationObject((prevCalculationObject)=>{
            return({
                ...prevCalculationObject,
                [parameterName]:+event.target.value
                })
            });
      

      
      
  }

  const checkInputIsValid= calculationObject.duration>0;

  

  // React.useEffect(() => {
  //   console.log(calculationObject);
  // }, [calculationObject]);



  return (
    <>
    <Header/>
    <UserInput object={calculationObject} onValueChange={handleInputChange}/>
    {checkInputIsValid===false && <p className="center">Please Enter Valid Duration</p>}
    {checkInputIsValid && <Result object={calculationObject}/>}
    </>
  )
}

export default App
