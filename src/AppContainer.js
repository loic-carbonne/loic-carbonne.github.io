import { connect } from 'react-redux'
import { SET_LANGUAGE, FILTER_PROJECTS, TOGGLE_SHOW_TAG } from './Actions'
import App from './App'

const mapStateToProps = (state, ownProps) => {
  return {
    profile: state.data.profile,
    strings: state.data.strings,
    sortedTags: state.sortedTags,
    lang: state.lang,
    toShow: state.toShow,
    showAllTags: state.showAllTags,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onLangChange: (lang) => {
      dispatch(SET_LANGUAGE(lang))
    },
    onClickTag: (tag) => {
      dispatch(FILTER_PROJECTS(tag))
    },
    toggleShowAllTags: () => {
      dispatch(TOGGLE_SHOW_TAG())
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
