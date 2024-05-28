let cookieCount = 0; // Initialize the cookie count

// Get reference to the cookie element
const cookieElement = document.getElementById('cookie');

// Add event listener to the cookie element for click events
cookieElement.addEventListener('click', clickCookie);

function clickCookie() {
    // Increment the cookie count
    cookieCount++;

    // Update the display to show the new cookie count
    updateCookieCountDisplay();
}

function updateCookieCountDisplay() {
    // Update the HTML element with the cookie count
    const cookieCountElement = document.getElementById('cookie-count');
    cookieCountElement.textContent = cookieCount;
}

// Adding special effects below -------------------------------------------


function clickCookie() {
    // Increment the cookie count
    cookieCount++;

    // Update the display to show the new cookie count
    updateCookieCountDisplay();

    // Create crumbs element
    createCrumbs();
}

function createCrumbs() {
    const crumbs = document.createElement('div');
    crumbs.classList.add('crumbs');
    
    // Position crumbs around the cookie
    const cookieElement = document.getElementById('cookie');
    const cookieRect = cookieElement.getBoundingClientRect();
    const crumbsX = cookieRect.left + Math.random() * cookieRect.width;
    const crumbsY = cookieRect.top + Math.random() * cookieRect.height;
    crumbs.style.left = crumbsX + 'px';
    crumbs.style.top = crumbsY + 'px';
    
    // Append crumbs to the document
    document.body.appendChild(crumbs);
    
    // Remove crumbs after animation
    crumbs.addEventListener('animationend', () => {
        crumbs.remove();
    });
}


function clickCookie() {
    // Increment the cookie count
    cookieCount++;

    // Update the display to show the new cookie count
    updateCookieCountDisplay();

    // Add shake effect to the cookie
    const cookieElement = document.getElementById('cookie');
    cookieElement.classList.add('shake');
    
    // Remove shake effect after a short delay
    setTimeout(() => {
        cookieElement.classList.remove('shake');
    }, 500); // 0.5 seconds

    // Create crumbs element
    createCrumbs();
}
