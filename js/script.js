let cast = {
    "characters" : [
        {
            "name":"Akshay Kumar",
            "location": ""
        },
        {
            "name":"Amitji",
            "shortCode": "amitji",
        },
        {
            "name":"Vidya Balan",
            "shortCode": "vidya",
            "location": null
        },
        {
            "name":"Ajay",
            "shortCode": "ajay",
            "location": false
        },
        {
            "name":"Kajol",
            "shortCode": "kajol",
            "location": undefined,
            "house": "Somewhere"
        },
        {
            "name":"Kishor",
            "shortCode": "kishor",
            "location": "Delhi"
        }
    ]
}

let cities = {
    "cities":[
        "Rajkot",
    "Ahmedabad",
    "Junagadh"
]
}

$(document).ready(function (){
    let characterTemplate=$("#character-template1").html();
    let compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container1").html(compiledCharacterTemplate(cast.characters[1]))


    characterTemplate=$("#character-template2").html();
    compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container2").html(compiledCharacterTemplate(cast))


    characterTemplate=$("#character-template3").html();
    compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container3").html(compiledCharacterTemplate(cities))

    characterTemplate=$("#character-template4").html();
    compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container4").html(compiledCharacterTemplate(cast))

    characterTemplate=$("#character-template5").html();
    compiledCharacterTemplate = Handlebars.compile(characterTemplate);
    $(".character-list-container5").html(compiledCharacterTemplate(cast))
})
