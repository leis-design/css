
    var totalCards = document.getElementsByClassName("card-deck");

    if ($(window).width() >= 745) {

        reduceCardSize();
    }
    $(window).on("resize", function () {
        if ($(this).width() < 745) {
            revertCardSize();
        } else {
            reduceCardSize();
        }
    });



    function revertCardSize() {
        for (var i = 0; i < totalCards.length; i++) {
            if (totalCards[i].children.length == 1) {
                var ele = totalCards[i].children[0];

                ele.className = "card";
                ele.style.width = "100%";
            } else if (totalCards[i].children.length == 2) {
                var ele1 = totalCards[i].children[0];
                var ele2 = totalCards[i].children[1];

                ele1.className = "card";
                ele1.style.width = "100%";

                ele2.className = "card";
                ele2.style.width = "100%";
            }
        }
    }

    function reduceCardSize() {
        for (var i = 0; i < totalCards.length; i++) {
            if (totalCards[i].children.length == 1) {
                var ele = totalCards[i].children[0];
                ele.classList.toggle("card");
                ele.className = "border";
                ele.style.width = "33%";
            } else if (totalCards[i].children.length == 2) {
                var ele1 = totalCards[i].children[0];
                var ele2 = totalCards[i].children[1];
                ele1.classList.toggle("card");
                ele1.className = "border mr-2";
                ele1.style.width = "33%";

                ele2.classList.toggle("card");
                ele2.className = "border";
                ele2.style.width = "33%";
            }
        }
    }


    var modal;
    var idname;
    var span;
    var activeblue_ele;
    document.addEventListener('DOMContentLoaded', (event) => {

        //Get the active blue box
        activeblue_ele = document.getElementsByClassName("list-group-item active")[0];
    });


    function showImageModal(elementid) {
        var strId = elementid.split("_")[0];
        modal = document.getElementById(strId + "myModal");


        //Get the active blue box
        activeblue_ele = document.getElementsByClassName("list-group-item active")[0];
        idname = elementid;
        profileModal();

    }


    // When the user clicks on <span> (x), close the modal
    function spanclick() {
        toggleBlue();
        modal.style.display = "none";
        document.getElementById(idname + 'h').style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
            document.getElementById(idname + 'h').style.display = "none";
            toggleBlue();
        }
    }

    function toggleBlue() {
        activeblue_ele.classList.toggle("active");
    }

    function profileModal() {


        toggleBlue();

        document.getElementById(idname + 'h').style.display = "block";

        modal.style.display = "block";
    }

    function closeAcc(celement) {
        celement.parentElement.parentElement.classList.toggle("show");
    }


  
