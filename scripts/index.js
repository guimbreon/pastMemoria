function searchStories() {
    // Input element
    var input = document.getElementById('search-bar');
    var filter = input.value.toUpperCase();

    // Container and individual stories
    var container = document.getElementById('story-container');
    var stories = container.getElementsByClassName('story');

    // Loop through all stories and hide those that don't match the search query
    for (var i = 0; i < stories.length; i++) {
        var h2 = stories[i].getElementsByTagName('h2')[0];
        if (h2) {
            var txtValue = h2.textContent || h2.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                stories[i].style.display = "";
            } else {
                stories[i].style.display = "none";
            }
        }
    }
}

// Modify buildStory to accept parameters for dynamic content
function buildStory(storyInfo) {
    let where = document.getElementById("story-container");

    let storyDiv = document.createElement("div");
    storyDiv.className = "story";
    
    let storyImg = document.createElement("img");
    storyImg.src = storyInfo.imgLink; // Dynamic image link from object
    storyImg.alt = "Story: " + storyInfo.name;

    let storyContDiv = document.createElement("div");
    storyContDiv.className = "story-content";

    let h2Story = document.createElement("h2");
    h2Story.innerHTML = storyInfo.name; // Dynamic story name
    
    let pStory = document.createElement("p");
    pStory.innerHTML = storyInfo.storyDescription; // Dynamic story description

    let aStory = document.createElement("a");
    aStory.href = storyInfo.storyLink; // Dynamic story link
    aStory.innerHTML = "Read more"; // This can be constant or dynamic based on preference

    storyContDiv.appendChild(h2Story);
    storyContDiv.appendChild(pStory);
    storyContDiv.appendChild(aStory);

    storyDiv.appendChild(storyImg);
    storyDiv.appendChild(storyContDiv);
    where.appendChild(storyDiv);
}

// Function to build all stories
function buildAllStories(){
    const allStories = [
        {
            name: "teste",
            imgLink: "link ma boy",
            storyLink: "link ma boy",
            storyDescription: "askdjs"
        },
        {
            name: "sdfadsf",
            imgLink: "asdfasdf",
            storyLink: "2323d23d",
            storyDescription: "sdfasf"
        }
    ];
    
    allStories.forEach(story => buildStory(story)); // Loop through all stories and build each one
}



function buildAllStories(){
    // allStories is already available globally from storiesInfo.js
    allStories.forEach(story => buildStory(story)); // Loop through all stories and build each one
}


// Call the function to build all stories on page load or specific event
buildAllStories();