const radios = document.getElementsByName('display-property');

radios.forEach(radio => {
    radio.addEventListener('click', function (e) {
        const changes = document.getElementsByClassName('display-prop-item');

        Array.prototype.forEach.call(changes, function (change) {
            change.style.setProperty('display', e.target.value);

            change.classList.remove('slide-down');
            setTimeout(function () { change.classList.add('slide-down'); });

            document.getElementById('display-prop-changed').innerText = e.target.value;
        });
    });
});