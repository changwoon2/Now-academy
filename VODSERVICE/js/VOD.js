//이벤트 호출시 넘어오는 인라인 이벤트의 매개변수값을 인지할것

//슬라이드 인덱스 초기 변수값을설정
var slideIndex = 1;
//슬라이드 이미지 구현 함수를 자동호출
//하단 구현한 showSlide함수는 무조건 매개변수값 1로시작 = 첫번째 이미지가 무조건 이미지 슬라이드의 첫번째화면에 나오게 하기 위해
showSlide(slideIndex);

// 인라인 이벤트 호출 좌우 화살표 이벤트로 이미지바꾸기 | 매개변수값은 -1,1
function plusSlides(num){
    showSlide(slideIndex += num);
    console.log('슬라이드 인덱스값 : ' + slideIndex);
}
/*작은원 눌렀을때 해당이미지슬라이드 나오기 | 매개변수 값 123*/
function currentSlides(num){
    showSlide(slideIndex = num);
    console.log('작은원 슬라이드 인덱스값 : ' + slideIndex);
}

/*선언적함수 실제 동작 슬라이드 함수 | 호출시 num 매개변수 초기값 1로부터 시작*/
function showSlide(num) {
    var i;
    var slide = $('.slide');
    var dot = $('.dot');
    console.log(slide.length);
    //1. 좌우화살표 클릭시 이미지 슬라이드 구현
    if (num > slide.length) {
        /*만약, 매개변수값이 3보다 크게 되면 무조건 변수값1로세팅*/
        /*(num > 3이상이되면 slideIndex값 1로세팅)*/
        slideIndex = 1;
    }
    /*(num < 1)좌우 화살표의 초기값은 0임.==> slideIndex=3이됨*/
    if(num < 1) {
        slideIndex = slide.length;
    }

    //2-1. 모든 슬라이드 이미지를 가려줌
    for(i=0; i<slide.length; i++){
        $('.slide').eq(i).css({'display':'none'});
    
    //2-2. 슬라이드 이미지중 첫번째 이미지 로딩하기 eq(1-1=0)
    //2-3. 모든슬라이드 이미지 이벤트 매개변수값에 따라서 보여줌
        $('.slide').eq(slideIndex-1).css({'display':'block'});
    
    /*3 선택되어 있는 이미지슬라이드 작은원색 red로 하기*/
        $('.dot').eq(slideIndex-1).css({'background-color':'red'});
        $('.dot').eq(slideIndex-2).css({'background-color':'blue'});
        $('.dot').eq(slideIndex-3).css({'background-color':'black'});
        $('.dot').eq(slideIndex-4).css({'background-color':'green'});
        $('.dot').eq(slideIndex-5).css({'background-color':'pink'});
    }
}
