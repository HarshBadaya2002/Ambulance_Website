$(document).ready(function() {
    // add event handlers
    // $("#search_ambulance_btn").click(function (event) {
    //     console.log(window.location.host);
    // });
    $("#search_ambulance_btn").click(function(event) {
        var phone = $("#phone_number_ambulance").val();
        if (phone.length < 10) {
            alert("please enter a valid Phone number");
            $("#phone_number_ambulance").focus();
            return;
        }
        if (parseInt(phone) != phone) {
            alert("please enter a valid Phone number");
            $("#phone_number_ambulance").focus();
            return;
        }
        var selectedCity = $("#cities_ambulance").val();
        if (!selectedCity) {
            alert("please select a city");
            return;
        }
        var url = "https://api-dit.ambipalm.in/pre-lead";
        $("#search_ambulance_btn").prop('disabled', true);
        $.post(url, {
            mobile: phone,
            city: selectedCity,
            requestingFor: "ambulance"
        }, function(data) {
            console.log(data);
            if (data.status == "OK") {
                if (window.location.hostname === "staging.ambipalm.in") {
                    window.location.replace("https://staging-app.ambipalm.in");
                } else if (window.location.hostname === "www.ambipalm.com" || window.location.hostname === "ambipalm.com") {
                    window.location.replace("https://app.ambipalm.com");
                } else {
                    console.log("unable to redirect");
                }
            }
        }).fail(function(data) {
            $("#search_ambulance_btn").prop('disabled', false);
        })
    });

    $("#submit_blood_req").click(function(event) {
        var phone = $("#phone_number").val();
        if (phone.length < 10) {
            alert("please enter a valid Phone number");
            $("#phone_number").focus();
            return;
        }
        if (parseInt(phone) != phone) {
            alert("please enter a valid Phone number");
            $("#phone_number").focus();
            return;
        }
        var selectedCity = $("#cities").val();
        if (!selectedCity) {
            alert("please select a city");
            return;
        }
        var url = "https://api-dit.ambipalm.in/pre-lead";
        $("#submit_blood_req").prop('disabled', true);
        $.post(url, {
            mobile: phone,
            city: selectedCity,
            requestingFor: "blood"
        }, function(data) {
            console.log(data);
            if (data.status == "OK") {

                if (window.location.hostname === "staging.ambipalm.in") {
                    window.location.replace("https://staging-app.ambipalm.in");
                } else if (window.location.hostname === "www.ambipalm.com" || window.location.hostname === "ambipalm.com") {
                    window.location.replace("https://app.ambipalm.com");
                } else {
                    console.log("unable to redirect");
                }
            }
        }).fail(function(data) {
            $("#submit_blood_req").prop('disabled', false);
        })
    })
})