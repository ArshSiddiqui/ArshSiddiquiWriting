// var short_term_list = new XMLHttpRequest()
// short_term_list.open(
//     'GET', 
//     'https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/data/5_short_term_songs.txt',
//     true)
// short_term_list.onload = function () {
//     var data = JSON.parse(this.response)
//     data.array.forEach(element => {
//         console.log("el", element)
//     });
//     console.log("data", short_term_list)
// }

async function getData() {
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/5_short_term_songs.json');
    const data = await response.json();
    let songlist = document.getElementById('songs');
    let lev = 1;
    data.forEach(song => {
        let elem = document.createElement('p');
        elem.innerHTML = lev.toString()+". <a href='"+song['song_link']+"'>"+song['name']+"</a>";
        let singer_elem = document.createElement('span');
        singer_elem.innerHTML = "<a href='"+song['artist_url']+"'>"+song['artist']+"</a>";
        singer_elem.style = "float: right;";
        elem.appendChild(singer_elem);
        songlist.appendChild(elem);
        let preview_elem = document.createElement('p');
        preview_elem.innerHTML = "<audio controls src='"+song['preview_link']+"' style='width:100%;height=5vh;margin-top:0px;'>";
        songlist.appendChild(preview_elem);
        // songlist.appendChild(singer_elem);
        lev = lev + 1;
    });
}

async function getMedData() {
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/50_med_term_songs.json');
    const data = await response.json();
    let songlist = document.getElementById('med-songs');
    let lev = 1;
    data.forEach(song => {
        let elem = document.createElement('p');
        elem.innerHTML = lev.toString()+". <a href='"+song['song_link']+"'>"+song['name']+"</a>";
        let singer_elem = document.createElement('span');
        singer_elem.innerHTML = "<a href='"+song['artist_url']+"'>"+song['artist']+"</a>";
        singer_elem.style = "float: right;";
        elem.appendChild(singer_elem);
        songlist.appendChild(elem);
        let preview_elem = document.createElement('p');
        preview_elem.innerHTML = "<audio controls src='"+song['preview_link']+"' style='width:100%;height=5vh;margin-top:0px;'>";
        songlist.appendChild(preview_elem);
        // songlist.appendChild(singer_elem);
        lev = lev + 1;
    });
}

getData();
getMedData();
// var Spotify = require("spotify-web-api.js");
// var s = new Spotify();
