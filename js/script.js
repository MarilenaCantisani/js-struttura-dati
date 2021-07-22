/* -------------------------------------------------------------------------- */
/*                                    MAGIC                                   */
/* -------------------------------------------------------------------------- */

//* Link variable to an html id element: 
const cardElement = document.getElementById("card");

//* Describe the structure of the playing card "magic"
const cardMagic = {
    idCard: 1,
    name: "Bloodfire Colossus",
    castingCost: ["6", "R", "R"],
    typeCard: "Creature",
    subtypeCard: "Giant",
    symbolOfExpansion: {
        reprintId: 9,
        name: "Jump Start",
        colorRarity: "golden"
    },
    skills: [
        {
            castingCost: ["R", "T"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores, quisquam esse impedit ex suscipit eos quidem nobis hic quis cupiditate et est provident eum fugit repellat veniam praesentium ipsum."
        },
        {
            castingCost: ["W", "B", "T"],
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolores, quisquam esse impedit ex suscipit eos quidem nobis hic quis cupiditate et est provident eum fugit repellat veniam praesentium ipsum."
        }
    ],
    flavorText: {
        quote: "Nicely done, face. You always were good at disappearing acts",
        author: "Liliana Vess"
    },
    numberOfCollection: "177/350",
    strength: 13,
    constitution: 13,
    borderCardColor: "black",
    illustration: {
        author: {
            name: "Greg Staples"
        },
        imageSource: "https://cdn.cardsrealm.com/images/cartas/crop/10e-tenth-edition/bloodfire-colossus-191-med.jpeg?755"
    },
};

console.log(cardMagic);

/* --------------------------------- CHECKS --------------------------------- */
// Verify the presence of the property "subtype"
let subtype = cardMagic.subtypeCard ? `- ${cardMagic.subtypeCard}` : "";

//TODO: Verify the presence of "skills"!!


/* ------------------------------ PRINT IN HTML ----------------------------- */
let cardTemplate = `
<ul class = "card-magic">
    <li><strong>ID Card:</strong> ${cardMagic.idCard} </li>
    <li><strong>Name:</strong> ${cardMagic.name} </li>
    <li><strong>Casting Cost:</strong> ${cardMagic.castingCost.join(".")} </li>
    <li><strong>Type Card:</strong> ${cardMagic.typeCard} ${subtype} </li>
    <li><strong>Expansion:</strong> 
        <ul>
            <li><strong>Reprint Id:</strong> ${cardMagic.symbolOfExpansion.reprintId} </li>
            <li><strong>Expansion Name:</strong> ${cardMagic.symbolOfExpansion.name} </li>
            <li><strong>Color Rarity:</strong> ${cardMagic.symbolOfExpansion.colorRarity} </li>
        </ul>
    </li>
    <li><strong>Skills:</strong> 
        <ul>  
            <li><strong>Casting Cost:</strong> ${cardMagic.skills[0].castingCost.join(".")} </li>   
            <li><strong>Description:</strong> ${cardMagic.skills[0].description} </li>
            <li><strong>Casting Cost:</strong> ${cardMagic.skills[1].castingCost.join(".")} </li>
            <li><strong>Description:</strong> ${cardMagic.skills[1].description} </li>
        </ul>
    </li>
    <li><strong>Flavor Text:</strong> "${cardMagic.flavorText.quote}" - <em>${cardMagic.flavorText.author}</em></li>
    <li><strong>Number Of Collection:</strong> ${cardMagic.numberOfCollection}</li>
    <li><strong>Strength:</strong> ${cardMagic.strength}</li>
    <li><strong>Constitution:</strong> ${cardMagic.constitution}</li>
    <li><strong>Border Card Color:</strong> ${cardMagic.borderCardColor}</li>
    <li><strong>Illustration:</strong> 
        <ul>  
            <li><strong>Author:</strong> <em>${cardMagic.illustration.author.name}</em></li>   
            <li><strong>Image:</strong> ${cardMagic.illustration.imageSource} </li>
        </ul>
    </li>
</ul>
`;

cardElement.innerHTML = cardTemplate;
