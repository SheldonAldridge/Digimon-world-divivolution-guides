import { createApp } from 'vue'

const app = {createApp}  = vue

createApp({
    date(){
        return{
                /*Egg Stage Digimon Object*/
                egg:[
            
                    {
                        id:"blue",
                        eggtype:"blue",
                        digimon:"Punimon",
                    },
            
                    {
                        id:"green",
                        eggtype:"green",
                        digimon:"Botamon",
                    },
            
                   {
                        id:"orange",
                        eggtype:"orange",
                        digimon:"Poyomon",
                    },
            
                    {
                        id:"pink",
                        eggtype:"pink",
                        digimon:"Yuramon",
                    },
                    
                ],
            
                /*Baby Stage Digimon Object*/
            
                baby:[
                    
                    {
                        id:"botamon",
                        name:"Botamon",
                        stage:"Baby",
                        type:"Data",
                        digivolution:["Koromon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/12-botamon.jpg"
                    },
            
                    {
                        id:"poyomon",
                        name:"Poyomon",
                        stage:"Baby",
                        type:"Data",
                        digivolution:["tokomon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/86-poyomon.jpg"
                    },
            
                    {
                        id:"punimon",
                        name:"Punimon",
                        stage:"Baby",
                        type:"Data",
                        digivolution:["tsunomon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/88-punimon.jpg"
                    },
            
                    {
                        id:"yuramon",
                        name:"Yuramon",
                        stage:"Baby",
                        type:"Data",
                        digivolution:["tanemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/123-yuramon.jpg"
                    },
                ],
            
                /*In-training Stage Digimon Object*/
            
                intraining:[
            
                    {
                        id:"koromon",
                        name:"Koromon",
                        stage:"In-training",
                        type:"Data",
                        preDigivolution:["Botamon"],
                        digivolution:["Agumon","Gabumon","Kunemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/50-koromon.jpg"
                    },
            
                    {
                        id:"tokomon",
                        name:"Koromon",
                        stage:"In-training",
                        type:"Data",
                        preDigivolution:["Poyomon"],
                        digivolution:["Patamon","Biyomon","Kunemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/108-tokomon.jpg"
                    },
            
                    {
                        id:"tsunomon",
                        name:"tsunomon",
                        stage:"In-training",
                        type:"Data",
                        preDigivolution:["Punimon"],
                        digivolution:["Elecmon","Penguinmon","Kunemon"],
                        image: "https://www.grindosaur.com/en/games/digimon/digimon-world/digimon/111-tsunomon"
                    },
            
                    {
                        id:"tanemon",
                        name:"tanemon",
                        stage:"In-training",
                        type:"Data",
                        preDigivolution:["Yuramon"],
                        digivolution:["Betamon","Palmon","Kunemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/103-tanemon.jpg"
                    },
                ],
            
                 /*Rookie Stage Digimon Object*/
            
                 rookie:[
            
                    {
                        id:"agumon",
                        name:"Agumon",
                        stage:"Rookie",
                        type:"Vaccine",
                        preDigivolution:["Koromon"],
                        digivolution:["Greymon","Meramon","Monochromon","tyrannomon","Nanimon","Numemon","Sukamon","Centarumon","Birdramon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/1-agumon.jpg",
                        statReq:{
                            HP:1000,
                            MP:500,
                            Offence:100,
                            Deffence:50,
                            Speed:50,
                            Brains:50,
                            Weight:10 + "-" + 20,
                        },
                        specialReq:{
                            digimonreq:"Koromon"
                        },
                        bonus:{
                            Mistakes:0,
                        },
            
                        accessArea:"Ice Sanctuary.",
                    },
            
                    {
                        id:"gabumon",
                        name:"Gabumon",
                        stage:"Rookie",
                        type:"Data",
                        preDigivolution:["Koromon"],
                        digivolution:["Drimogemon","Garurumon","Ogremon","tyrannomon","Nanimon","Numemon","Sukamon","Centarumon","Monochromon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/29-gabumon.jpg",
                        statReq:{
                            HP:500,
                            MP:500,
                            Offence:50,
                            Deffence:100,
                            Speed:100,
                            Brains:50,
                            Weight:10 + "-" + 20,
                        },
                        specialReq:{
                            digimonreq:"Koromon"
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        accessArea:"",
                    },
            
                    {
                        id:"patamon",
                        name:"Patamon",
                        stage:"Rookie",
                        type:"Data",
                        preDigivolution:["tokomon"],
                        digivolution:["Leomon","Angemon","Unimon","tyrannomon","Nanimon","Numemon","Sukamon","Ogremon","Drimogemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/80-patamon.jpg",
                        statReq:{
                            HP:500,
                            MP:500,
                            Offence:100,
                            Deffence:50,
                            Speed:50,
                            Brains:100,
                            Weight:10 + "-" + 20,
                        },
                        specialReq:{
                            digimonreq:"Tokomon"
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        accessArea:"",
                    },
            
                    {
                        id:"biyomon",
                        name:"Biyomon",
                        stage:"Rookie",
                        type:"Vaccine",
                        preDigivolution:["tokomon"],
                        digivolution:["Kabuterimon","Airdramon","Nanimon","Numemon","Sukamon","Birdramon","Unimon","Kokatorimon"],
                        image:"https://www.grindosaur.com/img/games/digimon-world/digimon/10-biyomon.jpg",
                        statReq:{
                            HP:500,
                            MP:1000,
                            Offence:50,
                            Deffence:50,
                            Speed:100,
                            Brains:50,
                            Weight:10+ "-" + 20,
                        },
                        specialReq:{
                            digimonreq:"Tokomon"
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        accessArea:"Ice Sanctuary.",
                    },
            
                    {
                        id:"elecmon",
                        name:"Elecmon",
                        stage:"Rookie",
                        type:"Data",
                        preDigivolution:["tsunomon"],
                        digivolution:["Bakemon","Nanimon","Numemon","Sukamon","Leomon","Angemon","Kokatorimon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/24-elecmon.jpg",
                        statReq:{
                            HP:500,
                            MP:500,
                            Offence:100,
                            Deffence:50,
                            Speed:100,
                            Brains:50,
                            Weight:10 + "-" + 20,
                        },
                        specialReq:{
                            digimonreq:"Tsunomon"
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        accessArea:"",
                    },
            
                    {
                        id:"penguinmon",
                        name:"Penguinmon",
                        stage:"Rookie",
                        type:"Data",
                        preDigivolution:["tsunomon"],
                        digivolution:["Mojyamon","Frigimon","Shellmon","Whamon","Nanimon","Numemon","Sukamon","Garurumon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/81-penguinmon.jpg",
                        statReq:{
                            HP:500,
                            MP:500,
                            Offence:50,
                            Deffence:100,
                            Speed:50,
                            Brains:100,
                            Weight:10 + "-" + 20,
                        },
                        specialReq:{
                            digimonreq:"Tsunomon"
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        accessArea:"",
                    },
            
                    {
                        id:"betamon",
                        name:"Betamon",
                        stage:"Rookie",
                        type:"Virus",
                        preDigivolution:["tanemon"],
                        digivolution:["Shellmon","Whamon","Nanimon","Numemon","Sukamon","Seadramon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/8-betamon.jpg",
                        statReq:{
                            HP:1000,
                            MP:500,
                            Offence:50,
                            Deffence:100,
                            Speed:50,
                            Brains:50,
                            Weight:10 + "-" + 20,
                        },
                        specialReq:{
                            digimonreq:"Tsunomon"
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        
                        accessArea:"Grey Lord's Mansion.",
                    },
            
                    {
                        id:"palmon",
                        name:"Palmon",
                        stage:"Rookie",
                        type:"Vaccine",
                        preDigivolution:["tanemon"],
                        digivolution:["Nanimon","Numemon","Sukamon","Whamon","Ninjamon","Kuwagamon"],
                        image: "https://www.grindosaur.com/en/games/digimon/digimon-world/digimon/78-palmon",
                        statReq:{
                            HP:500,
                            MP:1000,
                            Offence:50,
                            Deffence:50,
                            Speed:50,
                            Brains:100,
                            Weight:10 + "-" + 20,
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        accessArea:"Ice Sanctuary.",
                    },
                    
                    {
                        id:"kunemon",
                        name:"Kunemon",
                        stage:"Rookie",
                        type:"Virus",
                        preDigivolution:["Koromon","tokomon","tsunomon","tanemon"],
                        digivolution:["Bakemon","Nanimon","Numemon","Sukamon","Kabuterimon","Kuwagamon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/51-kunemon.jpg",
                        statReq:{
                            HP:1000,
                            MP:1000,
                            Offence:50,
                            Deffence:50,
                            Speed:50,
                            Brains:50,
                        },
                        specialReq:{
                            Condition:"Sleep by Kunemon's Bed,there is a 50% chance any In-training will digivolve into Kunemon",
                        },
                        bonus:{
                            Mistakes:0,
                        },
                        accessArea:"Grey Lord's Mansion.",
                    },
            
                ],
            
                 /*Champion Stage Digimon Object*/
            
                 champion:[
            
                    {
                        id:"greymon",
                        name:"Greymon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Agumon"],
                        digivolution:["MetalGreymon","SkullGreymon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/37-greymon.jpg",
                        statReq:{
                            HP:2000,
                            MP:1500,
                            Offence:200,
                            Deffence:200,
                            Speed:200,
                            Brains:200,
                            Mistakes:"<" + 1,
                            Weight: 25 + " - " + 35,
                            Discipline:">" + 90,
                        },
                        specialReq:{
                           digivolveItem:"Grey Claws",
                           condition:"",
                        },
                        bonus:{
                            techniques:">" + 35,
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"meramon",
                        name:"Meramon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Agumon"],
                        digivolution:["MetalGreymon","Andromon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/59-meramon.jpg",
                        statReq:{
                            HP:1000,
                            MP:1500,
                            Offence:250,
                            Deffence:150,
                            Speed:150,
                            Brains:150,
                            Mistakes:">" + 5,
                            Weight: 25 + " - " + 35,
                        },
                        specialReq:{
                           digivolveItem:"Fireball",
                           condition:"",
                        },
                        bonus:{
                            battles:">" + 10,
                            techniques:">" + 28,
                        },
                        accessArea:""
                    },
            
                    {
                        id:"monochromon",
                        name:"Monochromon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Agumon","Gabumon"],
                        digivolution:["MetalGreymon","MetalMamemon"],
                        image:"https://www.grindosaur.com/img/games/digimon-world/digimon/66-monochromon.jpg",
                        statReq:{
                            HP:2000,
                            MP:1500,
                            Offence:150,
                            Deffence:250,
                            Speed:150,
                            Brains:200,
                            Mistakes:"<" + 3,
                            Weight: 35 + " - " + 45,
                        },
                        specialReq:{
                           digivolveItem:"Mono Stone",
                           condition:"",
                        },
                        bonus:{
                            battles:"<" + 5,
                            techniques:">" + 35,
                        },
                        accessArea:""
                    },
            
                    {
                        id:"drimogemon",
                        name:"Drimogemon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Gabumon","Patamon"],
                        digivolution:["MetalGreymon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/23-drimogemon.jpg",
                        statReq:{
                            HP:1500,
                            MP:1500,
                            Offence:250,
                            Deffence:150,
                            Speed:150,
                            Brains:150,
                            Mistakes:">" + 3,
                            Weight: 35 + " - " + 45,
                            Happiness:">" + 50,
                        },
                        specialReq:{
                           digivolveItem:"Steel Drill",
                           condition:"",
                        },
                        bonus:{
                            techniques:">" + 28,
                        },
                        accessArea:""
                    },
            
                    {
                        id:"tyrannomon",
                        name:"tyrannomon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Agumon","Gabumon","Patamon"],
                        digivolution:["MetalGreymon","Megadramon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/112-tyrannomon.jpg",
                        statReq:{
                            HP:2000,
                            MP:1500,
                            Offence:150,
                            Deffence:200,
                            Speed:150,
                            Brains:150,
                            Weight: 25 + " - " + 35,
                        },
                        specialReq:{
                           digivolveItem:"White Fang",
                           condition:"",
                        },
                        bonus:{
                            battles:"<" + 5,
                            techniques:">" + 28,
                            Mistakes:"<" + 3,
                        },
                        accessArea:""
                    },
            
                    {
                        id:"bakemon",
                        name:"Bakemon",
                        stage:"Champion",
                        type:"Virus",
                        preDigivolution:["Elecmon","Kunemon"],
                        digivolution:["SkullGreymon","Giromon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/7-bakemon.jpg",
                        statReq:{
                            HP:1500,
                            MP:2500,
                            Offence:150,
                            Deffence:100,
                            Speed:150,
                            Brains:100,
                            Weight:15 + " - " + 25,
                        },
                        specialReq:{
                           digivolveItem:"torn tatter",
                           condition:"",
                        },
                        bonus:{
                            Mistakes:">" + 3,
                            techniques:">" + 28,
                            Happiness:">" + 50,
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"garurumon",
                        name:"Garurumon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Gabumon","Penguinmon"],
                        digivolution:["SkullGreymon","MegaSeadramon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/30-garurumon.jpg",
                        statReq:{
                            HP:1500,
                            MP:1500,
                            Offence:150,
                            Deffence:200,
                            Speed:150,
                            Brains:150,
                            Weight:25 + "-" + 35,
                            
                        },
                        specialReq:{
                           digivolveItem:"Bluecrystal",
                           condition:"",
                        },
                        bonus:{
                            techniques:"<" + 28,
                            Mistakes:"<" + 1,
                            Discipline:">" + 90,
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"mojyamon",
                        name:"Mojyamon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Penguinmon"],
                        digivolution:["SkullGreymon","Mamemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/65-mojyamon.jpg",
                        statReq:{
                            HP:2000,
                            MP:1500,
                            Offence:150,
                            Deffence:150,
                            Speed:150,
                            Brains:150,
                            Mistakes:5,
                            Weight:25,
                        },
                        specialReq:{
                           digivolveItem:"Hair grower",
                           condition:"",
                        },
                        bonus:{
                            battles:"<" + 5,
                            techniques:">" + 28,
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"nanimon",
                        name:"Nanimon",
                        stage:"Champion",
                        type:"Virus",
                        preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
                        digivolution:["Digitamamon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/72-nanimon.jpg",
                        statReq:{
                            HP:0,
                            MP:0,
                            Offence:0,
                            Deffence:0,
                            Speed:0,
                            Brains:10,
                            Weight:"",
                        },
                        specialReq:{
                           digivolveItem:"Sunglasses",
                           condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:"",
                            Mistakes:"",
                            Happiness:"",
                            Discipline:""
            
                        },
                        accessArea:" Grey Lord's Mansion."
                    },
            
                    {
                        id:"numemon",
                        name:"Numemon",
                        stage:"Champion",
                        type:"Virus",
                        preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
                        digivolution:["Monzaemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/75-numemon.jpg",
                        statReq:{
                            HP:0,
                            MP:0,
                            Offence:0,
                            Deffence:0,
                            Speed:0,
                            Brains:8,
                        },
                        specialReq:{
                            digivolveItem:"",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:"",
                            Mistakes:"",
                            Happiness:"",
                            Discipline:"",
                        },
                        accessArea:" Grey Lord's Mansion."
                    },
            
                    {
                        id:"sukamon",
                        name:"Sukamon",
                        stage:"Champion",
                        type:"Virus",
                        preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
                        digivolution:["Etemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/102-sukamon.jpg",
                        statReq:{
                            HP:0,
                            MP:0,
                            Offence:0,
                            Deffence:0,
                            Speed:0,
                            Brains:5,
                        },
                        specialReq:{
                            digivolveItem:"",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:"",
                            Mistakes:"",
                            Happiness:"",
                            Discipline:"",
                        },
                        accessArea:" Grey Lord's Mansion."
                    },
            
                    {
                        id:"whamon",
                        name:"Whamon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Palmon","Betamon","Penguinmon"],
                        digivolution:["MegaSeadramon","Mamemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/121-whamon.jpg",
                        statReq:{
                            HP:2500,
                            MP:1500,
                            Offence:100,
                            Deffence:150,
                            Speed:100,
                            Brains:200,
                            Weight:35 + "-" + 45,
                        },
                        specialReq:{
                            digivolveItem:"North Star",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 28,
                            Mistakes:"<" + 5,
                            Happiness:"",
                            Discipline:">" + 60,
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"ninjamon",
                        name:"Ninjamon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Palmon"],
                        digivolution:["Piximon","MetalMamemon","Mamemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/73-ninjamon.jpg",
                        statReq:{
                            HP:1500,
                            MP:2000,
                            Offence:200,
                            Deffence:150,
                            Speed:200,
                            Brains:150,
                            Mistakes:1,
                            Weight:5 + "-" + 15,
                        },
                        specialReq:{
                            digivolveItem:"Koga laws",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 15,
                            techniques:">" + 28,
                            Mistakes:"<" + 5,
                            Happiness:"",
                            Discipline:">" + 60,
                        },
                        accessArea:""
                    },
            
                    {
                        id:"frigimon",
                        name:"Frigimon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Penguinmon"],
                        digivolution:["MetalMamemon","Mamemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/27-frigimon.jpg",
                        statReq:{
                            HP:1500,
                            MP:2000,
                            Offence:100,
                            Deffence:150,
                            Speed:150,
                            Brains:200,               
                            Weight:25 + "-" + 35,
                        },
                        specialReq:{
                            digivolveItem:"Ice crystal",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 15,
                            techniques:">" + 28,
                            Mistakes:"<" + 5,
                            Happiness:">" + 50,
                            Discipline:"",
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"centarumon",
                        name:"Centarumon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Agumon","Gabumon"],
                        digivolution:["Andromon","Giromon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/27-frigimon.jpg",
                        statReq:{
                            HP:1500,
                            MP:1500,
                            Offence:150,
                            Deffence:150,
                            Speed:150,
                            Brains:250,
                            Weight:25 + "-" + 35,
                        },
                        specialReq:{
                            digivolveItem:"Iron Hoof",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 28,
                            Mistakes:"<" + 3,
                            Happiness:"",
                            Discipline:">" + 60,
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"ogremon",
                        name:"Ogremon",
                        stage:"Champion",
                        type:"Virus",
                        preDigivolution:["Gabumon","Patamon"],
                        digivolution:["Andromon","Giromon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/76-ogremon.jpg",
                        statReq:{
                            HP:2500,
                            MP:1000,
                            Offence:250,
                            Deffence:150,
                            Speed:100,
                            Brains:250,
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Spike Club",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 15,
                            techniques:">" + 28,
                            Mistakes:"",
                            Happiness:"",
                            Discipline:"",
                        },
                      
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"leomon",
                        name:"Leomon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Patamon","Elecmon"],
                        digivolution:["Andromon","Mamemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/53-leomon.jpg",
                        statReq:{
                            HP:1500,
                            MP:1500,
                            Offence:250,
                            Deffence:150,
                            Speed:200,
                            Brains:200,
                            Weight:15 + " - " + 25,
                        },
                        specialReq:{
                            digivolveItem:"Ice crystal",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 10,
                            techniques:">" + 35,
                            Mistakes:"<" + 1,
                            Happiness:"",
                            Discipline:"",
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"kabuterimon",
                        name:"Kabuterimon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Biyomon","Kunemon"],
                        digivolution:["H-Kabuterimon","MetalMamemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/47-kabuterimon.jpg",
                        statReq:{
                            HP:2000,
                            MP:1500,
                            Offence:200,
                            Deffence:200,
                            Speed:200,
                            Brains:100,
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Horn helmet",
                            keyDigimon:"Kunemon",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 10,
                            techniques:">" + 35,
                            Mistakes:"<" + 1,
                            Happiness:"",
                            Discipline:"",
                           
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"kuwagamon",
                        name:"Kuwagamon",
                        stage:"Champion",
                        type:"Virus",
                        preDigivolution:["Kunemon","Palmon"],
                        digivolution:["H-Kabuterimon","Piximon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/52-kuwagamon.jpg",
                        statReq:{
                            HP:2000,
                            MP:2000,
                            Offence:200,
                            Deffence:150,
                            Speed:200,
                            Brains:100,
                            Mistakes:5,
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Scissor jaw",
                            keyDigimon:"Kunemon",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 10,
                            techniques:">" + 28,
                            Mistakes:">" + 5,
                            Happiness:"",
                            Discipline:"",
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"shellmon",
                        name:"Shellmon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Betamon","Penguinmon"],
                        digivolution:["H-Kabuterimon","MegaSeadramon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/95-shellmon.jpg",
                        statReq:{
                            HP:2000,
                            MP:1500,
                            Offence:150,
                            Deffence:250,
                            Speed:100,
                            Brains:100,
                            Mistakes:5,
                            Weight:35 + " - " + 45,
                        },
                        specialReq:{
                            digivolveItem:"Red Shell",
                            keyDigimon:"Betamon",
                            condition:"",
                           
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 35,
                            Mistakes:">" + 5,
                            Happiness:"",
                            Discipline:"",
                        },
                        accessArea:""
                    },
            
                    {
                        id:"birdramon",
                        name:"Birdramon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Agumon","Biyomon"],
                        digivolution:["Phoenixmon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/9-birdramon.jpg",
                        statReq:{
                            HP:1500,
                            MP:1500,
                            Offence:150,
                            Deffence:100,
                            Speed:250,
                            Brains:150,
                            Weight:15 + " - " + 25,
                        },
                        specialReq:{
                            digivolveItem:"Flamingwing",
                            condition:"",
                        },
                        bonus:{
                            techniques:35,
                            accessArea:"Birdramon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                            keyDigimon:"Biyomon",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 35,
                            Mistakes:">" + 5,
                            Happiness:"",
                            Discipline:"",
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"angemon",
                        name:"Angemon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Patamon","Elecmon"],
                        digivolution:["Phoenixmon","Andromon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/5-angemon.jpg",
                        statReq:{
                            HP:1500,
                            MP:2000,
                            Offence:150,
                            Deffence:150,
                            Speed:150,
                            Brains:250,
                            Mistakes:0,
                            Weight:15 + " - " + 25,
                        },
                        specialReq:{
                            digivolveItem:"White Wing",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 35,
                            Mistakes:">" + 5,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:"Patamon"
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"devimon",
                        name:"Devimon",
                        stage:"Champion",
                        type:"Virus",
                        preDigivolution:["angemon"],
                        digivolution:["	SkullGreymon","Megadramon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/20-devimon.jpg",
                        statReq:{
                            Discipline:">" + 50 + "%"
                        },
                        specialReq:{
                            digivolveItem:"Black Wing",
                            condition:"An Angemon has 50 % chance to Digigivolve to a Devimon when its discipline gauge is below 50 % and it loses a battle",
                            keyDigimon:"Angemon",
                        },
                        bonus:{
                            techniques:35,
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"airdramon",
                        name:"Airdramon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Biyomon"],
                        digivolution:["Megadramon","Phoenixmon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/2-airdramon.jpg",
                        statReq:{
                            HP:1500,
                            MP:2000,
                            Offence:150,
                            Deffence:150,
                            Speed:200,
                            Brains:200,
                            Mistakes:"<" + 1,
                            Discipline:">" + 90 + "%",
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Rainbowhorn",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 35,
                            Mistakes:">" + 5,
                            Happiness:"",
                            Discipline:">" + 90,
                            keyDigimon:""
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"kokatorimon",
                        name:"Kokatorimon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Elecmon","Biyomon"],
                        digivolution:["Phoenixmon","Piximon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/49-kokatorimon.jpg",
                        statReq:{
                            HP:2500,
                            MP:1500,
                            Offence:100,
                            Deffence:150,
                            Speed:150,
                            Brains:150,
                            Mistakes:"<" + 3,
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Rooster",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 28,
                            Mistakes:">" + 3,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:"Biyomon"
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"unimon",
                        name:"Unimon",
                        stage:"Champion",
                        type:"Vaccine",
                        preDigivolution:["Patamon","Biyomon"],
                        digivolution:["Giromon","Phoenixmon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/113-unimon.jpg",
                        statReq:{
                            HP:2000,
                            MP:1500,
                            Offence:150,
                            Deffence:150,
                            Speed:200,
                            Brains:150,
                            Mistakes:"<" + 3,
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Unihorn",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 10,
                            techniques:">" + 35,
                            Mistakes:">" + 3,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"seadramon",
                        name:"Seadramon",
                        stage:"Champion",
                        type:"Data",
                        preDigivolution:["Betamon"],
                        digivolution:["Megadramon","MegaSeadramon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/93-seadramon.jpg",
                        statReq:{
                            HP:2000,
                            MP:2000,
                            Offence:150,
                            Deffence:150,
                            Speed:100,
                            Brains:150,
                            Mistakes:"<" + 3,
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Waterbottle",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 5,
                            techniques:">" + 28,
                            Mistakes:">" + 3,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:""
                    },
            
                ],
            
                /*Champion Stage Digimon Object*/
            
                Ultimate:[
            
                    {
                        id:"metalGreymon",
                        name:"MetalGreymon",
                        stage:"Ultimate",
                        type:"Virus",
                        preDigivolution:["Greymon","Meramon","Monochromon","Drimogemon","tyrannomon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/61-metalgreymon.jpg",
                        statReq:{
                            HP:5000,
                            MP:5000,
                            Offence:500,
                            Deffence:500,
                            Speed:500,
                            Brains:500,
                            Mistakes:"<" + 10,
                            Weight:60 + " - " + 70,
                        },
                        specialReq:{
                            digivolveItem:"Waterbottle",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 30,
                            techniques:">" + 30,
                            Mistakes:"<" + 10,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:"Grey Lord's Mansion"
                    },
            
                    {
                        id:"skullGreymon",
                        name:"SkullGreymon",
                        stage:"Ultimate",
                        type:"Virus",
                        preDigivolution:["Greymon","Devimon","Bakemon","Garurumon","Mojyamon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/61-metalgreymon.jpg",
                        statReq:{
                            HP:5000,
                            MP:5000,
                            Offence:500,
                            Deffence:500,
                            Speed:500,
                            Brains:500,
                            Mistakes:"<" + 10,
                            Weight:60 + " - " + 70,
                        },
                        specialReq:{
                            digivolveItem:"Metal part",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 40,
                            techniques:">" + 45,
                            Mistakes:">" + 10,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:"Grey Lord's Mansion"
                    },
            
                    {
                        id:"digitamamon",
                        name:"Digitamamon",
                        stage:"Ultimate",
                        type:"Data",
                        preDigivolution:["Nanimon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/21-digitamamon.jpg",
                        statReq:{
                            HP:5000,
                            MP:5000,
                            Offence:600,
                            Deffence:600,
                            Speed:500,
                            Brains:500,
                            Weight:5 + " - " + 15,
                        },
                        specialReq:{
                            digivolveItem:"Mysty Egg",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 100,
                            techniques:">" + 49,
                            Mistakes:">" + 0,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:"Grey Lord's Mansion"
                    },
            
                    {
                        id:"monzaemon",
                        name:"Monzaemon",
                        stage:"Ultimate",
                        type:"Vaccine",
                        preDigivolution:["Numemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/67-monzaemon.jpg",
                        statReq:{
                            HP:5000,
                            MP:5000,
                            Offence:500,
                            Deffence:500,
                            Speed:500,
                            Brains:500,
                            Weight:35 + " - " + 45,
                        },
                        specialReq:{
                            digivolveItem:"X Bandage",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 50,
                            techniques:">" + 49,
                            Mistakes:">" + 0,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"etemon",
                        name:"Etemon",
                        stage:"Ultimate",
                        type:"Virus",
                        preDigivolution:["Sukamon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/25-etemon.jpg",
                        statReq:{
                            HP:4000,
                            MP:5000,
                            Offence:600,
                            Deffence:400,
                            Speed:600,
                            Brains:500,
                            Weight:10 + " - " + 20,
                        },
                        specialReq:{
                            digivolveItem:"Gold banana",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 50,
                            techniques:">" + 49,
                            Mistakes:"<" + 0,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"mamemon",
                        name:"Mamemon",
                        stage:"Ultimate",
                        type:"Data",
                        preDigivolution:["Leomon","Ninjamon","Frigimon","Mojyamon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/55-mamemon.jpg",
                        statReq:{
                            HP:3000,
                            MP:3000,
                            Offence:600,
                            Deffence:500,
                            Speed:500,
                            Brains:600,
                            Weight:0 + " - " + 20,
                        },
                        specialReq:{
                            digivolveItem:"Silver ball",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 49,
                            Mistakes:"<" + 0,
                            Happiness:">" + 90,
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:""
                    },
            
                    {
                        id:"mamemon",
                        name:"Mamemon",
                        stage:"Ultimate",
                        type:"Data",
                        preDigivolution:["Monochromon","Kabuterimon","Ninjamon","Frigimon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/62-metalmamemon.jpg",
                        statReq:{
                            HP:3000,
                            MP:3000,
                            Offence:600,
                            Deffence:500,
                            Speed:500,
                            Brains:600,
                            Weight:5 + " - " + 15,
                        },
                        specialReq:{
                            digivolveItem:"Metal armor",
                            condition:"",
                        },
                        bonus:{
                            battles:"",
                            techniques:">" + 30,
                            Mistakes:"<" + 15,
                            Happiness:">" + 95,
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:""
                    },
            
                    {
                        id:"andromon",
                        name:"Andromon",
                        stage:"Ultimate",
                        type:"Vaccine",
                        preDigivolution:["Meramon","Centarumon","Ogremon","Leomon","Angemon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/4-andromon.jpg",
                        statReq:{
                            HP:4000,
                            MP:6000,
                            Offence:400,
                            Deffence:600,
                            Speed:400,
                            Brains:600,
                            Weight:35 + " - " + 45,
                        },
                        specialReq:{
                            digivolveItem:"Cyber part",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 30,
                            techniques:">" + 30,
                            Mistakes:"<" + 5,
                            Happiness:"",
                            Discipline:">" + 95,
                            keyDigimon:""
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"herculesKabuterimon",
                        name:"Hercules Kabuterimon",
                        stage:"Ultimate",
                        type:"Data",
                        preDigivolution:["Kabuterimon","Kuwagamon","Shellmon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/40-h-kabuterimon.jpg",
                        statReq:{
                            HP:5000,
                            MP:5000,
                            Offence:500,
                            Deffence:500,
                            Speed:500,
                            Brains:500,
                            Weight:50 + " - " + 60,
                        },
                        specialReq:{
                            digivolveItem:"Beetlepearl",
                            condition:"",
                        },
                        bonus:{
                            battles:"<" + 0,
                            techniques:">" + 40,
                            Mistakes:"<" + 5,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:""
                    },
            
                    {
                        id:"phoenixmon",
                        name:"Phoenixmon",
                        stage:"Ultimate",
                        type:"Vaccine",
                        preDigivolution:["Birdramon","Angemon","Airdramon","Kokatorimon","Unimon"],
                        image: "https://www.grindosaur.com/img/games/digimon-world/digimon/82-phoenixmon.jpg",
                        statReq:{
                            HP:6000,
                            MP:6000,
                            Offence:400,
                            Deffence:400,
                            Speed:600,
                            Brains:600,
                            Weight:25 + " - " + 35,
                        },
                        specialReq:{
                            digivolveItem:"Red Ruby",
                            condition:"",
                        },
                        bonus:{
                            battles:"<" + 0,
                            techniques:">" + 40,
                            Mistakes:"<" + 3,
                            Happiness:"",
                            Discipline:">" + 100,
                            keyDigimon:""
                        },
                        accessArea:"Ice Sanctuary."
                    },
            
                    {
                        id:"vademon",
                        name:"Vademon",
                        stage:"Ultimate",
                        type:"Virus",
                        preDigivolution:["Greymon","tyranomon","Angemon","Devimon","Meramon","AirDramon","SeaDramon","Kabuterimon","Garuramon","Frigimon","Monochromon","Drimogemon","Bakemon",
                    "Mojyamon","Nanimon","Numemon","Sukamon","Whamon","Ninjamon","Centarumon","Ogremon","Leomon","Kuwagamon","Shellmon","Birdramon","Kokatorimon","Unimon"],
                    image: "https://www.grindosaur.com/img/games/digimon-world/digimon/114-vademon.jpg",
                        statReq:{
                            HP:5000,
                            MP:5000,
                            Offence:500,
                            Deffence:500,
                            Speed:500,
                            Brains:500,
                            Weight:"",
                        },
                        specialReq:{
                            digivolveItem:"Ray Gun",
                            condition:"All Champion Digimon can Digivolves to Vademon after 360 hours elapse as a Champion Digimon"
                        },
                        bonus:{
                            battles:"<" + 0,
                            techniques:">" + 40,
                            Mistakes:"<" + 3,
                            Happiness:"",
                            Discipline:">" + 100,
                            keyDigimon:""
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
            
                    {
                        id:"megadramon",
                        name:"Megadramon",
                        stage:"Ultimate",
                        type:"Virus",
                        preDigivolution:["Tyrannomon","	Devimon","Airdramon","Seadramon"],
                    image: "https://www.grindosaur.com/img/games/digimon-world/digimon/57-megadramon.jpg",
                        statReq:{
                            HP:6000,
                            MP:6000,
                            Offence:600,
                            Deffence:500,
                            Speed:600,
                            Brains:500,
                            Weight:50 + "-" +60,
                        },
                        specialReq:{
                            digivolveItem:"	Mega Hand",
                            condition:"",
                        },
                        bonus:{
                            battles:">" + 30,
                            techniques:">" + 30,
                            Mistakes:"<" + 10,
                            Happiness:"",
                            Discipline:"",
                            keyDigimon:""
                        },
                        accessArea:"Grey Lord's Mansion."
                    },
                ],
            }
        }
