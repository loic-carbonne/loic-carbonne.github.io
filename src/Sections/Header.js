import React from 'react';

let Header = ({strings, lang, onLangChange}) => {
  return (
    <header id="header">
      <div className="inner">
        <a href="#" className="image avatar"><img src="images/avatar.png" alt="avatar" /></a>
        <h1><strong>{strings.header_strongcontent}</strong>{strings.header_content}</h1>
        <div style={{position:"absolute",bottom:15,right:20}}>
        <a className={"flag" + (lang==="en"?" activeFlag":"")} onClick={()=>{onLangChange("en")}}><img alt="English" src="images/english.png" /></a>
        <a className={"flag" + (lang==="fr"?" activeFlag":"")} onClick={()=>{onLangChange("fr")}}><img alt="French" src="images/french.png" /></a>
        </div>
      </div>
    </header>
  )
}

export default Header;
