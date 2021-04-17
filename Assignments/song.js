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
// printing individualc elemnts of the object

console.log("My favourite album is "+ otherAlbums[1975]);


