import "../shared/shared.css"
import CalculatorLogo from "../assets/icon-calculator.svg"
export default function Calculator(){
    return(
    <div className="box blue" >
      <h2>Calculator</h2> 

      <p> Uses data from past projects to provide better delivery estimates </p>

      <img src={CalculatorLogo} alt="calculator image" />
    </div>
    )
}