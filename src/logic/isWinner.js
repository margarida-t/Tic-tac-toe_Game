function isWinner(X) {
   
    const WinnerPositions = [[0,4,8], [2,4,6], [0,1,2], [3,4,5], [6,7,8], [0, 3, 6], [1,4,7], [2,5,8]];
    
      var found= 0;
      
      if(X.length >= 3) {
         for (var j =0; j < WinnerPositions.length; j++) {
          found = 0;
  
           for(var m = 0; m < WinnerPositions[j].length; m++) {
             if(X.includes(WinnerPositions[j][m])) {
              found++;
           }
         }
         if(found === 3) {
          return true;
         }

         if(found !== 3 && X.length=== 5) {
          return undefined
        }
         
         
       }
       found = 0;
       return false
            }
      return false;
    }

  export default isWinner;