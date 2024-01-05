function loopATriangle(num) {
  let res = "";
  let char = "#";
  for (let i = 0; i < num; i++) {
    res += char;
    console.log(res);
  }
}

loopATriangle(7);

/*
#
##
###
####
#####
######
*/
