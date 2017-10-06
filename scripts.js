//===============================================================================================
//===============================================================================================


//RIPPLE EFFECT FOR CHECKBOXES
//JQUERY
// function blip(){
//     $('.styled-box').on('click', function(){
//         $(this).parent($('div[class^="col"]'))
//             .find($('.blip')).addClass('blipped')
//             .find($(''))
            
//         $('.blip').on('animationend', function(){
//             $(this).parent($('div[class^="col"]')).find($('.blip')).removeClass('blipped');
//         });
//     });
// };


//VANILLA JS

//BLANK VARIABLES ARE POPULATED FROM FUNCTION
var findBlip;
var blipped;
var checkboxes = document.querySelectorAll('.styled-checkbox');
var radiosButtons = document.querySelectorAll('.styled-radio');


function handleCheckTwo(e){
    findBlip = this.parentElement.querySelectorAll('.blip');
    findBlip.forEach(blip => blip.classList.add('blipped'));
    setTimeout(function(){
        findBlip.forEach(blip => blip.classList.remove('blipped'));
    }, 520);
}

//EVENT LISTENERS
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheckTwo));
// checkboxes.forEach(function(checkbox){
//     return checkbox.addEventListener('click', handleCheckTwo);
// });
radiosButtons.forEach(radio => radio.addEventListener('click', handleCheckTwo));



//===============================================================================================
//===============================================================================================

var loadedActive = document.querySelector('li.active');
var newWidth;
var newLeft;
var activeTab;
var lineUnder = document.querySelector('.tab-follower');
var navLinks = document.querySelectorAll('.nav-tabs>li>a');


function setOnLoad(){
    newWidth = `${loadedActive.offsetWidth}px`;
    newLeft = `${loadedActive.offsetLeft}px`;
    lineUnder.style.width = newWidth;
    lineUnder.style.left = newLeft;
}

function setWidth(e){
    activeTab = this.parentElement;
    newWidth = `${activeTab.offsetWidth}px`;
    newLeft = `${activeTab.offsetLeft}px`;
    lineUnder.style.width = newWidth;
    lineUnder.style.left = newLeft;
}


//EVENT LISTENERS
navLinks.forEach(link => link.addEventListener('click', setWidth));

setOnLoad();