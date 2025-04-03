import "./App.css"
import Starter from "./components/starter/Starter"
import Supervisor from "./components/Supervisor"
import Karma from "./components/Karma"
import Calculator from "./components/Calculator"
import TeamBuilder from "./components/TeamBulider"
export default function App()
{
  return(
   <>
   <Starter />
   <main>
   <Supervisor />
   <div className="wrapper">
    <TeamBuilder />
   <Karma />
   </div>
   <Calculator />
   </main>
   </>
  )
}
