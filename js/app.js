// alert("hello world");
//event handler grabs the src from the image clicked
$(".thumbnails").on("click", ".thumbnail", function(e){
    var imageSrc = $(this).children().attr('src');
    // console.log($(this));
    console.log(imageSrc);
    // sets the hero image to the clicked image
    $('.hero-image').attr('src', imageSrc);
});