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

    constructor(name:cityName){

        this.name = name;

    }

    addMovie(movie:Movies[]){

        this.listOfMovies.concat(movie);
        console.log(`${movie} added to ${this.name}`);

    }

    // addMovielist(movie:Movies){
    //     this.listOfMovies.push(movie);
    // }

    addTheater(theater:Theater){

        this.listOfTheater.push(theater);
        console.log(`${theater} is added to ${this.name}`);

    }

    // removeMovie(movie:Movies){

    //     this.listOfMovies[this.listOfMovies.indexOf(movie)] = ;

    // }

}

enum cityName{

    Banglore,
    Hhyderabad,
    Pune,
    Delhi

}

class Theater extends City{

    nameTheater:string;
    listOfMoviesInTheater: Array<Movies> = [];
    listOfHalls: Array<Hall> = [];


    addMovieTheater(movie:Movies){

        //let i = this.listOfTheater.indexOf(theater);

        if(this.listOfMovies.indexOf(movie) != -1){
            this.listOfMoviesInTheater.push(movie);
            console.log(`Movie ${movie.name} is added.`);
        }else{
            console.log(`${movie} is not available in ${this.name}`);
        }

    }

    addHall(hall:Hall){

        this.listOfHalls.push(hall);
        console.log(`Hall ${hall.name} is added to theater.`);

    }

    display(){
        
        console.log(`From ${this.name} following halls are their \n${this.listOfHalls}`);
        
    }

}

class Hall{

    public name:string;
    protected schedual:Array<Schedual>=[];
    protected movie: Array<Movies>=[];
    protected numberOfSeats: Array<number>=[];
 //   protected showID: Array<Number>;

    constructor(name:string,numberOfSeats:number){

        this.name = name;
        this.numberOfSeats.push(numberOfSeats);
        
    }

    protected addMovie(movie:Movies,schedual:Schedual){

        if(this.schedual.indexOf(schedual) == -1){

            this.movie.push(movie);
            this.schedual.push(schedual);
            console.log(`Movie ${movie.name} will screen at ${Schedual[schedual]}`);

        }else{
            console.log(`${Schedual[schedual]} is already booked.`);
        }

    } 

}

class Booking extends Hall{

    protected seatsLeft:Array<number> = this.numberOfSeats;

    protected BookTicket(movie:Movies,schedual:Schedual,nos:number){

        let i:Array<number> = [];
        let j = 0;
        if(this.schedual.indexOf(schedual) == this.movie.indexOf(movie)){
            
        }

        this.movie.forEach(function(cur,index){
            if(cur == movie){
                i.push(index);
            }
        })

        j = this.schedual.indexOf(schedual);

        if(i.indexOf(j) != -1){
            this.seatsLeft[j] -= nos;
        }

        
    }

}

enum Schedual{

    morning = '09 to 12 hrs',
    evening = '13 to 17 in hrs',
    night = '17 to 20 in hrs',
    lateNight = '20 to 23 in hrs',

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

// let listOfMoviesC1:Array<Movies> = [m1,m2,m3,m4];
let listOfMoviesC2:Array<Movies> = [m5,m6,m7,m8];
// let listOfMoviesC3:Array<Movies> = [m9,m10,m11,m12];

let c1 = new City(cityName.Banglore);
c1.addMovie(m1);
c1.addMovie(listOfMoviesC2);
c1.addMovie(m2);
c1.addMovie(m3);
c1.addMovie(m4);
c1.addMovie(m5);
c1.addMovie(m6);

let h1 = new Hall('Inox - 1',80);
let h2 = new Hall('Inox - 2',120);
let h3 = new Hall('Inox - 3',100);

let T1 = new Theater(cityName.Banglore);

T1.addHall(h1);
T1.addHall(h2);
T1.addHall(h3);

T1.addMovie(m1);
T1.addMovie(m2);
T1.addMovie(m3);
T1.addMovie(m4);
T1.addMovie(m5);
T1.addMovie(m6);
T1.addMovie(m7);


