//        const nextProject = document.querySelector('.next-project');
const videoElement = document.getElementById('preview-video');
        const LinesLandingElement = document.getElementById('lines-landing');
        const tuckerLandingElement = document.getElementById('tucker-landing');
        const zieglerLandingElement = document.getElementById('ziegler-landing');
        const makeLandingElement = document.getElementById('make-landing');
        const itLandingElement = document.getElementById('it-landing');
        const workLandingElement = document.getElementById('work-landing');
        const slayLandingElement = document.getElementById('slay-landing');

        const interactiveElements = [
            tuckerLandingElement,
            zieglerLandingElement,
            makeLandingElement,
            itLandingElement,
            workLandingElement,
            slayLandingElement
        ];

        // Define custom bounding boxes, sizes, and origins for each element
        // width/height: repulsion zone dimensions (in pixels or as functions for fluid scaling)
        // originX/originY: where the element snaps back to (in pixels or as functions)
        const elementConfigs = {
            'tucker-landing': { 
                width: window.innerWidth * (782/1920), 
                height: window.innerWidth * (184/1920), 
                originX: () => window.innerWidth * (445/1920),
                originY: () => window.innerWidth * (164/1920)
            },
            'ziegler-landing': { 
                width: window.innerWidth * (764/1920), 
                height: window.innerWidth * (184/1920), 
                originX: () => window.innerWidth * (1228/1920),
                originY: () => window.innerWidth * (164/1920)
            },
            'make-landing': { 
                width: window.innerWidth * (340/1920), 
                height: window.innerWidth * (86/1920), 
                originX: () => window.innerWidth * (354/1920),
                originY: () => window.innerWidth * (337/1920)
            },
            'it-landing': { 
                width: window.innerWidth * (94/1920), 
                height: window.innerWidth * (86/1920), 
                originX: () => window.innerWidth * (485/1920),
                originY: () => window.innerWidth * (337/1920)
            },
            'work-landing': { 
                width: window.innerWidth * (622/1920), 
                height: window.innerWidth * (153/1920), 
                originX: () => window.innerWidth * (549/1920),
                originY: () => window.innerWidth * (480/1920)
            },
            'slay-landing': { 
                width: window.innerWidth * (183/1920), 
                height: window.innerWidth * (35/1920), 
                originX: () => window.innerWidth * (956/1920),
                originY: () => window.innerWidth * (535/1920)
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

        videoElement.addEventListener('ended', function() {
            // Fade in other elements immediately
            LinesLandingElement.style.opacity = '1';
            tuckerLandingElement.style.opacity = '1';
            zieglerLandingElement.style.opacity = '1';
            makeLandingElement.style.opacity = '1';
            itLandingElement.style.opacity = '1';
            workLandingElement.style.opacity = '1';
            slayLandingElement.style.opacity = '1';
            
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

        // Scaling toggle for nav bar
        const mainContent = document.querySelector('.main-content');
        const navbar = document.querySelector('.navbar');
        const navToggleBtn = document.querySelector('.nav-toggle-btn');
        const innerNavToggleBtn = document.querySelector('.inner-nav-toggle-btn');
        const root = document.documentElement;
        const playContentContainer = document.querySelector('.play-content-container');
        const playTab = document.querySelector('.play-tab');
        const workTab = document.querySelector('.work-tab');
        const projectCloseBtn = document.querySelector('.project-close-btn');
        
        function calculateNavScale() {
            const navbarWidth = 200; // Fixed navbar width in pixels
            const scale = (window.innerWidth - navbarWidth) / window.innerWidth;
            root.style.setProperty('--nav-scale', scale);
        }
        
        function toggleNavBar() {
            mainContent.classList.toggle('nav-open');
            navbar.classList.toggle('nav-open');
            
        }

        const projects = [
            {
                name: "Pepsi Smart Can",
                content: document.querySelector('.pepsi-project'),
                hash: 'Pepsi-Smart-Can',
                year: "2025"
            },
            {
                name: "Tenstorrent",
                content: document.querySelector('.tenstorrent-project'),
                hash: 'Tenstorrent',
                year: "2025-2026"
            },
            {
                name: "PostCon",
                content: document.querySelector('.postcon-project'),
                hash: 'PostCon',
                year: "2024-2025"
            },
            {
                name: "Quick Shapes",
                content: document.querySelector('.quick-shapes-project'),
                hash: 'Quick-Shapes',
                year: "2026"
            },
//            {
//                name: "Spreadsheet Importer",
//                content: document.querySelector('.spreadsheet-importer-project'),
//                hash: 'Spreadsheet-Importer',
//                year: "2025"
//            },
            {
                name: "FX on Hulu",
                content: document.querySelector('.fx-on-hulu-project'),
                hash: 'FX-on-Hulu',
                year: "2023"
            }
        ];  

        const projectBackground = document.querySelector('.project-background');

        function closeProjectWindow() {
            projectBackground.style.display = 'none';
            projects.forEach(project => {
                project.content.style.display = 'none';
            });
        }
        
        const projectLinks = document.querySelectorAll('.project-link');
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
            projectText.textContent=projects[index].name;
            projectYear.textContent = projects[index].year;
        }

        // Calculate scale on load and on window resize
        calculateNavScale();
        window.addEventListener('resize', calculateNavScale);

        // Toggle nav bar on button click
        navToggleBtn.addEventListener('click', toggleNavBar);
        innerNavToggleBtn.addEventListener('click', toggleNavBar);
        projectCloseBtn.addEventListener('click', closeProjectWindow);

        // Close project window when clicking outside the inner 80% of the screen
        document.addEventListener('click', (e) => {
            const innerMargin = window.innerWidth * 0.1; // 10% margin on each side
            const innerWidth = window.innerWidth * 0.8;
            const innerHeight = window.innerHeight * 0.8;
            const innerTop = window.innerHeight * 0.1;
            
            const clickX = e.clientX;
            const clickY = e.clientY;
            
            // Check if click is outside the inner 80% area
            const isOutsideInnerArea = 
                clickX < innerMargin || 
                clickX > (innerMargin + innerWidth) || 
                clickY < innerTop || 
                clickY > (innerTop + innerHeight);
            
            // Only close if project window is open and click is outside
            if (isOutsideInnerArea && projectBackground.style.display === 'flex') {
                closeProjectWindow();
            }
        });

        // Carousel functionality
        function initializeCarousels() {
            const videoGroups = document.querySelectorAll('.video-group');
            
            videoGroups.forEach(videoGroup => {
                const prevBtn = videoGroup.querySelector('.carousel-prev');
                const nextBtn = videoGroup.querySelector('.carousel-next');
                const container = videoGroup.querySelector('.video-carousel-container');
                const iframes = container.querySelectorAll('iframe');
                const indicatorsContainer = videoGroup.parentElement.querySelector('.carousel-indicators');
                const dots = indicatorsContainer ? indicatorsContainer.querySelectorAll('.carousel-dot') : [];
                
                let currentIndex = 0;
                
                function showSlide(index) {
                    // Wrap around if index is out of bounds
                    if (index >= iframes.length) {
                        currentIndex = 0;
                    } else if (index < 0) {
                        currentIndex = iframes.length - 1;
                    } else {
                        currentIndex = index;
                    }
                    
                    // Remove active class from all iframes and dots
                    iframes.forEach(iframe => iframe.classList.remove('active'));
                    dots.forEach(dot => dot.classList.remove('active'));
                    
                    // Add active class to current iframe and dot
                    iframes[currentIndex].classList.add('active');
                    if (dots[currentIndex]) {
                        dots[currentIndex].classList.add('active');
                    }
                }
                
                // Previous button
                if (prevBtn) {
                    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
                }
                
                // Next button
                if (nextBtn) {
                    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));
                }
                
                // Dot indicators
                dots.forEach((dot, index) => {
                    dot.addEventListener('click', () => showSlide(index));
                });
            });
        }
        
        // Initialize carousels
        initializeCarousels();

//        const nextProject = document.querySelector('.next-project');
//        const previousProject = document.querySelector('previous-project');