function showAlert() {
    alert('Thank you for reading The Enchanted Forest!');
}

function goBack() {
    window.location.href = '../index.html';
}
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    var btn = document.getElementById("back-to-top-btn");

    // Show the button after scrolling down 200px
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
