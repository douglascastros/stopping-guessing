const optionsFloat = document.getElementsByName('float-property');
const optionsFloatSecond = document.getElementsByName('float-property-second');

optionsFloat.forEach(option => {
    option.addEventListener('click', function (e) {
        const items = document.getElementsByClassName('float-prop-item -first');

        Array.prototype.forEach.call(items, function (item) {
            item.style.setProperty('float', e.target.value);
            document.getElementById('float-prop-changed').innerText = e.target.value;

            const textExplaining = document.getElementById('text-explaining-float');

            if (e.target.value === 'none') {
                textExplaining.innerHTML = ``;
            }
            else if (e.target.value === 'left') {
                textExplaining.innerHTML = `the float effect puts elements in a context ahead, so elements from the original context take the place of elements that went to the higher context, but their content did not.`;
            }

            const slideDown = document.getElementsByClassName('float-prop')[0];
            slideDown.classList.remove('slide-down');
            setTimeout(function () { slideDown.classList.add('slide-down'); });
        });
    });
});

optionsFloatSecond.forEach(option => {
    option.addEventListener('click', function (e) {
        const items = document.getElementsByClassName('float-prop-item -second');

        Array.prototype.forEach.call(items, function (item) {
            item.style.setProperty('float', e.target.value);
            document.getElementById('float-prop-changed-second').innerText = e.target.value;

            const textExplaining = document.getElementById('text-explaining-float');

            if (e.target.value === 'none') {
                textExplaining.innerHTML = ``;
            }
            else if (e.target.value === 'left') {
                textExplaining.innerHTML = `the float effect puts elements in a context ahead, so elements from the original context take the place of elements that went to the higher context, but their content did not.`;
            }

            const slideDown = document.getElementsByClassName('float-prop')[0];
            slideDown.classList.remove('slide-down');
            setTimeout(function () { slideDown.classList.add('slide-down'); });
        });
    });
});

document.getElementById('float-none').click();
document.getElementById('float-none-second').click();