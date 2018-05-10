/* Custom JS goes here */

// IIFE - Immediately Invoked Function Expression
// anonymous self executing function
(function(){

    function Start() {

        var title = document.title;

        console.log("App Started!");
        console.log("----------------------------");
        console.log("title: " + title);
    }

    window.onload = Start;
})();