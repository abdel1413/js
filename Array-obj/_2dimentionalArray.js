function twoD(row, column) {
  let resp = [];
  for (let i = 0; i < row; i++) {
    //initialize the array where to
    //collect coloums.
    //it is set to empty array at each iteration
    //of outter array
    let rowArray = [];

    for (let j = 0; j < column; j++) {
      rowArray.push(0);
    }

    resp.push(rowArray);
  }
  return resp;
}

twoD(3, 2);
