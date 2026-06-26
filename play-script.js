        const mainContent = document.querySelector('.main-content');
        const navbar = document.querySelector('.navbar');
        const navToggleBtn = document.querySelector('.nav-toggle-btn');
        const innerNavToggleBtn = document.querySelector('.inner-nav-toggle-btn');
        const root = document.documentElement;

        function calculateNavScale() {
            const navbarWidth = 200; // Fixed navbar width in pixels
            const scale = (window.innerWidth - navbarWidth) / window.innerWidth;
            root.style.setProperty('--nav-scale', scale);
        }
        
        function toggleNavBar() {
            mainContent.classList.toggle('nav-open');
            navbar.classList.toggle('nav-open');
            
        }

        navToggleBtn.addEventListener('click', toggleNavBar);
        innerNavToggleBtn.addEventListener('click', toggleNavBar);
        
        // Initialize on page load
        calculateNavScale();
        window.addEventListener('resize', calculateNavScale);

        const videoElement = document.getElementById('preview-video');
        const LineLandingElement = document.getElementById('line-landing');
        const workLandingElement = document.getElementById('work-landing');
        const hardLandingElement = document.getElementById('hard-landing');
        const playLandingElement = document.getElementById('play-landing');
        const harderLandingElement = document.getElementById('harder-landing');

        const interactiveElements = [
            workLandingElement,
            hardLandingElement,
            playLandingElement,
            harderLandingElement
        ];

        // Define custom bounding boxes, sizes, and origins for each element
        // width/height: repulsion zone dimensions (in pixels or as functions for fluid scaling)
        // originX/originY: where the element snaps back to (in pixels or as functions)
        const elementConfigs = {
            'work-landing': { 
                width: window.innerWidth * (310/1920), 
                height: window.innerWidth * (95/1920), 
                originX: () => window.innerWidth * (215/1920),
                originY: () => window.innerWidth * (160/1920)
            },
            'hard-landing': { 
                width: window.innerWidth * (300/1920), 
                height: window.innerWidth * (95/1920), 
                originX: () => window.innerWidth * (550/1920),
                originY: () => window.innerWidth * (160/1920)
            },
            'play-landing': { 
                width: window.innerWidth * (520/1920), 
                height: window.innerWidth * (150/1920), 
                originX: () => window.innerWidth * (430/1920),
                originY: () => window.innerWidth * (310/1920)
            },
            'harder-landing': { 
                width: window.innerWidth * (700/1920), 
                height: window.innerWidth * (150/1920), 
                originX: () => window.innerWidth * (1080/1920),
                originY: () => window.innerWidth * (315/1920)
            }
        };

        // Store state for each element
        const elementStates = {};
        interactiveElements.forEach(element => {
            elementStates[element.id] = {
                isRepelled: false
            };
            element.style.transition = 'transform 0.3s ease-out';
        });

        // Calculate distance between two points
        function getDistance(x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        }

        // Get a value that could be a number or a function
        function getValue(value) {
            return typeof value === 'function' ? value() : value;
        }

        // Handle cursor movement for repulsion effect
function enableRepulsionEffect() {
    document.addEventListener('mousemove', function(e) {
        const cursorX = e.clientX;
        const cursorY = e.clientY;
        
        // Only apply scale when nav is open
        const navScale = mainContent.classList.contains('nav-open') 
            ? parseFloat(getComputedStyle(root).getPropertyValue('--nav-scale')) || 1
            : 1;

        interactiveElements.forEach(element => {
            const config = elementConfigs[element.id];
            if (!config) return;

            const boxWidth = getValue(config.width) * navScale;
            const boxHeight = getValue(config.height) * navScale;
            const originX = getValue(config.originX) * navScale;
            const originY = getValue(config.originY) * navScale;

            const repulsionRadius = Math.max(boxWidth, boxHeight) / 2;
            const distance = getDistance(cursorX, cursorY, originX, originY);
            const state = elementStates[element.id];

            if (distance < repulsionRadius) {
                state.isRepelled = true;
                const angle = Math.atan2(originY - cursorY, originX - cursorX);
                const constantRepulseDistance = 50; // Fixed repulsion distance for all elements
                const pushX = Math.cos(angle) * constantRepulseDistance;
                const pushY = Math.sin(angle) * constantRepulseDistance * 0.4; // 40% of X repulsion
                element.style.transform = `translate(${pushX}px, ${pushY}px)`;
            } else if (state.isRepelled) {
                state.isRepelled = false;
                element.style.transform = 'translate(0px, 0px)';
            }
        });
    });
}

interactiveElements.forEach(element => {
    element.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
});

        const projects = [
            {
                name: "Speed Racer",
                content: document.querySelector('.speed-racer'),
                hash: 'Speed-Racer',
                year: "2026"
            },
            {
                name: "One Piece Titles",
                content: document.querySelector('.one-piece-titles'),
                hash: 'One-Piece-Titles',
                year: "2026"
            }
        ];

        const projectBackground = document.querySelector('.project-background');

        function closeProjectWindow() {
            projectBackground.style.display = 'none';
            projects.forEach(project => {
                project.content.style.display = 'none';
            });
        }

        const projectLinks = document.querySelectorAll('.play-thumbnail');
        projectLinks.forEach((link, index) => {
            link.addEventListener('click', () => openProjectWindow(index));
        });

        const projectText = document.querySelector('.project-text');
        const projectYear = document.querySelector('.project-year');
        const projectWindow = document.querySelector('.project-window');

        function openProjectWindow(index) {
            projectBackground.style.display = 'flex';
            projects.forEach(project => {
                project.content.style.display = 'none';
            });
            projects[index].content.style.display = 'flex';
            projectWindow.scrollTop = 0; // Reset scroll position to top
            projectText.textContent = projects[index].name;
            projectYear.textContent = projects[index].year;
        }

        const projectCloseBtn = document.querySelector('.project-close-btn');
        projectCloseBtn.addEventListener('click', closeProjectWindow);

        videoElement.addEventListener('ended', function() {
            // Fade in other elements immediately
            LineLandingElement.style.opacity = '1';
            workLandingElement.style.opacity = '1';
            hardLandingElement.style.opacity = '1';
            playLandingElement.style.opacity = '1';
            harderLandingElement.style.opacity = '1';
            
            // Fade out video after 0.2s delay
            setTimeout(function() {
                videoElement.style.opacity = '0';
            }, 200);
            
            // Hide video after everything is done fading
            setTimeout(function() {
                videoElement.style.display = 'none';
                enableRepulsionEffect();
            }, 400);
        });