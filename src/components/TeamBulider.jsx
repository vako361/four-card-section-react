import "../shared/shared.css"
import TeamBuilderLogo from "../assets/icon-team-builder.svg"
export default function TeamBuilder(){
    return(
    <div className="box red" >

      <h2>Supervisor</h2> 

      <p> Monitors activity to identify project roadblocks </p>

      <img src={TeamBuilderLogo} alt="supervisor image" />
    </div>
    )
}