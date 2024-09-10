function Cat(name) {
    var cats = {};
    cats.name = name;
    cats.tiredness = Math.floor(Math.random() * 101);
    cats.hunger = Math.floor(Math.random() * 101);
    cats.loneliess = Math.floor(Math.random() * 101);
    cats.happiness = Math.floor(Math.random() * 101);
    cats.feed = feed;
    cats.pet = pet;
    cats.sleep = sleep;
       return cats
}


const feed = function () {
    if (this.hunger > 50) {
        this.happiness++;
        this.hunger--;
        return this.name + " done eating";
    } else {
        return this.name + " is not hungry";
    }
};

const pet = function () {
    if (this.happiness < 50) {
        this.happiness++;
        if (this.loneliess < 100 && this.loneliess > 50) {
            this.loneliess--;
        }
        if (this.tiredness > 0 && this.tiredness < 50) {
            this.tiredness++;
        }
        return this.name + " is happy";
    }
    return "Go away! ";
};

const sleep = function () {
    if (this.hunger === 0 || this.tiredness > 50) {
        this.happiness++;
        this.hunger++;
        this.tiredness--;
        return this.name + "ZZZZZZzzzzzz";
    } else {
        return "I don't need to sleep ";
    }
};

var cat = Cat("sam")
cat.feed()
cat.sleep()
cat.pet()
let CatName = "sasa"
let YourCat
let loopToChangeCatStatus

$("body").append('<div id="startgamepage"></div>')

$("#startgamepage").append('<img id= "catpage1" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExejJ4enc2MWdhZ3phbWV6czR1cmI5bDF6cmF4dWFsaDRyYWV3ejdjayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/6669Ciz8gm6tcwI4Wj/giphy.webp"/>')

$("#startgamepage").append('<form id="catNameForm"></form>')
$("#catNameForm").append('<input id="CatName" placeholder="Insert Your Cat Name">')
$("#catNameForm").append('<button id="startgame" type="submit"> Start game </button>')


//div of the first game page's content: id="firstGamePage"

$(document).ready(function () {


    $("#catNameForm").submit(function (event) {
        event.preventDefault();
        CatName = $('#CatName').val()
        var CatN = $(`<h1 id="greeting cat"> Your Cat Name is ${CatName}</h1>`)
        $("#startgamepage").empty()
        $("#GameName").hide()
        $("#firstGamePage").append(CatN)
        $("#firstGamePage").append('<button id="feedButton">Feed your cat</button>')
        $("#firstGamePage").append('<button id="petButton">Pet your cat</button>')
        $("#firstGamePage").append('<button id="sleepButton">Put your cat to sleep</button>')
        $("#firstGamePage").append(`<img id="landingPageCat" src="./images/happycat.webp">`)

        YourCat = Cat(CatName)
        console.log(YourCat)
        
$("#sleepButton").on("click",function(){
    $("#landingPageCat").attr('src','./images/sleepingcat.webp')
    YourCat.sleep()


})
$("#feedButton").on("click",function(){
    $("#landingPageCat").attr('src','./images/hungrycat.webp')
    YourCat.feed()

})

$("#petButton").on("click",function(){
    $("#landingPageCat").attr('src','./images/happycat.webp')
    YourCat.pet()

})

    })

        $("#feedButton").on("click",function(){
            YourCat.feed()
            changeCatImage();
        })
        $("#sleepButton").on("click",function(){
            YourCat.sleep()
            changeCatImage();
        })
        
        $("#petButton").on("click",function(){
            YourCat.pet()
            changeCatImage();
        })



        
//to change the cat image depending on its state

function changeCatImage(){
  
    if(YourCat.happiness<50){
$("#landingPageCat").attr('src','./images/sadcat.webp')

    }
    if(YourCat.hunger>=50){
        $("#landingPageCat").attr('src','./images/hungrycat.webp')
        YourCat.feed()
    }
    if(YourCat.tiredness>=50){
        $("#landingPageCat").attr('src','./images/tiredcat.webp')
    }
    else "your cat is happy" 
}

changeCatImage()

})



//new div for the first page
$("body").append('<div id="firstGamePage"></div>')

//to show the first random state of the cat

function changeCatStatus(){
    setInterval(function(){
$("#Happiness").text(YourCat.happiness)
$("#hunger") .text(YourCat.hunger)
$("#tiredness") .text(YourCat.tiredness)

    },3000)

}

changeCatStatus()




function disableButtons() {
    $('#feedButton').prop('disabled', YourCat.sleep)
    $('#petButton').prop('disabled', YourCat.sleep)
    $('#sleepButton').prop('disabled', YourCat.sleep)
}
disableButtons()





















$("#CatName").css({ "padding": "15px 25px", "align-items": "center", "justify-content": "center" })
$("#GameName").css({ "text-align": "center", "background-color": "lightorange" })
$("#startgame").css({
    "display": "inline-block", "cursor": "pointer", "padding": "15px 25px", "text-align": "center",
    "color": "#fff", "background-color": "#aa6a04", "border-radius": "15px", "border-radius": "15px 15px #aa0404", "box-shadow": "0 9px #999"
})
$("#catpage1").css({ "align-items": "center" })
$("#greeting cat").css({ "text-align": "center" })
