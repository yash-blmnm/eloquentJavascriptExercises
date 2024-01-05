// “Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.”

function printChessboard() {
  for (let i = 0; i < 8; i++) {
    let odd = i % 2 === 0 ? "#" : " ";
    let even = odd === "#" ? " " : "#";
    for (let j = 0; j < 8; j++) {
      if (j % 2 !== 0) {
        res += odd;
      } else {
        res += even;
      }
    }
    res += "\n";
  }
  console.log(res);
}

/*
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
*/
