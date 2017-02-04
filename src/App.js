import React, { PropTypes } from 'react';
import Header from './Sections/Header'
import AboutMe from './Sections/AboutMe'
import Contact from './Sections/Contact'
import Experiences from './Sections/Experiences'
import Footer from './Sections/Footer'

let App = ({ profile ,strings, lang, toShow, sortedTags, onLangChange, onClickTag, showAllTags, toggleShowAllTags }) => {
  return (
	  <div>
      <Header strings={strings} lang={lang} onLangChange={onLangChange} />

			<div id="main">
        <AboutMe strings={strings} profile={profile} />

        <Experiences profile={profile} strings={strings} toShow={toShow} sortedTags={sortedTags} onClickTag={onClickTag}
                      toggleShowAllTags={toggleShowAllTags} showAllTags={showAllTags} />

        <Contact strings={strings} profile={profile} />
			</div>

      <Footer strings={strings} profile={profile}/>
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
  showAllTags: PropTypes.bool.isRequired,
  toggleShowAllTags: PropTypes.func.isRequired
}

export default App;
