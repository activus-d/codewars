//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
    //convert string to array with split()
    x = x.split('');
    x = x.filter( item => item !== ' ' )//filter out empty strings from the array
    return x.join('')//join back to form string
}
