import '../App.css';
import { forwardRef } from 'react';
import { littleLemon, toDoList, simpleCalculator, portfolio, arrow } from '../assets/project';


function Card(props) {
    return (
        <div className="card">
            <img src={props.src} alt={props.alt}></img>
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    <div className="see-more-arrow">
                        <button>See more</button>
                        <img src={arrow} alt="arrow" className="arrow"></img>
                    </div>
        </div>
    )
}


export const ProjectSection = forwardRef((props, ref) => {

    const myProjects = [    //our props, make it array of objects for rendering(map)
        {
            key: 1,
            src: littleLemon,
            alt:"Little Lemon website",
            title: "Little Lemon Website",
            description: "A beautifully designed website for a fictional restaurant named Little Lemon. It features a modern layout with an emphasis on vibrant visuals and a user-friendly menu. The site includes sections for the menu, special offers, and contact information, making it perfect for attracting and informing customers."   
        }, 
        {
            key: 2,
            src: toDoList,
            alt:"a to do list app",
            title: "To Do List App",
            description: "A simple and intuitive to-do list application that helps users manage their tasks efficiently. Users can add, edit, and remove tasks, and mark them as completed. The app provides a clean interface and basic functionality to keep track of daily activities and stay organized."
        }, 
        {
            key: 3,
            src: simpleCalculator,
            alt:"a simple calculator",
            title: "Simple Calculator",
            description: "A basic calculator application designed to perform fundamental arithmetic operations such as addition, subtraction, multiplication, and division. It features a straightforward interface, making it easy for users to perform quick calculations without any distractions."
        }, 
        {
            key: 4,
            src: portfolio,
            alt: "My own portfolio",
            title: "My Portfolio",
            description: "A sleek personal website showcasing my projects, skills, and achievements. It features a modern, responsive design with sections like 'About Me,' 'Projects,' and 'Contact.' This site highlights my web development work with links to live demos and GitHub repositories, offering a professional online presence"
        }
    ];

    return (
        <div className='projects' ref={ref} id={props.id}>
            <h2>My Projects</h2>
            <div className="project-section">
                {myProjects.map((projectItem)=> (   //map will receive the myProjects(array of objects) and will name individual object as projectItem, then each item(specifically props) will go to card component
                    <Card
                    key={projectItem.key}   //props
                    src={projectItem.src}
                    alt={projectItem.alt}
                    title={projectItem.title}
                    description={projectItem.description}
                    />
                ))}
            </div>
        </div>

    )
})