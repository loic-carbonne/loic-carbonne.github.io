const global = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
    var hist = {};
    var sortedTags = [];
    var allTags = [].concat.apply(
      [],action.data.profile.projects.map( p => {
          return p.tags
        }
      )
    ).filter((e)=>{return e !== undefined})
    for( var i = 0 ; i < allTags.length ; i++){
      if (allTags[i] in hist) hist[allTags[i]] ++; else hist[allTags[i]] = 1;
    }
    for(var propertyName in hist) {
      if(hist.hasOwnProperty(propertyName)){
        sortedTags.push({tag:propertyName,c:hist[propertyName]})
      }
    }
    sortedTags.sort((a,b)=>{return b.c - a.c})
      return {
        data: action.data,
        lang: action.lang,
        sortedTags: sortedTags,
        toShow: [],
        showAllTags: false,
      }
    case 'SET_LANGUAGE':
      return Object.assign({}, state, {
        data: action.data,
        lang: action.lang,
        toShow: [],
      })
    case 'FILTER_PROJECTS':
    return Object.assign({}, state, {
      toShow: (state.toShow.includes(action.tag)?
      [...state.toShow.slice(0, state.toShow.indexOf(action.tag)), ...state.toShow.slice(state.toShow.indexOf(action.tag)+1)]:
      [action.tag, ...state.toShow])
    })
    case 'TOGGLE_SHOW_TAG':
      return Object.assign({}, state, {
        showAllTags: !state.showAllTags,
      })
    default:
      return state
  }
}

export default global
