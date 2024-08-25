document.addEventListener('DOMContentLoaded', function ()
{
    const animatedElements = document.querySelectorAll('.animated-button');

    animatedElements.forEach(element =>
    {
        element.addEventListener('mouseover', function ()
        {
            this.style.backgroundColor = '#ff6600';
        });

        element.addEventListener('mouseout', function ()
        {
            this.style.backgroundColor = '#ff0033';
        });
    });
});