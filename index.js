let MainHeader = document.querySelector(".MainHeader");
let Menu = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

Menu.addEventListener("click", () => {
  Menu.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
});
window.onscroll = () => {
  Menu.classList.remove("fa-times");
  ThemeToggle.classList.remove("active");
  Navbar.classList.remove("active");
  if (window.scrollY > 150) {
    MainHeader.classList.add("active");
  } else {
    MainHeader.classList.remove("active");
  }
};

// Deal Section Counter
let randNumber = Math.round(Math.random()*100);
randNumber = randNumber > 0 ? randNumber : 1;
let CountDate = new Date(new Date().getTime() + randNumber * 60 * 60 * 1000);//new Date("may 15, 2024 00:00:00").getTime();

function Counter() {
  let Now = new Date().getTime();
  Diff = CountDate - Now;

  //
  let Second = 1000;
  let Minute = Second * 60;
  let Hour = Minute * 60;
  let Day = Hour * 24;

  //
  let D = Math.floor(Diff / Day);
  let H = Math.floor((Diff % Day) / Hour);
  let M = Math.floor((Diff % Hour) / Minute);
  let S = Math.floor((Diff % Minute) / Second);

  //
  document.getElementById("Day").innerText = D;
  document.getElementById("Hour").innerText = H;
  document.getElementById("Min").innerText = M;
  document.getElementById("Sec").innerText = S;
}
setInterval(function () {
  Counter();
}, 1000);

