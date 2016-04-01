window.onload = function () {
    var fileUpload = document.getElementById("fileupload");
    fileUpload.onchange = function () {
        if (typeof (FileReader) != "undefined") {
            var portfolioUploadWorkDivs = document.getElementById("portfolio-upload-work-divs");
            portfolioUploadWorkDivs.innerHTML += "";
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.gif|.png|.bmp)$/;
            for (var i = 0; i < fileUpload.files.length; i++) {
                var file = fileUpload.files[i];
                if (regex.test(file.name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        var img = document.createElement("IMG");
						img.id="uploadedImage";
                        img.setAttribute("data-lightbox","uploadedImages");
                        img.height = "260";
                        img.width = "260";
                        img.src = e.target.result;

                       portfolioUploadWorkDivs.appendChild(img);
                    }
                    reader.readAsDataURL(file);
                } else {
                    alert(file.name + " is not a valid image file.");
                    portfolioUploadWorkDivs.innerHTML = "";
                    return false;
                }
            }
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
    }
};

$(document).ready(function() {
	$( "<a href=images/36519.jpg>" ).insertBefore( "#uploadedImages" );
						$( "</a>" ).after( "#uploadedImages" );
});
