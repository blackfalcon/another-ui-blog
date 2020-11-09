const _getTokens = (primary, tokenSet) => {

  if (primary.hasOwnProperty('value') && primary.hasOwnProperty('name')) {
    tokenSet.push(
      { "token": primary['name'], "tokenvalue": primary['value'], "reference": primary['reference'] }
    )
  }

  if (primary instanceof Object) {
    for (let key in primary) {
      _getTokens(primary[key], tokenSet)
    }
  }

  return JSON.stringify(tokenSet);
}

export default _getTokens
