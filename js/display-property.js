const radios = document.getElementsByName('display-property');

radios.forEach(radio => {
    radio.addEventListener('click', function (e) {
        const changes = document.getElementsByClassName('display-prop-item');

        Array.prototype.forEach.call(changes, function (change) {
            change.style.setProperty('display', e.target.value);

            change.classList.remove('slide-down');
            setTimeout(function () { change.classList.add('slide-down'); });

            document.getElementById('display-prop-changed').innerText = e.target.value;

            let textExplaining = document.getElementById('text-explaining');
            if (e.target.value === 'block') {
                textExplaining.innerHTML = `the element fills the entire horizontal size of the screen, even if its width is smaller than the screen width. you cannot place elements side by side, but you can set width and height.`;
            }
            else {
                textExplaining.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos tempora excepturi vel molestias facere voluptate, explicabo fugit veniam, dolor reiciendis iusto nobis vero voluptatibus porro. Eligendi nesciunt et voluptate ipsum.`;
            }
        });
    });
});

document.getElementById('display-block').click();