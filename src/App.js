import React, { PropTypes } from 'react';

var dateFormat = require('dateformat');

var anyMatchInArray = function (target, toMatch) {
    if( toMatch !== undefined ){
    //"use strict";
    var found, targetMap, i, j, cur;
    found = false;
    targetMap = {};
    for (i = 0, j = target.length; i < j; i++) {
        cur = target[i];
        targetMap[cur] = true;
    }
    for (i = 0, j = toMatch.length; !found && (i < j); i++) {
        cur = toMatch[i];
        found = !!targetMap[cur];
    }
    return found;
    }
    return false;
};


let Project = ({project, first, logo, toShow}) => {
  return (
    <tr>{(first?<td rowSpan={2}>logo</td>:"")}<td>
    <h3>{project.label}</h3>
    <div>{project.description}</div>
    {project.link!==undefined?<a href={project.link}>Link</a>:""}
    {project.link!==undefined?<br />:""}
    {project.tags!==undefined?project.tags.map(t=>{
      return <span key={t} className={"tags"+(toShow.includes(t)?" highlight":"")}>{t} </span>
    }):""}
    </td></tr>
  )
}

let Place = ({elem, strings, toShow, profile}) => {
  return (
    <li>
          <h3>{elem.job!==undefined?elem.job+" "+strings.at+" ":""}{elem.name} <span className="duration">{elem.started !== undefined ? dateFormat(new Date(elem.started), "mmmm dS, yyyy"):""} - {elem.ended !== undefined ? dateFormat(new Date(elem.ended), "mmmm dS, yyyy"):"now"}</span></h3>
          <table>
          <tbody>
          {profile.projects.filter(p => {return p.linked_to === elem.id && (toShow.length === 0 || anyMatchInArray(toShow,p.tags) ) }).map((p)=>{
            return <Project key={p.label} project={p} toShow={toShow} />
          })
          }
          </tbody>
          </table>
        </li>
  )
}


let App = ({ profile ,strings, lang, toShow, sortedTags, onLangChange, onClickTag }) => {
    return (
	<div>
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
			<div id="main">
					<section id="one">
						<header className="major">
							<h2>{strings.aboutme_title}</h2>
						</header>
						<p>{profile.aboutme}</p>
					</section>
					<section id="two">
						<header className="major">
            <h2>{strings.experiences_title}</h2>
              <h5>{strings.sortbytechno}</h5>
							{
								sortedTags.map( tag => { return <button onClick={()=>{onClickTag(tag.tag)}} className={"button small"+(toShow.includes(tag.tag)?" special":"")} key={tag.tag}>{tag.tag} ({tag.c})</button>})
							}
              <hr></hr>
							<br/>Work
							<ul className="alt">
								{profile.work_companies.filter((elem)=>{
                  return toShow.length === 0 || profile.projects.filter((pr)=>{ return pr.linked_to === elem.id && anyMatchInArray(toShow,pr.tags) }).length > 0
                }).map((elem)=>{
									return <Place key={elem.id} elem={elem} strings={strings} toShow={toShow} profile={profile} />
									})
								}
							</ul>
              <hr></hr>
              Personnal
              <table>
              <tbody>
              {profile.projects.filter(p => {return p.linked_to === undefined && (toShow.length === 0 || anyMatchInArray(toShow,p.tags) )}).map((p)=>{
                return <Project key={p.label} project={p} toShow={toShow}/>
              })
              }
              </tbody>
              </table>
              <hr></hr>
							School
							<ul className="alt">
								{profile.schools.filter((elem)=>{
                  return toShow.length === 0 || profile.projects.filter((pr)=>{ return pr.linked_to === elem.id && anyMatchInArray(toShow,pr.tags) }).length > 0
                }).map((elem)=>{
                  return <Place key={elem.id} elem={elem} strings={strings} toShow={toShow} profile={profile} />
									})
								}
							</ul>
						</header>
					</section>
					<section id="three">
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
			</div>
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
	</div>
    );
}

App.propTypes = {
  profile: PropTypes.object.isRequired,
  strings: PropTypes.object.isRequired,
  lang: PropTypes.string.isRequired,
  toShow: PropTypes.array.isRequired,
  sortedTags: PropTypes.array.isRequired,
  onLangChange: PropTypes.func.isRequired,
  onClickTag: PropTypes.func.isRequired,
}

export default App;
