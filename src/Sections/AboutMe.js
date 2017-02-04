import React from 'react';

let AboutMe = ({strings, profile}) => {
  return (
    <section id="aboutme">
      <header className="major">
        <h2>{strings.aboutme_title}</h2>
      </header>
      <p>{profile.aboutme}</p>
    </section>
  )
}

export default AboutMe;
