/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
*/
function likes(names) {
    // TODO
    let output = ''
    if(names.length === 0) {
      output = "no one likes this"
    }else if(names.length === 1) {
      output = `${names} likes this`
    }else if (names.length === 2) {
      output = `${names.join(' and ')} like this`
    }else if(names.length === 3) {
      let earlyLikes = names.slice(0, names.length - 1)
      let lastLike = names.slice(names.length - 1)
      output = `${earlyLikes.join(", ")} and ${lastLike} like this`
    }else {
      let firstTwo = names.slice(0, 2)
      let numOfRest = names.slice(2, names.length).map( item => item = 1 ).reduce( (a,b) => a + b, 0 )
      output = `${firstTwo.join(', ')} and ${numOfRest} others like this`
    }
    return output
}