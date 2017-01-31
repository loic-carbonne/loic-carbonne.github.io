import { connect } from 'react-redux'
import { SET_LANGUAGE, FILTER_PROJECTS } from './Actions'
import App from './App'

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.data.profile,
    strings: state.data.strings,
    sortedTags: state.sortedTags,
    lang: state.lang,
    toShow: state.toShow,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLangChange: (lang) => {
      dispatch(SET_LANGUAGE(lang))
    },
    onClickTag: (tag) => {
      dispatch(FILTER_PROJECTS(tag))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
