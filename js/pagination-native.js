// pagination on js
function arrangeOnPages (data, amount) {
    let pagesContent = [], onePageContent = [];
    
    data.forEach((el, i) => {
        onePageContent.push(el);
        const num = i + 1;
        if (num % amount === 0 || i === data.length - 1) {
            pagesContent.push(onePageContent);
            onePageContent = [];
        }
    });

    return pagesContent;
}
function getTemplatePages (arr, callback, icon) {
    const newArr = arr.map((el, i) => `<div class="pagination__page${ i ? '' : ' active' }">
        ${ callback(el) }
    </div>`);

    let pagesContainer = '<div class="pagination__pages">';
    let controlsPage = `<div class="pagination__controls"><div class="pagination__btn_prev">${ icon }</div>`;
    newArr.forEach((el, i) => {
        controlsPage += `<div onclick="showNewPage(this)" class="pagination__control${ i ? '' : ' active' }"
         data-page-id="${ i + 1 }">${ i + 1 }</div>`;
        pagesContainer += el;
    });
    controlsPage += `<div class="pagination__btn_next">
        ${ icon }
    </div></div>`;
    pagesContainer += `</div>${ controlsPage }`;
    
    return pagesContainer;
}
function showOtherPage(isNext, pages, controls) {
    let num;
    pages.forEach((el, i) => {
        if (el.classList.contains('active')) {
            num = isNext ? i + 2 : i;
            if (num < 1 || num > pages.length) {
                return;
            } 
            el.classList.remove('active');
            controls[i].classList.remove('active');
        }
    });
    if (num >= 1 && num <= pages.length) {
        pages[num - 1].classList.add('active');
        controls[num - 1].classList.add('active');
    }
}

function showNewPage(item) {
    const pages = document.querySelectorAll('.pagination__page');
    const controls = document.querySelectorAll('.pagination__control');

    pages.forEach((el, i) => {
        el.classList.remove('active');
        controls[i].classList.remove('active');
    })

    item.classList.add('active');
    pages[item.getAttribute('data-page-id') - 1].classList.add('active');
};

function pagination (settings) {
    const container = document.querySelector(`#${ settings.selectorId }`);
    arrangeOnPages(settings.data, settings.amount);
    html = getTemplatePages(
        arrangeOnPages(settings.data, settings.amount),
        settings.callback,
        settings.icon
    );
    container.innerHTML = html;

    // pagination action 
    const prev = document.querySelector('.pagination__btn_prev');
    const next = document.querySelector('.pagination__btn_next');
    const pages = document.querySelectorAll('.pagination__page');
    const controls = document.querySelectorAll('.pagination__control');

    next.addEventListener('click', function() {
        showOtherPage(true, pages, controls);
    });
    prev.addEventListener('click', function() {
        showOtherPage(false, pages, controls);
    });
}