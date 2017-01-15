export const dig = (rock, ...route) => {
  if (rock === undefined)
    return rock

  let nugget  = rock[route.shift()]
  if (route.length == 0 || nugget === undefined || nugget == null)
    return nugget

  return dig(nugget, ...route)
}

export const isOdd = (number) => !!(number % 2)

export const nameToId = (name) => name.replace(/(\[|_)/g, '-').replace(']', '')

export const displayNameForHOC = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}
