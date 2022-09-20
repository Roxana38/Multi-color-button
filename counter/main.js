var button = document.getElementById("count"),
count = 0;
button.onclick = function () {
    count += 1;
    button.innerHTML = + count;
};
document.getElementsById("count").addEventListener('onclick', function () {
    count += 1;
    document.getElementsById("count").innerHTML = + count;
});