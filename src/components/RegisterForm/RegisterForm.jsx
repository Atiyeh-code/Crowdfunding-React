import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import "./RegisterForm.css";

function RegisterForm() {
    const [credentials, setCredentials] = useState({ 
        username: "",
        password: "",
        email:"",
        first_name:"",
        last_name:"",
        image:"",
        location:"",
    });
    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target; 
        setCredentials((prevCredentials) => ({ 
        ...prevCredentials,
        [id]: value,
        }));
        };

    const postData =async () => {
        const response =await fetch(
            `${process.env.REACT_APP_API_URL}/users/`, 
            {
            method: "post",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(credentials), 
        });
        return response.json();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {   
            console.log(response);
            history.push("/login");
        });
    };  

    return (
        <form>
            <div>
            <label htmlFor="username">Username:</label> 
            <input
                type="text"
                id="username" 
                placeholder="Enter username"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="password">Password:</label> 
            <input
                type="password" 
                id="password" 
                placeholder="Password"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="email">Email:</label> 
            <input
                type="text" 
                id="email" 
                placeholder="Email"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="first_name">First Name:</label> 
            <input
                type="text" 
                id="first_name" 
                placeholder="First Name"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="last_name">Last Name:</label> 
            <input
                type="text" 
                id="last_name" 
                placeholder="Last Name"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="image">Image:</label> 
            <input
                type="url" 
                id="image" 
                placeholder="URL Image"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="location">Location:</label> 
            <input
                type="text" 
                id="location" 
                placeholder="Location"
                onChange={handleChange}
            />
            </div>
        <button type="submit" onClick={handleSubmit}> Register
        </button>
        </form>
        ); }
        
  export default RegisterForm;
