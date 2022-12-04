let digiList = [

    /*Egg Stage Digimon Object*/

    egg={

        blueEgg:{
            id:"blue",
            eggtype:"blue",
            digimon:"Punimon",
            image: new url("/Images/Blue Egg - mobile.png")
        },

        greenEgg:{
            id:"green",
            eggtype:"green",
            digimon:"Botamon",
            image: new url("/Images/Green Egg - mobile.png")
        },

        orangeEgg:{
            id:"orange",
            eggtype:"orange",
            digimon:"Poyomon",
            image: new url("/Images/Orange Egg - mobile.png")
        },

        pinkEgg:{
            id:"pink",
            eggtype:"pink",
            digimon:"Yuramon",
            image: new url("/Images/Pink Egg - mobile.png") 
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
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/12-botamon.jpg") 
        },

        poyomon:{
            id:"poyomon",
            name:"Poyomon",
            stage:"Baby",
            type:"Data",
            digivolution:["Tokomon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/86-poyomon.jpg")
        },

        punimon:{
            id:"punimon",
            name:"Punimon",
            stage:"Baby",
            type:"Data",
            digivolution:["Tsunomon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/88-punimon.jpg")
        },

        yuramon:{
            id:"yuramon",
            name:"Yuramon",
            stage:"Baby",
            type:"Data",
            digivolution:["Tanemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/123-yuramon.jpg")
        },
    },

    /*In-training Stage Digimon Object*/

    inTraining={

        koromon:{
            id:"koromon",
            name:"Koromon",
            stage:"In-Training",
            type:"Data",
            preDigivolution:["Botamon"],
            digivolution:["Agumon","Gabumon","Kunemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/50-koromon.jpg")
        },

        tokomon:{
            id:"tokomon",
            name:"Koromon",
            stage:"In-Training",
            type:"Data",
            preDigivolution:["Poyomon"],
            digivolution:["Patamon","Biyomon","Kunemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/108-tokomon.jpg")
        },

        tsunomon:{
            id:"tsunomon",
            name:"Tsunomon",
            stage:"In-Training",
            type:"Data",
            preDigivolution:["Punimon"],
            digivolution:["Elecmon","Penguinmon","Kunemon"],
            image: new url("https://www.grindosaur.com/en/games/digimon/digimon-world/digimon/111-tsunomon")
        },

        tanemon:{
            id:"tanemon",
            name:"Tanemon",
            stage:"In-Training",
            type:"Data",
            preDigivolution:["Yuramon"],
            digivolution:["Betamon","Palmon","Kunemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/103-tanemon.jpg")
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
            digivolution:["Greymon","Meramon","Monochromon","Tyrannomon","Nanimon","Numemon","Sukamon","Centarumon","Birdramon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/1-agumon.jpg"),
            statReq:{
                HP:1000,
                MP:500,
                Offence:100,
                Deffence:50,
                Speed:50,
                Brains:50,
                Mistakes:0,
                Weight: 20,
            },
        },

        gabumon:{
            id:"gabumon",
            name:"Gabumon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Koromon"],
            digivolution:["Drimogemon","Garurumon","Ogremon","Tyrannomon","Nanimon","Numemon","Sukamon","Centarumon","Monochromon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/29-gabumon.jpg"),
            statReq:{
                HP:500,
                MP:500,
                Offence:50,
                Deffence:100,
                Speed:100,
                Brains:50,
                Mistakes:0,
                Weight: 20,
            },
        },

        patamon:{
            id:"patamon",
            name:"Patamon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Tokomon"],
            digivolution:["Leomon","Angemon","Unimon","Tyrannomon","Nanimon","Numemon","Sukamon","Ogremon","Drimogemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/80-patamon.jpg"),
            statReq:{
                HP:500,
                MP:500,
                Offence:100,
                Deffence:50,
                Speed:50,
                Brains:100,
                Mistakes:0,
                Weight: 20,
            },
        },

        biyomon:{
            id:"biyomon",
            name:"Biyomon",
            stage:"Rookie",
            type:"Vaccine",
            preDigivolution:["Tokomon"],
            digivolution:["Kabuterimon","Airdramon","Nanimon","Numemon","Sukamon","Birdramon","Unimon","Kokatorimon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/10-biyomon.jpg"),
            statReq:{
                HP:500,
                MP:1000,
                Offence:50,
                Deffence:50,
                Speed:100,
                Brains:50,
                Mistakes:0,
                Weight: 20,
            },
        },

        elecmon:{
            id:"elecmon",
            name:"Elecmon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Tsunomon"],
            digivolution:["Bakemon","Nanimon","Numemon","Sukamon","Leomon","Angemon","Kokatorimon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/24-elecmon.jpg"),
            statReq:{
                HP:500,
                MP:500,
                Offence:100,
                Deffence:50,
                Speed:100,
                Brains:50,
                Mistakes:0,
                Weight: 20,
            },
        },

        penguinmon:{
            id:"penguinmon",
            name:"Penguinmon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Tsunomon"],
            digivolution:["Mojyamon","Frigimon","Shellmon","Whamon","Nanimon","Numemon","Sukamon","Garurumon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/81-penguinmon.jpg"),
            statReq:{
                HP:500,
                MP:500,
                Offence:50,
                Deffence:100,
                Speed:50,
                Brains:100,
                Mistakes:0,
                Weight: 20,
            },
        },

        betamon:{
            id:"betamon",
            name:"Betamon",
            stage:"Rookie",
            type:"Virus",
            preDigivolution:["Tanemon"],
            digivolution:["Shellmon","Whamon","Nanimon","Numemon","Sukamon","Seadramon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/8-betamon.jpg"),
            statReq:{
                HP:1000,
                MP:500,
                Offence:50,
                Deffence:100,
                Speed:50,
                Brains:50,
                Mistakes:0,
                Weight: 20,
            },
        },

        palmon:{
            id:"palmon",
            name:"Palmon",
            stage:"Rookie",
            type:"Vaccine",
            preDigivolution:["Tanemon"],
            digivolution:["Nanimon","Numemon","Sukamon","Whamon","Ninjamon","Kuwagamon"],
            image: new url("https://www.grindosaur.com/en/games/digimon/digimon-world/digimon/78-palmon"),
            statReq:{
                HP:500,
                MP:1000,
                Offence:50,
                Deffence:50,
                Speed:50,
                Brains:100,
                Mistakes:0,
                Weight: 20,
            },
        },
        
        kunemon:{
            id:"kunemon",
            name:"Kunemon",
            stage:"Rookie",
            type:"Virus",
            preDigivolution:["Koromon","Tokomon","Tsunomon","Tanemon"],
            digivolution:["Bakemon","Nanimon","Numemon","Sukamon","Kabuterimon","Kuwagamon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/51-kunemon.jpg"),
            statReq:{
                HP:1000,
                MP:1000,
                Offence:50,
                Deffence:50,
                Speed:50,
                Brains:50,
                Mistakes:0,
            },
            specialReq:{
                Condition:"Sleep by Kunemon's Bed,there is a 50% chance any In-Training will digivolve into Kunemon"
            }
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
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/37-greymon.jpg"),
            statReq:{
                HP:2000,
                MP:1500,
                Offence:200,
                Deffence:200,
                Speed:200,
                Brains:200,
                Mistakes:1,
                Weight: 35,
                Discopline:90,
            },
            specialReq:{
               item:"Grey Claws"
            },
            bonus:{
                techniques:35,
            }
            
        },

        meramon:{
            id:"meramon",
            name:"Meramon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon"],
            digivolution:["MetalGreymon","Andromon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/59-meramon.jpg"),
            statReq:{
                HP:1000,
                MP:1500,
                Offence:250,
                Deffence:150,
                Speed:150,
                Brains:150,
                Mistakes:5,
                Weight: 25,
            },
            specialReq:{
               item:"Fireball",
            },
            bonus:{
                battles:10,
                techniques:28,
            }
        },

        monochromon:{
            id:"monochromon",
            name:"Monochromon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon","Gabumon"],
            digivolution:["MetalGreymon","MetalMamemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/66-monochromon.jpg"),
            statReq:{
                HP:2000,
                MP:1500,
                Offence:150,
                Deffence:250,
                Speed:150,
                Brains:200,
                Mistakes:3,
                Weight: 45,
            },
            specialReq:{
               item:"Mono Stone",
            },
            bonus:{
                battles:5,
                techniques:35,
            }
        },

        drimogemon:{
            id:"drimogemon",
            name:"Drimogemon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Gabumon","Patamon"],
            digivolution:["MetalGreymon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/23-drimogemon.jpg"),
            statReq:{
                HP:1500,
                MP:1500,
                Offence:250,
                Deffence:150,
                Speed:150,
                Brains:150,
                Mistakes:3,
                Weight: 45,
                Happiness:50,
            },
            specialReq:{
               item:"Steel Drill",
            },
            bonus:{
                techniques:28,
            }
        },

        tyrannomon:{
            id:"tyrannomon",
            name:"Tyrannomon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon","Gabumon","Patamon"],
            digivolution:["MetalGreymon","Megadramon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/112-tyrannomon.jpg"),
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
            }
        },

        bakemon:{
            id:"bakemon",
            name:"Bakemon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Elecmon","Kunemon"],
            digivolution:["SkullGreymon","Giromon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/7-bakemon.jpg"),
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
               item:"Torn Tatter",
            },
            bonus:{
                techniques:28,
            }
        },

        garurumon:{
            id:"garurumon",
            name:"Garurumon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Gabumon","Penguinmon"],
            digivolution:["SkullGreymon","MegaSeadramon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/30-garurumon.jpg"),
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
            }
        },

        mojyamon:{
            id:"mojyamon",
            name:"Mojyamon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Penguinmon"],
            digivolution:["SkullGreymon","Mamemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/65-mojyamon.jpg"),
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
            }
        },

        nanimon:{
            id:"nanimon",
            name:"Nanimon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
            digivolution:["Digitamamon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/72-nanimon.jpg"),
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
        },

        numemon:{
            id:"numemon",
            name:"Numemon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
            digivolution:["Monzaemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/75-numemon.jpg"),
            statReq:{
                HP:0,
                MP:0,
                Offence:0,
                Deffence:0,
                Speed:0,
                Brains:8,
            },
            specialReq:{
              digivolve:"Go to Toy Town and find A manzimon suit in the costume room, Numemon will get into the suit and become Monzaemon",
            },
            bonus:{
                access:"Numemon is of the Virus type allowing you to enter Grey Lord's Mansion."
            }
        },

        sukamon:{
            id:"sukamon",
            name:"Sukamon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
            digivolution:["Etemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/102-sukamon.jpg"),
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
            bonus:{
                access:"Sukamon is of the Virus type allowing you to enter Grey Lord's Mansion."
            }
        },

        whamon:{
            id:"whamon",
            name:"Whamon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Palmon","Betamon","Penguinmon"],
            digivolution:["MegaSeadramon","Mamemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/121-whamon.jpg"),
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
                access:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                Techniques:28,
            }
        },

        ninjamon:{
            id:"ninjamon",
            name:"Ninjamon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Palmon"],
            digivolution:[],
            digivolution:["MegaSeadramon","Mamemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/73-ninjamon.jpg"),
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
                access:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                Techniques:35,
                Battles:15
            }
        },

        frigimon:{
            id:"frigimon",
            name:"Frigimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Penguinmon"],
            digivolution:["MetalMamemon","Mamemon"],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/27-frigimon.jpg"),
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
                access:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                Techniques:28,
            }
        },

        centarumon:{
            id:"centarumon",
            name:"Centarumon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon","Gabumon"],
            digivolution:[],
            image: new url("https://www.grindosaur.com/img/games/digimon-world/digimon/27-frigimon.jpg"),
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
                item:"Ice crystal",
            },
            bonus:{
                access:"Whamon is of the Vaccine type allowing you to enter the Ice Sanctuary.",
                Techniques:28,
            }
        },

        ogremon:{
            id:"ogremon",
            name:"Ogremon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Gabumon","Patamon"],
            digivolution:[],
        },

        leomon:{
            id:"leomon",
            name:"Leomon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Patamon","Elecmon"],
            digivolution:[],
        },

        kabuterimon:{
            id:"kabuterimon",
            name:"Kabuterimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Biyomon","Kunemon"],
            digivolution:[],
        },

        kuwagamon:{
            id:"kuwagamon",
            name:"Kuwagamon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Kunemon","Palmon"],
            digivolution:[],
        },

        shellmon:{
            id:"shellmon",
            name:"Shellmon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Betamon","Penguinmon"],
            digivolution:[],
        },

        birdramon:{
            id:"birdramon",
            name:"Birdramon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Agumon","Biyomon"],
            digivolution:[],
        },

        angemon:{
            id:"angemon",
            name:"Angemon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Patamon","Elecmon"],
            digivolution:[],
        },

        devimon:{
            id:"devimon",
            name:"Devimon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["angemon"],
            digivolution:[],
        },

        airdramon:{
            id:"airdramon",
            name:"Airdramon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Biyomon"],
            digivolution:[],
        },

        kokatorimon:{
            id:"kokatorimon",
            name:"Kokatorimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Elecmon","Biyomon"],
            digivolution:[],
        },

        unimon:{
            id:"unimon",
            name:"Unimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Patamon","Biyomon"],
            digivolution:[],
        },

        seadramon:{
            id:"seadramon",
            name:"Seadramon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Betamon"],
            digivolution:[],
        },

    },

    /*Champion Stage Digimon Object*/

    Ultimate={

        metalGreymon:{
            id:"metalGreymon",
            name:"MetalGreymon",
            stage:"Ultimate",
            type:"Virus",
            preDigivolution:["Greymon","Meramon","Monochromon","Drimogemon","Tyrannomon"],
        },

        skullGreymon:{
            id:"skullGreymon",
            name:"SkullGreymon",
            stage:"Ultimate",
            type:"Virus",
            preDigivolution:["Greymon","Devimon","Bakemon","Garurumon","Mojyamon"],
        },

        digitamamon:{
            id:"digitamamon",
            name:"Digitamamon",
            stage:"Ultimate",
            type:"Data",
            preDigivolution:["Nanimon"],
        },

        monzaemon:{
            id:"monzaemon",
            name:"Monzaemon",
            stage:"Ultimate",
            type:"Vaccine",
            preDigivolution:["Numemon"],
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
            preDigivolution:["Greymon","Tyranomon","Angemon","Devimon","Meramon","AirDramon","SeaDramon","Kabuterimon","Garuramon","Frigimon","Monochromon","Drimogemon","Bakemon",
        "Mojyamon","Nanimon","Numemon","Sukamon","Whamon","Ninjamon","Centarumon","Ogremon","Leomon","Kuwagamon","Shellmon","Birdramon","Kokatorimon","Unimon"],
        },
    }
]