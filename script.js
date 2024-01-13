function search() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var stories = document.getElementById('stories-section').getElementsByTagName('article');

    for (var i = 0; i < stories.length; i++) {
        var storyName = stories[i].getElementsByTagName('h2')[0].innerText.toLowerCase();

        if (storyName.includes(searchTerm)) {
            stories[i].style.display = 'block';
        } else {
            stories[i].style.display = 'none';
        }
    }
}

