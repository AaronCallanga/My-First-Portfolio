import '../App.css';
import { github, linkedIn, gmail, fb } from '../assets/socials';
import '../App.js'
import { useState, useEffect } from 'react';

function SocialCard(props) {

    return (
        <a rel="noreferrer noopener" target="_blank" href={props.href}>
            <img src={props.src} alt={props.alt}></img>
        </a>
    )
}

export function Header({scrollToSection, projectsRef, contactRef}) {

    const [showHeader, setShowHeader] = useState(true)  //act as a class name
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () =>{
            if (window.scrollY > lastScrollY) {
                setShowHeader(false)    //scroll pababa, pataas ng pataas ang value ng Y
            } else {
                setShowHeader(true)     //scroll pataas, pababa ng pababa ang value ng Y
            }

            setLastScrollY(window.scrollY)
        };

        window.addEventListener("scroll", handleScroll)

        return () => {window.removeEventListener("scroll", handleScroll)}   //clean up
    },[lastScrollY])

    const mySocials = [
        {
            key: 1,
            href: "https://github.com/AaronCallanga",
            src: github,
            alt: "github"
        }, 
        {
            key: 2,
            href: "https://www.linkedin.com/in/aaron-dave-callanga-a9408a330/",
            src: linkedIn,
            alt: "linked in"
        }, 
        {
            key: 3,
            href: "https://gmail.com",
            src: gmail,
            alt: "gmail"
        }, 
        {
            key: 4,
            href: "https://www.facebook.com/ros729/",
            src: fb,
            alt: "Facebook"
        }
    ]
    return (
        <div className={`header ${showHeader ? "visible" : "hidden"}`}>
            <div className="socials">
                {mySocials.map((socialCardItem)=> (
                <SocialCard 
                key ={socialCardItem.key}
                href={socialCardItem.href}
                src={socialCardItem.src} 
                alt={socialCardItem.alt}/>
                ))}
            </div>
            <div className="nav">
                <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
                <button onClick={() => scrollToSection(contactRef)}>Contact Me</button>
            </div>
        </div>
    );
}