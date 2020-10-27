import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import "./HomePage.css";



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
        <div>
            <img className="cover" src="https://cfcv.com.au/wp-content/uploads/2017/03/Big-Give-Facebook-Cover-image-centred2-1-1.jpg"></img>
        </div>

        <div className="mission">
            <h2>Our Mission</h2>
            <p>Communication is a basic human right that supports successful participation in society and life roles, including relationships, education, and employment. However, there are large numbers of individuals whose communication is impaired due to conditions such as stroke and brain injury, producing significant barriers to their everyday activity, participation in life, and sense of wellbeing. </p>
            <p>Our mission is to raise fund for series of projects to share valuable stories of individuals experiencing communication disorders and develop technological interventions to assist them in their everyday challenges. individuals passionate about increasing awareness of and supporting individuals with communication disorders are encouraged to contribute. </p>

        </div>

        <div className="projects">
        <h2>Featured Projects</h2>
        </div>
        <div id="project-list">
        {projectList.map((projectData, key) => { 
         return <ProjectCard key={key} projectData={projectData} />;
         })}
        </div>

        <div className="contactUs">
            <h2>Contact Us</h2>
            <p>Let us know how we can help</p>
        </div>
        <footer>2020 created by GIVE BIG</footer>
    </div>
);
}

export default HomePage;