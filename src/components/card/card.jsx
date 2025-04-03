import "./card.css"
import HeroLogo from "../../assets/illustration-hero.svg";
import Description from "../description/description";
export default function Card(){
return(
 <div className="card">
   <img src={HeroLogo} alt="hero logo" className="hero-logo" />
   <Description />
 </div>
)
}