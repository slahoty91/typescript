class Movies{

    name:string;
    genre:gen;
    staring: Cast;
    isAdult:boolean;

    constructor(name:string,genre:gen,staring:Cast,isAdult:boolean){

        this.name = name;
        this.genre = genre;
        this.staring = staring;
        this.isAdult = isAdult;

    }

    display(){
        console.log(`Movie Name:${this.name} \nGenre:${this.genre} \nStaring:${this.staring} \nAdult:${this.isAdult}`);
    }

}

enum gen{

    Action,
    Comedy,
    Drama,
    Romance

}



interface Cast{

    MainStar: Array<string>;
    SupportingStar: Array<string>;
    Director: Array<string>;
    Producer: Array<string>;

}



class City{

    name:cityName;
    listOfMovies: Array<Movies> = [];
    listOfTheater: Array<Theater> = [];

    constructor(name,listOfMovies,listOfTheater){

        this.name = name;
        this.listOfMovies.push(listOfMovies);
        this.listOfTheater.push(listOfTheater);

    }

}

enum cityName{

    Banglore,
    Hhyderabad,
    Pune,
    Delhi

}

class Theater{

    name:string;
    listOfMovies: Array<Movies>;
    listOfCinama: Array<Cinema>;
    city: cityName;

    constructor(name:string,listOfMovies:Movies[],listOfCinama:Cinema[]){

        this.name = name;
        this.listOfMovies = listOfMovies;
        this.listOfCinama = listOfCinama;

    }

    display(){
        
        console.log(`From ${cityName[this.city]} following ciname are their \n${this.listOfCinama}`);
        
    }

}

class Cinema{

    name:string;
    schedual:Schedual;
    movie: Movies;
    numberOfSeats: number;

    constructor(name,schedual,movie,numberOfSeats){

        this.name = name;
        this.schedual = schedual;
        this.movie = movie;
        this.numberOfSeats = numberOfSeats;


    }

    display(){

        console.log(`${this.name} has following movies \n${
            this.movie.name
        } at ${Schedual[this.schedual]}`);

    }

    bookTicket(nos:number){

        this.numberOfSeats -= nos;

        if(this.movie.isAdult){
            console.log(`Congrats you have booked ${nos} seats for ${
                this.movie.name} \nkindly carry ID card as it's an adult movie.`);
        }else{
            console.log(`Congrats you have booked ${nos} seats for ${
                this.movie.name}`);
        }

    }

}
enum Schedual{

    morning = '10 to 13 in hrs',
    evening = '13 to 17 in hrs',
    night = '17 to 20 in hrs',
    lateNight = '20 to 23 in hrs'

}

let M1cast:Cast = {

    MainStar: ['A1','A2'],
    SupportingStar: ['B1','B2','B3'],
    Director: ['C1'],
    Producer: ['D1']
}

let M2cast:Cast = {

    MainStar: ['A1','A2','A3'],
    SupportingStar: ['B1','B2','B3'],
    Director: ['C1','C2'],
    Producer: ['D1','D2']
}

let M3cast:Cast = {

    MainStar: ['A1','A2','A3'],
    SupportingStar: ['B1','B2','B3'],
    Director: ['C1','C2','C3'],
    Producer: ['D1','D2','D3']
}

let M4cast:Cast = {

    MainStar: ['A1','A2','A3'],
    SupportingStar: ['B1','B2','B3'],
    Director: ['C1','C2','C3'],
    Producer: ['D1','D2','D3']
}

let m1 = new Movies('Avenger',gen.Action,M1cast,false);
let m2 = new Movies('Life',gen.Drama,M2cast,true);
let m3 = new Movies('300',gen.Action,M3cast,true);
let m4 = new Movies('Die another day',gen.Action,M4cast,false);
let m5 = new Movies('Life of pi',gen.Drama,M1cast,false);
let m6 = new Movies('It',gen.Action,M2cast,true);
let m7 = new Movies('John Wick',gen.Action,M3cast,false);
let m8 = new Movies('Uri',gen.Action,M4cast,false);
let m9 = new Movies('Aladin',gen.Drama,M1cast,false);
let m10 = new Movies('Shazam',gen.Comedy,M2cast,false);
let m11 = new Movies('Glass',gen.Action,M3cast,false);
let m12 = new Movies('Hellboy',gen.Action,M4cast,false);

let listOfMoviesC1:Array<Movies> = [m1,m2,m3,m4];
let listOfMoviesC2:Array<Movies> = [m5,m6,m7,m8];
let listOfMoviesC3:Array<Movies> = [m9,m10,m11,m12];

//let listOfMoviesT1:Array<Movies> = []

//let lT1 = new Theater('Abc',)
