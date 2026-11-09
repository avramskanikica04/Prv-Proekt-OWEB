let menuButton = document.getElementById("menuButton");
let navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });
}
let homeSearch = document.getElementById("homeSearch");
let homeGrid = document.getElementById("homeDestinationGrid");
let homeNoResults = document.getElementById("homeNoResults");

if (homeSearch && homeGrid) {
    homeSearch.addEventListener("input", function () {
        let searchText = homeSearch.value.toLowerCase();
        let cards = homeGrid.querySelectorAll(".destination-card");
        let found = 0;

        cards.forEach(function (card) {
            let text = card.textContent.toLowerCase();

            if (text.includes(searchText)) {
                card.style.display = "";
                found++;
            } else {
                card.style.display = "none";
            }
        });

        if (homeNoResults) {
            homeNoResults.style.display = found === 0 ? "block" : "none";
        }
    });
}
let destinationSearch = document.getElementById("destinationSearch");
let categoryFilter = document.getElementById("categoryFilter");
let destinationGrid = document.getElementById("destinationGrid");
let noDestinations = document.getElementById("noDestinations");

function filterDestinations() {
    if (!destinationGrid) return;

    let searchText = destinationSearch ? destinationSearch.value.toLowerCase() : "";
    let category = categoryFilter ? categoryFilter.value : "all";
    let cards = destinationGrid.querySelectorAll(".destination-card");
    let found = 0;

    cards.forEach(function (card) {
        let text = card.textContent.toLowerCase();
        let cardCategory = card.getAttribute("data-category");

        let matchesSearch = text.includes(searchText);
        let matchesCategory = category === "all" || cardCategory === category;

        if (matchesSearch && matchesCategory) {
            card.style.display = "";
            found++;
        } else {
            card.style.display = "none";
        }
    });

    if (noDestinations) {
        noDestinations.style.display = found === 0 ? "block" : "none";
    }
}

if (destinationSearch) {
    destinationSearch.addEventListener("input", filterDestinations);
}

if (categoryFilter) {
    categoryFilter.addEventListener("change", filterDestinations);
}
let likeButton = document.getElementById("likeButton");
let dislikeButton = document.getElementById("dislikeButton");
let likeCount = document.getElementById("likeCount");
let dislikeCount = document.getElementById("dislikeCount");

if (likeButton && likeCount) {
    likeButton.addEventListener("click", function () {
        likeCount.textContent = Number(likeCount.textContent) + 1;
    });
}

if (dislikeButton && dislikeCount) {
    dislikeButton.addEventListener("click", function () {
        dislikeCount.textContent = Number(dislikeCount.textContent) + 1;
    });
}
let commentForm = document.getElementById("commentForm");
let commentInput = document.getElementById("commentInput");
let commentList = document.getElementById("commentList");

if (commentForm && commentInput && commentList) {
    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let comment = commentInput.value.trim();

        if (comment !== "") {
            let newComment = document.createElement("p");
            newComment.className = "comment-item";
            newComment.textContent = comment;

            let emptyMessage = commentList.querySelector(".empty-comments");

            if (emptyMessage) {
                emptyMessage.remove();
            }

            commentList.appendChild(newComment);
            commentInput.value = "";
        }
    });
}
let galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(function (img) {
    img.addEventListener("click", function () {
        let lightbox = document.createElement("div");
        lightbox.className = "gallery-lightbox";

        let bigImage = document.createElement("img");
        bigImage.src = img.src;
        bigImage.alt = img.alt;

        let closeButton = document.createElement("button");
        closeButton.textContent = "×";
        closeButton.className = "lightbox-close";

        lightbox.appendChild(closeButton);
        lightbox.appendChild(bigImage);
        document.body.appendChild(lightbox);

        closeButton.addEventListener("click", function () {
            lightbox.remove();
        });

        lightbox.addEventListener("click", function (event) {
            if (event.target === lightbox) {
                lightbox.remove();
            }
        });
    });
});
let budgetForm = document.getElementById("budgetForm");
let budgetResult = document.getElementById("budgetResult");

if (budgetForm && budgetResult) {
    budgetForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let destination = document.getElementById("tripDestination").value;
        let days = Number(document.getElementById("tripDays").value);
        let travelers = Number(document.getElementById("travelers").value);

        let transport = Number(document.getElementById("transportCost").value);
        let accommodation = Number(document.getElementById("accommodationCost").value);
        let food = Number(document.getElementById("foodCost").value);
        let activities = Number(document.getElementById("activitiesCost").value);

        if (days <= 0 || travelers <= 0) {
            budgetResult.textContent = "Please enter valid trip details.";
            return;
        }

        let total = transport * travelers
            + accommodation * days
            + food * days * travelers
            + activities * travelers;

        let personCost = total / travelers;

        budgetResult.innerHTML =
            "<h3>Your travel budget</h3>" +
            "<p>Destination: " + destination + "</p>" +
            "<p>Total estimated cost: €" + total.toFixed(2) + "</p>" +
            "<p>Cost per person: €" + personCost.toFixed(2) + "</p>";
    });
}
let surveyForm = document.getElementById("surveyForm");
let surveyMessage = document.getElementById("surveyMessage");

if (surveyForm && surveyMessage) {
    surveyForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("visitorName").value.trim();

        if (name === "") {
            surveyMessage.textContent = "Please enter your name.";
            return;
        }

        surveyMessage.textContent = "Thank you, " + name + "! Your answers have been submitted.";
        surveyForm.reset();
    });
}
let loginForm = document.getElementById("loginForm");
let loginMessage = document.getElementById("loginMessage");

if (loginForm && loginMessage) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        if (email === "" || password.length < 6) {
            loginMessage.textContent = "Please enter a valid email and password.";
        } else {
            loginMessage.textContent = "This is a demonstration login. No account system is connected.";
        }
    });
}
let registerForm = document.getElementById("registerForm");
let registerMessage = document.getElementById("registerMessage");

if (registerForm && registerMessage) {
    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("registerName").value.trim();
        let email = document.getElementById("registerEmail").value;
        let password = document.getElementById("registerPassword").value;
        let confirmPassword = document.getElementById("confirmPassword").value;

        if (name === "" || email === "" || password.length < 6) {
            registerMessage.textContent = "Please complete all fields correctly.";
        } else if (password !== confirmPassword) {
            registerMessage.textContent = "Passwords do not match.";
        } else {
            registerMessage.textContent = "Registration form completed! This is a demonstration only.";
            registerForm.reset();
        }
    });
}


