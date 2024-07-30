import React from 'react';

function Experience() {
  const experiences = [
    { company: 'IDeaS inc.', role: 'R&D Intern', period: 'Aug 2023 - April 2024', logo_path: '/assets/cepton_logo.png' },
    { company: 'Cepton', role: 'Software Engineer Intern', period: 'Jun 2022 - Sept 2022', logo_path: '/assets/ideas_logo.jpg' },
    { company: 'Cepton', role: 'Software Engineer Intern', period: 'Jun 2021 - Aug 2021', logo_path: '/assets/ideas_logo.jpg'},
  ];

  return (
    <div className="right-column">
        <h2>Working experience</h2>
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
  );
}

export default Experience;