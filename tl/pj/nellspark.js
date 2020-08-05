// alert("Wir verwenden Cookies.");

    let carousel = document.querySelector('.carousel');
    let cells = carousel.querySelectorAll('.carousel__cell');

    let selectedIndex = 0;
    let cellWidth = carousel.offsetWidth;
    let cellHeight = carousel.offsetHeight;
    let isHorizontal = true;
    let rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
    let radius, theta;               //in form Zilinder und Änderung der Höhe pro Zeiteinheit



    // Drehung des Objekts um einen bestimmten Punkt ==============================================
    function rotateCarousel() {
        let angle = theta * selectedIndex * -1;
        carousel.style.transform = 'translateZ(' + -radius + 'px) ' +
            rotateFn + '(' + angle + 'deg)';
    }
// Klick für das letzte Bild --     ========================================================================

    let prevButton = document.querySelector('.previous-button');
    prevButton.addEventListener('click', function () {
        selectedIndex--;
        rotateCarousel();
    });

// Klick für das nächste Bild ++ ============================================================================
   let nextButton = document.querySelector('.next-button');
    nextButton.addEventListener('click', function () {
        selectedIndex++;
        rotateCarousel();
    });

    // bezieht sivh auf die anzahl der bilder ==========================================================

    let cellsRange = document.querySelector('.cells-range');
    cellsRange.addEventListener('change', changeCarousel);
    cellsRange.addEventListener('input', changeCarousel);


//Bilder ====================================================================================
    function changeCarousel() {
        cellCount = cellsRange.value;
        theta = 360 / cellCount;
        let cellSize = isHorizontal ? cellWidth : cellHeight;

        //Abstand zw. den Bild   ===========================================================================

        radius = Math.round((cellSize / 1.6) / Math.tan(Math.PI / cellCount));
        for (let i = 0; i < cells.length; i++) {
            let cell = cells[i];
            if (i < cellCount) {
                // sichtbare Zelle  =======================================================================
                cell.style.opacity = 1;
                let cellAngle = theta * i;
                cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
            } else {
                // versteckte Zelle========================================================================
                cell.style.opacity = 0;
                cell.style.transform = 'none';
            }
        }

        rotateCarousel();
    }
//Nur horizontal oder nur vertikal  =======================================================================
    let orientationRadios = document.querySelectorAll('input[name="orientation"]');
    (function () {
        for (let i = 0; i < orientationRadios.length; i++) {
            let radio = orientationRadios[i];
            radio.addEventListener('change', onOrientationChange);
        }
    })();

    function onOrientationChange() {
        let checkedRadio = document.querySelector('input[name="orientation"]:checked');
        isHorizontal = checkedRadio.value == 'horizontal';
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        changeCarousel();
    }

// Video CUBE ========================================================================
    onOrientationChange();

    let cube = document.querySelector('.cube');
    let radioGroup = document.querySelector('.radio-group');
    let currentClass = '';

    function changeSide() {
        let checkedRadio = radioGroup.querySelector(':checked');
        let showClass = 'show-' + checkedRadio.value;
        if (currentClass) {
            cube.classList.remove(currentClass);
        }
        cube.classList.add(showClass);
        currentClass = showClass;
    }

    changeSide();

    radioGroup.addEventListener('change', changeSide);

    let slideIndex = 1;
    showDivs(slideIndex);

    function plusDivs(n) {
        showDivs(slideIndex += n);
    }

    function currentDiv(n) {
        showDivs(slideIndex = n);
    }

    function showDivs(n) {
        let i;
        let x = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("demo");
        if (n > x.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = x.length }
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" w3-white", "");
        }
        x[slideIndex - 2].style.display = "block";
        dots[slideIndex - 1].className += " w3-white";
    }

    //email to ....
  function send() {
    let link = 'mailto:qvyusal@gmail.com?subject=Message from'+document.getElementById('email').value+'&body='+document.getElementById('nachricht').value;
    window.location.href = link;
}

    
   