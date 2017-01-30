const global = (state = {}, action) => {
  switch (action.type) {
    case 'INIT':
    console.log("action")
      console.log(action.data)
      return {
        data: action.data,
        lang: action.lang,
        toShow: [],
      }
    case 'SET_LANGUAGE':
      return Object.assign({}, state, {
        data: action.data,
        lang: action.lang,
        toShow: [],
      })
    case 'FILTER_PROJECTS':
    console.log(state.toShow.includes(action.tag)?
    [...state.toShow.slice(0, state.toShow.indexOf(action.tag)), ...state.toShow.slice(state.toShow.indexOf(action.tag)+1)]:
    [action.tag, ...state.toShow]);
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
