import React, {useState} from "react";
import { useHistory } from "react-router-dom";
// import "./RegisterForm.css";

function CreateProjectForm() {
    const [projectDetails, setProjectDetails] = useState({ 
        title: "",
        description: "",
        goal:"",
        image:"",

    });
    const history = useHistory();

    const handleChange = (e) => {
        const { id, value } = e.target; 
        setProjectDetails((prevProjectDetails) => ({ 
        ...prevProjectDetails,
        [id]: value,
        }));
        };

    const postData =async () => {
        const token = window.localStorage.getItem("token");
        if (!token) {
          window.alert("Not Logged In");
          return;
        }
        const response =await fetch(
            `${process.env.REACT_APP_API_URL}/users/`, 
            {
            method: "post",
            headers: {
                "Content-Type": "application/json", 
            },
            body: JSON.stringify(projectDetails), 
        });
        return response.json();
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        postData().then((response) => {   
            console.log(response);
            history.push("/");
        });
    };  

    return (
        <form>
            <div>
            <label htmlFor="title">Project Title:</label> 
            <input
                type="text"
                id="title" 
                placeholder="Enter Project Title"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="description">Description:</label> 
            <input
                type="text" 
                id="description" 
                placeholder="Project Description"
            />
            </div>
            <div>
            <label htmlFor="goal">Goal:</label> 
            <input
                type="number" 
                id="number" 
                placeholder="Project Goal"
                onChange={handleChange}
            />
            </div>
            <div>
            <label htmlFor="image">Image URL:</label> 
            <input
                type="url" 
                id="image" 
                placeholder="URL Image"
                onChange={handleChange}
            />
            </div>
        <button type="submit" onClick={handleSubmit}> Submit
        </button>
        </form>
        ); }
        
  export default CreateProjectForm;
