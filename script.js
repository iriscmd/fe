/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/* dmv deze micro interactie wordt het hartje groter en gekleurd (class = hartjegroot) zodra je op button hartje drukt,
als je er nog maar op klikt gaat hij weer terug naar button.hartje */

var hartje = document.querySelector('button.hartje');

hartje.addEventListener('click', function () {
    hartje.classList.toggle('hartjegroot');
});
