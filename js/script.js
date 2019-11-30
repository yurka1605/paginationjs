const nextIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#000000" d="M8 256c0 137 111 248 248 248s248-111 248-248S393 8 256 8 8 119 8 256zM256 40c118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216zm86.6 224.5l-115.1 115c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L303 256l-99.5-99.5c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0l115.1 115c4.6 4.8 4.6 12.4-.1 17.1z" class=""></path></svg>';
const SETTINGS = {
    selectorId: 'pagination-container',
    data: [1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13 ,14, 15,1, 2, 3, 4, 5, 6, 7, 8,9, 10, 11, 12, 13 ,14, 15],
    amount: 10,
    icon: nextIcon,
    callback: templateCreateList,
};
function templateCreateList (items) {
    let list = '<ul class="row">';
    items.forEach(item => {
        list += `<li class="col-6 col-sm-3 col-md-3 col-lg-2">
            <div class="counterparties-block-list__item">
                ${ item }
            </div>
        </li>`;
    });

    list += '</ul>';

    return list;
}

window.addEventListener('load', function() {
  pagination(SETTINGS);
});