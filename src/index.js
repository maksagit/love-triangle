'use strict';
/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangles = 0;
  var triangleContact= 0;
  var second, third;
  //preferences array:
  preferences.map(function(number, index) {
    if (number != (index+1)) {
      second = preferences[number-1];
      if (preferences[second-1] != second) {
        third = preferences[second-1];
        if (preferences[third-1] != third 
          && (index+1) == third) 
          triangleContact++;
        } 
      }  
    }
  );
  triangles = triangleContact/3;
  return triangles;
}