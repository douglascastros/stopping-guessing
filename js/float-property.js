const optionsFloat = document.getElementsByName('float-property');

optionsFloat.forEach(option => {
    option.addEventListener('click', function (e) {
        const items = document.getElementsByClassName('float-prop-item -first');

        Array.prototype.forEach.call(items, function (item) {
            item.style.setProperty('float', e.target.value);
            document.getElementById('float-prop-changed').innerText = e.target.value;

            const sectionFloatProp = document.getElementsByClassName('float-prop')[0];
            const floatPropItemSecond = document.getElementById('floatSecond');

            if (e.target.value === 'none') {
                sectionFloatProp.style.setProperty('padding-bottom', '0');
            }
            else if (e.target.value === 'left') {
                sectionFloatProp.style.setProperty('padding-bottom', '50px');
            }

            const slideDown = document.getElementsByClassName('float-prop')[0];
            slideDown.classList.remove('slide-down');
            setTimeout(function () { slideDown.classList.add('slide-down'); });
        });
    });
});

document.getElementById('float-none').click();