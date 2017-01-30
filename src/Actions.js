export function INIT() {
  var lang = (navigator.language || navigator.userLanguage)==="fr"?"fr":"en"
  var s = './data_'+lang+'.json';
  return { type: 'INIT', lang, data: require(s) }
}


export function SET_LANGUAGE(lang) {
  var s = './data_'+lang+'.json';
  return { type: 'SET_LANGUAGE', lang, data: require(s) }
}


export function FILTER_PROJECTS(tag) {
  return { type: 'FILTER_PROJECTS', tag }
}
