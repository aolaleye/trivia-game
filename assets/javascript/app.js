$('.modal').modal({
    keyboard: false
})

function randomColor(){
    var r = Math.floor(Math.random() * (150));
    var g = Math.floor(Math.random() * (200));
    var b = Math.floor(Math.random() * (200));
    var rgbColor = 'rgb(' + r + ','+ g + ',' + b + ')'; 
    $('.list-group-item').css('background-color', rgbColor);
}
randomColor();