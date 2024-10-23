$(document).ready(function () {
    $('div.hidden').fadeIn(2000).removeClass('hidden');
});

var haveRead = '';
    var readCount = 0;

 function read(sectionId){
        $(sectionId).toggleClass('ficVisible', false);
        $(sectionId).toggleClass('fic', false);
        $(sectionId).fadeIn(2000).toggleClass('ficVisible',true);
       
        $(sectionId).css('height', $(window).height() * 0.7);
        if (haveRead.search(sectionId) == - 1){
            haveRead = haveRead + sectionId;
            readCount++;
        }
       
    }
    function fadeout(sectionId){
        if (readCount == 6){
            $('.hope').toggleClass('hopeReady', true);
            $('.hope').toggleClass('hope', false);
            $('.hopeReady').attr("href", "#sloth");
            $('.hopeReady').attr("onclick", "read(\'#sloth\')");
           
        }
        $(sectionId).fadeOut(2000).toggleClass('fic');
    }
    
        function markRead(sectionId){
        $(sectionId + ' > a').toggleClass('read', true);
        $(sectionId + ' > a').toggleClass('vice', false);
    }