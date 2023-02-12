// NGÀY GIỜ
const date = new Date();
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();
const time = hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
document.getElementById("year").innerHTML = "VERISBABY " + year + " " + time;
