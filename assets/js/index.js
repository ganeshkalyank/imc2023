var herotext = document.getElementById("herotext");

var typewriter = new Typewriter(herotext, {
    loop: true,
    strings: [
        "Algebra",
        "Topology",
        "Functional Analysis",
        "Differential Equations",
        "Wavelet Analysis",
        "Numerical Analysis",
        "Graph Theory",
        "Number Theory",
        "Cryptography",
        "Stochastic Processes",
        "Discrete Mathematics",
        "Data Analysis Techniques",
        "AI and ML",
        "Fuzzy Mathematics",
        "Information Sciences",
        "Mathematical Modelling",
        "Scientific Computing",
        "Soft Computing"
    ],
    autoStart: true
});

$(document).ready(function () {
    $.ajax({
        url: "assets/data/speakers.json",
        type: "GET",
        dataType: "json",
        success: function (data) {
            var html = "";
            $.each(data, function (key, value) {
                // html += "<div class='col-md-6 col-lg-3 d-flex align-items-stretch'><div class='card w-100'><img src='"+value.imageUrl+"' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"+value.name+"</h5><p class='card-text'>"+value.position+"<br /><b>"+value.award+"</b></p></div></div></div>";
                html += "<div class='col-md-6 col-lg-3 speaker-card-container'><img class='speaker-card-img' src='"+value.imageUrl+"' alt='...' /><div class='speaker-card-body'><h5 class='speaker-card-title'>"+value.name+"</h5><p class='speaker-card-attribution'>"+value.position+"</p><b class='speaker-card-award'>"+value.award+"</b></div></div>";
            });
            $("#speakerslist").html(html);
        },
        error: function (data) {
            console.log(data);
        }
    });
    $("#scopecontainer").on("click", () => {
        $("html, body").animate({
            scrollTop: $("#papers").offset().top
        }, 300);
    });
});
