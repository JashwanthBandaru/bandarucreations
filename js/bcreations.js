var myVar;

function myloadFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

function thumbnail(URL,content_id){
    var URL;
    var video_id = URL.split("v=")[1].substring(0, 11);
    var b_link= "https://img.youtube.com/vi/";
    var a_link="/mqdefault.jpg";
    var image_link = b_link + video_id + a_link;
    document.getElementById(content_id).innerHTML =  '<a href= ' + URL +' target="_blank"> <img src=' + image_link + ' width="100%" class="d-block w-100 h-100 thumbnail videos" /></a>';
}

// Special Craft Links
thumbnail("https://www.youtube.com/watch?v=I43Tp2MGwEA&list=PL33YCcby8Ix2ssk7BIMfxtJ_7BW74oN_1&index=8","sc_1");
thumbnail("https://www.youtube.com/watch?v=A1VyQI9pQZQ&list=PL33YCcby8Ix2ssk7BIMfxtJ_7BW74oN_1&index=47","sc_2");
thumbnail("https://www.youtube.com/watch?v=Sh4XGfrKyYE&list=PL33YCcby8Ix2ssk7BIMfxtJ_7BW74oN_1&index=40","sc_3");
thumbnail("https://www.youtube.com/watch?v=I7Yzr2Lgd7I&list=PL33YCcby8Ix2ssk7BIMfxtJ_7BW74oN_1&index=27","sc_4");

// Greeting and Gift Cards Links
thumbnail("https://www.youtube.com/watch?v=7Ehl1yc321k&list=PL33YCcby8Ix2OEgWJxpBKiemVNB3G_KWL&index=32","gc_1");
thumbnail("https://www.youtube.com/watch?v=SCP3KUs_ibg&list=PL33YCcby8Ix2OEgWJxpBKiemVNB3G_KWL&index=6","gc_2");
thumbnail("https://www.youtube.com/watch?v=kB7OvUbO02A&list=PL33YCcby8Ix2OEgWJxpBKiemVNB3G_KWL&index=27","gc_3");
thumbnail("https://www.youtube.com/watch?v=Eop8PDrsHRc&list=PL33YCcby8Ix2OEgWJxpBKiemVNB3G_KWL&index=24","gc_4");

// Wall Hangings 
thumbnail("https://www.youtube.com/watch?v=pLpmdXb54Iw&list=PL33YCcby8Ix0UI9cRYBsLdVmDMpSjayqE&index=14","wh_1");
thumbnail("https://www.youtube.com/watch?v=uO6AK8_SFyY&list=PL33YCcby8Ix0UI9cRYBsLdVmDMpSjayqE&index=10","wh_2");
thumbnail("https://www.youtube.com/watch?v=esO1QKoJN1k&list=PL33YCcby8Ix0UI9cRYBsLdVmDMpSjayqE&index=4","wh_3");
thumbnail("https://www.youtube.com/watch?v=zHAW0IIrqfE&list=PL33YCcby8Ix0UI9cRYBsLdVmDMpSjayqE&index=7","wh_4");

//Flowers
thumbnail("https://www.youtube.com/watch?v=xq2vhggtRos&list=PL33YCcby8Ix0WHD7mHXU7c7t00BwM7uPF&index=27","fl_1");
thumbnail("https://www.youtube.com/watch?v=L8KA9t0MTS0&list=PL33YCcby8Ix0WHD7mHXU7c7t00BwM7uPF&index=9","fl_2");
thumbnail("https://www.youtube.com/watch?v=eDgltDqWpeQ&list=PL33YCcby8Ix0WHD7mHXU7c7t00BwM7uPF&index=7","fl_3");
thumbnail("https://www.youtube.com/watch?v=-V9SvcLHJBU&list=PL33YCcby8Ix0WHD7mHXU7c7t00BwM7uPF&index=2","fl_4");

// Shorts
thumbnail("https://www.youtube.com/watch?v=BCpxQQjpXJ8&list=PL33YCcby8Ix3Pwc-PpOYS7-39I_RIvANN&index=2","sh_1");
thumbnail("https://www.youtube.com/watch?v=DPO_nXYPNN8&list=PL33YCcby8Ix3Pwc-PpOYS7-39I_RIvANN&index=3","sh_2");
thumbnail("https://www.youtube.com/watch?v=3v9FIbyDgIM&list=PL33YCcby8Ix3Pwc-PpOYS7-39I_RIvANN&index=4","sh_3");
thumbnail("https://www.youtube.com/watch?v=U1y36AGZEzI&list=PL33YCcby8Ix3Pwc-PpOYS7-39I_RIvANN&index=5","sh_4");
