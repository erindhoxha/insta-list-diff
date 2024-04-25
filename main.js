import "./assets/css/tailwind.css";

let textbox = document.getElementById('followers-textbox');
textbox.addEventListener('input', function() {
    let lines = textbox.value.split('\n').length;
    if (textbox.value.length === 0) {
        lines = 0;
    }
    let title = document.getElementById("followers-count")
    title.textContent = `${lines}`;
});

let followingsTextbox = document.getElementById('followings-textbox');
followingsTextbox.addEventListener('input', function() {
    let lines = followingsTextbox.value.split('\n').length;
    if (followingsTextbox.value.length === 0) {
        lines = 0;
    }
    let title = document.getElementById("followings-count")
    title.textContent = `${lines}`;
});

