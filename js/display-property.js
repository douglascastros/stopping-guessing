const optionsDisplay = document.getElementsByName('display-property');

optionsDisplay.forEach(option => {
    option.addEventListener('click', function (e) {
        const items = document.getElementsByClassName('display-prop-item');

        Array.prototype.forEach.call(items, function (item) {
            item.style.setProperty('display', e.target.value);
            document.getElementById('display-prop-changed').innerText = e.target.value;

            const textExplaining = document.getElementById('text-explaining-display');
            const decorationProps = document.getElementsByClassName('-decoration');

            if (e.target.value === 'block') {
                textExplaining.innerHTML = `the element fills the entire horizontal size of the screen, even if its width is smaller than the screen width. you cannot place elements side by side, but you can set width and height.`;
                Array.prototype.forEach.call(decorationProps, (el) => { el.style.setProperty('text-decoration', 'none'); });
            }
            else if (e.target.value === 'inline') {
                textExplaining.innerHTML = `the element has word behavior and its width and height cannot be set, but it is possible to place it side by side with other elements. the behavior of the word implies that there are spaces between the elements.`;
                Array.prototype.forEach.call(decorationProps, (el) => { el.style.setProperty('text-decoration', 'line-through'); });
            }
            else if (e.target.value === `inline-block`) {
                textExplaining.innerHTML = `the element has the behavior of a word and can be positioned side by side with other elements and also define its width and height.`;
                Array.prototype.forEach.call(decorationProps, (el) => { el.style.setProperty('text-decoration', 'none'); });
            }

            const slideDown = document.getElementsByClassName('display-prop')[0];
            slideDown.classList.remove('slide-down');
            setTimeout(function () { slideDown.classList.add('slide-down'); });
        });
    });
});

document.getElementById('display-block').click();