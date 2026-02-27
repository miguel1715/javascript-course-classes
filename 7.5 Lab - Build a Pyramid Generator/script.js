function pyramid (str, int, bool) {

  let result = "\n";

 if (bool === false) { 
  for (let r = 0; r < int; r++) {
    let line = ""
    const spaces = int - 1 - r;
    const chars = 2 * r + 1;

    for (let s = 0; s < spaces; s++)  {
      line += " ";
    }
    for (let c = 0; c < chars; c++) {
      line += str;
    }
  result += line + "\n";
  }
 } else {
   for (let r = int - 1; r >= 0; r--) {
     let line = "";
     const spaces = int - 1 - r;
     const chars =  2 * r + 1;

     for (let s = 0; s < spaces; s++) {
       line += " ";
     }
     for (let c = 0; c < chars; c++) {
       line += str
     }
     result += line + "\n"
   }
 }
 return result;
}
