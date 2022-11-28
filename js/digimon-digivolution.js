

let digiList = [
    /* Fresh Stage Digimon*/
    {
        id: "Botamon",
        name: "Botamon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/12-botamon.jpg"),
        stage: "Fresh",
        type: "Data",
        digivolution: "koromon"
    },

    {
        id: "Poyomon",
        name: "Poyomon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/86-poyomon.jpg"),
        stage: "Fresh",
        type: "Data",
        digivolution: "tokomon"
    },

    {
        id: "Punimon",
        name: "Punimon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/88-punimon.jpg"),
        stage: "Fresh",
        type: "Data",
        digivolution: "punimon"
    },

    {
        id: "Yuramon",
        name: "Yuramon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/123-yuramon.jpg"),
        stage: "Fresh",
        type: "Data",
        digivolution: "punimon"
    },

    /* In-Training Stage Digimon*/
    {
        id: "Koromon",
        name: "Koromon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/50-koromon.jpg"),
        stage: "In-Training",
        type: "Data",
        lineOne: "Agumon",
        lineTwo: "Gabumon",
        preDigivolution: "Botamon"
    },

    {
        id: "Tokomon",
        name: "Tokomon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/108-tokomon.jpg"),
        stage: "In-Training",
        type: "Data",
        digivolution: "Punimon",
        preDigivolution: "Poyomon"
    },

    {
        id: "Tsunomon",
        name: "Tsunomon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/111-tsunomon.jpg"),
        stage: "In-Training",
        type: "Data",
        digivolution: "Punimon",
        preDigivolution: "Punimon"
    },

    {
        id: "Tanemon",
        name: "Tanemon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/103-tanemon.jpg"),
        stage: "In-Training",
        type: "Data",
        digivolution: "punimon",
        preDigivolution: "Yuramon"
    },

    /*Rookie Stage Digimon*/

     /*Koromon digivolution*/
    {
       
        id: "Agumon",
        name: "Agumon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/1-agumon.jpg"),
        stage: "Rookie",
        type: "Vaccine",
        digivolutions:{
            greymon:"Greymon",
            meramon:"Meramon",
            birdramon:"Birdramon",
            centarumon:"Centarumon",
            monochromon:"Monochromon",
            tyrannomon:"Tyrannomon",
        },
        preDigivolution: "Koromon"
    },

         /*Koromon digivolution*/
    {
        id: "Gabumon",
        name: "Gabumon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/29-gabumon.jpg"),
        stage: "Rookie",
        type: "Data",
        digivolutions:{
            centarumon:"Centarumon",
            monochromon:"Monochromon",
            drimogemon:"Drimogemon",
            tyrannomon:"Tyrannomon",
            ogremon:"Ogremon",
            garurumon: "Garurumon",
        },
        preDigivolution: "Koromon"
    },

    /*Tanemon digivolution*/

    {
        id: "Palmon",
        name: "Palmon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/78-palmon.jpg"),
        stage: "Rookie",
        type: "Vaccine",
        digivolutions:{
            kuwagamon:"Kuwagamon",
            vegiemon:"Vegiemon",
            ninjamon:"Ninjamon",
            whamon:"Whamon",
            coelamon:"Coelamon",
        },
        preDigivolution: "Tanemon"
    },

    /*Tanemon digivolution*/

    {
        id: "Betamon",
        name: "Betamon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/8-betamon.jpg"),
        stage: "Rookie",
        type: "Virus",
        digivolutions:{
            seadramon:"Seadramon",
            whamon:"Whamon",
            shellmon: "Shellmon",
            coelamon:"Coelamon",
        },
        preDigivolution: "Tanemon"
    },

    /*Tokomon digivolution*/

    {
        id: "Biyomon",
        name: "Biyomon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/10-biyomon.jpg"),
        stage: "Rookie",
        type: "Vaccine",
        digivolutions:{
            birdramon:"Birdramon",
            airdramon:"Airdramon",
            kokatorimon:"Kokatorimon",
            unimon:"Unimon",
            kabuterimon:"Kabuterimon",
        },
        preDigivolution: "Tokomon"
    },

    /*Tokomon digivolution*/

    {
        id: "Patamon",
        name: "Patamon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/80-patamon.jpg"),
        stage: "Rookie",
        type: "Data",
        digivolutions:{
            drimogemon:"Drimogemon",
            tyrannomon:"Tyrannomon",
            ogremon:"Ogremon",
            leomon:"Leomon",
            angemon:"Angemon",
            unimon:"Unimon"
        },
        preDigivolution: "Tokomon"
    },

    /*Tsunomon digivolution*/

    {
        id: "Elecmon",
        name: "Elecmon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/24-elecmon.jpg"),
        stage: "Rookie",
        type: "Data",
        digivolutions:{
            leomon:"Leomon",
            angemon:"Angemon",
            bakemon: "Bakemon",
            kabuterimon:"Kabuterimon",
        },
        preDigivolution: "Tsunomon"
    },

    /*Tsunomon digivolution*/

    {
        id: "Penguinmon",
        name: "Penguinmon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/81-penguinmon.jpg"),
        stage: "Rookie",
        type: "Data",
        digivolutions:{
            whamon:"Whamon",
            shellmon: "Shellmon",
            garurumon:"Garurumon",
            fridgimon: "Frigimon",
            mojyamon:"Mojyamon"
        },
        preDigivolution: "Tsunomon"
    },

    /*Tsunomon digivolution*/
    {
        id: "Kunemon",
        name: "Kunemon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/51-kunemon.jpg"),
        stage: "Rookie",
        type: "Data",
        digivolutions:{
            bakemon: "Bakemon",
            kabuterimon:"Kabuterimon",
            kuwagamon:"Kuwagamon",
            vegiemon:"Vegiemon",
        },
        preDigivolution: {
            koromon:"Koromon",
            tanemon:"Tanemon",
            tokomon:"Tokomon",
            tsunomon:"Tsunomon",
        },
    },


    /*Champion Stage Digimon*/

     /*Agumon digivolution*/
    {
        id: "Greymon",
        name: "Greymon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/37-greymon.jpg"),
        stage: "Champion",
        type: "Vaccine",
        digivolutions:{
            metalGreymon:"MetalGreymon",
            skullGreymon:"SkullGreymon"
        },
        preDigivolution: "Agumon"
    },

     /*Agumon digivolution*/
     {
        id: "Meramon",
        name: "Meramon",
        image: new URL("https://www.grindosaur.com/img/games/digimon-world/digimon/59-meramon.jpg"),
        stage: "Champion",
        type: "Data",
        digivolutions:{
            metalGreymon:"MetalGreymon",
            skullGreymon:"SkullGreymon"
        },
        preDigivolution: "Agumon"
    },
   
]

/*
function getLinkedDigimon(digimonId, propertyName) {
  const digimonA = digimonList.find((digimon) => digimon.id === digimonId);
  if (!digimonA) throw new Error("Digimon not found with id " + digimonId);
  if (!digimonA[propertyName]) return null;

  const digimonB = digimonList.find((digimon) => digimon.id === digimonA[propertyName]);
  if (!digimonB) throw new Error("Digimon link not found with id " + digimonA[propertyName]);
  return digimonB;
} 
*/
console.log(digiList)


