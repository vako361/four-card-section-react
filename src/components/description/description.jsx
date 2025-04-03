import MusicLogo from "../../assets/icon-music.svg"
import "./description.css"
export default function Description(){
    return(
        <div>
            <h1>Order Summary</h1>
            <p className="description">You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
            <div className="music-box">
                <img src={MusicLogo} alt="music icon" className="music-logo"/>
                <div className="span-column">
                    <span>Annual Plan</span>
                <span>$59.99/year</span>
                
            </div>
            
            <span className="change">Change</span>
            
            </div>
            <div className="buttons">
                <button className="payment">Proceed to Payment</button>
            <button className="cancel">Cancel Order</button>
            </div>
        </div>
    )
}