let cast = {
    "characters" : [
        {
            "name":"Akshay Kumar",
            "shortCode": "akshay-kumar",
            "location": "Mumbai"
        },
        {
            "name":"Amitji",
            "shortCode": "amitji",
            "location": "Mumbai"
        },
        {
            "name":"Vidya Balan",
            "shortCode": "vidya",
            "location": "Mumbai"
        },
        {
            "name":"Ajay",
            "shortCode": "ajay",
            "location": "Mumbai"
        },
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
})
