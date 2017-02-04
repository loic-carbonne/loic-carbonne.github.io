import React from 'react';
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

let Place = ({elem, strings, projects, toShow}) => {
  return (
    <li>
    <h3>{elem.job!==undefined?elem.job+" "+strings.at+" ":""}{elem.name} <span className="duration">{elem.started !== undefined ? dateFormat(new Date(elem.started), "mmmm dS, yyyy"):""} - {elem.ended !== undefined ? dateFormat(new Date(elem.ended), "mmmm dS, yyyy"):"now"}</span></h3>
    <table>
    <tbody>
    {projects.filter(p => {return p.linked_to === elem.id }).map((p)=>{
      return <Project key={p.label} project={p} toShow={toShow} />
    })
  }
  </tbody>
  </table>
  </li>
)
}

let Experiences = ({strings, sortedTags, profile, toShow, onClickTag, showAllTags, toggleShowAllTags}) => {

  let work_projects = profile.projects.filter((p)=>{
    return (toShow.length === 0 || anyMatchInArray(toShow,p.tags))
    && profile.work_companies.filter(((w)=>{return p.linked_to === w.id})).length > 0
  });
  let school_projects = profile.projects.filter((p)=>{
    return (toShow.length === 0 || anyMatchInArray(toShow,p.tags))
    && profile.schools.filter(((w)=>{return p.linked_to === w.id})).length > 0
  });
  let personal_projects = profile.projects.filter((p)=>{
    return p.linked_to === undefined && (toShow.length === 0 || anyMatchInArray(toShow,p.tags))

  });
  return (
    <section id="experiences">
    <header className="major">
    <h2>{strings.experiences_title}</h2>
    <h5>{strings.sortbytechno}</h5>
    <div id="ListTagsDiv" className={showAllTags?"showAll":"reducedHeight"}>
    {
      sortedTags.map( tag => { return <button onClick={()=>{onClickTag(tag.tag)}} className={"button small"+(toShow.includes(tag.tag)?" special":"")} key={tag.tag}>{tag.tag} ({tag.c})</button>})
    }
    </div>
    <div id="buttonShowMoreTag">
    <a onClick={toggleShowAllTags}>
      {showAllTags?strings.seeLessTags:strings.seeMoreTags}
    </a>
    </div>
    <hr></hr>
    { work_projects.length > 0 &&
      <ul className="alt">
      {strings.work_title}
      {profile.work_companies.filter((w)=>{return work_projects.map((p)=>{return p.linked_to}).includes(w.id)}).map((elem)=>{
        return <Place key={elem.id} elem={elem} strings={strings} projects={work_projects} toShow={toShow}/>
      })
    }
    </ul>
  }
  { personal_projects.length > 0 &&
    <ul className="alt">
    {strings.personal_title}
    <table>
    <tbody>
    {personal_projects.map((p)=>{
      return <Project key={p.label} project={p} toShow={toShow}/>
    })
  }
  </tbody>
  </table>
  </ul>
}
{ school_projects.length > 0 &&
  <ul className="alt">
  {strings.education_title}
  {profile.schools.filter((w)=>{return school_projects.map((p)=>{return p.linked_to}).includes(w.id)}).map((elem)=>{
    return <Place key={elem.id} elem={elem} strings={strings} projects={school_projects}  toShow={toShow}/>
  })
}
</ul>
}
</header>
</section>
)
}


export default Experiences;
