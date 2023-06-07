function strRev(st) {
  let nstr = [];
  for (let i = st.length - 1; i >= 0; i--) {
    nstr.push(st[i]);
  }

  return nstr.join("");
}

strRev("Hello"); //=> olleh

function reverser(st) {
  let n = "";
  for (let i = st.length - 1; i >= 0; i--) {
    n += st[i];
  }
  return n;
}

function rev(str) {
  let spl = str.split("");
  console.log("split", spl);
  let revers = spl.reverse();
  console.log("rever", revers);
  let jn = revers.join("");
  return jn;
}
rev("Hello");
