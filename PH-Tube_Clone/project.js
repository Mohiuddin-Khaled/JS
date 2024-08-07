let currentData = [];

const loadData = (categoryId) => {
    fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`)
        .then((res) => res.json())
        .then((data) => {
            currentData = data.data;
            displayData(currentData);
        });
};

const loadAllData = () => loadData(1000);
const loadMusicData = () => loadData(1001);
const loadComedyData = () => loadData(1003);
const loadDrawingData = () => loadData(1005);

function changeCategory(button, category) {
    document.querySelectorAll(".btn-all").forEach(btn => btn.style.backgroundColor = "rgb(230, 230, 230)");
    button.style.backgroundColor = "rgb(235, 80, 80)";

    switch (category) {
        case "All":
            loadAllData();
            break;
        case "Music":
            loadMusicData();
            break;
        case "Comedy":
            loadComedyData();
            break;
        case "Drawing":
            loadDrawingData();
            break;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const allButton = document.querySelector(".btn-all");
    changeCategory(allButton, "All");
    loadAllData();
});

function formatTimeDifference(postedDate) {
    const years = Math.floor(postedDate / (3600 * 24 * 365));
    const months = Math.floor((postedDate % (3600 * 24 * 365)) / (3600 * 24 * 30.44));
    const days = Math.floor((postedDate % (3600 * 24 * 30.44)) / (3600 * 24));
    const hours = Math.floor((postedDate % (3600 * 24)) / 3600);
    const minutes = Math.floor((postedDate % 3600) / 60);
    const seconds = Math.floor(postedDate % 60);

    if (years > 0) return `${years}Y ${months}Mon ${days}D ${hours}Hrs ${minutes}Min ${seconds}Sec ago`;
    let formattedDate = '';
    if (months > 0) formattedDate += `${months}Mon `;
    if (days > 0) formattedDate += `${days}D `;
    if (hours > 0) formattedDate += `${hours}Hrs `;
    if (minutes > 0) formattedDate += `${minutes}Min `;
    if (seconds > 0) formattedDate += `${seconds}Sec `;
    return formattedDate.trim();
}

const displayData = (data) => {
    const videoContainer = document.getElementById("videoContainer");
    videoContainer.innerHTML = "";
    if (data.length === 0) {
        videoContainer.innerHTML = `
            <div style="text-align: center;">
                <img class="img-fluid" src="resources/Icon.png" alt="No Content Image" style="width:300px; height: auto;">
                <h3 class="mt-2">Oops!! Sorry, There is no content here.</h3>
            </div>
        `;
    } else {
        data.forEach(video => {
            const postedDate = new Date(parseInt(video.others.posted_date));
            const formattedDate = formatTimeDifference(postedDate);

            const cardHtml = `
                <div class="col-md-3 my-2 video-card">
                    <div class="card">
                        <div class="video-container">
                            <img src="${video.thumbnail}" class="card-img-top bg-white" alt="Video Thumbnail" width="312" height="200">
                            <p class="posted-date">${formattedDate}</p>
                        </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-2">
                                    <img src="${video.authors[0].profile_picture}" class="card-img-mid" alt="Video Profile Pic" width="40" height="40" style="border-radius: 50%;">
                                </div>
                                <div class="col-10">
                                    <div class="row-4 mt-2">
                                        <h5 class="card-title">${video.title}</h5>
                                    </div>
                                    <div class="row-4 d-flex mt-2">
                                        <p class="m-0 me-2">${video.authors[0].profile_name}</p>
                                        <p class="m-0">
                                            ${video.authors[0].verified ? '<i class="fas fa-check-circle text-success"></i>' : ''}
                                        </p>
                                    </div>
                                    <div class="row-4 mt-2">
                                        <p class="m-0">${video.others.views} views</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            videoContainer.innerHTML += cardHtml;
        });
    }
}

// sort video card ascending or descending order
let sortAscending = true;
function sortByViews() {
    const videoContainer = document.getElementById("videoContainer");
    let videos = Array.from(videoContainer.getElementsByClassName("video-card"));
    videos.sort((a, b) => {
        let viewsA = getViews(a);
        let viewsB = getViews(b);
        return sortAscending ? viewsA - viewsB : viewsB - viewsA;
    });
    videoContainer.innerHTML = "";
    videos.forEach(video => videoContainer.appendChild(video));
    sortAscending = !sortAscending;// toggle
}

function getViews(videoCard) {
    const viewsText = videoCard.querySelector('.card-body .row-4:nth-child(3) .m-0').innerText;
    return parseInt(viewsText.split(' ')[0].replace(',', ''));
}

document.querySelector(".sort-by-views-button").addEventListener("click", sortByViews);