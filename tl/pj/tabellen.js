var myTestWindow;


function openWindow() {
  myTestWindow = window.open ("","" ,"left=200,top=250,width=250,height=450");
}
function closeWindow() {
  if (myTestWindow) {
    myTestWindow.close();
  }
}
// Zustand des Fensters ======================================================
function stateWindow() {
  if (!myTestWindow) {
    alert("Fenster ist nicht offen");
  }
  else {
    if (myTestWindow.closed)
      alert ("Fenster ist zu"); 
    else
      alert ("Fenster ist offen");
  }
}



document.addEventListener('DOMContentLoaded', function() {

   /* Wir schreiben ein Array von Schaltflächenelementen und einen Hintergrund in Variablen.
       Wir setzen die Substrat-ID so, dass andere Elemente mit Klassenüberlagerung nicht beeinflusst werden*/

   var modalButtons = document.querySelectorAll('.js-open-modal'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   /*  sortieren eine Reihe von Schaltflächen  =======================================================*/
   modalButtons.forEach(function(item){

      /* wir weisen jeder Schaltfläche einen Klick zu. =================================================== */
      item.addEventListener('click', function(e) {

         e.preventDefault();

         /* Jedes Mal, wenn wir auf die Schaltfläche klicken, 
         nehmen wir den Inhalt des datenmodalen Attributs auf und suchen nach einem modalen Fenster mit demselben Attribut. */

         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* Nachdem wir das gewünschte modale Fenster gefunden haben, 
         fügen wir die Klassen dem Substrat und dem Fenster hinzu, um sie anzuzeigen. ==============================*/
         modalElem.classList.add('active');
         overlay.classList.add('active');
      }); 
      // end click

   }); 
   
// Um das kleine Fenster zu schliessen, also close Funktion mit X ==================================

   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); 


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
    });




}); 