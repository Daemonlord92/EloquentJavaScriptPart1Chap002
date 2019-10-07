let Board = ""

for (let y = 0; y < 8; y++){
	for(let x = 0; x < 8; x++){
      if (( x % 2 ) === 0) {
      	Board = Board + "#";
      } else {
      	Board = Board + " ";
      }
    }
    Board = Board + "\n"
}
console.log(Board)
