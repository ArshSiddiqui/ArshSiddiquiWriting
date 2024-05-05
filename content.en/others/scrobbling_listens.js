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
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/past_week_scrobble.json');
    const data = await response.json();
    let songlist = document.getElementById('songs');
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
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/last_year_scrobble.json');
    const data = await response.json();
    console.log(data)
    let songlist = document.getElementById('med-songs');
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
    let songlist = document.getElementById('long-songs');
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

async function getOtherData() {
    const response = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/top_artists.json')
    const data = await response.json();
    console.log(data);
    let art1 = document.getElementById('art1')
    let art2 = document.getElementById('art2')
    let art3 = document.getElementById('art3')
    art1.innerHTML = "<a href='"+data[0]['link']+"'>"+data[0]['name']+"</a>";
    art2.innerHTML = "<a href='"+data[1]['link']+"'>"+data[1]['name']+"</a>";
    art3.innerHTML = "<a href='"+data[2]['link']+"'>"+data[2]['name']+"</a>";

    const response1 = await fetch('https://raw.githubusercontent.com/ArshSiddiqui/arshsiddiqui.github.io/main/top_albums.json')
    const data1 = await response1.json();
    console.log(data);
    art1 = document.getElementById('alb1')
    art2 = document.getElementById('alb2')
    art3 = document.getElementById('alb3')
    art1.innerHTML = "<a href='"+data1[0]['link']+"'>"+data1[0]['name']+"</a>";
    art2.innerHTML = "<a href='"+data1[1]['link']+"'>"+data1[1]['name']+"</a>";
    art3.innerHTML = "<a href='"+data1[2]['link']+"'>"+data1[2]['name']+"</a>";

}

getData();
getMedData();
getLongData();
getOtherData();
// var Spotify = require("spotify-web-api.js");
// var s = new Spotify();
