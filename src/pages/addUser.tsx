import { useEffect, useState } from "react"

export default function AddUser(){
    const [name, setName] = useState("")
    const [device, setDevice] = useState("")

    useEffect(() => {
        fetch('http://localhost:5000/users')
        .then(response => response.json())
        .then(d => console.log(d));
    }, [])

    async function postData(){
        try{
            const response = await fetch("http://localhost:5000/adduser",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body: JSON.stringify({
                    name:name,
                    device:device,
                })
            })
            const result  = await response.json();
            console.log("Success:", result);
        }catch(err){
            console.error("Error:", err);
        }
    }
    
    
    return(
        <main className="max-w-screen-lg">
            <form className="flex flex-col">
                <label>Name :</label>
                <input className='border w-44 rounded-md' placeholder='Enter your Name' type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <label>Device :</label>
                <input className='border w-44 rounded-md' placeholder='Enter device Name' type="text" value={device} onChange={(e)=>{setDevice(e.target.value)}}/>
                <input type="submit" className="border rounded-md bg-slate-500 text-white w-20 mt-2" onClick={(e)=>{
                    e.preventDefault();
                    postData()
                }}></input>
                
            </form>
        </main>
    )
}