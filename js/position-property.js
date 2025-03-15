const optionsPosition = document.getElementsByName('position-property');

optionsPosition.forEach(option => {
    option.addEventListener('click', function (e) {
        const firstItem = document.getElementsByClassName('position-prop-item -first')[0];

        firstItem.style.setProperty('position', e.target.value);
        document.getElementById('position-prop-changed').innerText = e.target.value;

        const slideDown = document.getElementsByClassName('position-prop')[0];
        slideDown.classList.remove('slide-down');
        setTimeout(function () { slideDown.classList.add('slide-down'); });
    });
});

document.getElementById('position-static').click();