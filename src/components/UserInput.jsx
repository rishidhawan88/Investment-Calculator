import React from "react";

// const intialObject={
//     initialInvestment: 1000,
//     annualInvestment: 500,
//     expectedReturn: 10,
//     duration: 5
// };

export default function UserInput({object, onValueChange}){
// const[calculationObject,setCalculationObject]=React.useState(intialObject);

//     function handleInputChange(event, parameterName){
//         setCalculationObject((prevCalculationObject)=>{
//             return({
//                 ...prevCalculationObject,
//                 [parameterName]:event.target.value
//             })
//         });


//     }


    return( <section id="user-input">
                <div className="input-group">

                    <p>
                    <label>Initial Investment</label>
                    <input type="number" required value={object.initialInvestment} 
                    onChange={(event)=>onValueChange(event,"initialInvestment")}></input>
                    </p>
                    
                    <p>
                    <label>Annual Investment</label>
                    <input type="number" required value={object.annualInvestment} 
                    onChange={(event)=>onValueChange(event,"annualInvestment")}></input>
                    </p>
                    </div>


                    <div className="input-group">
                    <p>
                    <label>Expected Return</label>
                    <input type="number" required value={object.expectedReturn} 
                    onChange={(event)=>onValueChange(event,"expectedReturn")}></input>
                    </p>
                    
                    <p>
                    <label>Duration</label>
                    <input type="number" value={object.duration} 
                    onChange={(event)=>onValueChange(event,"duration")}></input>
                    </p>
                

                </div>
            
            

        </section>
    );
}