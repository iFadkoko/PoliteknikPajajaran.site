const slides1 = document.querySelector('.slides');
        const cards = document.querySelectorAll('.containercard1');
        const dots = document.querySelectorAll('.dot');

        let currentIndex = 0;

        function updateSlidePosition() {
            slides1.style.transform = `translateX(-${currentIndex * (100/3)}%)`;
            dots.forEach(dot => dot.classList.remove('active'));
            dots[currentIndex].classList.add('active');
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                currentIndex = parseInt(e.target.getAttribute('data-index'));
                updateSlidePosition();
            });
        });

        // Initialize the first dot as active
        updateSlidePosition();