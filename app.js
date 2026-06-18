const container = document.getElementById('slides-target');
const progressBar = document.getElementById('progress-bar');

const offsets = [
    { r: 2, x: 5, y: -5 },
    { r: -3, x: -8, y: 5 },
    { r: 1, x: 10, y: 8 },
    { r: -1, x: -3, y: -10 },
    { r: 3, x: 4, y: 4 }
];

const badgeStyle = presentationData.settings.badgeStyle === 'modern' ? 'modern' : 'classic';

// --- CREATE WELCOME SLIDE ---
if (presentationData.settings.welcomeTitle) {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = "slide active special-slide";
    welcomeDiv.innerHTML = `
        <div class="special-content">
            <h1 class="glow-text">${presentationData.settings.welcomeTitle}</h1>
            <p>${presentationData.settings.welcomeSubtitle || ''}</p>
        </div>
    `;
    container.appendChild(welcomeDiv);
}

// DYNAMIC BUILD OF PROJECT SLIDES
presentationData.projects.forEach((project, index) => {
    const slideDiv = document.createElement('div');
    const isFirstActive = !presentationData.settings.welcomeTitle && index === 0;
    slideDiv.className = `slide ${isFirstActive ? 'active' : ''}`;
    
    const totalImages = project.images.length;
    let innerHtml = '';

    if (totalImages === 1) {
        const singleImg = project.images[0];
        const colorClass = singleImg.label_color ? singleImg.label_color : 'default-badge';
        const positionClass = badgeStyle === 'modern' ? 'modern-left' : '';
        
        innerHtml = `
            <div class="slide-header">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
            </div>
            <div class="single-container">
                <div class="image-card">
                    <span class="badge ${badgeStyle} ${colorClass} ${positionClass}">${singleImg.label}</span>
                    <div class="image-container" style="background-image: url('${singleImg.file}');">
                        <img src="${singleImg.file}" alt="${singleImg.label}">
                    </div>
                </div>
            </div>
        `;
    } else {
        const firstImg = project.images[0];
        const stackImages = project.images.slice(1);
        const firstColorClass = firstImg.label_color ? firstImg.label_color : 'before';
        const firstPositionClass = badgeStyle === 'modern' ? 'modern-left' : '';
        
        let stackHtml = '';
        stackImages.forEach((imgObj, imgIndex) => {
            const isLast = imgIndex === stackImages.length - 1;
            const defaultClass = isLast ? 'after' : 'work';
            const colorClass = imgObj.label_color ? imgObj.label_color : defaultClass;
            const positionClass = badgeStyle === 'modern' ? 'modern-right' : '';
            const offset = offsets[imgIndex % offsets.length];
            
            stackHtml += `
                <div class="image-card stacked-card" style="--rot: ${offset.r}deg; --tx: ${offset.x}px; --ty: ${offset.y}px;">
                    <span class="badge ${badgeStyle} ${colorClass} ${positionClass}">${imgObj.label}</span>
                    <div class="image-container" style="background-image: url('${imgObj.file}');">
                        <img src="${imgObj.file}" alt="${imgObj.label}">
                    </div>
                </div>
            `;
        });

        innerHtml = `
            <div class="slide-header">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
            </div>
            <div class="stack-container">
                <div class="image-card">
                    <span class="badge ${badgeStyle} ${firstColorClass} ${firstPositionClass}">${firstImg.label}</span>
                    <div class="image-container" style="background-image: url('${firstImg.file}');">
                        <img src="${firstImg.file}" alt="${firstImg.label}">
                    </div>
                </div>
                <div class="right-stack">
                    ${stackHtml}
                </div>
            </div>
        `;
    }

    slideDiv.innerHTML = innerHtml;
    container.appendChild(slideDiv);
});

// --- CREATE END SLIDE ---
if (presentationData.settings.endText) {
    const endDiv = document.createElement('div');
    endDiv.className = "slide special-slide";
    endDiv.innerHTML = `
        <div class="special-content">
            <h1 class="glow-text">${presentationData.settings.endText}</h1>
        </div>
    `;
    container.appendChild(endDiv);
}

// TIMING AND FLOW CONTROL
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
let stackTimeout = null;

function runSlideMechanism() {
    clearTimeout(stackTimeout);
    
    if (currentIndex === 0) {
        const allStackedCards = container.querySelectorAll('.stacked-card');
        allStackedCards.forEach(card => {
            card.classList.remove('revealed');
            card.style.transform = 'scale(0.9) rotate(0deg)';
        });
    }
    
    const currentSlide = slides[currentIndex];
    const stackedCards = currentSlide.querySelectorAll('.stacked-card');
    
    stackedCards.forEach(card => {
        card.classList.remove('revealed');
        card.style.transform = 'scale(0.9) rotate(0deg)';
    });

    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';

    let cardIndex = 0;
    const stepDelay = presentationData.settings.stepDuration || 2000; 
    const finalWait = presentationData.settings.slideDuration; 

    function finishSlide(waitTime) {
        const nextIndex = (currentIndex + 1) % slides.length;
        const isLoopEnd = nextIndex === 0;
        const shouldLoop = presentationData.settings.loop !== false;

        if (presentationData.settings.showProgressBar && (!isLoopEnd || shouldLoop)) {
            progressBar.style.transition = 'none';
            progressBar.style.width = '0%';
            
            setTimeout(() => {
                progressBar.style.transition = `width ${waitTime}ms linear`;
                progressBar.style.width = '100%';
            }, 50);
        }
        
        stackTimeout = setTimeout(() => {
            if (isLoopEnd && !shouldLoop) {
                console.log("Presentation ended (loop disabled).");
                return; 
            }

            slides[currentIndex].classList.remove('active');
            currentIndex = nextIndex;
            slides[currentIndex].classList.add('active');
            runSlideMechanism();
        }, waitTime);
    }

    function revealNextCard() {
        if (cardIndex < stackedCards.length) {
            const card = stackedCards[cardIndex];
            card.classList.add('revealed');
            
            const rot = card.style.getPropertyValue('--rot');
            const tx = card.style.getPropertyValue('--tx');
            const ty = card.style.getPropertyValue('--ty');
            card.style.transform = `scale(1) rotate(${rot}) translate(${tx}, ${ty})`;
            
            cardIndex++;
            if (cardIndex === stackedCards.length) {
                finishSlide(finalWait);
            } else {
                stackTimeout = setTimeout(revealNextCard, stepDelay);
            }
        }
    }

    if (stackedCards.length === 0) {
        finishSlide(finalWait);
    } else {
        stackTimeout = setTimeout(revealNextCard, stepDelay);
    }
}

if (slides.length > 0) {
    runSlideMechanism();
}