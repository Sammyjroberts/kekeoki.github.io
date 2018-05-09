/**
 * Created by deanroberts on 5/8/18.
 */
$(document).ready(function () {
    $("#submit").on("click", function (e) {
        var belt = $("#curr-belt").val();
        console.log(belt);
        $("#guess-container").hide({
            duration: 200,
            complete: function () {
                $("#load-container").show({duration: 400});
                window.setTimeout(function () {
                    $("#load-container").hide({
                        duration: 400,
                        complete: function() {

                            $("#results-container").show({
                                duration: 400
                            })
                        }
                    })
                }, 5000);
            }
        });


    });

    $("#curr-belt").on("change", function (e) {
        var belt = $(this).val();

        if (belt === "White") {
            $("#new-belt").text("Blue");
        }
        else if (belt === "Blue") {
            $("#new-belt").text("Purple");
        }
        else if (belt === "Purple") {
            $("#new-belt").text("Brown");
        }
        else if (belt === "Brown") {
            $("#new-belt").text("Black");
        }
    });
});