const connect = requir('mongoose');

function dbConnect (){
    connect("mongodb+srv://user1:<password>@selftrack.hzcdg1k.mongodb.net/?retryWrites=true&w=majority")
    .then(console.log("connexion bdd effectué"))
    .catch(error => console.log(error)); 
}

module.exports = dbConnect