import {profile} from '../assets/socials'
import '../App.css'

export function LandingPage() {
    return (
        <div className="landing-page">
            <img src={profile} alt="profile"></img>
            <p>Hello, I am Aaron!</p>
            <h1>An Aspiring Fullstack Developer</h1>
        </div>
    )
}