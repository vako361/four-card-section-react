import "../shared/shared.css"
import KarmaLogo from "../assets/icon-karma.svg"
export default function Karma(){
    return(
    <div className="box yellow" >
      <h2>Karma</h2> 

      <p> Regularly evaluates our talent to ensure quality </p>

      <img src={KarmaLogo} alt="karma image" />
    </div>
    )
}