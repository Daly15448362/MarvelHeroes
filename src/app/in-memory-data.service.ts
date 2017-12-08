import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
 createDb() {
   const heroes = [
     { id: 11, name: 'Iron Man',realname:'Tony Stark',firstappearance:'Iron Man (2008)',movieappearances:'',playedby:'',info:'' },
     { id: 12, name: 'Captain America' ,realname:'Steve Rogers',firstappearance:'Captain America:The First Avenger (2011)',movieappearances:'',playedby:'',info:'' },
     { id: 13, name: 'Thor' ,realname:'Thor Odinson',firstappearance:'Thor (2011)',movieappearances:'',playedby:'',info:'' },
     { id: 14, name: 'Hulk' ,realname:'Bruce Banner',firstappearance:'The Incredible Hulk (2008)',movieappearances:'',playedby:'',info:'' },
     { id: 15, name: 'Hawkeye' ,realname:'Clint Barton',firstappearance:'Thor (2011)',movieappearances:'',playedby:'',info:'' },
     { id: 16, name: 'Black Widow' ,realname:'Natasha Romanoff',firstappearance:'Iron Man 2 (2010)',movieappearances:'',playedby:'',info:'' },
     { id: 17, name: 'Falcon' ,realname:'Sam Wilson',firstappearance:'',movieappearances:'Captain America: The Winter Soldier',playedby:'',info:'' },
     { id: 18, name: 'Winter Soldier' ,realname:'Bucky Barnes',firstappearance:'Captain America: The First Avenger',movieappearances:'',playedby:'',info:'' },
     { id: 19, name: 'Scarlett Witch' ,realname:'Wanda Maximoff',firstappearance:'Captain America: The Winter Soldier',movieappearances:'',playedby:'',info:'' },
     { id: 20, name: 'Quicksilver' ,realname:'Pietro Maximoff',firstappearance:'Captain America: The Winter Soldier',movieappearances:'',playedby:'',info:'' },
     { id: 21, name: 'Ant Man' ,realname:'Scott Lang',firstappearance:'Ant Man',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Spiderman' ,realname:'Peter Parker',firstappearance:'Captain America: Civil War',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Black Panther' ,realname:'TChalla',firstappearance:'Captain America: Civil War',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Doctor Strange' ,realname:'Steven Strange',firstappearance:'Doctor Strange',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Star Lord' ,realname:'Peter Quill',firstappearance:'Guardians of the Galaxy',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Gamora' ,realname:'Gamora',firstappearance:'Guardians of the Galaxy',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Drax' ,realname:'Drax',firstappearance:'Guardians of the Galaxy',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Rocket Raccon' ,realname:'Rocket',firstappearance:'Guardians of the Galaxy',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Groot' ,realname:'Groot',firstappearance:'Guardians of the Galaxy',movieappearances:'',playedby:'',info:'' },
     { id: 22, name: 'Mantis' ,realname:'Mantis',firstappearance:'Guardians of the Galaxy vol.2',movieappearances:'',playedby:'',info:'' },
   ];
   return {heroes};
 }
}
