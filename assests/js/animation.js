document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated-button');

    animatedElements.forEach(element => {
        element.addEventListener('mouseover', function () {
            this.style.backgroundColor = '#ff6600';
            this.style.boxShadow = '0 0 15px rgba(255, 0, 51, 1)';
        });

        element.addEventListener('mouseout', function () {
            this.style.backgroundColor = '#ff0033';
            this.style.boxShadow = '0 0 10px rgba(255, 0, 51, 0.8)';
        });
    });
});