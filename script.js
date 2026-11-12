//HEY! ARE YOU READING MY JS?

// NAVBAR FUNCTIONALITY

function toggleNavbar() {
    const navbar = document.querySelector(".navbar");
    const landingContent = document.querySelector(".landing-content");
    landingContent.classList.toggle("nav-open");
    navbar.classList.toggle("nav-open");
    updateNavScale();
}

function updateNavScale() {
    const edgePx = 225;
    const scale = 1 - (edgePx / window.innerWidth);

    document.documentElement.style.setProperty('--nav-scale', scale.toFixed(4));
    const landingContent = document.querySelector(".landing-content");
    const landingWrapper = document.querySelector(".landing-scale-wrapper");
    const contentScale = landingContent.classList.contains("nav-open") ? scale : 1;
    landingWrapper.style.height = `${landingContent.offsetHeight * contentScale}px`;
}
window.addEventListener('resize', updateNavScale);
updateNavScale();

// OPEN AND CLOSE PROJECTS I

const landingContent = document.querySelector(".landing-content");
new ResizeObserver(updateNavScale).observe(landingContent);

const projectWrapper = document.querySelector(".project-wrapper");
const projectLinks = document.querySelectorAll(".thumbnail-card");

projectLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
        openProject(index);
    });
});

const projectWindow = document.querySelector(".project-window");

let workData = [];
let workDataPromise;

async function loadWorkData() {
    if (!workDataPromise) {
        workDataPromise = (async () => {
            const response = await fetch('work.json');
            if (!response.ok) {
                throw new Error(`Failed to load work.json: ${response.status} ${response.statusText}`);
            }

            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new TypeError('work.json must contain an array of projects.');
            }

            return data;
        })();
    }

    try {
        workData = await workDataPromise;
        return workData;
    } catch (error) {
        workDataPromise = undefined;
        throw error;
    }
}

//OPEN AND CLOSE PROJECTS II

const projectLoader = document.querySelector(".project-loader");
const pageLoader = document.getElementById("page-loader");
const loadingAnimation = document.getElementById("loading-animation");
let projectLoadId = 0;

function showProjectLoader() {
    projectLoader.appendChild(loadingAnimation);
    projectLoader.hidden = false;
}

function hideProjectLoader() {
    pageLoader.appendChild(loadingAnimation);
    projectLoader.hidden = true;
}

async function openProject(index) {
    const currentLoadId = ++projectLoadId;
    projectWindow.innerHTML = "";
    showProjectLoader();
    projectWrapper.classList.remove("closed-project");
    projectWindow.scrollTop = 0;
    document.body.style.overflow = 'hidden';
    repulsion = false;

    try {
        await loadWorkData();
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        if (currentLoadId !== projectLoadId) {
            return;
        }

        const project = workData[index];
        if (!project || !Array.isArray(project.projectContent)) {
            throw new RangeError(`No valid project data found for index ${index}.`);
        }

        renderProjectContent(project);
        await waitForProjectResources();
        if (currentLoadId === projectLoadId) {
            hideProjectLoader();
        }
    } catch (error) {
        console.error('Error opening project:', error);
        if (currentLoadId === projectLoadId) {
            projectWindow.innerHTML = "";
            const errorMessage = document.createElement("p");
            errorMessage.classList.add("project-load-error");
            errorMessage.textContent = "This project could not be loaded. Please try again.";
            projectWindow.appendChild(errorMessage);
            hideProjectLoader();
        }
    }
}

const projectDivider = document.querySelector(".project-divider");
projectDivider.addEventListener("click", () => {
    closeProject();
})

function closeProject() {
    projectLoadId += 1;
    projectWrapper.classList.add("closed-project");
    projectWindow.innerHTML = "";
    hideProjectLoader();
    document.body.style.overflow = 'auto';
    repulsion = true;
}

//LOAD PROJECT CONTENT

function renderProjectContent(project) {
    projectWindow.innerHTML = "";

    const projectTitle = document.querySelector(".project-title");
    const projectYear = document.querySelector(".project-year");
    projectTitle.innerHTML = `<p>${project.projectTitle}</p>`;
    projectYear.innerHTML = `<p>${project.projectYear}</p>`;

    let element;
    project.projectContent.forEach(block => {
        const elementDiv = document.createElement("div");
        elementDiv.classList.add(block.class);
        if (block.type === 'paragraph') {
            element = document.createElement("p");
            element.textContent = block.text;
            elementDiv.appendChild(element);
        }
        else if (block.type === 'hero-text') {
            heroTextOneDiv = document.createElement("div");
            heroTextOne = document.createElement("p");
            heroTextOne.textContent = block.headings[0].text;
            heroTextOneDiv.classList.add("hero-text-one");
            heroTextTwoDiv = document.createElement("div");
            heroTextTwo = document.createElement("p");
            heroTextTwo.textContent = block.headings[1].text;
            heroTextTwoDiv.classList.add("hero-text-two");
            heroTextOneDiv.appendChild(heroTextOne);
            heroTextTwoDiv.appendChild(heroTextTwo);
            elementDiv.appendChild(heroTextOneDiv);
            elementDiv.appendChild(heroTextTwoDiv);
        }
        else if (block.type === 'vimeo-container') {
            element = document.createElement("div");
            element.classList.add("vimeo-container");
            element.style.aspectRatio = block.aspectRatio;
            if (block.aspectRatio === "1/1"){
                element.style.width = "60%";
                element.style.marginInline = "auto";
            };
            const iframe = document.createElement("iframe");
            iframe.src = block.src;
            iframe.setAttribute("frameborder", "0");
            iframe.setAttribute("allow", "fullscreen; picture-in-picture");
            iframe.setAttribute("allowfullscreen", "");
            element.appendChild(iframe);
            elementDiv.appendChild(element);
        }
        else if (block.type === 'span') {
            element = document.createElement("span");
            element.innerHTML = block.html;
            elementDiv.appendChild(element);
        }
        else if (block.type === 'heading') {
            element = document.createElement("h2");
            element.textContent = block.text;
            elementDiv.appendChild(element);
        }
        else if (block.type === 'video-grid') {
            block.videos.forEach(videoData => {
                video = document.createElement("video");
                video.src = videoData.src;
                video.autoplay = true;
                video.loop = true;
                video.muted = true;
                video.playsInline = true;
                video.classList.add("fullscreenable");
                elementDiv.appendChild(video);
            });
        }
        else if (block.type === 'carousel') {
            element = document.createElement("div");
            element.classList.add("carousel-container");
            createCarousel(elementDiv, element, block.videoSources);
        } 
        else if (block.type === 'divider'){
            element = document.createElement("div");
            element.classList.add("divider");
            elementDiv.appendChild(element);
        }
        else if (block.type === 'image-grid'){
            block.images.forEach ( imageData => {
                image = document.createElement("img");
                image.classList.add("fullscreenable");
                image.src = imageData.src;
                elementDiv.appendChild(image);
            });
        }
        else {
            throw new TypeError(`Unsupported project content type: ${block.type}`);
        }
        projectWindow.appendChild(elementDiv);
    });
}

function waitForProjectResources() {
    const resources = projectWindow.querySelectorAll("img, video, iframe");
    return Promise.all(Array.from(resources, waitForProjectResource));
}

function waitForProjectResource(resource) {
    if (resource instanceof HTMLImageElement) {
        if (resource.complete) {
            if (resource.naturalWidth === 0) {
                console.error(`Failed to load project image: ${resource.src}`);
            }
            return Promise.resolve();
        }

        return new Promise(resolve => {
            const finish = event => {
                if (event.type === "error") {
                    console.error(`Failed to load project image: ${resource.src}`);
                }
                resolve();
            };
            resource.addEventListener("load", finish, { once: true });
            resource.addEventListener("error", finish, { once: true });
        });
    }

    if (resource instanceof HTMLVideoElement) {
        if (resource.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
            return Promise.resolve();
        }

        return new Promise(resolve => {
            const finish = event => {
                if (event.type === "error") {
                    console.error(`Failed to load project video: ${resource.currentSrc || resource.src}`);
                }
                resolve();
            };
            resource.addEventListener("loadeddata", finish, { once: true });
            resource.addEventListener("error", finish, { once: true });
        });
    }

    return new Promise(resolve => {
        resource.addEventListener("load", resolve, { once: true });
        resource.addEventListener("error", event => {
            console.error(`Failed to load project frame: ${resource.src}`);
            resolve(event);
        }, { once: true });
    });
}

//CREATE CAROUSEL AND FUNCTIONALITY

function createCarousel(elementDiv, element, videoSources) {
    if (!Array.isArray(videoSources) || videoSources.length === 0) {
        throw new TypeError("Carousel videoSources must be a non-empty array.");
    }

    let activeIndex = 0;
    const slides = [];
    const dots = [];

    const prevButton = document.createElement("button");
    prevButton.type = "button";
    prevButton.classList.add("carousel-prev");
    prevButton.classList.add("carousel-nav");
    prevButton.setAttribute("aria-label", "Previous video");
    prevButton.textContent = "❮";
    element.appendChild(prevButton);
    const carouselVideos = document.createElement("div");
    carouselVideos.classList.add("carousel-videos");
    element.appendChild(carouselVideos);
    videoSources.forEach(videoData => {
        const slide = document.createElement("iframe");
        slide.src = videoData.src;
        slide.style.aspectRatio = videoData.aspectRatio;
        slide.setAttribute("frameborder", "0");
        slide.setAttribute("allow", "fullscreen; picture-in-picture");
        slide.setAttribute("allowfullscreen", "");
        slides.push(slide);
        carouselVideos.appendChild(slide);
    });
    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.classList.add("carousel-next");
    nextButton.classList.add("carousel-nav");
    nextButton.setAttribute("aria-label", "Next video");
    nextButton.textContent = "❯";
    element.appendChild(nextButton);
    elementDiv.appendChild(element);
    const carouselIndicators = document.createElement("div");
    carouselIndicators.classList.add("carousel-indicators");
    slides.forEach((_, index) => {
        const carouselDot = document.createElement("button");
        carouselDot.type = "button";
        carouselDot.classList.add("carousel-dot");
        carouselDot.dataset.index = index.toString();
        carouselDot.setAttribute("aria-label", `Show video ${index + 1}`);
        carouselDot.addEventListener("click", () => showSlide(index));
        dots.push(carouselDot);
        carouselIndicators.appendChild(carouselDot);
    });
    elementDiv.appendChild(carouselIndicators);

    function showSlide(index) {
        activeIndex = (index + slides.length) % slides.length;
        slides.forEach((slide, slideIndex) => {
            slide.classList.toggle("active", slideIndex === activeIndex);
        });
        dots.forEach((dot, dotIndex) => {
            const isActive = dotIndex === activeIndex;
            dot.classList.toggle("active", isActive);
            dot.setAttribute("aria-pressed", isActive.toString());
        });
    }

    prevButton.addEventListener("click", () => showSlide(activeIndex - 1));
    nextButton.addEventListener("click", () => showSlide(activeIndex + 1));
    showSlide(activeIndex);
}

// LOTTIE LOADING AND REPULSION

var repulsion = false;

const player = document.getElementById('landing-animation');
const vectorStack = document.querySelector('.landing-vectors');

customElements.whenDefined("dotlottie-wc").then(() => {
    loadingAnimation.renderConfig = {
        devicePixelRatio: Math.max(window.devicePixelRatio || 1, 2)
    };
    loadingAnimation.setAttribute("src", "/json_animations/loader.json");
});

const pageLoaded = document.readyState === "complete"
    ? Promise.resolve()
    : new Promise(resolve => window.addEventListener("load", resolve, { once: true }));

const landingAnimationLoaded = customElements.whenDefined('dotlottie-wc').then(() => new Promise((resolve, reject) => {
    const dotLottie = player?.dotLottie;

    if (!dotLottie) {
        reject(new Error('The landing Lottie instance is not initialized.'));
        return;
    }

    dotLottie.addEventListener('complete', vectorSwap, { once: true });

    if (dotLottie.isLoaded) {
        resolve();
    } else {
        dotLottie.addEventListener('load', resolve, { once: true });
    }
}));

Promise.all([
    pageLoaded,
    landingAnimationLoaded,
    loadWorkData().catch(error => {
        console.error('Error loading work data:', error);
    })
]).then(() => {
    pageLoader.hidden = true;
    player.dotLottie.play();
}).catch(error => {
    console.error('Error loading the landing page:', error);
    pageLoader.hidden = true;
});

function vectorSwap() {
    player.style.display = "none";
    vectorStack.style.display = "grid";
    repulsion = true;
}

// MOUSE REPULSION EFFECT

var x, y;
document.addEventListener('click', (e) => { 
    x = e.clientX;
    y = e.clientY;
    console.log( x/1000 + ", " + y/1000)
});

coords = [
    [ //Tucker
        0.0368,
        0.04,
        0.3728,
        0.112
    ],
    [ //Ziegler
        0.404,
        0.04,
        0.7472,
        0.112
    ],
    [ //Makes
        0.048,
        0.1376,
        0.2,
        0.172
    ],
    [ //It
        0.2176,
        0.1376,
        0.2512,
        0.172
    ],
    [ //Work
        0.1192,
        0.1896,
        0.396,
        0.2536
    ]
]

const repulsor = document.querySelectorAll('.repulsor');
let pointerClientX = null;
let pointerClientY = null;

function updateRepulsion(mouseX, mouseY) {
    if (!repulsion) {
        return;
    }

    const viewportWidth = window.innerWidth;
    const magneticRange = 60;
    const maxRepulsionDistance = 24;

    repulsor.forEach((element, index) => {
        const [left, top, right, bottom] = coords[index];
        const bounds = {
            left: left * viewportWidth,
            top: top * viewportWidth,
            right: right * viewportWidth,
            bottom: bottom * viewportWidth
        };
        const isInside =
            mouseX >= bounds.left &&
            mouseX <= bounds.right &&
            mouseY >= bounds.top &&
            mouseY <= bounds.bottom;

        element.style.transition = 'transform 180ms ease-out';

        let directionX;
        let directionY;
        let distance;

        if (isInside) {
            directionX = ((left + right) / 2) * viewportWidth - mouseX;
            directionY = ((top + bottom) / 2) * viewportWidth - mouseY;
            distance = Math.hypot(directionX, directionY);
        } else {
            const nearestX = Math.max(bounds.left, Math.min(mouseX, bounds.right));
            const nearestY = Math.max(bounds.top, Math.min(mouseY, bounds.bottom));
            directionX = nearestX - mouseX;
            directionY = nearestY - mouseY;
            distance = Math.hypot(directionX, directionY);
        }

        if (!isInside && distance >= magneticRange) {
            element.style.transform = 'translate3d(0, 0, 0)';
            return;
        }

        if (distance === 0) {
            directionX = 0;
            directionY = -1;
        } else {
            directionX /= distance;
            directionY /= distance;
        }

        const strength = isInside ? 1 : 1 - distance / magneticRange;
        const repulsionDistance = strength * maxRepulsionDistance;
        element.style.transform = `translate3d(${directionX * repulsionDistance}px, ${directionY * repulsionDistance}px, 0)`;
    });
}

document.addEventListener('mousemove', (e) => {
    pointerClientX = e.clientX;
    pointerClientY = e.clientY;
    updateRepulsion(e.pageX, e.pageY);
});

window.addEventListener('scroll', () => {
    if (pointerClientX === null || pointerClientY === null) {
        return;
    }

    updateRepulsion(pointerClientX + window.scrollX, pointerClientY + window.scrollY);
});

// FULLSCREEN IMAGES AND VIDEOS

projectWindow.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.matches('.fullscreenable')) {
        fullscreenElement(event.target);
    }
});

function fullscreenElement(el) {
    const fullscreenOverlay = document.createElement('div');
    fullscreenOverlay.classList.add('fullscreen-overlay');
    
    let fullscreenEl;
    
    if (el.tagName === 'IMG') {
        fullscreenEl = document.createElement('img');
        fullscreenEl.src = el.src;
        fullscreenEl.classList.add('fullscreen-image');
    } else if (el.tagName === 'VIDEO') {
        fullscreenEl = el.cloneNode(true);
        fullscreenEl.classList.add('fullscreen-image');
        fullscreenEl.autoplay = true;
    }
    
    fullscreenOverlay.appendChild(fullscreenEl);
    document.body.appendChild(fullscreenOverlay);

    fullscreenOverlay.addEventListener('click', () => {
        document.body.removeChild(fullscreenOverlay);
    });
}