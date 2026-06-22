

// Project image carousel
/*------------------------------
    Album Cover Slider
------------------------------*/

// Convert HTMLCollection to Array
// Convert carousel images and links to an array
var cfImg = Array.from(document.getElementsByClassName("coverflow__image"));

// Function to disable default behavior only for carousel links
function prevDef(e) {
    e.preventDefault();
}

// Function to update the cursor and prevent default only for carousel links
function forScale(coverflowPos) {
    // Disable all carousel links initially
    cfImg.forEach(image => {
        image.parentElement.style.cursor = "default";
        image.parentElement.addEventListener("click", prevDef);
    });

    // Enable only the currently active carousel image link
    cfImg.forEach(image => {
        if (image.getAttribute("data-coverflow-index") == coverflowPos) {
            image.parentElement.style.cursor = "pointer";
            image.parentElement.removeEventListener("click", prevDef); // Re-enable click
        }
    });
}

function setupCoverflow(coverflowContainer) {
    var coverflowContainers = Array.isArray(coverflowContainer) 
        ? coverflowContainer 
        : Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));

    coverflowContainers.forEach(function(containerElement) {
        var coverflow = {
            container: containerElement,
            images: Array.from(containerElement.getElementsByClassName('coverflow__image')),
            position: Math.floor(containerElement.getElementsByClassName('coverflow__image').length / 2) + 1
        };

        // Set indices on images
        coverflow.images.forEach(function(coverflowImage, i) {
            coverflowImage.dataset.coverflowIndex = i + 1;
        });

        // Set initial position
        coverflow.container.dataset.coverflowPosition = coverflow.position;

        // Arrow navigation event handlers
        const prevArrows = Array.from(coverflow.container.getElementsByClassName("prev-arrow"));
        const nextArrows = Array.from(coverflow.container.getElementsByClassName("next-arrow"));

        function setPrevImage() {
            coverflow.position = Math.max(1, coverflow.position - 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        }

        function setNextImage() {
            coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        }

        function jumpToImage(evt) {
            coverflow.position = Math.min(coverflow.images.length, Math.max(1, evt.target.dataset.coverflowIndex));
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            setTimeout(() => forScale(coverflow.position), 1);
        }

        function onKeyPress(evt) {
            if (evt.key === "ArrowLeft") setPrevImage();
            else if (evt.key === "ArrowRight") setNextImage();
        }

        prevArrows.forEach(arrow => arrow.addEventListener('click', setPrevImage));
        nextArrows.forEach(arrow => arrow.addEventListener('click', setNextImage));
        coverflow.images.forEach(image => image.addEventListener('click', jumpToImage));
        window.addEventListener('keyup', onKeyPress);

        // Initial setup for the first active image
        forScale(coverflow.position);
    });
}

setupCoverflow();

// Function to open the image in a full-screen popup
function openPopup(imageSrc) {
    var popup = document.createElement("div");
    popup.className = "image-popup";
    popup.innerHTML = `
  
        <span class="popup-close">&times;</span>
        <img src="${imageSrc}" alt="Popup Image">
         
    `;
    document.body.appendChild(popup);

    // Add event listener to close the popup when clicked
    popup.addEventListener("click", (event) => {
        if (event.target.classList.contains('popup-close') || event.target === popup) {
            document.body.removeChild(popup);
        }
    });

    // Add the active class to display the popup
    setTimeout(() => popup.classList.add("active"), 10);
}


// Attach the openPopup function to the carousel images
function setupCoverflow(coverflowContainer) {
    var coverflowContainers = Array.isArray(coverflowContainer)
        ? coverflowContainer
        : Array.prototype.slice.apply(document.getElementsByClassName('coverflow'));

    coverflowContainers.forEach(function(containerElement) {
        var coverflow = {
            container: containerElement,
            images: Array.from(containerElement.getElementsByClassName('coverflow__image')),
            position: Math.floor(containerElement.getElementsByClassName('coverflow__image').length / 2) + 1
        };

        // Set indices on images
        coverflow.images.forEach(function(coverflowImage, i) {
            coverflowImage.dataset.coverflowIndex = i + 1;

            // Attach full-view popup event
            coverflowImage.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent jumping to image during full view
                openPopup(coverflowImage.src);
            });
        });

        // Set initial position
        coverflow.container.dataset.coverflowPosition = coverflow.position;

        // Arrow navigation event handlers
        const prevArrows = Array.from(coverflow.container.getElementsByClassName("prev-arrow"));
        const nextArrows = Array.from(coverflow.container.getElementsByClassName("next-arrow"));

        function setPrevImage() {
            coverflow.position = Math.max(1, coverflow.position - 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        }

        function setNextImage() {
            coverflow.position = Math.min(coverflow.images.length, coverflow.position + 1);
            coverflow.container.dataset.coverflowPosition = coverflow.position;
            forScale(coverflow.position);
        }

        prevArrows.forEach(arrow => arrow.addEventListener('click', setPrevImage));
        nextArrows.forEach(arrow => arrow.addEventListener('click', setNextImage));

        // Initial setup for the first active image
        forScale(coverflow.position);
    });
}

// Run the setup function after fetching project data
setupCoverflow();

 <a href="">
                              <p class="click-prev-project">Click on image to preview</p>
                              </a>

                              style="width:500px;