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

  let revers = spl.reverse();

  let jn = revers.join("");
  return jn;
}
rev("Hello");
