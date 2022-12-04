
let digiList = [


    /*Egg Stage Digimon Object*/
    egg={

        blueEgg:{
            id:"blue",
            eggtype:"blue",
            digimon:"Punimon",
        },

        greenEgg:{
            id:"green",
            eggtype:"green",
            digimon:"Botamon",
        },

        orangeEgg:{
            id:"orange",
            eggtype:"orange",
            digimon:"Poyomon",
        },

        pinkEgg:{
            id:"pink",
            eggtype:"pink",
            digimon:"Yuramon",
        },
        
        
    },

    /*Baby Stage Digimon Object*/

    baby={
        botamon:{
            id:"botamon",
            name:"Botamon",
            stage:"Baby",
            type:"Data",
            digivolution:["Koromon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/12-botamon.jpg"
        },

        poyomon:{
            id:"poyomon",
            name:"Poyomon",
            stage:"Baby",
            type:"Data",
            digivolution:["tokomon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/86-poyomon.jpg"
        },

        punimon:{
            id:"punimon",
            name:"Punimon",
            stage:"Baby",
            type:"Data",
            digivolution:["tsunomon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/88-punimon.jpg"
        },

        yuramon:{
            id:"yuramon",
            name:"Yuramon",
            stage:"Baby",
            type:"Data",
            digivolution:["tanemon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/123-yuramon.jpg"
        },
    },

    /*In-training Stage Digimon Object*/

    intraining={

        koromon:{
            id:"koromon",
            name:"Koromon",
            stage:"In-training",
            type:"Data",
            preDigivolution:["Botamon"],
            digivolution:["Agumon","Gabumon","Kunemon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/50-koromon.jpg"
        },

        tokomon:{
            id:"tokomon",
            name:"Koromon",
            stage:"In-training",
            type:"Data",
            preDigivolution:["Poyomon"],
            digivolution:["Patamon","Biyomon","Kunemon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/108-tokomon.jpg"
        },

        tsunomon:{
            id:"tsunomon",
            name:"tsunomon",
            stage:"In-training",
            type:"Data",
            preDigivolution:["Punimon"],
            digivolution:["Elecmon","Penguinmon","Kunemon"],
            image: "https://www.grindosaur.com/en/games/digimon/digimon-world/digimon/111-tsunomon"
        },

        tanemon:{
            id:"tanemon",
            name:"tanemon",
            stage:"In-training",
            type:"Data",
            preDigivolution:["Yuramon"],
            digivolution:["Betamon","Palmon","Kunemon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/103-tanemon.jpg"
        },
    },

     /*Rookie Stage Digimon Object*/

     rookie={

        agumon:{
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
                Mistakes:0,
                Weight:10 + "-" + 20,
            },
            specialReq:{
                digimonreq:"Koromon"
            },

            accessArea:"Ice Sanctuary.",
        },

        gabumon:{
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
                Mistakes:0,
                Weight:10 + "-" + 20,
            },
            specialReq:{
                digimonreq:"Koromon"
            },
            accessArea:"",
        },

        patamon:{
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
                Mistakes:0,
                Weight:10 + "-" + 20,
            },
            specialReq:{
                digimonreq:"Tokomon"
            },
            accessArea:"",
        },

        biyomon:{
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
                Mistakes:0,
                Weight:10+ "-" + 20,
            },
            specialReq:{
                digimonreq:"Tokomon"
            },
            accessArea:"Ice Sanctuary.",
        },

        elecmon:{
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
                Mistakes:0,
                Weight:10 + "-" + 20,
            },
            specialReq:{
                digimonreq:"Tsunomon"
            },
            accessArea:"",
        },

        penguinmon:{
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
                Mistakes:0,
                Weight:10 + "-" + 20,
            },
            specialReq:{
                digimonreq:"Tsunomon"
            },
            accessArea:"",
        },

        betamon:{
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
                Mistakes:0,
                Weight:10 + "-" + 20,
            },
            specialReq:{
                digimonreq:"Tsunomon"
            },
            
            accessArea:"Grey Lord's Mansion.",
        },

        palmon:{
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
                Mistakes:0,
                Weight:10 + "-" + 20,
            },
            accessArea:"Ice Sanctuary.",
        },
        
        kunemon:{
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
            accessArea:"Grey Lord's Mansion.",
        },

    },

     /*Champion Stage Digimon Object*/

     champion={

        greymon:{
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
               item:"Grey Claws"
            },
            bonus:{
                techniques:">" + 35,
            },
            accessArea:"Ice Sanctuary."
        },

        meramon:{
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
               item:"Fireball",
            },
            bonus:{
                battles:">" + 10,
                techniques:">" + 28,
            },
            accessArea:""
        },

        monochromon:{
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
               item:"Mono Stone",
            },
            bonus:{
                battles:"<" + 5,
                techniques:">" + 35,
            },
            accessArea:""
        },

        drimogemon:{
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
               item:"Steel Drill",
            },
            bonus:{
                techniques:">" + 28,
            },
            accessArea:""
        },

        tyrannomon:{
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
                Mistakes:5,
                Weight: 35,
            },
            specialReq:{
               item:"White Fang",
            },
            bonus:{
                battles:5,
                techniques:28,
            },
            accessArea:""
        },

        bakemon:{
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
                Mistakes:3,
                Weight:25,
                Happiness:50,
            },
            specialReq:{
               item:"torn tatter",
            },
            bonus:{
                techniques:28,
            },
            accessArea:"Grey Lord's Mansion."
        },

        garurumon:{
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
                Mistakes:1,
                Weight:35,
                Discipline:90,
            },
            specialReq:{
               item:"Bluecrystal",
            },
            bonus:{
                techniques:28,
            },
            accessArea:"Ice Sanctuary."
        },

        mojyamon:{
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
               item:"Hair grower",
            },
            bonus:{
                battles:5,
                techniques:28,
            },
            accessArea:"Ice Sanctuary."
        },

        nanimon:{
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
            },
            specialReq:{
               item:"Sunglasses",
            },
            accessArea:" Grey Lord's Mansion."
        },

        numemon:{
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
              digivolve:"Go to toy town and find A manzimon suit in the costume room, Numemon will get into the suit and become Monzaemon",
            },
            accessArea:" Grey Lord's Mansion."
        },

        sukamon:{
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
              digivolve:"Sukamon digivolves from any Rookie level Digimon if their poop gauge reaches the maximum",
            },
            
            accessArea:" Grey Lord's Mansion."
        },

        whamon:{
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
                Mistakes:5,
                Weight:45,
                Discipline:60,
            },
            specialReq:{
                item:"North Star"
            },
            bonus:{
                accessArea:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                techniques:28,
            },
            accessArea:"Ice Sanctuary."
        },

        ninjamon:{
            id:"ninjamon",
            name:"Ninjamon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Palmon"],
            digivolution:[],
            digivolution:["MegaSeadramon","Mamemon"],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/73-ninjamon.jpg",
            statReq:{
                HP:1500,
                MP:2000,
                Offence:200,
                Deffence:150,
                Speed:200,
                Brains:150,
                Mistakes:1,
                Weight:15,
                
            },
            specialReq:{
                item:"Koga laws"
            },
            bonus:{
                accessArea:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                techniques:35,
                Battles:15
            },
            accessArea:""
        },

        frigimon:{
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
                Mistakes:5,
                Weight:35,
                Happiness:50,
            },
            specialReq:{
                item:"Ice crystal",
            },
            bonus:{
                accessArea:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                techniques:28,
            },
            accessArea:"Ice Sanctuary."
        },

        centarumon:{
            id:"centarumon",
            name:"Centarumon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon","Gabumon"],
            digivolution:[],
            image: "https://www.grindosaur.com/img/games/digimon-world/digimon/27-frigimon.jpg",
            statReq:{
                HP:1500,
                MP:1500,
                Offence:150,
                Deffence:150,
                Speed:150,
                Brains:250,
                Mistakes:3,
                Weight:25 + "-" + 35,
                Happiness:50,
            },
            specialReq:{
                item:"Iron Hoof",
            },
            bonus:{
                accessArea:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                techniques:28,
            },
            accessArea:""
        },

        ogremon:{
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
                Mistakes:5,
                Weight:25 + " - " + 35,
            },
            specialReq:{
                item:"Spike Club",
            },
            bonus:{
                accessArea:"Ogremon is of the Virus type allowing you to enter Grey Lord's Mansion.",
                techniques:35,
                Battles:15,
            },
            accessArea:"Grey Lord's Mansion."
        },

        leomon:{
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
                Mistakes:1,
                Weight:15 + " - " + 25,
            },
            specialReq:{
                item:"Ice crystal",
            },
            bonus:{
                accessArea:"Ogremon is of the Virus type allowing you to enter Grey Lord's Mansion.",
                techniques:35,
                Battles:10,
            },
            accessArea:"Ice Sanctuary."
        },

        kabuterimon:{
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
                Mistakes:1,
                Weight:25 + " - " + 35,
            },
            specialReq:{
                item:"Horn helmet",
            },
            bonus:{
                accessArea:"Kabuterimon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                techniques:35,
            },
            accessArea:"Ice Sanctuary."
        },

        kuwagamon:{
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
                item:"Scissor jaw",
            },
            bonus:{
                accessArea:"Kuwagamon is of the Virus type allowing you to enter Grey Lord's Mansion.",
                techniques:28,
                keyDigimon:"Kunemon"
            },
            accessArea:"Grey Lord's Mansion."
        },

        shellmon:{
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
                item:"Red Shell",
            },
            bonus:{
                techniques:35,
                keyDigimon:"Betamon"
            },
            accessArea:""
        },

        birdramon:{
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
                Mistakes:3,
                Weight:15 + " - " + 25,
            },
            specialReq:{
                item:"Flamingwing",
            },
            bonus:{
                techniques:35,
                accessArea:"Birdramon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                keyDigimon:"Biyomon",
            },
            accessArea:"Ice Sanctuary."
        },

        angemon:{
            id:"angemon",
            name:"Angemon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Patamon","Elecmon"],
            digivolution:[],
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
                item:"White Wing",
            },
            bonus:{
                techniques:35,
                accessArea:"Angemon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                keyDigimon:"Patamon"
            },
            accessArea:"Ice Sanctuary."
        },

        devimon:{
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
                item:"Black Wing",
                digivolve:"An Angemon has 50 % chance to Digigivolve to a Devimon when its discipline gauge is below 50 % and it loses a battle",
                digimonreq:"Angemon"
            },
            bonus:{
                techniques:35,
            },
            accessArea:"Grey Lord's Mansion."
        },

        airdramon:{
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
                item:"Rainbowhorn",
            },
            bonus:{
                techniques:35,
            },
            accessArea:"Ice Sanctuary."
        },

        kokatorimon:{
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
                item:"Rooster",
            },
            bonus:{
                techniques:">"+28,
            },
            accessArea:"Ice Sanctuary."
        },

        unimon:{
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
                item:"Unihorn",
            },
            bonus:{
                techniques:">"+ 35,
                battles:">" + 10,
            },
            accessArea:"Ice Sanctuary."
        },

        seadramon:{
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
                item:"Waterbottle",
            },
            bonus:{
                techniques:">"+ 28,
                battles:"<" + 5,
            },
            accessArea:""
        },

    },

    /*Champion Stage Digimon Object*/

    Ultimate={

        metalGreymon:{
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
                item:"Waterbottle",
            },
            bonus:{
                techniques:">"+ 28,
                battles:"<" + 5,
                Discipline: ">" + 95,
                Battles: ">" + 95
            },
            accessArea:"Grey Lord's Mansion"
        },

        skullGreymon:{
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
                item:"Metal part",
            },
            bonus:{
                techniques:">"+ 28,
                battles:"<" + 5,
                Discipline: ">" + 95,
                Battles: ">" + 95
            },
            accessArea:"Grey Lord's Mansion"
        },

        digitamamon:{
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
                item:"Mysty Egg",
            },
            bonus:{
                techniques:">"+ 28,
                battles:"<" + 5,
                Discipline: ">" + 95,
                Battles: ">" + 95,
                Mistakes:"<" + 10,
            },
            accessArea:"Grey Lord's Mansion"
        },

        monzaemon:{
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
                item:"Mysty Egg",
            },
            bonus:{
                techniques:">"+ 28,
                battles:"<" + 5,
                Discipline: ">" + 95,
                Battles: ">" + 95,
                Mistakes:"<" + 0,
            },
            accessArea:"Ice Sanctuary."
        },

        etemon:{
            id:"etemon",
            name:"Etemon",
            stage:"Ultimate",
            type:"Virus",
            preDigivolution:["Sukamon"],
        },

        mamemon:{
            id:"mamemon",
            name:"Mamemon",
            stage:"Ultimate",
            type:"Data",
            preDigivolution:["Leomon","Ninjamon","Frigimon","Mojyamon"],
        },

        metalmamemon:{
            id:"mamemon",
            name:"Mamemon",
            stage:"Ultimate",
            type:"Data",
            preDigivolution:["Monochromon","Kabuterimon","Ninjamon","Frigimon"],
        },

        andromon:{
            id:"andromon",
            name:"Andromon",
            stage:"Ultimate",
            type:"Vaccine",
            preDigivolution:["Meramon","Centarumon","Ogremon","Leomon","Angemon"],
        },

        herculesKabuterimon:{
            id:"herculesKabuterimon",
            name:"Hercules Kabuterimon",
            stage:"Ultimate",
            type:"Data",
            preDigivolution:["Kabuterimon","Kuwagamon","Shellmon"],
        },

        phoenixmon:{
            id:"phoenixmon",
            name:"Phoenixmon",
            stage:"Ultimate",
            type:"Vaccine",
            preDigivolution:["Birdramon","Angemon","Airdramon","Kokatorimon","Unimon"],
        },

        vademon:{
            id:"vademon",
            name:"Vademon",
            stage:"Ultimate",
            type:"Virus",
            preDigivolution:["Greymon","tyranomon","Angemon","Devimon","Meramon","AirDramon","SeaDramon","Kabuterimon","Garuramon","Frigimon","Monochromon","Drimogemon","Bakemon",
        "Mojyamon","Nanimon","Numemon","Sukamon","Whamon","Ninjamon","Centarumon","Ogremon","Leomon","Kuwagamon","Shellmon","Birdramon","Kokatorimon","Unimon"],
        },
    }
]

console.log(digiList)