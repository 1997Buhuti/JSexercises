/*
Author: Buhuti Manakal
date created:23/03/2021
date modifed::23/03/2021
*/

//Types Of Atrributes for a song

var genre="Rock";
var AlbumName="The Game";
var ReleasedYear=1980;
var artist=" Freddie Mercury";
var durationSeconds= 3680;
var isRemix= false;
var BandMembers=[' Brian May', 'Freddie Mercury','John Deacon', 'Roger Taylor']; //This is an array type variable
var otherAlbums={

    1973: "Queen",
    1974: "QueenII",
    1974: "Sheer HeartAttack",
    1975: "A Night at the Opera",
    1976: "A Day at the Races",
    1977: "News of the World",
    1978: "Jazz",
    1980: "The Game "

}// Other albums object with key value pair with, yearproduce: "AlbumName"


//Printing data into the console
console.log(genre);
console.log(AlbumName);
console.log(ReleasedYear);
console.log(artist);
console.log(durationSeconds);
console.log(isRemix);
console.log(BandMembers);
console.log(otherAlbums);



// Constructor for a song object

var Song= function songConstructor(genre,artist,durationSeconds,MusicComposer,isRemix){

    this.genre=genre;
    this.artist=artist;
    this.durationSeconds=durationSeconds;
    this.MusicComposer=MusicComposer;
    this.isRemix=isRemix;

};

// Creating a Song object
var Song1= new Song("pop","Charlie Puth",324,"Stallone",true);
console.log(Song1);