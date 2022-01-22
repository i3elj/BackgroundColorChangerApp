// This function get the value inside a input field and uses it
// to change the background of the page
function changeBackgroundColor() {
  let inputValue = document.getElementById("input").value;
  document.getElementById("App-header").style.backgroundColor = inputValue;
}

module.exports = { changeBackgroundColor };