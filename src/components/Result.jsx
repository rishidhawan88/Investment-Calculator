import { calculateInvestmentResults} from "../util/investment.js";
import { formatter } from "../util/investment.js";

export default function Result({object}){
    const resultArray=calculateInvestmentResults(object);
    const initialInvestment=resultArray[0].valueEndOfYear -resultArray[0].interest -resultArray[0].annualInvestment;

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Invested value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {resultArray.map((resultRow)=>{
                    const totalInterestTillNow=resultRow.valueEndOfYear -resultRow.annualInvestment*resultRow.year -initialInvestment;

                    const totalInvestedCapital=resultRow.annualInvestment*resultRow.year |+initialInvestment;
                    return(
                        <tr>
                            <td>{resultRow.year}</td>
                            <td>{formatter.format(resultRow.valueEndOfYear)}</td>
                            <td>{formatter.format(resultRow.interest)}</td>
                            <td>{formatter.format(totalInterestTillNow)}</td>
                            <td>{formatter.format(totalInvestedCapital)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
     );
    
}