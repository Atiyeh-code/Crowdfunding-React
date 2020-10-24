import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";


function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/projects/`)
        .then((results) => {
        return results.json();
        })
        .then((data) => {
        setProjectList(data);
        });
        }, []);
        
return (
      <div>
        <div className="mission">
        <h2>Our Mission</h2>
        <p>blah blah blah</p>
        </div>

        <div className="projects">
        <h2>Projects</h2>
        <p>blah blah blah</p>
        </div>

        <div className="contactUs">
        <h2>contact us</h2>
        <p>blah blah blah</p>
        </div>
    </div>
);
}

export default HomePage;