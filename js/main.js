document.addEventListener("DOMContentLoaded", function(){

    //When scrolling execute PersistentBar
    window.onscroll = function() {persistentBar()};

    //get header
    var header = document.getElementById("myHeader");

    //get offset position of navbar
    var sticky = header.offsetTop;

    //remove or add class sticky depending on position
    function persistentBar() {
        if(window.pageYOffset > sticky) {
            header.classList.add("sticky");
        }
        else {
            header.classList.remove("sticky");
        }
    }
})