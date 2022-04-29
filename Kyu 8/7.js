/* There was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class.
 You receive an array with your peers' test scores. Now calculate the average and compare your score! Return True if you're better, else False!
 Note: Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array! */
 function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let average = 0;
    //arrive at sum of classPoints
    for(i = 0; i < classPoints.length; i++) {
        average += classPoints[i]
    }
    //arive at average classPoints
    average = average / classPoints.length
    //test if yourPoints is better than average classPoints
    if(average < yourPoints) {
        return true
    }else {
        return false
    }
}