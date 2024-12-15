const options = document.getElementsByName('display-property');

options.forEach(option => {
    option.addEventListener('click', function (e) {
        const items = document.getElementsByClassName('display-prop-item');

        Array.prototype.forEach.call(items, function (item) {
            item.style.setProperty('display', e.target.value);
            document.getElementById('display-prop-changed').innerText = e.target.value;

            const textExplaining = document.getElementById('text-explaining');
            if (e.target.value === 'block') {
                textExplaining.innerHTML = `the element fills the entire horizontal size of the screen, even if its width is smaller than the screen width. you cannot place elements side by side, but you can set width and height.`;
            }
            else {
                textExplaining.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora excepturi vel molestias facere voluptate, explicabo fugit veniam, dolor reiciendis iusto nobis vero voluptatibus porro. Eligendi nesciunt et voluptate ipsum.`;
            }

            const slideDown = document.getElementsByClassName('display-prop')[0];
            slideDown.classList.remove('slide-down');
            setTimeout(function () { slideDown.classList.add('slide-down'); });
        });
    });
});

document.getElementById('display-block').click();