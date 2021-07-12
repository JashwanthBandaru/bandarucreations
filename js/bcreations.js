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
    document.getElementById(content_id).innerHTML = '<img src=' + image_link + ' width="100%" class="d-block w-100 h-100" />';
}


