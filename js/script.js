/* -------------------------------------------------------------------------- */
/*                                    MAGIC                                   */
/* -------------------------------------------------------------------------- */

//* Link variable to an html id element: 
const cardSection = document.getElementById("card");

//* Create a deck of cards: 
const fullDeckCards = [
    {
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
    },
    {
        idCard: 2,
        name: "Rimbalzo Selvaggio",
        castingCost: ["2", "G", "R"],
        typeCard: "Istantaneo",
        symbolOfExpansion: {
            reprintId: 9,
            name: "Orizzonti di modern",
            colorRarity: "black"
        },
        skills: [
            {
                castingCost: ["R", "G"],
                description: "The creature cannot be blocked"
            }
        ],
        flavorText: {
            quote: "I knew this trick long before your grandmother’s great-grandmother was born.",
            author: "Don Scott"
        },
        numberOfCollection: "157/360",
        strength: 20,
        constitution: 14,
        borderCardColor: "black",
        illustration: {
            author: {
                name: "Richard Garfield"
            },
            imageSource: "https://orgoglionerd.it/wp-content/uploads/2021/03/urza-primo-eroe-magic-the-gathering.jpg"
        },
    },
    {
        idCard: 3,
        name: "Urza's Avenger",
        castingCost: ["4", "R", "B"],
        typeCard: "Artifact Creature",
        subtypeCard: "Giant",
        symbolOfExpansion: {
            reprintId: 9,
            name: "Spirale temporale Remastered",
            colorRarity: "silver"
        },
        skills: [],
        flavorText: {
            quote: "Unable to settle on just on design, Urza decided to create one versatile being",
            author: "Illus, Amy Weber"
        },
        numberOfCollection: "177/350",
        strength: 13,
        constitution: 13,
        borderCardColor: "black",
        illustration: {
            author: {
                name: "Wild Ricochet"
            },
            imageSource: "https://pm1.narvii.com/6059/f7637513957732a65acce4b1d6d353696f079373_hq.jpg"
        },
    }

];



/* ------------------------------ FUNCTION ----------------------------- */
//** Function that creates the card template:
const createCardTemplate = (cardMagic) => {

    /* --------------------------------- CHECKS --------------------------------- */
    // Verify the presence of the property "subtype"
    let subtype = cardMagic.subtypeCard ? `- ${cardMagic.subtypeCard}` : "";

    // Verify the presence of "skills"
    let skillContent = `No skill`;
    if (cardMagic.skills.length) {
        skillContent = "<ul>";
        for (let i = 0; i < cardMagic.skills.length; i++) {
            const currentSkills = cardMagic.skills[i];
            skillContent += `<li><strong>Casting Cost:</strong> ${currentSkills.castingCost.join(".")}</li>`;
            skillContent += `<li><strong>Description:</strong> ${currentSkills.description}</li>`;
        };
        skillContent += "</ul>";
    };

    /* ------------------------------ CARD TEMPLATE ----------------------------- */
    let cardTemplate = `
    <ul class = "card-magic">
    <li><strong>ID Card:</strong> ${cardMagic.idCard} </li>
    <li><strong>Name:</strong> ${cardMagic.name} </li>
        <li><strong>Casting Cost:</strong> ${cardMagic.castingCost.join(".")} </li>
        <li><strong>Type Card:</strong> ${cardMagic.typeCard} ${subtype} </li>
        <li id = "expansion"><strong>Expansion:</strong> 
            <ul>
                <li><strong>Reprint Id:</strong> ${cardMagic.symbolOfExpansion.reprintId} </li>
                <li><strong>Expansion Name:</strong> ${cardMagic.symbolOfExpansion.name} </li>
                <li><strong>Color Rarity:</strong> ${cardMagic.symbolOfExpansion.colorRarity} </li>
            </ul>
        </li>
        <li id = "skills"><strong>Skills:</strong> ${skillContent} </li>
        <li><strong>Flavor Text:</strong> "${cardMagic.flavorText.quote}" - <em>${cardMagic.flavorText.author}</em></li>
        <li><strong>Number Of Collection:</strong> ${cardMagic.numberOfCollection}</li>
        <li><strong>Strength:</strong> ${cardMagic.strength}</li>
        <li><strong>Constitution:</strong> ${cardMagic.constitution}</li>
        <li><strong>Border Card Color:</strong> ${cardMagic.borderCardColor}</li>
        <li id = "illustration"><strong>Illustration:</strong> 
            <ul>  
                <li><strong>Author:</strong> <em>${cardMagic.illustration.author.name}</em></li>   
                <li><strong>Image:</strong><img src="${cardMagic.illustration.imageSource}" ></li>
            </ul>
        </li>
    </ul>
    `;
    return cardTemplate;
};

//** Function that prepares the page printing:
const printFullDeck = (deck, cardElement) => {
    let deckCardsTemplate = "";
    for (let i = 0; i < deck.length; i++) {
        const currentCard = deck[i];
        deckCardsTemplate += createCardTemplate(currentCard);
    }
    cardElement.innerHTML = deckCardsTemplate;
}

/* ------------------------------ PRINT IN HTML ----------------------------- */
printFullDeck(fullDeckCards, cardSection);


/* ----------------------------- FILTER SECTION ----------------------------- */
const inputTextElement = document.getElementById("search-bar");
const selectPropertyElement = document.getElementById("property-filter");
const buttonElement = document.getElementById("button-search");

//* Check the selected property and change the visibility of the text input box: 
selectPropertyElement.addEventListener("change", () => {
    const currentValue = selectPropertyElement.value;
    if (currentValue !== "all") {
        inputTextElement.classList.remove("hidden");
    } else {
        inputTextElement.classList.add("hidden");
    }
});

//* Check what to print on page:
buttonElement.addEventListener("click", () => {
    const inputTextValue = inputTextElement.value;
    const selectPropertyValue = selectPropertyElement.value;

    //Check if the value of the "selected" is "all"
    if (selectPropertyValue == "all") {
        printFullDeck(fullDeckCards, cardSection);
        return;
    };
    //Verify which property has been selected and filter
    const filteredDeckCards = [];
    for (let i = 0; i < fullDeckCards.length; i++) {
        const currentCard = fullDeckCards[i];

        switch (selectPropertyValue) {
            // Properties with numerical value:
            case "idCard":
            case "strength":
            case "constitution":
                if (currentCard[selectPropertyValue] === parseInt(inputTextValue)) {
                    filteredDeckCards.push(currentCard);
                }
                break;

            //Property "Symbol Of Expansion":
            case "symbolOfExpansion-name":
                if (currentCard.symbolOfExpansion.name.includes(inputTextValue)) {
                    filteredDeckCards.push(currentCard);
                }
                break;
            case "symbolOfExpansion-colorRarity":
                if (currentCard.symbolOfExpansion.colorRarity.includes(inputTextValue)) {
                    filteredDeckCards.push(currentCard);
                }
                break;

            //Property "Flavor Text":
            case "flavorText-quote":
                if (currentCard.flavorText.quote.includes(inputTextValue)) {
                    filteredDeckCards.push(currentCard);
                }
                break;
            case "flavorText-author":
                if (currentCard.flavorText.author.includes(inputTextValue)) {
                    filteredDeckCards.push(currentCard);
                }
                break;

            //Property "Illustration":
            case "illustration-author-name":
                if (currentCard.illustration.author.name.includes(inputTextValue)) {
                    filteredDeckCards.push(currentCard);
                }
                break;

            //TODO: Property "Skills":
            /* case "skills-castingCost":
                for (let i = 0; i < currentCard.skills.length; i++) {
                    if (currentCard.skills[0].castingCost.includes(inputTextValue)) {
                        filteredDeckCards.push(currentCard);
                    }
                }
                break;*/

            // Properties with string value or string array:
            default:
                if (currentCard[selectPropertyValue].includes(inputTextValue)) {
                    filteredDeckCards.push(currentCard);
                }
                break;
        }
    };
    printFullDeck(filteredDeckCards, cardSection);
});

