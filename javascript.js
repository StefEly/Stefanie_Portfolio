
/* Sidebar */
function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}


/* MixItUp Filters */
const mixerPortfolio = mixitup('.work_container', {
    selectors: {
        target: '.work_card'
    },

    animation: {
        duration: 500,
        easing: 'ease-in-out',
        effects: 'fade translateY(15px)',
        nudge: false,
        reverseOut: false
    }
});



/* Active Navigation */
const linkWork = document.querySelectorAll('.work_item');

linkWork.forEach(link => {
    link.addEventListener('click', function() {

        linkWork.forEach(item => {
            item.classList.remove('active-work');
        });

        this.classList.add('active-work');
    });
});


/* Portfolio Popup */
document.addEventListener('click', function(e) {

    const workButton = e.target.closest('.work_button');

    if (workButton) {

        const portfolioItem = workButton.closest('.work_card');

        if (portfolioItem) {
            portfolioItemDetails(portfolioItem);
            togglePortfolioPopup();
        }
    }
});


/* Toggle Popup */
function togglePortfolioPopup() {
    document
        .querySelector('.portfolio_popup')
        .classList.toggle('open');
}


/* Close Popup */
document
    .querySelector('.portfolio_popup-close')
    .addEventListener('click', togglePortfolioPopup);


/* Portfolio Details */
function portfolioItemDetails(portfolioItem) {

    document.querySelector('.pp_thumbnail img').src =
        portfolioItem.querySelector('.work_img').src;

    document.querySelector('.portfolio_popup-subtitle span').textContent =
        portfolioItem.querySelector('.work_title').textContent;

    document.querySelector('.portfolio_popup-body').innerHTML =
        portfolioItem.querySelector('.portfolio_item-details').innerHTML;
}
