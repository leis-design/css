  const resizeObserver = new ResizeObserver(entry => {

        if (entry[0].target.offsetWidth < 390) {

            mobileViewCC();

        } else {
            normalViewCC();
        }

    });

    window.addEventListener('DOMContentLoaded', (event) => {

        resizeObserver.observe(document.querySelector("#accordionImplement").parentElement);


    });

    function mobileViewCC() {
        $("#accordionImplement").children().eq(0).removeClass("row");
        $("#accordionImplement .border-0").each(function(i, obj) {
            obj.classList = "border-0";
        });

    }

    function normalViewCC() {
        $("#accordionImplement").children().eq(0).addClass("row");
        $("#accordionImplement .border-0").each(function(i, obj) {
            obj.classList = "border-0 col-md-6";
        });

    }