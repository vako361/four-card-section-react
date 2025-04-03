import "../shared/shared.css"
import SupervisorLogo from "../assets/icon-supervisor.svg"
export default function Supervisor(){
    return(
    <div className="box cyan" >
      <h2>Supervisor</h2> 

      <p> Monitors activity to identify project roadblocks </p>

      <img src={SupervisorLogo} alt="supervisor image" />
    </div>
    )
}