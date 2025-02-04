const optionsFloat = document.getElementsByName('float-property');

optionsFloat.forEach(option => {
    option.addEventListener('click', function (e) {
        const items = document.getElementsByClassName('float-prop-item -first');

        Array.prototype.forEach.call(items, function (item) {
            item.style.setProperty('float', e.target.value);
            document.getElementById('float-prop-changed').innerText = e.target.value;

            const sectionFloatProp = document.getElementsByClassName('float-prop')[0];
            const floatPropItemSecond = document.getElementById('floatSecond');
            const textExplaining = document.getElementById('text-explaining-float');

            if (e.target.value === 'none') {
                sectionFloatProp.style.setProperty('padding-bottom', '0');
                textExplaining.innerHTML = ``;
            }
            else if (e.target.value === 'left') {
                sectionFloatProp.style.setProperty('padding-bottom', '50px');
                textExplaining.innerHTML = `the float effect puts elements in a context ahead, so elements from the original context take the place of elements that went to the higher context, but their text did not.`;
            }

            const slideDown = document.getElementsByClassName('float-prop')[0];
            slideDown.classList.remove('slide-down');
            setTimeout(function () { slideDown.classList.add('slide-down'); });
        });
    });
});

document.getElementById('float-none').click();