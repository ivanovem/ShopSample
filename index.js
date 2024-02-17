const btn = document.querySelector('.content_button');
const popup = document.querySelector('.popup');

btn.addEventListener('click',openPopupProfileEdit );

function openPopupProfileEdit(){
    popup.classList.add("popup_opened");
    document.addEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
    if (evt.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened')
        closePopup(openedPopup);
    }
}

function closePopup(popup){
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEscape);
}