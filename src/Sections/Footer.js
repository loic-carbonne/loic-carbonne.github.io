import React from 'react';

let Footer = ({strings, profile}) => {
  return (
    <footer id="footer">
      <div className="inner">
        <ul className="icons">
          {profile.links.map((elem)=>{
            return <li key={elem.class}><a href={elem.link} className={"icon "+elem.class}><span className="label">Email</span></a></li>
            })
          }
        </ul>
        <ul className="copyright">
          <li>© {strings.footer_copyright}</li><li>{strings.footer_content}<br /></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;
