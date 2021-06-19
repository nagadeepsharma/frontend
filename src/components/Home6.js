import React, {useState } from 'react'

function Home6() {
    const [url, setUrl] = useState('mailto:nagadeep.chandragiri@gmail.com?subject=subject&body=body');
    const [name, setName] = useState('');
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const[err,seterr]=useState(null)
    function submithandler(event){
        event.preventDefault()
        if((name && subject && email && message).length!==0){
        window.open(`mailto:nagadeep.chandragiri@gmail.com?subject=${subject}&body=${name}: ${message}`)
        setName("")
        setSubject("")
        setEmail("")
        setMessage("")
        }
        else{
            seterr("Please Provide Valid Data")
            setTimeout(()=>{seterr(null)},5000)
        }
    }
    return (
        <div className="home6" id="contact">
            <div className="home6-title">
                <h2>Get in Touch</h2>
            </div>
            <div className="home6-contact">
                <form className="inputs" onSubmit={submithandler} target="_window">
                    <p style={{color:"red"}}>{err?err:""}</p>
                    <p>Name</p>
                    <input type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
                    <p>Subject</p>
                    <input type="text" required value={subject} onChange={(e)=>setSubject(e.target.value)} />
                    <p>Email</p>
                    <input type="text" required value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <p>Message</p>
                    <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} />
                    <button type="submit">Send</button>
                </form>
                <h3>Made with ReactJS-Django &#10084;&#65039;</h3>
            </div>
        </div>
    )
}

export default Home6
