
 var img_arr=[`https://www.iwmbuzz.com/wp-content/uploads/2020/05/10-secret-facts-of-avengers-endgame-you-should-know-920x518.jpg`,
 `https://4.bp.blogspot.com/-fv481XTcdcc/UmYJ45hVM4I/AAAAAAAAERM/DZ9VjiG9cyQ/s1600/30709_vozlyublennaya_or_saawariya_1280x1024_(www.GdeFon.ru).jpg`,
 `https://i0.wp.com/boxofficeworldwide.com/wp-content/uploads/2021/01/1170x658withlog_1586171401.jpg?fit=599%2C337&ssl=1`,
 `https://i.ytimg.com/vi/uBx4gtxWA7M/maxresdefault.jpg`,
 `https://www.americanbazaaronline.com/wp-content/uploads/2016/11/dear-zindagi.jpg`,
 `https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f387592b927d1b21ace38e9f42f2525d4ec9f1b66029cd32ed8e96f873263b33._UR1920,1080_RI_.jpg`];
 localStorage.setItem('data',JSON.stringify(img_arr));


 var moviedata=[
  { name:"Runway 34",
    url:`https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/11/2021_11$largeimg_1060670665.JPG`,
    reldate:"29-Apr-2022",
    ratings:4.5
  },
  { name:"Gangubai Kathiawadi",
    url:`https://www.pinkvilla.com/files/styles/gallery-preview/public/movierelease_2021_hd.jpg?itok=BMzVda9u`,
    reldate:"25-Feb-2022",
    ratings:4.3
  },
  { name:"Jhund",
    url:`https://iprmentlaw.com/wp-content/uploads/2020/05/Jhund_Film_Poster.jpg`,
    reldate:"4-Mar-2022",
    ratings:3
  },
  { name:"Radhe Shyam",
    url:`https://m.media-amazon.com/images/M/MV5BMzNhOTdlNmUtYzNiYi00MmUxLTg3ZjgtZjk4Y2Y5YTk3ODdiXkEyXkFqcGdeQXVyMTE2MjAzMTU3._V1_.jpg`,
    reldate:"11-Mar-2022",
    ratings:4
  },
  { name:"The Kashmiri Flies",
    url:`https://m.media-amazon.com/images/M/MV5BM2UwYTE5MzItMjNmNi00MmEyLThjMzEtZjFkMWNmMjI4ZWFmXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg`,
    reldate:"11-Mar-2022",
    ratings:5
  },
  { name:"Bachpan Pandey",
    url:`https://img.republicworld.com/republic-prod/stories/images/xxhdpi/wm3hm0rpxfhxr4q1_1642583852.jpeg`,
    reldate:"18-Mar-2022",
    ratings:7
  },
  { name:"Bhool Bhulaiyaa 2",
    url:`https://m.media-amazon.com/images/M/MV5BYjczMWFhMjUtMzM2YS00MzgxLTk2NzktOTI0OWI4NzQ5N2RlXkEyXkFqcGdeQXVyOTAzMTc2MjA@._V1_.jpg`,
    reldate:"25-Mar-2022",
    ratings:6
  },
  { name:"Dhaakad",
    url:`https://m.media-amazon.com/images/M/MV5BMWJjYzk0YzktYTJmNS00NzJjLWE1NjQtMzJhNzE2NTI5N2FjXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg`,
    reldate:"8-Apr-2022",
    ratings:7
  },
  { name:"Laal Singh Chaddha",
    url:"https://pbs.twimg.com/media/EwbvrZDVoAAHFJU.jpg",
    reldate:"14-Apr-2022",
    ratings:8
  }
];

localStorage.setItem('movie', JSON.stringify(moviedata));
  //console.log(data);
    var x;
let moviedatas=JSON.parse(localStorage.getItem('movie'));

function handlesort(){
  let moviedatas=JSON.parse(localStorage.getItem('movie'));
  var selecto=document.querySelector("#selectid").value;
  console.log(selecto)
  if(selecto=="high"){
    moviedatas.sort(function(a,b) {
        return Number(b.ratings)-Number(a.ratings);
    });
  }
  if(selecto=="low"){
     moviedatas.sort(function(a,b) {
      return Number(a.ratings)-Number(b.ratings);
    });
  }
    appendData(moviedatas);
}

  function appendData(moviedatas){
    // let moviedatas=JSON.parse(localStorage.getItem(moviedata));
    document.getElementById("movies").innerText=" ";
    moviedatas.forEach(function (elem){
      var container=document.createElement("div");
      var imgs=document.createElement("img");
      var name=document.createElement("h2");
      var date=document.createElement("h3");
      var ratings=document.createElement("h4"); 
      imgs.src=elem.url;
      name.textContent=elem.name;
      date.textContent="Releasing Date: "+elem.reldate;
      ratings.textContent="Rating: "+elem.ratings;
      
      container.append(imgs,name,date,ratings);
      document.getElementById("movies").append(container);
    });  
  }
  function start(){
        let data=JSON.parse(localStorage.getItem('data'));
        appendData(moviedata);
        let slideshow_image=document.getElementById('sl_img');
        let i=0;
         x=setInterval (function(){
          if(i===data.length){
            i=0;
          }
          slideshow_image.src=data[i];
        //console.log(data[i]);
          i=i+1;
        },1000)
  }

  start();
