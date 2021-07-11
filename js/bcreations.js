
function thumbnail(sampleUrl,content_id){
    var sampleUrl;
    var video_id = sampleUrl.split("v=")[1].substring(0, 11);
    var b_link= "https://img.youtube.com/vi/";
    var a_link="/mqdefault.jpg";
    var image_link = b_link + video_id + a_link;
    document.getElementById(content_id).innerHTML = '<img src=' + image_link + ' width="100%" class="d-block w-100 h-100" />';
}

// carousel Images
thumbnail("https://www.youtube.com/watch?v=lSbYYC4ajQ8","car_pic1");
thumbnail("https://www.youtube.com/watch?v=6fbJEzC59KI","car_pic2");
thumbnail("https://www.youtube.com/watch?v=EROqklI89cE","car_pic3");

