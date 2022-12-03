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
            digivolution:["Koromon"]
        },

        poyomon:{
            id:"poyomon",
            name:"Poyomon",
            stage:"Baby",
            type:"Data",
            digivolution:["Tokomon"]
        },

        punimon:{
            id:"punimon",
            name:"Punimon",
            stage:"Baby",
            type:"Data",
            digivolution:["Tsunomon"]
        },

        yuramon:{
            id:"yuramon",
            name:"Yuramon",
            stage:"Baby",
            type:"Data",
            digivolution:["Tanemon"]
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
            digivolution:["Agumon","Gabumon","Kunemon"]
        },

        tokomon:{
            id:"tokomon",
            name:"Koromon",
            stage:"In-Training",
            type:"Data",
            preDigivolution:["Poyomon"],
            digivolution:["Patamon","Biyomon","Kunemon"]
        },

        tsunomon:{
            id:"tsunomon",
            name:"Tsunomon",
            stage:"In-Training",
            type:"Data",
            preDigivolution:["Punimon"],
            digivolution:["Elecmon","Penguinmon","Kunemon"]
        },

        tanemon:{
            id:"tanemon",
            name:"Tanemon",
            stage:"In-Training",
            type:"Data",
            preDigivolution:["Yuramon"],
            digivolution:["Betamon","Palmon","Kunemon"]
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
            digivolution:["Greymon","Meramon","Monochromon","Tyrannomon","Nanimon","Numemon","Sukamon","Centarumon","Birdramon"]
        },

        gabumon:{
            id:"gabumon",
            name:"Gabumon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Koromon"],
            digivolution:["Drimogemon","Garurumon","Ogremon","Tyrannomon","Nanimon","Numemon","Sukamon","Centarumon","Monochromon"]
        },

        patamon:{
            id:"patamon",
            name:"Patamon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Tokomon"],
            digivolution:["Leomon","Angemon","Unimon","Tyrannomon","Nanimon","Numemon","Sukamon","Ogremon","Drimogemon"]
        },

        biyomon:{
            id:"biyomon",
            name:"Biyomon",
            stage:"Rookie",
            type:"Vaccine",
            preDigivolution:["Tokomon"],
            digivolution:["Kabuterimon","Airdramon","Nanimon","Numemon","Sukamon","Birdramon","Unimon","Kokatorimon"]
        },

        elecmon:{
            id:"elecmon",
            name:"Elecmon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Tsunomon"],
            digivolution:["Bakemon","Nanimon","Numemon","Sukamon","Leomon","Angemon","Kokatorimon"]
        },

        penguinmon:{
            id:"penguinmon",
            name:"Penguinmon",
            stage:"Rookie",
            type:"Data",
            preDigivolution:["Tsunomon"],
            digivolution:["Mojyamon","Frigimon","Shellmon","Whamon","Nanimon","Numemon","Sukamon","Garurumon"],
        },

        betamon:{
            id:"betamon",
            name:"Betamon",
            stage:"Rookie",
            type:"Virus",
            preDigivolution:["Tanemon"],
            digivolution:["Shellmon","Whamon","Nanimon","Numemon","Sukamon","Seadramon"]
        },

        palmon:{
            id:"palmon",
            name:"Palmon",
            stage:"Rookie",
            type:"Vaccine",
            preDigivolution:["Tanemon"],
            digivolution:["Nanimon","Numemon","Sukamon","Whamon","Ninjamon","Kuwagamon"]
        },
        
        kunemon:{
            id:"kunemon",
            name:"Kunemon",
            stage:"Rookie",
            type:"Virus",
            preDigivolution:["Koromon","Tokomon","Tsunomon","Tanemon"],
            digivolution:["Bakemon","Nanimon","Numemon","Sukamon","Kabuterimon","Kuwagamon"]
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
            digivolution:[]
        },

        meramon:{
            id:"meramon",
            name:"Meramon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon"],
            digivolution:[]
        },

        monochromon:{
            id:"monochromon",
            name:"Monochromon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon","Gabumon"],
            digivolution:[]
        },

        drimogemon:{
            id:"drimogemon",
            name:"Drimogemon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Gabumon","Patamon"],
            digivolution:[]
        },

        tyrannomon:{
            id:"tyrannomon",
            name:"Tyrannomon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon","Gabumon","Patamon"],
            digivolution:[]
        },

        bakemon:{
            id:"bakemon",
            name:"Bakemon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Elecmon","Kunemon"],
            digivolution:[]
        },

        garurumon:{
            id:"garurumon",
            name:"Garurumon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Gabumon","Penguinmon"],
            digivolution:[]
        },

        mojyamon:{
            id:"mojyamon",
            name:"Mojyamon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Penguinmon"],
            digivolution:[]
        },

        nanimon:{
            id:"nanimon",
            name:"Nanimon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
            digivolution:[]
        },

        numemon:{
            id:"numemon",
            name:"Numemon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
            digivolution:[]
        },

        sukamon:{
            id:"sukamon",
            name:"Sukamon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Agumon","Gabumon","Patamon","Patamon","Biyomon","Biyomon","Kunemon","Betamon","Elecmon","Penguinmon"],
            digivolution:[]
        },

        whamon:{
            id:"whamon",
            name:"Whamon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Palmon","Betamon","Penguinmon"],
            digivolution:[]
        },

        ninjamon:{
            id:"ninjamon",
            name:"Ninjamon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Palmon"],
            digivolution:[]
        },

        frigimon:{
            id:"frigimon",
            name:"Frigimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Penguinmon"],
            digivolution:[]
        },

        centarumon:{
            id:"centarumon",
            name:"Centarumon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Agumon","Gabumon"],
            digivolution:[]
        },

        ogremon:{
            id:"ogremon",
            name:"Ogremon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Gabumon","Patamon"],
            digivolution:[]
        },

        leomon:{
            id:"leomon",
            name:"Leomon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Patamon","Elecmon"],
            digivolution:[]
        },

        kabuterimon:{
            id:"kabuterimon",
            name:"Kabuterimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Biyomon","Kunemon"],
            digivolution:[]
        },

        kuwagamon:{
            id:"kuwagamon",
            name:"Kuwagamon",
            stage:"Champion",
            type:"Virus",
            preDigivolution:["Kunemon","Palmon"],
            digivolution:[]
        },

        shellmon:{
            id:"shellmon",
            name:"Shellmon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Betamon","Penguinmon"],
            digivolution:[]
        },

        birdramon:{
            id:"birdramon",
            name:"Birdramon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Agumon","Biyomon"],
            digivolution:[]
        },

        angemon:{
            id:"angemon",
            name:"Angemon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Patamon","Elecmon"],
            digivolution:[]
        },

        airdramon:{
            id:"airdramon",
            name:"Airdramon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Biyomon"],
            digivolution:[]
        },

        kokatorimon:{
            id:"kokatorimon",
            name:"Kokatorimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Elecmon","Biyomon"],
            digivolution:[]
        },

        unimon:{
            id:"unimon",
            name:"Unimon",
            stage:"Champion",
            type:"Vaccine",
            preDigivolution:["Patamon","Biyomon"],
            digivolution:[]
        },

        seadramon:{
            id:"seadramon",
            name:"Seadramon",
            stage:"Champion",
            type:"Data",
            preDigivolution:["Betamon"],
            digivolution:[]
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