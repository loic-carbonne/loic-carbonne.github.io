import React from 'react';

let AboutMe = ({strings, profile}) => {
  return (
    <section id="marketing">
      <header className="major">
        <h2>{strings.marketing_title}</h2>
      </header>
      <div className="iframe-container">
        <iframe className="video-iframe" src="https://player.vimeo.com/video/279840725" frameborder="0" allowfullscreen></iframe>
      </div>
      <br/>
      <a href={profile.talk_link} target="_blank">{profile.talk_label}</a>
    </section>
  )
}

export default AboutMe;
