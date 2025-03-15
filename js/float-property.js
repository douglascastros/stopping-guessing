const optionsFloat = document.getElementsByName('float-property');

optionsFloat.forEach(option => {
    option.addEventListener('click', function (e) {
        const firstItem = document.getElementsByClassName('float-prop-item -first')[0];

        firstItem.style.setProperty('float', e.target.value);
        document.getElementById('float-prop-changed').innerText = e.target.value;

        const textExplaining = document.getElementById('text-explaining-float');

        if (e.target.value === 'none') {
            textExplaining.innerHTML = `nothing happening here...`;
        }
        else if (e.target.value === 'left') {
            textExplaining.innerHTML = `the float effect puts elements in a context ahead, so elements from the original context take the place of elements that went to the higher context, but their content did not.`;
        }
        else if (e.target.value === 'right') {
            textExplaining.innerHTML = `when the first element floats on the right side, both elements are placed on the same line, because the first element is in a higher context, and the second element takes the place of the element that went to the right, including its content.`;
        }

        const slideDown = document.getElementsByClassName('float-prop')[0];
        slideDown.classList.remove('slide-down');
        setTimeout(function () { slideDown.classList.add('slide-down'); });
    });
});

document.getElementById('float-none').click();