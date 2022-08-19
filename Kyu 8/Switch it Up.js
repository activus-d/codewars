/*
When provided with a number between 0-9, return it in words.
<<<<<<< HEAD

Input :: 1

Output :: "One".
*/
function switchItUp(number){
//Write your own Code!
=======
Input :: 1
Output :: "One".
*/
function switchItUp(number){
>>>>>>> ae359cd5e8c9a1d1a4f74b6a52b6ba1aea690ac1
  let num = {
    0: 'Zero',
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
  }
      return num[number]
}