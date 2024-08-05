const allsongs=[
    {
        id:1,
        title:"Rendu Kaadhal",
        artist:"Anirudh Ravichandar",
        genre:"Love failure",
        source:"./songs/Rendu-Kaadhal-MassTamilan.so.mp3",
        image:"https://imgs.search.brave.com/fxStQgPOqaTuczYutcknvYIpubT6gKUJBge2LuB-p2o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS80/MDMvS2FhdGh1dmFh/a3VsYS1SZW5kdS1L/YWFkaGFsLU9yaWdp/bmFsLU1vdGlvbi1Q/aWN0dXJlLVNvdW5k/dHJhY2stVGFtaWwt/MjAyMi0yMDIyMDQy/ODEzMTA0My01MDB4/NTAwLmpwZw"
    },{
        id:2,
        title:"Nee Kavithagala",
        artist:"Pradeep Kumar",
        genre:"Love failure",
        source:"./songs/Nee-Kavithaigala.mp3",
        image:"https://imgs.search.brave.com/novDy7HvlrkcBK7OIbr18X-G6Aa649hEX2TDGTXqEfw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLUNlVXRE/RzQzYTFnbi0wLXQ1/MDB4NTAwLmpwZw",
        
    },{
        id:3,
        title:"Gaaganala",
        artist:"Arman Maalik",
        genre:"romance",
        source:"./songs/Gaganaala.mp3",
        image:"https://imgs.search.brave.com/_cLr1GdOwxzqdSA7odCdtSXTyMSUTkxe1MQT63QlulY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/MTIzdGVsdWd1LmNv/bS9jb250ZW50L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDI0LzAz/L29wZXJhdGlvbi5q/cGc"
        
    },
    {
        id:4,
        title:"Kutti Story",
        artist:"Anirudh Ravichandar",
        genre:"motivation",
        source:"./songs/Kutti Story Master 128 Kbps.mp3",
        image:"https://imgs.search.brave.com/0jt9aaXLCVWb799xW-iKQfkHiUnAJh7Avdyno-KV2xE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8z/NDcvTWFzdGVyLVRh/bWlsLTIwMjAtMjAy/MDAzMTYwODQ2Mjct/NTAweDUwMC5qcGc"
    },
    {
        id:5,
        title:"Oh Rendu prema Meghallila",
        artist:"Vijai Bulganin",
        genre:"melody",
        source:"./songs/O-Rendu-Prema-Meghaalila-(Baby)(PagalWorldl).mp3",
        image:"https://imgs.search.brave.com/BNVb1cukGKUjlzvXRfuqhzykyRgdexRcbIZ2iWx_pjY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS83/MzIvQmFieS1UZWx1/Z3UtMjAyMy0yMDIz/MDcxMDEzMTEyMy01/MDB4NTAwLmpwZw",
    },
    {
        id:6,
        title:"Needhe Needhe",
        artist:"Hesham Abdul Wahab",
        genre:"classic",
        source:"./songs/[iSongs.info] 11 - Needhe Needhe.mp3",
        image:"https://imgs.search.brave.com/UDdDvV5YjhSD8-WPRjLiH75yJaw2imUWkMpFx1v24aA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jLnNh/YXZuY2RuLmNvbS8x/MTAvSGktTmFubmEt/T3N0LVMtU2lkZS1C/LVRlbHVndS0yMDI0/LTIwMjQwMTEzMTYx/MjU4LTUwMHg1MDAu/anBn"

    },{
        id:7,
        title:"Kannana Kanne",
        artist:"Anirudh Ravichandar",
        genre:"Love failure",
        source:"./songs/Kannana-Kanne.mp3",
        image:"https://imgs.search.brave.com/3CR4571BP2G3QjdBNOlb8nvjeEFR1soy7j1yx6u1uI0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pMS5z/bmRjZG4uY29tL2Fy/dHdvcmtzLTAwMDE0/MDQwNjMwNi0wdmly/Y2ItdDUwMHg1MDAu/anBn"
    },
    {
        id:8,
        title:"Thangamme",
        artist:"Anirudh Ravichandar",
        genre:"classic",
        source:"./songs/Thangame.mp3",
        image:"https://imgs.search.brave.com/wmvL-zihW8XrSdvNJGzpqz3LnlgLKoqRRYOZRPXG2qY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuaW5kaWFuZXhw/cmVzcy5jb20vMjAy/My8xMS9OYWFudW0t/Um93ZHktRGhhYW4t/MTYwMC5qcGc_dz02/NDA"
    }

  
]

let currentIndex=0;

///toggle theme
function toggleTheme(){
    const toggleButton = document.getElementById('toggle');
    const body = document.getElementsByClassName("main-container")[0];
    
    toggleButton.addEventListener('click', () => {
        // Check current theme
        const currentTheme = body.getAttribute('data-theme');
        toggleButton.style.marginLeft="50px"
        
        // Toggle between 'light' and 'dark'
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        body.setAttribute('data-theme', newTheme);
    });
}
toggleTheme()






function ShowSongs(){
    const filteredlist=document.getElementById("filter-box")
    const genres = new Set(allsongs.map(song => song.genre.toLowerCase()));
    const genre=genres.forEach((g)=>{
        const genreList=document.createElement("option")
        genreList.textContent=g
        filteredlist.appendChild(genreList)

     

    })

    filteredlist.addEventListener("change", (event) => {
        const selectedGenre = event.target.value;
        const filteredSongs = allsongs.filter(song => song.genre.toLowerCase() === selectedGenre);
        displaySongs(filteredSongs);
    });
    displaySongs(allsongs);

}
function displaySongs(songs){
    const songsList=document.getElementById("songs-list")
      songsList.innerHTML=''

    songs.forEach((song)=>{
        const songButton=document.createElement("button");
        songButton.className="songName"
        songButton.style.width="250px";
        songButton.style.height="35px";
        songButton.style.padding="8px";
        songButton.style.backgroundColor="#9e7bce";
        songButton.style.border="none";
        songButton.style.color="white";
        songButton.style.display="flex";
        songButton.style.flexDirection="column";
        songButton.style.fontSize="15px";
        songButton.style.gap="10px";
        songButton.style.textAlign="center";
        songButton.style.margin="5px";
        songButton.textContent=song.title
        songsList.appendChild(songButton)
        songButton.addEventListener('click',function(){
            currentIndex = allsongs.findIndex(s => s.id === song.id);
            renderCurrentSong(song.id) 
        })

    })
}
ShowSongs()

function renderCurrentSong(id){
      const songCard=document.getElementById("song-card")
      songCard.innerHTML=''
     const clickedSong=allsongs.filter((s)=>s.id===id)
     clickedSong.forEach((items)=>{
        const songImage=document.createElement("img")
        songImage.src=items.image;
        songImage.style.width="450px";
        songImage.style.height="400px";
        songImage.className="songImage";
        const songTitle=document.createElement("h2")
        songTitle.className="song-title";
        songTitle.style.textAlign="center"
         songTitle.style.margin="2px"
        songTitle.textContent=items.title;
        songTitle.style.fontFamily="Gupter";
        const artistName=document.createElement("h3")
        artistName.className="artist"
        artistName.textContent=items.artist
        artistName.style.fontFamily="Gupter";
        artistName.style.textAlign="center"
         artistName.style.margin="2px"

        //creating audio

        const playSong=document.createElement("audio")
        playSong.className="playSong"
        playSong.src=items.source;
        playSong.style.marginLeft="70px"
         playSong.style.marginTop="7px"
        
        playSong.controls=true
        playSong.pause()

        const nextButton=document.createElement("button")
        nextButton.className="next-btn"
        nextButton.textContent="Next"
        nextButton.addEventListener("click",showNextSong)

        ///styling for next button
        nextButton.style.width="100px";
        nextButton.style.height="30px";
        nextButton.style.padding="8px";
        nextButton.style.backgroundColor="black";
        nextButton.style.color="white";
         nextButton.style.marginLeft="10px"


        const prevButton=document.createElement("button")
        prevButton.className="prev-btn"
        prevButton.textContent="prev"
        prevButton.addEventListener("click",showPrevSong)
        ///styling for previous button
        prevButton.style.width="100px";
        prevButton.style.height="30px";
        prevButton.style.padding="8px";
        prevButton.style.backgroundColor="black";
        prevButton.style.color="white";
        prevButton.style.marginLeft="70px"


        const playlistButton=document.createElement("button")
        playlistButton.className="playlist-btn"
        playlistButton.textContent="Add to PlayList"
        playlistButton.style.width="150px";
        playlistButton.style.height="30px";
        playlistButton.style.padding="8px";
        playlistButton.style.backgroundColor="violet";
        playlistButton.style.color="white";
        playlistButton.style.marginLeft="10px";
        playlistButton.style.border="none";
        playlistButton.addEventListener("click",()=>addToPlaylist(items.id))


        songCard.appendChild(songImage)
        songCard.appendChild(songTitle)
        songCard.appendChild(artistName)
        songCard.appendChild(playSong)
        songCard.appendChild(prevButton)
        songCard.appendChild(nextButton)
        songCard.appendChild(playlistButton)
       
     })
}

function addToPlaylist(Id){
      const currentPlaylist=  document.getElementById("current-playlist")
        // currentPlaylist.innerHTML=''
         const selectedplay=allsongs.find((playlist)=>playlist.id===Id)
         if(selectedplay){
            const displaylist=document.createElement("button")
            displaylist.className="current-play-song"
            displaylist.textContent=selectedplay.title
            displaylist.style.width="300px";
            displaylist.style.height="35px";
            displaylist.style.padding="8px";
            displaylist.style.backgroundColor="violet";
            displaylist.style.color="white";
            displaylist.style.margin="10px"
            displaylist.style.border="none"
   
            currentPlaylist.appendChild(displaylist)
         }
       

}
const formBtn=document.getElementById("list-form")
const InputValue=document.getElementById("playlist-value")
formBtn.addEventListener("submit",function(event){
    event.preventDefault()
    createPlaylist()
     InputValue.innerHTML=''
})

function createPlaylist(){
    const createList=document.getElementById("new-playlist")
    const playlistitems=document.createElement("button")
    playlistitems.className="newplaylist-btn"
    playlistitems.textContent=InputValue.value
    playlistitems.style.width="300px";
    playlistitems.style.height="35px";
    playlistitems.style.padding="8px";
    playlistitems.style.backgroundColor="orange";
    playlistitems.style.color="white";
    playlistitems.style.margin="10px"
    playlistitems.style.border="none"
   
    createList.appendChild(playlistitems)

    


}
function showNextSong() {
    currentIndex = (currentIndex + 1) % allsongs.length;
    renderCurrentSong(allsongs[currentIndex].id);
}
function showPrevSong() {
    currentIndex = (currentIndex - 1 + allsongs.length) % allsongs.length;
    renderCurrentSong(allsongs[currentIndex].id);
}



// Initial song display
document.addEventListener("DOMContentLoaded", () => {
    ShowSongs();
    renderCurrentSong(allsongs[currentIndex].id);
});
