function changeBackgroundColor() {
    let inputValue = document.getElementById("input").value;
    document.getElementById("App-header").style.backgroundColor = inputValue;
}

module.exports = {
    changeBackgroundColor
};
