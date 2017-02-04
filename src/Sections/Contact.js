import React from 'react';

let Contact = ({strings, profile}) => {
  return (
    <section id="contact">
      <h2>{strings.contact_title}</h2>
      <p>{strings.contact_text}</p>
      <div className="row">
        <div className="8u 12u$(small)">
          <form id="formspree" action={"https://formspree.io/"+profile.email}
method="POST">
            <div className="row uniform 50%">
              <div className="12u$"><input type="email" name="email" id="email" placeholder="Email" required/></div>
              <div className="12u$"><textarea name="message" id="message" placeholder="Message" rows="4" required></textarea></div>
            </div>
          </form>
          <ul className="actions">
            <li><input type="submit" onClick={()=>document.getElementById("formspree").submit()} value="Send Message" /></li>
          </ul>
        </div>
        <div className="4u$ 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home"><span className="label">Address</span></h3>
                {profile.address}
            </li>
            <li>
              <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
              <a href={"mailto:"+profile.email}>{profile.email}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact;
