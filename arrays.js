var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(a, r){
  return [r, ...a]
}

function destructivelyAddElementToBeginningOfArray(a, r){
  a.unshift(r)
  return a
}

function addElementToEndOfArray(a, r){
  return [ ...a, r ]
}

function destructivelyAddElementToEndOfArray(a, r){
  a.push(r)
  return a
}

function accessElementInArray(a, r){
  return a[r]
}

function removeElementFromBeginningOfArray(a, r){
  a.shift(r)
  return a
}

function removeElementFromEndOfArray(a, r){
  a.pop(r)
  return a
}
