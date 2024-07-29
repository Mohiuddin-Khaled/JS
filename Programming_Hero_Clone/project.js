const data = JSON.parse(jsonData).data;

function loadMilestone() {
  const value = document.querySelector(".milestones");
  value.innerHTML = data.map(function (milestone) {
    return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox">
                <input type="checkbox" name="" id="" />
              </div>
              <div onclick="openMilestone(this, ${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map(function (module) {
      return `<div class="module border-b">
                <p>${module.name}</p>
              </div>`
    }).join("")}
            </div>
          </div>`;
  }).join("");
}

// parent node -> flex
// child node -> onclick()
// sibling -> hidden_panel
function openMilestone(milestoneContainer, id) {
  const currentSection = milestoneContainer.parentNode.nextElementSibling;
  const showSection = document.querySelector(".show");
  if (!currentSection.classList.contains("show") && showSection) {
    currentSection.classList.remove("show");
  }
  currentSection.classList.toggle("show");
  showMilestone(id);
}

function showMilestone(id) {
  const mImg = document.querySelector(".milestoneImage");
  const mTitle = document.querySelector(".title");
  const mDetails = document.querySelector(".details");
  mImg.src = data[id].image;
  mTitle.innerHTML = data[id].name;
  mDetails.innerText = data[id].description;
}

// call the function
loadMilestone();