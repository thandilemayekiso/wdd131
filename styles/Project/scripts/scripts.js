document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("videoForm");
    const videoList = document.getElementById("video-list");

    // Load stored videos from localStorage
    function loadVideos() {
        const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
        storedVideos.forEach(video => addVideoToDOM(video));
    }

    // Add video to the DOM dynamically
    function addVideoToDOM(video) {
        const videoDiv = document.createElement("div");
        videoDiv.classList.add("video");

        videoDiv.innerHTML = `
            <h3>${video.title}</h3>
            <p><strong>Style:</strong> ${video.style}</p>
            <p>${video.description}</p>
            <a href="${video.url}" target="_blank">Watch Video</a>
        `;

        videoList.prepend(videoDiv);
    }

    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value.trim();
        const videoUrl = document.getElementById("video-url").value.trim();
        const style = document.getElementById("style").value;
        const description = document.getElementById("description").value.trim();

        if (!title || !videoUrl || !style || !description) {
            alert("All fields are required.");
            return;
        }

        const newVideo = { title, url: videoUrl, style, description };

        // Save to localStorage
        const storedVideos = JSON.parse(localStorage.getItem("videos")) || [];
        storedVideos.push(newVideo);
        localStorage.setItem("videos", JSON.stringify(storedVideos));

        // Add to DOM
        addVideoToDOM(newVideo);

        // Reset form
        form.reset();
    });

    // Show last modified date
    document.getElementById("last-modified").textContent = document.lastModified;

    // Load existing videos
    loadVideos();
});
