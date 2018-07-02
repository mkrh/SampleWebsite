const time = document.getElementById("time");
setInterval(startClock, 200);

function startClock() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  time.innerHTML = h + ":" + m + ":" + s;
}
