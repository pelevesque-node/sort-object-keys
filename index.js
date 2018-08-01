'use strict'

module.exports = unsorted => {
  const sorted = {}
  Object.keys(unsorted).sort().forEach(k => {
    sorted[k] = unsorted[k]
  })
  return sorted
}
