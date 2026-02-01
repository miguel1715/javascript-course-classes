const lunches = [];

function addLunchToEnd(lunches, str) {
  lunches.push(str)
  console.log(`${str} added to the end of the lunch menu.`)
  return (lunches)
}

function addLunchToStart(lunches, str) {
  lunches.unshift(str)
  console.log(`${str} added to the start of the lunch menu.`)
  return (lunches)
}

function removeLastLunch(lunches) {
  if (lunches.length > 0) {
    console.log(`${lunches.pop()} removed from the end of the lunch menu.`)
  } else (console.log("No lunches to remove."))
  return (lunches)
}

function removeFirstLunch(lunches) {
  if (lunches.length > 0) {
    console.log(`${lunches.shift()} removed from the start of the lunch menu.`)
  } else (console.log("No lunches to remove."))
  return (lunches)
}

function getRandomLunch(lunches) {
  if (lunches.length > 0) {
    console.log(`Randomly selected lunch: ${lunches.length}`)
  } else (console.log("No lunches available."))
}

function showLunchMenu(lunches) {
  if (lunches.length > 0) {
    console.log(`Menu items: ${lunches}`)
  } else (console.log("The menu is empty."))
  return (lunches)
}

