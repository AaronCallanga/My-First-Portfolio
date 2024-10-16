import { useState } from 'react'
import { forwardRef } from 'react'
import '../App.css'

export const ContactMe = forwardRef((props, ref) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [inquiries, setInquiries] = useState("")
    const [textarea, setTextarea] = useState("")
    const [touched, setTouched] = useState({})
 
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name && email && inquiries && textarea) {
        alert(`Thank you for your submission ${name} , we will get back to you shortly`)
        setName("")
        setEmail("")
        setInquiries("")
        setTextarea("")
        setTouched({})
        } else {
        alert(`Please provide all the necessary details in the form`)
        }
    }
    const handleBlur = (area) => {
        setTouched({...touched, [area]: true})
    }   // pag nag blur, mag cre-create yung handleBlur ng new properties ng Touched, yung name ng properties ay yung argument na ipapasa mo
        // kaya sa conditional rendering, touched.name yung nakalagay, kasi handleBlur("name") yung arguments
    return (
        <div className="contact-me" ref={ref} id={props.id}>
            <h2>Contact Me</h2>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="name" onChange={(e)=> setName(e.target.value)} value={name} onBlur={() => handleBlur("name")} className={!name && touched.name ? "required-border" : "required-border-done"}></input>
                {!name && touched.name && <p className="required">Required *</p>}    
                
                <label>Email Address</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} value={email} onBlur={()=>handleBlur("email")} className={!email && touched.email ? "required-border" : "required-border-done"}></input>
                {!email && touched.email && <p className="required">Enter a valid email address *</p> }

                <label>Type of inquiry</label>
                <input list="inquiries" onChange={(e)=>setInquiries(e.target.value)} value={inquiries} onBlur={()=>handleBlur("inquiries")} className={!inquiries && touched.inquiries ? "required-border" : "required-border-done"}></input>
                <datalist id="inquiries" placeholder="Choose or type your inquiry">
                    <option>Freelance</option>
                    <option>Full-time</option>
                    <option>Part-time</option>
                </datalist>
                {!inquiries && touched.inquiries && <p className="required">Please specify your reason *</p>}

                <label>Your Message</label>
                <textarea rows="10" cols="30" onChange={(e)=> setTextarea(e.target.value)} value={textarea} onBlur={()=>handleBlur("message")} className={textarea.trim().split(/\s+/).filter(Boolean).length < 10 && touched.message ? "required-border" : "required-border-done"}></textarea>
                {textarea.trim().split(/\s+/).filter(Boolean).length < 10 && touched.message && <p className="required">Please elaborate your message for better communication *</p>}
                <button type="submit" disabled={!name || !email || !inquiries || textarea.trim().split(/\s+/).filter(Boolean).length < 10}>Submit</button>
            </form>
        </div>
    )
});