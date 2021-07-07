export { 
	find
}
const dogs = [
  {name: 'Lucky',text: 'feed', done: true,  color: 'cream', gender: 'male' },
  {name: 'Spot', text: 'feed', done: false, color: 'tan', gender: 'female'},
  {name: 'Stripe', text: 'feed', done: false, color: 'tricolor', gender: 'male' },
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    let conditionKeys = Object.keys(conditions)
    // If the object is empty, return all the todos
    if (conditionKeys.length === 0) return callback(null, dogs)
    // make sure that all the properties on the conditions exists on the object
    if (!conditionKeys.every((i) => Object.keys(dogs[0]).includes(i))) {
      throw new Error('Must find by properties that exist on the array items')
    } else {
			// Finally actually find what we're looking for
      return callback(null, dogs.filter((dog) =>
        conditionKeys.every((propKey) => dog[propKey] === conditions[propKey])
      ))
    }
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}