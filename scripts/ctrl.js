function setHead()
{
    var rand = Math.floor((Math.random() * 10) + 1);

    switch(rand) {
    case 1:
        $('.slogan').attr('data-value', "Oh, You're back...");
        break;
    case 2:
        $('.slogan').attr('data-value', "Welcome to the internet...");
        break;
    case 3:
        $('.slogan').attr('data-value', "Welcome Back...");
        break;
    case 4:
        $('.slogan').attr('data-value', "You should at least come by more often...");
        break;
    case 5:
        $('.slogan').attr('data-value', "Just know that I watch you fap...");
        break;
    case 6:
        $('.slogan').attr('data-value', "Sometimes I forget to eat...");
        break;
    case 7:
        $('.slogan').attr('data-value', "I feel like I die a little bit everyday...");
        break;
    case 8:
        $('.slogan').attr('data-value', "I worry about things too much...");
        break;
    case 9:
        $('.slogan').attr('data-value', "Maybe I just got gas or something...");
        break;
    default:
        $('.slogan').attr('data-value', "Can I have some vitamins?...");
        break;
    }
}//setHead


function getTimeOfDay()
{
    var now = new Date();
    var hour = now.getHours();
    return hour;
}

function timeControl()
{
    var time = getTimeOfDay();
    if (time < 04){
        $('.subtitle').attr('data-value', "You should be sleeping right now");
    } else if (time < 07) {
        $('.subtitle').attr('data-value', "It's too early to be up right now, don't you think?");
    } else if (time < 10) {
        $('.subtitle').attr('data-value', "Good Morning by the way.");
    } else if (time < 15) {
        $('.subtitle').attr('data-value', "Good Day");
    } else if (time < 18) {
        $('.subtitle').attr('data-value', "Good Afternoon");
    } else if (time < 19) {
        $('.subtitle').attr('data-value', "Getting Dark isn't it?");
    } else if (time < 20) {
        $('.subtitle').attr('data-value', "Good Evening");
    } else {
        $('.subtitle').attr('data-value', "Better get going to bed.");
    }
}//timeCtrl

$(function() {
    setHead();
    timeControl();
});//docReady
