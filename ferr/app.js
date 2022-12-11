var indexValue = 0;
function slideShow() {
    setTimeout(slideShow, 4000);
    var x;
    const img = document.querySelectorAll("video");
    for (x = 0; x < img.length; x++) {
        img[x].style.display = "none";
    }
    indexValue++;
    if (indexValue > img.length) { indexValue = 1 }
    img[indexValue - 1].style.display = "block";
}
slideShow();

// var indexValue = 1;
// showImg(indexValue);
// function btm_slide(e) { showImg(indexValue = e); }
// function side_slide(e) { showImg(indexValue += e); }
// function showImg(e) {
//     var i;
//     const img = document.getElementById('video');
//     const slider = document.querySelectorAll('.btm-slides span');
//     if (e > img.length) { indexValue = 1 }
//     if (e < 1) { indexValue = img.length }
//     for (i = 0; i < img.length; i++) {
//         img[i].style.display = "none";
//     }
//     for (i = 0; i < slider.length; i++) {
//         slider[i].style.background = "rgba(255,255,255,0.1)";
//     }
//     img[indexValue - 1].style.display = "block";
//     slider[indexValue - 1].style.background = "white";
// }