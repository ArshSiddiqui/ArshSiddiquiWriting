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
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/last_week_scrobble.json');
    const data = await response.json();
    let songlist = document.getElementById('songsn');
    let lev = 1;
    data.forEach(song => {
        let elem = document.createElement('p');
        elem.innerHTML = lev.toString()+". <a href='"+song['song_url']+"'>"+song['name']+"</a>";
        let singer_elem = document.createElement('span');
        singer_elem.innerHTML = "<a href='"+song['artist_url']+"'>"+song['artist']+"</a>";
        singer_elem.style = "float: right;";
        elem.appendChild(singer_elem);
        songlist.appendChild(elem);
        lev = lev + 1;
    });
}

async function getMedData() {
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/past_year_scrobble.json');
    const data = await response.json();
    console.log(data)
    let songlist = document.getElementById('med-songsn');
    let lev = 1;
    data.forEach(song => {
        let elem = document.createElement('p');
        elem.innerHTML = lev.toString()+". <a href='"+song['song_url']+"'>"+song['name']+"</a>";
        let singer_elem = document.createElement('span');
        singer_elem.innerHTML = "<a href='"+song['artist_url']+"'>"+song['artist']+"</a>";
        singer_elem.style = "float: right;";
        elem.appendChild(singer_elem);
        songlist.appendChild(elem);
        lev = lev + 1;
    });
}

async function getLongData() {
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/overall_scrobble.json');
    const data = await response.json();
    let songlist = document.getElementById('long-songsn');
    let lev = 1;
    data.forEach(song => {
        let elem = document.createElement('p');
        elem.innerHTML = lev.toString()+". <a href='"+song['song_url']+"'>"+song['name']+"</a>";
        let singer_elem = document.createElement('span');
        singer_elem.innerHTML = "<a href='"+song['artist_url']+"'>"+song['artist']+"</a>";
        singer_elem.style = "float: right;";
        elem.appendChild(singer_elem);
        songlist.appendChild(elem);
        lev = lev + 1;
    });
}


getData();
getMedData();
getLongData();
// var Spotify = require("spotify-web-api.js");
// var s = new Spotify();
