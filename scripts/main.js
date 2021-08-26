async function getLanyard() {
    await fetch("https://api.lanyard.rest/v1/users/127278549487845377")
    .then(res => res.json())
    .then(
        function(data) {
            if (data.data.spotify) {
                document.getElementById("cover").src = data.data.spotify.album_art_url;
                document.getElementById("song_title").innerHTML = data.data.spotify.song;
                document.getElementById("artist").innerHTML = data.data.spotify.artist;
                document.getElementById("song_link").href = "https://open.spotify.com/track/" + data.data.spotify.track_id;
            } else {
                document.getElementById("cover").src = "/assets/song.jpeg";
                document.getElementById("song_title").innerHTML = "I'm not listening to anything right now!";
                document.getElementById("artist").innerHTML = "";
                document.getElementById("song_link").href = "https://open.spotify.com";
            }
        }
    );
    setTimeout(getLanyard, 3000);
}

getLanyard();