// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function transpose(arry) {
    var invArry = [];
    for( var i=0; i<3; i++ ) {
        invArry.push( [] );
    }
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            invArry[i].push(arry[j][i]);
        }
    }
  return invArry;  
}
function multiply (a, b) {
    var mulArry = [];
    for( var i=0; i<3; i++ ) {
        mulArry.push( [] );
    }
    for (i = 0; i < 3; i++) {
        a = b = c = 0;
        for (j = 0; j < 3; j++) {
            invArry[i].push(arry[j][i]);
        }
    }
  return invArry; 
  const transpose = (a) => a[0].map((x, i) => a.map((y) => y[i]));
  const dotproduct = (a, b) => a.map((x, i) => a[i] * b[i]).reduce((m, n) => m + n);
  const result = (a, b) => a.map((x) => transpose(b).map((y) => dotproduct(x, y)));
  return result(a, b);
}
function inverse(arry) {
  return arry.reduce(
    (acc, cv)=> {
      cv.reduce(
        (acc2, cv2, idx2)=> {
          if(acc[idx2]==undefined) acc[idx2]=[];
          acc[idx2].push(cv2);
        },[]
      );
      return acc;
    },[]
  );
};
var arry = [];
arry.push([2, 4 , 5]);
arry.push([2, 6 , 8]);
arry.push([2, 8 , 5]);
console.log("Orignal");
console.log(arry);
console.log("Transposed");
var Atrans = transpose(arry);
console.log(Atrans);
console.log("Inversed");
var Ainv = inverse(arry);  
console.log(Ainv);
console.log("Product");
var Amul = multiply(arry, Ainv);  
console.log(Amul);
