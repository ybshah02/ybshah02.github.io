import React from 'react';
import { NavLink } from 'react-router-dom';
import headshot from '../../assets/linkedin.jpg'

function Profile() {


  const education = [
    { school: 'UCLA', degree: 'B.S. in Computer Science', period: 'Oct 2020 - Jun 2024', logo_path: '/assets/ucla.png' },
    { school: 'Georgia Tech', degree: 'M.S. in Computer Science', period: 'Aug 2024 - Current', logo_path: '/assets/gt.png' },
  ];

  const experiences = [
    { company: 'IDeaS inc.', role: 'R&D Intern', period: 'Aug 2023 - April 2024', logo_path: '/assets/ideas_logo.jpg' },
    { company: 'Cepton', role: 'Software Engineer Intern', period: 'Jun 2022 - Sept 2022', logo_path: '/assets/cepton_logo.png' },
    { company: 'Cepton', role: 'Software Engineer Intern', period: 'Jun 2021 - Aug 2021', logo_path: '/assets/cepton_logo.png'},
  ];

  return (
    <section className="profile">
      <div className="left-column">
        <img src={headshot} className="profile-image" />
        <h1>I'm Yash Shah</h1>
        <p>Software Engineer. Entrepreneur. Enthusiast.</p>
      </div>
      <div className="right-column">
        <h2>Passionate in creating consumer oriented products.</h2>
        <div className="cta-buttons">
          <button className="talk-with-me">Talk with me</button>
          <NavLink to="/projects"><button className="see-my-work">See my work</button></NavLink>
        </div>

        <div className="divider"></div>

        <h2 className="experience-header">Education</h2>
        {education.map((exp, index) => (
            <div key={index} className="experience-item">
            <img className="company-logo" src={exp.logo_path}/>
            <div>
                <h3>{exp.degree}</h3>
                <p>{exp.school}</p>
            </div>
            <span>{exp.period}</span>
            </div>
        ))}

        <div className="divider"></div>

        <h2 className="experience-header">Working experience</h2>
        {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
            <img className="company-logo" src={exp.logo_path}/>
            <div>
                <h3>{exp.role}</h3>
                <p>{exp.company}</p>
            </div>
            <span>{exp.period}</span>
            </div>
        ))}
      </div>
    </section>
  );
}

export default Profile;