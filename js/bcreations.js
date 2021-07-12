var myVar;

function myloadFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function thumbnail(sampleUrl,content_id){
    var sampleUrl;
    var video_id = sampleUrl.split("v=")[1].substring(0, 11);
    var b_link= "https://img.youtube.com/vi/";
    var a_link="/mqdefault.jpg";
    var image_link = b_link + video_id + a_link;
    document.getElementById(content_id).innerHTML = '<img src=' + image_link + ' width="100%" class="d-block w-100 h-100 thumbnail videos" />';
}

// Special Craft Links
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sc_1");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sc_2");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sc_3");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sc_4");

// Greeting abd Gift Cards Links
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","gc_1");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","gc_2");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","gc_3");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","gc_4");

// Wall Hangings 
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","wh_1");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","wh_2");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","wh_3");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","wh_4");

//Flowers
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","fl_1");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","fl_2");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","fl_3");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","fl_4");

// Shorts
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sh_1");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sh_2");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sh_3");
thumbnail("https://www.youtube.com/watch?v=qEBjkhxh5DU","sh_4");
