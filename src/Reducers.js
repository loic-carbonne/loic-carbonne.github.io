const global = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
    var hist = {};
    var sortedTags = [];
    [].concat.apply(
      [],action.data.profile.projects.map( p => {
          return p.tags
        }
      )
    ).filter((e)=>{return e !== undefined}).map( (a) => { if (a in hist) hist[a] ++; else hist[a] = 1; } );
    for(var propertyName in hist) {
      sortedTags.push({tag:propertyName,c:hist[propertyName]})
    }
    sortedTags.sort((a,b)=>{return b.c - a.c})
      return {
        data: action.data,
        lang: action.lang,
        sortedTags: sortedTags,
        toShow: [],
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
    default:
      return state
  }
}

export default global
