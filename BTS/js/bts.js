//버튼 스크립트 CSS
$('figure').find('button').css({
background:'none',
border:'none',
position:'absolute',
right:'400px',
top:'50px',
cursor:'pointer'
});
$('figure').find('button').eq(0).css({
right:'540px'
});
$('figure').find('button').eq(1).css({
right:'470px'
});
$('figure').find('i').css({
/* fontSize:'30px',*/
'font-size':'30px',
color:'hotpink'
});

//동영상 재생 스크립트 : 재생->play(),일시정지->pause(),정지->load()
$('figure button').eq(0).click(function(){
$('figure').find('video').get(0).play();
});
$('figure button').eq(1).click(function(){
$('figure').find('video').get(0).pause();
});
$('figure button').eq(2).click(function(){
$('figure').find('video').get(0).load();
});
$('figure button').eq(0).click(function(){
$('header,#sns,.txt,#side,.arrbtn').hide();
});
$('figure button').eq(1).click(function(){
$('header,#sns,.txt,#side,.arrbtn').show();
});
$('figure button').eq(2).click(function(){
$('header,#sns,.txt,#side,.arrbtn').show();
});


