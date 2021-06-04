;(function($){
    
    var litho = {
        btn:0,  //헤더 영역에서 모바일 버튼 클릭시 변경
        //ba:true, 이렇게 전역변수를 선언도 가능하다 모둔 메서드안에서 사용! ,로 구분해서 저아래 여러개쓰기 가능
        init:   function(){
            this.scrollEventFn();
            this.headerFn();
            this.section1Fn();
            this.section2Fn();
            this.section3Fn();
            this.section4Fn();
            this.section5Fn();
            this.section6Fn();
            this.section7Fn();
            this.section8Fn();
            this.section9Fn();
            this.section10Fn();
            this.footerFn();
            this.smoothScrollFn();
            this.demoModalFn();
        },
        scrollEventFn:  function(){ //자세한 설명 및 주석 (03_10_project_themezza_litho_네비반응형,스크롤이벤트)
            var scrollPrev = 0;
            var scrollCurrent = 0;
            var $window = $(window);
            var result = null;
            var that = this;

            function wheelPositionFn(){
                result = scrollPrev - scrollCurrent > 0 ? 'up' : 'down' //이 결과값 문자의 경우 대소문자 구분함
                return {
                    result,
                    scrollPrev,
                    scrollCurrent
                }
            }

            $window.scroll(function(){  //추가 설명 및 주석 (03_11_project_themezza_litho_스크롤이벤트)
                scrollCurrent = $(this).scrollTop();
                wheelPositionFn();

                if(scrollCurrent <= 10){
                    $('#header').removeClass('addHide');            //top:-80px 으로 만들어주는 클래스
                    $('#header').removeClass('addBlack');           //헤더의 배경을 검정으로 만들어주는 클래스
                    $('#header').removeClass('addWhite');           //사이드와 햄버거색상을 흰색으로 만들어주는 클래스
                }
                else {
                    if( result == 'down'){
                        //모바일 햄버거 버튼이 클릭된 상태의 이벤트
                        if(that.btn == 1){                          //버튼이 클릭되고 스크롤이 내려가면 
                            $('#header').removeClass('addHide');    //헤더영역은 고정되어있어야하고
                            $('#header').removeClass('addBlack');   //헤더색상은 흰색이여야하며
                            $('#header').addClass('addWhite');      //사이드와 햄버거색상이 흰색이되어서 안보여야한다.
                        }
                        //모바일 햄버거 버튼이 클릭 안 된 상태의 이벤트
                        else{                                       //버튼이 클릭되지않고 스크롤이 내려가면
                            $('#header').addClass('addHide');       //헤더는 top:-80px 이 되어 사라져야하고
                            $('#header').removeClass('addBlack');   //헤더가 사라졌으니 다른 추가 클래스들도 다 사라져야한다
                            $('#header').removeClass('addWhite');
                        }
                    }
                    if( result == 'up'){
                        //모바일 햄버거 버튼이 클릭된 상태의 이벤트
                        if(that.btn == 1){                          //버튼이 클릭되고 스크롤이 올라가면
                            $('#header').removeClass('addHide');    //헤더영역은 고정되어있어야하고
                            $('#header').addClass('addBlack');      //배경색은 검정으로 변하고
                            $('#header').addClass('addWhite');      //사이드와 햄버거 색상이 흰색이되어서 보여야한다
                        }
                        //모바일 햄버거 버튼이 클릭 안 된 상태의 이벤트
                        else{                                       //버튼이 클릭되지않고 스크롤이 올라가면
                            $('#header').removeClass('addHide');    //헤더영역은 고정되어있어야하고
                            $('#header').addClass('addBlack');      //그 배경색은 검정이여야하고
                            $('#header').addClass('addWhite');      //사이드와 햄버거 색상이 흰색이되어서 보여야한다.
                        }
                    }
                }

                scrollPrev = scrollCurrent;
            });
        },
        headerFn:   function(){
            //메인메뉴, 서브메뉴 객체와 배열
            var lithoNav = {
                sub1:[
                    {sub:["Corporate","Startup","Business","Corporate","Finance","Application","Consulting","Digital agency","SEO agency","Events & conference","Marketing agency"]},
                    {sub:["Specialized","Restaurant","Architecture","Hotel & resort","Travel agency","Yoga & meditation","Gym & fitness","Spa salon","Cafe","Home decor","Interior design"]},
                    {sub:["Portfolio","Design agency","Web agency","Creative agency","Freelancer","Branding agency","Photography","Personal portfolio","Vertical portfolio","Interactive portfolio","Split portfolio","Creative portfolio"]},
                    {sub:["Other","Furniture shop","Fashion shop","Magazine","Lifestyle blog","Classic blog","Blog metro"]}
                ],
                sub2:[
                    {sub:"About", subsub:["About me","About us","Our story","Who we are"]},
                    {sub:"Services", subsub:["Our services","What we offer","Our process"]},
                    {sub:"Contact", subsub:["Contact simple","Contact classic","Contact modern"]},
                    {sub:"Additional pages", subsub:["Our team","Latest news","Pricing packages","Error 404","Maintenance","Coming soon","Coming soon - V2","FAQ's","Search result"]}
                ],
                sub3:[
                    {sub:"Portfolio classic",subsub:["Classic 2 column","Classic 3 column","Classic 4 column","Classic masonry","Classic metro"]},
                    {sub:"Portfolio boxed",subsub:["Boxed 2 column","Boxed 3 column","Boxed 4 column","Boxed masonry","Boxed metro"]},
                    {sub:"Portfolio colorful",subsub:["Colorful 2 column","Colorful 3 column","Colorful 4 column","Colorful masonry","Colorful metro"]},
                    {sub:"Portfolio bordered",subsub:["Bordered 2 column","Bordered 3 column","Bordered 4 column","Bordered masonry","Bordered metro"]},
                    {sub:"Portfolio overlay",subsub:["Overlay 2 column","Overlay 3 column","Overlay 4 column","Overlay masonry","Overlay metro"]},
                    {sub:"Portfolio switch image",subsub:["Switch image 2 column","Switch image 3 column","Switch image 4 column","Switch image masonry","Switch image metro"]},
                    {sub:"Portfolio other",subsub:["Portfolio scattered","Justified gallery","Portfolio slider"]},
                    {sub:"Single project page",subsub:["Single project page 01","Single project page 02","Single project page 03","Single project page 04","Single project page 05"]},
                ],
                sub4:[
                    {sub:["General","Accordions","Buttons","Team","Team carousel","Clients","Client carousel","Subscribe","Call to action","Tab","Google map","Contact form","Image gallery"]},
                    {sub:["Content & infographics","Progress bar","Icon with text","Over line icon box","Custom icon with text","Counters","Countdown","Pie charts","Fancy text box","Text box","Fancy text"]},
                    {sub:["Interactive","Testimonials","Testimonials carousel","Video","Interactive banners","Services","Info banner","Rotate box","Process step","Instagram","Parallax scrolling","Text slider"]},
                    {sub:["Text & containers","Heading","Drop caps","Columns","Blockquote","Highlights","Message box","Social icons","Lists","Separators","Pricing table"]},
                ],
                sub5:[
                    {
                        sub:"Header and menu",
                        subsub:["Transparent header","White header","Dark header","Header with top bar","Header with push","Center navigation","Center logo","Top logo","One page navigation","Hamburger menu","Left menu","Header type","Mobile menu"],
                        subsubsub:{
                            subsubsub1:["Hamburger menu","Hamburger menu modern","Hamburger menu half"],
                            subsubsub2:["Left menu classic","Left menu modern"],
                            subsubsub3:["Always fixed","Disable fixed","Reverse scroll","Responsive sticky"],
                            subsubsub4:["Classic","Modern","Full screen"],
                        }
                    },
                    {
                        sub:"Footer",
                        subsub:["Footer style 01","Footer style 02","Footer style 03","Footer style 04","Footer style 05","Footer style 06","Footer style 07","Footer style 08","Footer style 09","Footer style 10","Footer style 11","Footer style 12"]
                    },
                    {
                        sub:"Page title",
                        subsub:["Left alignment","Right alignment","Center alignment","Colorful style","Big typography","Parallax background","Separate breadcrumbs","Gallery background","Background video","Mini version"]
                    },
                    {
                        sub:"Modal popup",
                        subsub:["Simple modal","Subscription","Contact form","Youtube video","Vimeo video","Google map"]
                    },
                    {
                        sub:"Icon packs",
                        subsub:["Icons mind line","Icons mind solid","Feather","Font awesome","ET line","Themify","Simple line"]
                    },
                    {sub:"Animations"}
                ],
                sub6:[
                    {sub:"Blog grid"},
                    {sub:"Blog masonry"},
                    {sub:"Blog classic"},
                    {sub:"Blog simple"},
                    {sub:"Blog side image"},
                    {sub:"Blog metro"},
                    {sub:"Blog overlay image"},
                    {sub:"Blog modern"},
                    {sub:"Blog clean"},
                    {sub:"Blog widget"},
                    {sub:"Blog standard"},
                    {sub:"Post layout",subsub:["Blog post layout 01","Blog post layout 02","Blog post layout 03","Blog post layout 04","Blog post layout 05"]},
                    {sub:"Post types",subsub:["Standard post","Gallery post","Slider post","HTML5 video post","Youtube video post","Vimeo video post","Audio post","Blockquote post","Full width post"]}
                ],
                sub7:[
                    {sub:["Shop layout","Shop wide","Left sidebar","Right sidebar","Only categories","Single product","Utility pages","Shopping cart","Checkout","Login / Register"]},
                    {sub:["menu-banner-01.jpg"]},
                    {sub:["menu-banner-02.jpg"]}
                ]
            } //litho = {} 객체 끝

            //메인메뉴, 서브, 서브서브,서브서브서브 집어넣기 (행자동화, 모두 나열화 , 필기 한거는 03_02_project_themezza_litho_객체와배열_네비게이션_객체배열적용_나열하기 와
            // 03_02_project_themezza_litho_객체와배열_네비게이션_객체배열적용_자동화 참고)
            function subArrayFn(){ 
                //서브1 코딩 
                var $col = $('#nav .col');
                var txt = '';
                    for(var i in lithoNav.sub1){
                        for(var j in lithoNav.sub1[i].sub){
                            if(j == 0){
                                txt += "<dt>" + lithoNav.sub1[i].sub[j] + "</dt>"; 
                            }
                            else{
                                txt += "<dd><a href='#'>" + lithoNav.sub1[i].sub[j] + "</a></dd>";
                            }
                        }
                        $col.eq(i).html(txt); 
                        txt = '';
                    }


                //서브2 코딩 
                var $sub2Btn = $('#nav .sub2 .sub-btn');
                var $sub2Sub = $('#nav .sub2 .subsub');
                        
                    for(var i in lithoNav.sub2){
                        txt = lithoNav.sub2[i].sub + "<i class='fas fa-angle-right'></i>";
                        $sub2Btn.eq(i).html(txt);
                        txt = '';
                        for(var j in lithoNav.sub2[i].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub2[i].subsub[j] + "</a></li>"
                        }
                        $sub2Sub.eq(i).html(txt);
                        txt = '';
                    }


                //서브3 코딩
                var $sub3Btn = $('#nav .sub3 .sub-btn');
                var $sub3Sub = $('#nav .sub3 .subsub');
                var temp = '';
                
                for (var i in lithoNav.sub3){
                        txt = lithoNav.sub3[i].sub  
                        temp = $sub3Btn.eq(i).html();  
                        txt += temp
                        $sub3Btn.eq(i).html(txt);
                        txt ='';
                        for (var j in lithoNav.sub3[i].subsub){
                            txt += "<li><a href='#'>" + lithoNav.sub3[i].subsub[j] + "</a></li>"
                        }
                        $sub3Sub.eq(i).html(txt);
                        txt = '';              
                }


                //서브4번
                var $sub4Menu = $('.sub4 .sub-menu');

                for (var i in lithoNav.sub4){
                    txt = "<dt>" + lithoNav.sub4[i].sub[0] + "</dt>"
                    for (var j=1;j < lithoNav.sub4[i].sub.length;j++){
                        txt += "<dd><a href='#'>" + lithoNav.sub4[i].sub[j] + "</a></dd>"
                    }
                    $sub4Menu.eq(i).html(txt);
                    txt = '';
                }


                //서브 5번
                var $sub5Btn = $('.sub5 .sub-btn');
                var $sub5Menu = $('.sub5 .sub-menu');

                for (var i in lithoNav.sub5){
                    txt = lithoNav.sub5[i].sub;
                    temp = $sub5Btn.eq(i).html();
                    txt+=temp;
                    $sub5Btn.eq(i).html(txt);
                    txt='';

                    if (i==0){
                        for (var j in lithoNav.sub5[i].subsub){
                            if (j < 9){
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[i].subsub[j]  + "</a></li>";
                            }
                            else {
                                txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[i].subsub[j]  + "<i class='fas fa-angle-right'></i></a></li>";
                            }
                        }
                    }
                    else if (i>0 && i<5){
                        for (var j in lithoNav.sub5[i].subsub){
                            txt += "<li><a href='#' class='sub-sub-btn'>" + lithoNav.sub5[i].subsub[j]  + "</a></li>";
                        }
                    }
                    $sub5Menu.eq(i).html(txt);
                    txt = '';
                }

                    //서브서브서브메뉴
                    //서브서브서브메뉴 10번째
                    txt = $('.sub5-sub1 > div > ul > li').eq(9).html(); //10번째 내용 가져오기
                    txt += "<div class='sub-sub-sub sub5-sub1-sub10'>";
                    txt += "<div class='sub-sub-sub-gap'>";
                    txt += "<ul class='subsubsub-menu'>";
                    txt += "<li><a href='#'>Hamburger menu</a></li>";
                    txt += "<li><a href='#'>Hamburger menu modern</a></li>";
                    txt += "<li><a href='#'>Hamburger menu half</a></li>";
                    txt += "</ul>";
                    txt += "</div>";
                    txt += "</div>";
                    //10번째에 서브서브서브 추가하기
                    $('.sub5-sub1 > div > ul > li').eq(9).html(txt);
                    txt = '';
                    
                    //서브서브서브메뉴 11번째
                    txt = $('.sub5-sub1 > div > ul > li').eq(10).html();
                    txt += "<div class='sub-sub-sub sub5-sub1-sub11'>";
                    txt += "<div class='sub-sub-sub-gap'>";
                    txt += "<ul class='subsubsub-menu'>";
                    txt += "<li><a href='#'>Left menu classic</a></li>";
                    txt += "<li><a href='#'>Left menu modern</a></li>";
                    txt += "</ul>";
                    txt += "</div>";
                    txt += "</div>";
                    $('.sub5-sub1 > div > ul > li').eq(10).html(txt);
                    txt = '';

                    //서브서브서브메뉴 12번째
                    txt = $('.sub5-sub1 > div > ul > li').eq(11).html();
                    txt += "<div class='sub-sub-sub sub5-sub1-sub12'>";
                    txt += "<div class='sub-sub-sub-gap'>";
                    txt += "<ul class='subsubsub-menu'>";
                    txt += "<li><a href='#'>Always fixed</a></li>";
                    txt += "<li><a href='#'>Disable fixed</a></li>";
                    txt += "<li><a href='#'>Reverse scroll</a></li>";
                    txt += "<li><a href='#'>Responsive sticky</a></li>";
                    txt += "</ul>";
                    txt += "</div>";
                    txt += "</div>";
                    $('.sub5-sub1 > div > ul > li').eq(11).html(txt);
                    txt = '';

                    //서브서브서브메뉴 13번째
                    txt = $('.sub5-sub1 > div > ul > li').eq(12).html();
                    txt += "<div class='sub-sub-sub sub5-sub1-sub13'>";
                    txt += "<div class='sub-sub-sub-gap'>";
                    txt += "<ul class='subsubsub-menu'>";
                    txt += "<li><a href='#'>Classic</a></li>";
                    txt += "<li><a href='#'>Modern</a></li>";
                    txt += "<li><a href='#'>Full screen</a></li>";
                    txt += "</ul>";
                    txt += "</div>";
                    txt += "</div>";
                    $('.sub5-sub1 > div > ul > li').eq(12).html(txt);
                    txt = '';

                //서브 6
                var $sub6Btn = $('.sub6 .sub-btn');
                var $ul12 = $('.sub6 .sub6-sub12 ul');
                var $ul13 = $('.sub6 .sub6-sub13 ul');

                    //서브메뉴 삽입
                    for(i in lithoNav.sub6){
                        if(i < 11){
                            $sub6Btn.eq(i).html( lithoNav.sub6[i].sub);
                        }
                        else {
                            $sub6Btn.eq(i).html( lithoNav.sub6[i].sub + "<i class='fas fa-angle-right'></i>");
                        }
                    }
                    //서브서브메뉴 삽입
                    for (i in lithoNav.sub6[11].subsub){
                        txt += "<li><a href='#'>" + lithoNav.sub6[11].subsub[i] + "</a></li>"
                    }
                    $ul12.html(txt);
                    txt ='';

                    for (i in lithoNav.sub6[12].subsub){
                        txt += "<li><a href='#'>" + lithoNav.sub6[12].subsub[i] + "</a></li>"
                    }
                    $ul13.html(txt);
                    txt ='';

                //서브7
                var $sub7Dl1 = $('.sub7 dl').eq(0); //dl이 여러개있는데 첫번째에만글씨넣으니까!
                var $sub7Img = $('.sub7 dl img');

                    for(var i in lithoNav.sub7[0].sub){
                        if(i == 0 || i==6){ // || 이게 or의 역할 cf &&가 and
                            txt += "<dt>"+lithoNav.sub7[0].sub[i]+"</dt>";
                        }
                        else {
                            txt += "<dd><a href='#'>"+lithoNav.sub7[0].sub[i]+"</a></dd>";
                        }
                    }
                    $sub7Dl1.html(txt); 
                    txt ='';

                    for(var i=0;i<$sub7Img.length;i++){
                        txt = $sub7Img.eq(i).attr('src');
                        txt += lithoNav.sub7[i+1].sub[0];
                        $sub7Img.eq(i).attr('src', txt);
                        txt ='';
                    }
            }
            subArrayFn();

            //네비게이션 (메뉴들을 다 넣고난뒤에 발생해야하니 하단에 작성)
            var $window = $(window);
            var $mainBtn = $('#header .main-btn');
            var $sub = $('#header .sub');
            var $navArea = $('#nav > ul > li');
            //서브메뉴에 마우스 오버시 서브서브메뉴 등장
            var $subBtn = $('#header .sub-btn');
            var $subSub = $('#header .sub-sub');
            //서브서브메뉴(2nd 서브) 마우스 오버시 서브서브서브메뉴(3rd 서브) 등장
            var $subSubBtn = $('#header .sub-sub-btn');
            var $subSubSub = $('#header .sub-sub-sub');
            //모바일버튼 변수 
            var $mobileBtn = $('#header .mobile-btn');
            var $bar = $('#header .bar');
            var $nav = $('#header #nav');
            var pc = 0;
            var mobile = 0;

            var $logo = $('#header #logo > a > img');

            var that = this; //litho 객체에 선언한 전역변수를 쓰려면 this로 불러와야하는데 이 함수안에서 this를 쓰면 이함수로 인식하니 변수 that으로 받아줘야함
            //자세한 설명 및 주석 (03_10_project_themezza_litho_네비반응형,스크롤이벤트)
            function pcEventFn(){
                // $nav.stop().show();
                // $sub.stop().hide();
                // $subSub.stop().hide();
                // $subSubSub.stop().hide();
                $nav.css({display:'inline-block'});
                $logo.attr('src','./img/logo-white.png');
                

                $mainBtn.on({
                    mouseenter: function(event){
                        event.preventDefault();
                        $(this).next().stop().show();
                    }
                });
                $navArea.on({
                    mouseleave: function(event){
                        event.preventDefault();
                        $sub.stop().hide();
                        $subSub.stop().hide();
                    }
                });

                $subBtn.on({
                    mouseenter: function(event){
                        event.preventDefault();
                        $subSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });

                $subSubBtn.on({
                    mouseenter: function(event){
                        event.preventDefault();
                        $subSubSub.stop().hide();
                        $(this).next().stop().show();
                    }
                });
                $subSub.on({
                    mouseleave: function(event){
                        event.preventDefault();
                        $subSubSub.stop().hide(); 
                    }
                });
            }
            //980px이하에서만 모바일메뉴로 변경, 클릭이벤트필요
            function mobileEventFn(){
                $sub.stop().hide();
                $subSub.stop().hide();
                $subSubSub.stop().hide();
                $bar.removeClass('addMobile');
                $nav.stop().slideUp(0);

                $logo.attr('src','./img/logo-yellow-ochre-alt.png');

                //pcEvent 설정해둔거 삭제하기
                $mainBtn.off('mouseenter');
                $navArea.off('mouseleave');
                $subBtn.off('mouseenter');
                $subSubBtn.off('mouseenter');
                $subSub.off('mouseleave');
            }

            function pcMobileFn(){
                if($window.innerWidth() > 980){
                    pc =1;
                    mobile=0;
                    pcEventFn();
                    that.btn = 0 ; //여기서 초기화해두되고 아님 pcEventFn()에서 초기화해도 가능
                }
                else{
                    pc = 0;
                    mobile=1;
                    mobileEventFn();
                }
            }
            setTimeout(pcMobileFn,100);
            $window.resize(function(){
                pcMobileFn();
            });

            mobileEventFn();

            //버튼 클릭이벤트설정 //버그발생때문에 mobileEventFn에서 빼버렸음, 햄버거메뉴도
            $mainBtn.on({
                click: function(event){
                    event.preventDefault();
                    console.log('mobile', mobile);
                    if(mobile==1){
                        $sub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });
            $subBtn.on({
                click: function(event){
                    event.preventDefault();
                    if(mobile==1){
                        $subSub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });
            $subSubBtn.on({
                click: function(event){
                    event.preventDefault();
                    if(mobile==1){
                        $subSubSub.stop().slideUp(300);
                        $(this).next().stop().slideToggle(300);
                    }
                }
            });
            //햄버거메뉴구동
            $mobileBtn.on({
                click:function(event){
                    event.preventDefault();
                    $bar.toggleClass('addMobile');
                    $nav.stop().slideToggle(300);

                    return that.btn == 0 ? that.btn = 1 : that.btn = 0; //litho상단에서 선언 된 전역변수
                }
            });

        },
        section1Fn: function(){
            var $slide = $('#section1 .slide'); 
            var $window = $(window);            
            var $winW = $(window).width();      
            var $winH = $(window).height();     
            var $section1 = $('#section1');

            var $slideWrap = $('#section1 .slide-wrap'); //슬라이드 넘어가는 이벤트발생 선택자
            var $slideView = $('#section1 .slide-view'); //터치대상이 되는 선택자
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var $pageBtn = $('#section1 .page-btn');
            var cnt = 0;
            var n = $('#section1 .slide').length; 
            var setId = null;
            var setId2 = null;

                //창 높이 창 너비 (자세한주석, 필기_02_24_project_themezza_litho_창넓이높이jq_하위서브메뉴구축
                //                                03_08_project_themezza_litho_반응형,03_09,03_10여기에 최종정리)
                function resizeFn(){
                    $winW = $(window).width();
                    $winH = $(window).height();
                    $slide.css({width:$winW});

                    if(window.orientation == 0 || window.orientation == 180 ){           //portrait
                        $winH = $winH;
                    }

                    else if (window.orientation == 90 || window.orientation == -90){
                        if ($winW > 980){
                            $winH = $winH;
                        }
                        else{
                            $winH = 600;
                        }
                    }
                    $section1.css({width:$winW , height:$winH});

                } 
                resizeFn();
                setTimeout(resizeFn,100);

                $window.resize(function(){
                    setTimeout(resizeFn,100);
                });

                window.addEventListener('',function(){
                    setTimeout(resizeFn,100);
                });

                //메인슬라이드 (자세한주석, 필기_03_03_project_themezza_litho_메인슬라이드_제이쿼리_페이지이동버튼)
                //1.메인슬라이드함수
                // function mainSlideFn(){
                //     $slideWrap.stop().animate({left:-$winW*cnt}, 600,'easeInOutExpo' ,function(){
                //         if(cnt>=n){cnt=0} 
                //         if(cnt<0){cnt=n-1}
                //         $slideWrap.stop().animate({left:-$winW*cnt},0);
                //     });
                //     pageBtnColorEventFn();
                // }

                //1-1.메인 fadeIn fadeOut 함수
                //(1)다음 슬라이드 함수
                function mainNextSlideFn(){
                    $slide.css({ zIndex:1 });   //초기화
                    $slide.eq(cnt==0?n-1:cnt-1).css({ zIndex:2 });     //이전슬라이드
                    $slide.eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},1500);   //현재슬라이드
                    pageBtnColorEventFn();
                }
                //(2)이전 슬라이드 함수
                function mainPrevSlideFn(){
                    $slide.css({ zIndex:1, opacity:1 }); 
                    $slide.eq(cnt).css({ zIndex:2 }); 
                    $slide.eq(cnt==2?0:cnt+1).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},1500);
                    pageBtnColorEventFn();
                }

                //2.다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                    cnt ++;
                    if(cnt>2){cnt=0}
                    mainNextSlideFn(); 
                }
                //2-2.이전 슬라이드 카운트 함수
                function prevSlideCountFn(){
                    cnt --;
                    if(cnt<0){cnt=n-1}
                    mainPrevSlideFn();
                   
                }
                //3.다음 화살 버튼 클릭 이벤트
                $nextBtn.on({
                    click:function(){
                        pauseTimerFn();
                        if( !$slide.is(':animated')){
                            nextSlideCountFn(); 
                        }
                    }
                })
                //3-2.이전 화살 버튼 클릭 이벤트
                $prevBtn.on({
                    click:function(){
                        pauseTimerFn();
                        if( !$slide.is(':animated')){
                            prevSlideCountFn(); 
                        }
                    }
                })

                //4.페이지 버튼 이벤트 : 해당 슬라이드에 버튼의 색상 변경
                //페이지 버튼 색상변경 이벤트 함수
                function pageBtnColorEventFn(){
                    var z = cnt;
                    if (z>2){z=0}
                    $pageBtn.removeClass('addPage');
                    $pageBtn.eq(z).addClass('addPage');
                    //$pageBtn.eq(cnt>n-1?0:cnt).addClass('addPage'); z안쓰고 이렇게도가능
                }
                pageBtnColorEventFn(); 

                //4-2.페이지 버튼 클릭 이벤트 
               $pageBtn.each(function(idx){
                    $(this).on({ 
                        click:  function(){
                            pauseTimerFn();
                            if(cnt > idx){
                                cnt = idx;
                                mainNextSlideFn();
                            }
                            if(cnt < idx){
                                cnt = idx;
                                mainPrevSlideFn();
                            }
                        }
                    });
               });

                //터치 스와이프 (자세한 주석, 필기 03_04)
                //슬라이드를 오른쪽에서 왼쪽으로 터치하면 다음 슬라이드 카운트함수 호출
                //슬라이드를 왼쪽에서 오른쪽으로 터치하면  이전 슬라이드 카운트함수 호출
                // $slideView.swipe({
                //     swipeLeft:function(){
                //         pauseTimerFn();
                //         if(!$slide.is(':animated')){
                //             nextSlideCountFn();
                //         }
                //     },
                //     swipeRight:function(){ 
                //         pauseTimerFn();
                //         if(!$slide.is(':animated')){
                //             prevSlideCountFn();
                //         }
                //     }         
                // });

                //터치스와이프 직접구현하기 (자세한 주석, 필기 04_08)
                //mousedown 이 마우스를 꾹 눌르는거, mouseup 이 마우스에 손떼는거
                var touchStart = 0;
                var touchEnd = 0;
                var mouseDown = false;
                var touchYstart = 0;
                var touchYend = 0;
                $slideView.on({
                    mousedown:function(e){
                        mouseDown = 1;
                        e.preventDefault();
                        touchStart = e.pageX;   //clientX도 사용가능
                        touchYstart = e.pageY;
                    },
                    touchstart:function(e){
                        mouseDown = 1;
                        e.preventDefault();
                        touchStart = e.originalEvent.changedTouches[0].pageX;   //clientX도 사용가능
                        touchYstart = e.originalEvent.changedTouches[0].pageY;  //화면의 위쪽이 y값 더 작음
                    },
                    mouseup:function(e){
                        e.preventDefault();
                        mouseDown = 0;
                        touchEnd = e.pageX;
                        touchYend = e.pageY;
                        touchSwipeFn();         //마우스가 올라올때 함수를 한번만 실행시켜야함 위아래 다넣으면 두번씩 실행됨

                        if(touchYstart - touchYend < -50){ //좌우로 움직여도 손가락이 위아래도 조금은 움직일테니까 여분을 줘야함
                            $('html,body').stop().animate({scrollTop:0},1000);
                        }
                        if(touchYstart - touchYend > 50){ //좌우로 움직여도 손가락이 위아래도 조금은 움직일테니까 여분을 줘야함
                            $('html,body').stop().animate({scrollTop:$('#section2').offset().top},1000);
                        }
                    },
                    touchend:function(e){
                        e.preventDefault();
                        mouseDown = 0;
                        touchEnd = e.originalEvent.changedTouches[0].pageX;
                        touchYend = e.originalEvent.changedTouches[0].pageY;
                        console.log(touchYstart,touchYend)
                        touchSwipeFn();
                        //위에서 아래로 터치
                        if(touchYstart - touchYend < -50){ //좌우로 움직여도 손가락이 위아래도 조금은 움직일테니까 여분을 줘야함
                            $('html,body').stop().animate({scrollTop:0},1000);
                        }
                        //아래에서 위로 터치
                        if(touchYstart - touchYend > 50){ //좌우로 움직여도 손가락이 위아래도 조금은 움직일테니까 여분을 줘야함
                            $('html,body').stop().animate({scrollTop:$('#section2').offset().top},1000);
                        }
                    },
                    mouseleave:function(e){
                        e.preventDefault();
                        if(mouseDown == 1){
                            mouseDown = 0;
                            touchEnd = e.pageX;
                            touchSwipeFn();
                        }
                    }
                });

                function touchSwipeFn(){
                    //console.log('touchStart',touchStart);
                    //console.log('touchEnd',touchEnd);

                    if(touchStart-touchEnd>0){      //양수면 tocuhStart가 더 값이 크단거니까 오른쪽에서 왼쪽으로 터치스와이프한경우 =>다음슬라이드
                            pauseTimerFn();
                            if(!$slide.is(':animated')){
                                nextSlideCountFn();
                            }
                    }
                    if(touchStart-touchEnd<0){      //음수면 touchEnd가 더 값이 크단거니까 왼쪽에서 오른쪽으로 터치스와이프한경우 =>이전슬라이드
                            pauseTimerFn();
                            if(!$slide.is(':animated')){
                                prevSlideCountFn();
                            }
                    }
                }

                //슬라이드 자동 재생 (자세한 주석, 필기 03_05,03_09)
                function autoTimerFn(){
                    setId = setInterval(nextSlideCountFn,4000);
                }

                autoTimerFn();

                function pauseTimerFn(){
                    var t = 0;
                    clearInterval(setId);
                    clearInterval(setId2);
                    setId2 = setInterval(function(){
                        t++;
                        if(t>=4){
                            t = 0;
                            clearInterval(setId);
                            clearInterval(setId2);
                            nextSlideCountFn();
                            autoTimerFn();
                        }
                    },1000);
                }
        },
        section2Fn: function(){
            var $contentWrap = $('#section2 .content-wrap');
            var t = 0; //스크롤ㅇㅣ벤트 토글변수

            function fadeInFn(){
                $contentWrap.eq(0).stop().animate({opacity:1},400, function(){
                    $contentWrap.eq(1).stop().animate({opacity:1},400, function(){
                        $contentWrap.eq(2).stop().animate({opacity:1},400)
                    });
                });
            }

            //fadeInFn();

            $(window).scroll(function(){
                if($(this).scrollTop() <= 20){
                    t=0;
                    $contentWrap.stop().animate({opacity:0})
                }
                if($(this).scrollTop() > 400){
                    if(t==0){
                        t=1;
                        fadeInFn();
                    }
                }
            });
        },
        section3Fn: function(){ //자세한 주석, 필기 03_05_project_themezza_litho_section3 참고
                                                
            var $sec3SlideW = $('#section3 .slide').innerWidth();       //반응형 슬ㄹㅏ이드 넓이
            var $window = $(window);

            var $sec3 = $('#section3');
            var $slideWrap = $('#section3 .slide-wrap');
            var $slideView = $('#section3 .slide-view');
            var $nextBtn = $('#section3 .next-btn');
            var $prevBtn = $('#section3 .prev-btn');
            var cnt = 0;
            var n = $('#section3 .slide').length-9;

            var setId = null;
            var setId2 = null;
            var t = 0;
            var scr = 0;
            
            function scrollFn(){
                $sec3.addClass('addAni');
            }

            $window.scroll(function(){
                if($(this).scrollTop() <= 20){
                    scr = 0;
                    $sec3.removeClass('addAni');
                }
                if($(this).scrollTop() > 900){
                    if(scr==0){
                        scr = 1;
                        scrollFn();
                    }
                   
                }
            });


            //반응형 슬라이드  자세한 주석, 필기 03_08_project_themezza_litho_반응형 참고
            //1. 반응형 함수
            function responseFn(){
                $sec3SlideW = $('#section3 .slide').innerWidth();
                $slideWrap.stop().animate({left:-$sec3SlideW*cnt},0) ;
            }

            setTimeout(responseFn,10); //로딩시 반응형 함수

            //2. 윈도우(window) 리사이즈(resize()) 메서드
            $window.resize(function(){
                responseFn();
            });

            function boxSlideFn(){
                $slideWrap.stop().animate({left:-$sec3SlideW*cnt},400, function(){
                    if(cnt>n){cnt=0}
                    if(cnt<0){cnt=n}
                    $slideWrap.stop().animate({left:-$sec3SlideW*cnt},0)
                })
            }
            function nextSlideCountFn(){
                cnt++;
                boxSlideFn();
            }
            function prevSlideCountFn(){
                cnt--;
                boxSlideFn();
            }
            $nextBtn.on({
                click:function(){ 
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            $prevBtn.on({
                click:function(){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });            
            // $slideView.swipe({
            //     swipeLeft:function(){
            //         pauseFn();
            //         if(!$slideWrap.is(':animated')){
            //             nextSlideCountFn();
            //         }
            //     },
            //     swipeRight:function(){
            //         pauseFn();
            //         if(!$slideWrap.is(':animated')){
            //             prevSlideCountFn();
            //         }
            //     }
            // });
            var touchS = 0;
            var touchE = 0;
            var mouseDown = false;
            $slideView.on({
                mousedown:function(e){
                    mouseDown = true;
                    e.preventDefault();
                    touchS = e.pageX;
                },
                touchstart:function(e){
                    mouseDown = true;
                    e.preventDefault();
                    touchS = e.originalEvent.changedTouches[0].pageX;
                },
                mouseup:function(e){
                    mouseDown = false;
                    e.preventDefault();
                    touchE = e.pageX;
                    touchFn();
                },
                touchend:function(e){
                    mouseDown = false;
                    e.preventDefault();
                    touchE = e.originalEvent.changedTouches[0].pageX;
                    touchFn();
                },
                mouseleave:function(e){
                    e.preventDefault();
                    if(mouseDown == true){
                        mouseDown = false;
                        touchE = e.pageX;
                        touchFn();
                    }
                }
            });

            function touchFn(){
                if(touchS-touchE>0){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE<0){
                    pauseFn();
                    if(!$slideWrap.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            }

            function autoPlay(){
                setId = setInterval(nextSlideCountFn, 3000);
            }
            autoPlay();

            function pauseFn(){ 
                    t=0;
                    clearInterval(setId); 
                    clearInterval(setId2); 
                    setId2 = setInterval(function(){ 
                        t++;
                        if(t>=3){
                            clearInterval(setId); 
                            clearInterval(setId2);
                            t=0;
                            nextSlideCountFn();
                            autoPlay();
                        }
                    }, 1000);
            }

        },
        section4Fn: function(){ //자세한 주석, 필기 03_19_project_themezza_litho_참고
            var $left     = $('#section4 .left-wrap');
            var $right    = $('#section4 .right-wrap');
            var $smallImg = $('#section4 .small-img ');
            var $largeImg = $('#section4 .large-img');
            var $section4 = $('#section4');
            var bottom = 60; /* css에서 준 기본값 */
            var left = 0;   /* css에서 준 기본값 */
            var x = 0;      /* 기본값 준 거 없으면 0 주면됨 */
            var y = 0;

            var scr = 0;
            var sec4T = $('#section4').offset().top;
            var sec5T = $('#section5').offset().top;
            var imgTop = -20;
            var oldScrollTop = 0 ;
            var newScrollTop = 0 ;

            function scrollFn(){
                $left.addClass('addAni');
                setTimeout(function(){
                    $right.addClass('addAni');
                },300);
            }
            
            $(window).scroll(function(){
                //console.log($(this).scrollTop(),sec4T)
                if($(this).scrollTop()<=20){
                    scr=0;
                    $left.removeClass('addAni');
                    $right.removeClass('addAni');
                }
                if($(this).scrollTop() > sec4T-400){
                    if(scr==0){
                        scr=1;
                        scrollFn();
                    }
                }

/*              if($(this).scrollTop() >= sec4T-400 && $(this).scrollTop() < sec5T+400){
                    newScrollTop = $(window).scrollTop();
                    if( (oldScrollTop-newScrollTop) > 0 ){  //위로올릴때
                        imgTop +=2;
                        $largeImg.css({top:imgTop, transtion:'none'});
                    }
                    if( (oldScrollTop-newScrollTop) < 0 ){  //아래로 내릴때
                        imgTop -=2;
                        $largeImg.css({top:imgTop, transtion:'none'});
                    }
                    oldScrollTop = newScrollTop;
                } */
            });
            //마우스 무브 이벤트실행
            //작은 이미지($smallImg)를 마우스의 움직임에 따라 
            //상하(수직좌표) : Y좌표
            //좌우(수평좌표) : X좌표
            //좌표이동을 이용한 애니메이션 효과 (animate, css모두 이용가능)

            //1.선택자($smallImg) 마우스 무브 이벤트

            $smallImg.on({
                mousemove:function(event){ //screenX,Y /clientX,Y / 등등 마우스 움직에 따른 각 좌표값 확인가능
                    //console.log('clientX: ', event.clientX); //selector(client)에 대한 X좌표를 확인해볼수있음 (그냥 event만 하면 일어난 이벤트에대한 모든걸 볼 수 있음)
                    //console.log('clientY: ', event.clientY); //selector에 대한Y좌표를 확인해볼수있음

                    bottom = event.clientY*.04+60;        //event.clientY의 원 수치는 매우 큼(400얼마 이런식)그래서 줄여서 사용하는게 편해서 *.03이런식으로해줌(30%)
                    left = event.clientX*.04;              // *.02이게 커질수록 움직임이 큼
                    $(this).css({bottom:bottom+'px',left:left+'px'}); //만약 백그라운드를 움직이는거면 px를 꼭 붙여야함(아니면 생략해도 무관하지만 그냥 붙이는습관 ㄱ)
                }
            });

            // $section4.on({
            //     mousemove:function(event){
            //         x = event.clientX*.03;
            //         y = event.clientY*.03;

            //             console.log('offset().top', $smallImg.offset().top);
            //             console.log('offset().left', $smallImg.offset().left);
            //         $smallImg.css({bottom: y+60,left:x});
            //         $largeImg.css({top: -y*1.2,left:-x*1.2});
            //     }
            // });
            
            //2.타겟의 좌표를 가져와서 거기에서 움직임을 준다.
            $section4.on({
                mousemove:function(event){
                    x = ($smallImg.offset().left-event.pageX)*.03; //smallImg가 pageX에서 떨어진만큼을 알고싶음
                    y = ($smallImg.offset().top-event.pageY)*.03;

                        //console.log('offset().top', $smallImg.offset().top);
                        //console.log('offset().left', $smallImg.offset().left);
                    $smallImg.css({bottom: y+60,left:x});
                    $largeImg.css({top: -y*1.2,left:-x*1.2});
                }
            });

            console.log('푸터의 탑 위치 offset().top', $('#footer').offset().top);
            console.log('푸터높이', $('#footer').height());
            console.log('창높이', $(window).height()); 
            console.log('웹문서전체너비', $(document).width())
            console.log('웹문서전체높이',$(document).height())

        },
        section5Fn: function(){             //자세한 주석 03_15_project_themezza_litho_section4,5
            var $sec5      = $('#section5');
            var $slideWrap = $('#section5 .slide-wrap');
            var $slideView = $('#section5 .slide-view');
            var $slideW = 445;
            var n = $('#section5 .slide').length -8-1; //3
            var cnt = 0;
            var a = 0;
            var setId = null;
            var setId2 = null;
            var scr = 0;

            function scrollFn(){
                $sec5.addClass('addAni');
            }
            //scrollFn();
            $(window).scroll(function(){
                if($(this).scrollTop() <= 20){
                    scr = 0;
                    $sec5.removeClass('addAni');
                }
                if($(this).scrollTop()  >= $sec5.offset().top-400){
                    if(scr==0){
                        scr = 1;
                        scrollFn();
                    }
                }
            });

            //1.메인슬라이드함수
            function mainslideFn(){
                if(cnt>1){
                    a = -235
                }
                else{
                    a = 0;
                }
                $slideWrap.stop().animate({left:(-$slideW*cnt)+a}, 600,function(){
                    if(cnt>n){
                        cnt=0;
                        a=0;
                    }
                    if(cnt<0){  
                        cnt=n;
                        a = -235;
                    }
                    $slideWrap.stop().animate({left:(-$slideW*cnt)+a},0)
                });
            }

            //2.cnt카운트함수
            function nextSlideCountFn(){
                cnt ++;
                mainslideFn();
            }

            function prevSlideCountFn(){
                cnt -- ;
                mainslideFn();
            }

            //3.스와이프기능
            // $slideView.swipe({
            //     swipeLeft:function(event){
            //         event.preventDefault();
            //         if(!$slideWrap.is(':animated')){
            //             pauseFn();
            //             nextSlideCountFn();
            //         }
            //     },
            //     swipeRight:function(event){
            //         event.preventDefault();
            //         if(!$slideWrap.is(':animated')){
            //             pauseFn();
            //             prevSlideCountFn();
            //         }
            //     }
            // });
            var touchS = 0;
            var touchE = 0;
            var mouseDown = false;

            $slideView.on({
                mousedown:function(e){
                    mouseDown = 1;
                    e.preventDefault();
                    touchS = e.clientX;
                },
                touchstart:function(e){
                    mouseDown = 1;
                    e.preventDefault();
                    touchS = e.originalEvent.changedTouches[0].clientX;
                },
                mouseup:function(e){
                    mouseDown = 0;
                    e.preventDefault();
                    touchE = e.clientX;
                    touchFn();
                },
                touchend:function(e){
                    mouseDown = 0;
                    e.preventDefault();
                    touchE = e.originalEvent.changedTouches[0].clientX;
                    touchFn();
                },
                mouseleave:function(e){
                    e.preventDefault();
                    if(mouseDown == 1){
                        mouseDown = 0;
                        touchE = e.clientX;
                        touchFn();
                    }
                }
            });

            function touchFn(){
                if(touchS-touchE>0){
                    pauseFn();
                    if(!$slideView.is(':animated')){
                        nextSlideCountFn();
                    }
                }
                if(touchS-touchE<0){
                    pauseFn();
                    if(!$slideView.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            }

            //4.자동플레이
            function autoPlay(){
                setId = setInterval(nextSlideCountFn,4000);
            }

            autoPlay();

            function pauseFn(){
                var t = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2=setInterval(function(){
                    t++
                    if(t>=4){
                        clearInterval(setId);
                        clearInterval(setId2);
                        t=0;
                        nextSlideCountFn();
                        autoPlay();
                    }
                },1000);
            }

        },
        section6Fn: function(){             //자세한 주석 03_16_project_themezza_litho_section6
            var $ul = $('#section6 .col-gap .number .col ul');
            var $column0 = $('#section6 .container > ul > li').eq(0);
            var $column1 = $('#section6 .container > ul > li').eq(1);
            var $column2 = $('#section6 .container > ul > li').eq(2);
            var $column3 = $('#section6 .container > ul > li').eq(3);
            var cnt1 = [0,0,0,0];
            var cnt2 = [0,0,0,0];
            var cnt3 = [0,0,0,0];
            var cnt4 = [0,0,0,0];
            var setId1 = [null,null,null,null];
            var setId2 = [null,null,null,null];
            var setId3 = [null,null,null,null];
            var setId4 = [null,null,null,null];
            var timer = 5;
            var num1 = [];
            var num2 = [];
            var num3 = [];
            var num4 = [];
            var t = 0;
            var st1 =null;
            var st2 =null;
                //console.log($column0.find('ul').eq(0));
                // $column0.find('ul').eq(0).stop().animate({top:-65*2},500);
                // $column0.find('ul').eq(1).stop().animate({top:-65*5},300);
                // $column0.find('ul').eq(2).stop().animate({top:-65*3},100);
                // $column0.find('ul').eq(3).stop().animate({top:-65*0},100);

            //객체 요소 내에 data-?속성을 가져오기
            // console.log($column0.find('.col').eq(0).data('number'));
            // console.log($column0.find('.col').eq(1).data('number'));
            // console.log($column0.find('.col').eq(2).data('number'));
            // console.log($column0.find('.col').eq(3).data('number'));

            $column0.find('.col').each(function(idx){
                num1[idx] = $(this).data('number');
            });

            $column1.find('.col').each(function(idx){
                num2[idx] = $(this).data('number');
            });

            $column2.find('.col').each(function(idx){
                num3[idx] = $(this).data('number');
            });

            $column3.find('.col').each(function(idx){
                num4[idx] = $(this).data('number');
            });

            //페럴록스
            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section5').offset().top-400){ //가장상단에서 section5까지의 탑값
                    if(t==0){
                        t=1; //변수 t를 1로 수정함으로써 다음에 조건 만족못하게 막음(1번만 실행하기위해서)

                        $('#section6 .container > ul').addClass('addCounter');
                        st1 = setTimeout(formatFn,100);
                        clearTimeout(st1);
                        st2 = setTimeout(countFn,500);
                        clearTimeout(st1);

                        // setTimeout(function(){
                        //     formatFn();
                        //     setTimeout(countFn,500);
                        // },100); 
                        //setTimeout이 동시에 잇음 버그일어난다고 콜백함수로 넣엇는데,, 난 원래하듯이해도 잘 되는듯?
                    }
                }
                if($(window).scrollTop() === 0){
                    t=0;
                    cnt1 = [0,0,0,0];
                    cnt2 = [0,0,0,0];
                    cnt3 = [0,0,0,0];
                    cnt4 = [0,0,0,0];

                    $('#section6 .container > ul').removeClass('addCounter');
                }
            });

            //초기화(처음에는 0처럼 보이게하려고)
            function formatFn(){
                $ul.css({top:0});
            }

            st1 = setTimeout(formatFn,100);      //로딩하고 0.1초후에 실행
                    clearTimeout(st1);
            st2 = setTimeout(countFn,1500);       //로딩하고 1초후에 실행
                    clearTimeout(st2);

            function countFn(){

                setId1.forEach(function(el,idx){
                    setId1[idx] = setInterval(function(){
                        cnt1[idx]+=1;
                        if(cnt1[idx] > 65*num1[idx]){
                            clearInterval(setId1[idx]);
                        }
                        else{
                            $column0.find('ul').eq(idx).css({top: -cnt1[idx]});
                        }
                    },timer);
                });

                setId2.forEach(function(el,idx){
                    setId2[idx] = setInterval(function(){
                        cnt2[idx]+=1;
                        if(cnt2[idx] > 65*num2[idx]){
                            clearInterval(setId2[idx]);
                        }
                        else{
                            $column1.find('ul').eq(idx).css({top: -cnt2[idx]});
                        }
                    },timer);
                });

                setId3.forEach(function(el,idx){
                    setId3[idx] = setInterval(function(){
                        cnt3[idx]+=1;
                        if(cnt3[idx] > 65*num3[idx]){
                            clearInterval(setId3[idx]);
                        }
                        else{
                            $column2.find('ul').eq(idx).css({top: -cnt3[idx]});
                        }
                    },timer);
                });

                setId4.forEach(function(el,idx){
                    setId4[idx] = setInterval(function(){
                        cnt4[idx]+=1;
                        if(cnt4[idx] > 65*num4[idx]){
                            clearInterval(setId4[idx]);
                        }
                        else{
                            $column3.find('ul').eq(idx).css({top: -cnt4[idx]});
                        }
                    },timer);
                });
            };

        },
        section7Fn: function(){             //자세한 주석 04_08_litho_porject
            var $bg = $('#section7 .bg');
            var $li = $('#section7 .container .content > ul > li');

            $li.each(function(idx){
                $(this).on({
                    mouseenter:function(){
                        $li.removeClass('addEvent');
                        $(this).addClass('addEvent');
                        $bg.stop().animate({opacity:0},600);
                        $bg.eq(idx).stop().animate({opacity:1},600);
                    },
                    mouseleave:function(){
                        $li.removeClass('addEvent');
                        $bg.stop().animate({opacity:0},600);
                        $bg.eq(0).stop().animate({opacity:1},600);
                    }
                });
            });
        },
        section8Fn: function(){             //자세한 주석 04_09_litho_project_섹션8슬라이드배열 참고
            var $sec8      = $('#section8');
            var sec8Top      = $('#section8').offset().top-400;
            var $slideView = $('#section8 .slide-view');
            var $slideWrap = $('#section8 .slide-wrap');
            var $slide     = $('#section8 .slide');
            var $slideW    = $('#section8 .slide').innerWidth();
            var n          = $('#section8 .slide').length; //3
            var cnt        = 0;
            var mD         = 0;
            var mU         = 0;
            var next       = [2,0,1];
            var prev       = [0,2,1];
            var mouseDown  = false;
            var scr = 0;


            function scrollFn(){
                $sec8.addClass('addAni');
            }
            
            $(window).scroll(function(){
                if($(this).scrollTop()<=20){
                    scr = 0;
                    $sec8.removeClass('addAni');
                }
                if($(this).scrollTop()>sec8Top){
                    if(scr==0){
                        scr = 1;
                        scrollFn();
                    }
                }
            });
            mainNextSlideFn();
            function mainNextSlideFn(){
                //next 배열에 초기값 (next = [2,0,1];)설정 방법
                //1. 슬라이드 전체 개수(3)만큼 반복문처리 설정
                for(var i=0;i<n;i++){
                    next[i] = i;
                }
                //2. next=[0,1,2] 기억된 마지막 배열값을 삭제(pop)한다, 그리고 임시기억시킨다.
                //3. next 배열 맨 처음 위치에 삽입한다.(unshift)
                var imsi = next.pop();
                    next.unshift(imsi);   //next = [2,0,1];

                for(var i=0;i<cnt;i++){
                    var imsi =  next.shift(); //맨 앞 배열 값 삭제 후 임시 기억 변수에 저장
                                next.push(imsi); //변수 임시에 저장된 값을 next배열의 가장뒤에 추가
                }

                for(var i=0;i<n;i++){
                    $slide.eq(next[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},1000);
                }
            }

            function mainPrevSlideFn(){
                var j = n; //3
                for(var i=0;i<n;i++){
                    j--;         //prev배열은 역순이니까 1씩 뺴준다
                    prev[i] = j; //2,1,0
                }

                var imsi = prev.pop();
                prev.unshift(imsi); //prev = [0,2,1];

                for(var i=2;i>cnt;i--){
                    var imsi = prev.shift();
                                prev.push(imsi);
                }

                for(var i=0;i<n;i++){
                    $slide.eq(prev[i]).stop().animate({left:(100* (i*-1))+'%'},0).animate({left:(100*((i*-1)+1))+'%'},1000);
                }
            }

            function nextSlideCountFn(){
                cnt ++;
                if(cnt>n-1){cnt=0}
                mainNextSlideFn();
            }

            function prevSlideCountFn(){
                cnt --;
                if(cnt<0){cnt=n-1}
                mainPrevSlideFn();
            }

            //터치이벤트핸들러
            $slideView.on({
                mousedown:function(e){
                    mouseDown = 1;          //마우스드래그 시작을 알려줌
                    e.preventDefault();
                    mD = e.pageX;
                },
                touchstart:function(e){     //모바일에서는 마우스다운이라는 기능이없으니까!
                    mouseDown = 1;
                    e.preventDefault();
                    mD = e.originalEvent.changedTouches[0].pageX; //제이쿼리에는 touch에 대한 지원이없어서 오리지널자바스크립트에서 가져와서 사용
                    console.log(e.originalEvent.changedTouches)
                },
                mouseup:function(e){
                    mouseDown = 0;          //토글클래스같은 효과가 나게 이때는 초기화해줘야함
                    e.preventDefault();
                    mU = e.pageX;
                    touchEventFn();
                },
                touchend:function(e){        //모바일에서는 마우스업이라는 기능이없으니까!
                    mouseDown = 0;
                    e.preventDefault();
                    mU = e.originalEvent.changedTouches[0].pageX;
                    touchEventFn();
                },
                mouseleave:function(e){     //mouseup이 안된상태에서만 수행=>mouseup이 영역을 벗어나서 일어나면 못읽으니까 이걸추가해줌
                    e.preventDefault();
                    if(mouseDown==1){       //mousedown일때 변수 마우스다운을 1로바꿔뒀으니 그때만 수행
                        mouseDown = 0; 
                        mU = e.pageX;
                        touchEventFn();
                        console.log(mU,mD);
                    }
                }
                // touchmove:function(e){      
                //     e.preventDefault();
                //     if(mouseDown==1){
                //         mouseDown = 0; 
                //         mU = e.originalEvent.changedTouches[0].pageX;
                //         touchEventFn();
                //         console.log(mU,mD);
                //     }
                // }
            });

            function touchEventFn(){
                if(mD>mU){
                    if(!$slide.is(':animated')){
                        nextSlideCountFn();
                    }
                }
                if(mD<mU){
                    if(!$slide.is(':animated')){
                        prevSlideCountFn();
                    }
                }
            }

        },
        section9Fn: function(){
            var $li = $('#section9 .content > ul > li');
            var $ul = $('#section9 .content-wrap > ul');
            var $leftW = $('#section9 .content-wrap .left').innerWidth();
            var $h3 = $('#section9 .right-wrap > h3');
            var $p = $('#section9 .right-wrap > p');
            var $h6 = $('#section9 .right-wrap > h6');
            var $ulH = $leftW * 1.334126129;
            var h3Size = $leftW * 0.066892118;
            var pSize = $leftW * 0.055743432;
            var h6Size = $leftW * 0.044594745;

            var scr = 0;

            function scrollFn(){
                setTimeout(function(){
                    $li.eq(0).addClass('addAni');
                        setTimeout(function(){
                            $li.eq(1).addClass('addAni');
                                setTimeout(function(){
                                    $li.eq(2).addClass('addAni');
                                },200);
                        },200);
                },0);
                
            }
            
            $(window).scroll(function(){
                if($(this).scrollTop() <= 20){
                    scr = 0;
                    $li.removeClass('addAni');
                }
                if($(this).scrollTop() > $('#section9').offset().top-400){
                    if(scr == 0){
                        scr = 1;
                        scrollFn();
                    }
                }
            });

            function resizeFn(){
                $leftW  = $('#section9 .content-wrap .left').innerWidth();
                $ulH    = $leftW * 1.334126129;
                h3Size  = $leftW * 0.066892118;
                pSize   = $leftW * 0.055743432;
                h6Size  = $leftW * 0.044594745;

                $ul.css({height:$ulH});
                $h3.css({fontSize:h3Size});
                $p.css({fontSize:pSize});
                $h6.css({fontSize:h6Size});
            }

            $(window).resize(function(){
                setTimeout(resizeFn,100);
            });
            
            setTimeout(resizeFn,100);
        },
        section10Fn: function(){
            var $sec10 = $('#section10');
            var scr = 0;

            function scrollFn(){
                $sec10.addClass('addAni');
            }
            $(window).scroll(function(){
                if($(this).scrollTop() <= 20){
                    scr = 0;
                    $sec10.removeClass('addAni');
                }
                if($(this).scrollTop() > $sec10.offset().top-400){
                    if(scr==0){
                        scr = 1;
                        scrollFn();
                    }
                }
            });
        },
        footerFn:   function(){
            //폼을 이용한 메일주소를 PHP(서버사이드 스크립트언어) 비동기 전송(사용자가 사용을안하는틈틈히 정보를 전송) AJAX
            var $submitBtn = $('#submitBtn');
            var $response  = $('#footer .response > h3');
            var $msgWrap = $('#footer .msg-wrap')
            var $inputWrap = $('#footer .input-wrap');

            $submitBtn.on({
                click:function(e){
                    e.preventDefault();
                    var $frmEmail = $('#frmEmail').val();
                    var $frmCode = $('#frmCode').val();

                    if($frmEmail==''){ //이메일주소를 입력하지않앗을때
                        //alert('메일 주소를 입력하세요');
                        $inputWrap.addClass('addAjax');
                        $('#frmEmail').focus();
                        return false;
                    }
                    else{
                        $inputWrap.removeClass('addAjax');
                        $.ajax({
                            url:'./response.php',
                            type:'POST', //get or post방식
                            data:{
                                email:$frmEmail,
                                code:$frmCode
                            },
                            success:function(result){
                                
                                $inputWrap.addClass('addAjax');
                                $response.html(result);

                                $msgWrap.fadeIn(1000);
                                setTimeout(msgFn,6000);
                                function msgFn(){
                                    $('#frmEmail').val(''); //성공하면 메일주소 삭제시킴
                                    $response.html('');
                                    //$response.children().remove();
                                    $inputWrap.removeClass('addAjax');
                                    $msgWrap.fadeOut(1000);
                                    
                                }
                            },
                            error:function(msg){
                                //alert('AJAX 전송 실패');
                                console.log(msg);
                                $('#frmEmail').focus(); //다음입력대기
                            }
                        })
                    }
                }
            });
        },
        smoothScrollFn:    function(){
            var $smoothBtn = $('.smoothBtn');
            var $goTopBtnWrap = $('.goTopBtn-wrap');
            var $modalDemo = $('#modalDemo');
            var t = 0;

            $smoothBtn.on({
                click:function(e){
                    e.preventDefault();
                    var url = $(this).attr('href');
                        $('html,body').stop().animate({scrollTop:$(url).offset().top},600,'easeInSine');
                }
            });

            function modalShowFn(){
                if($(window).innerWidth()>1200){
                    $modalDemo.stop().fadeIn(1000); //t변수쓰기싫으면 addClass이용해두됨
                }
                else{
                    $modalDemo.stop().fadeOut(0);
                }
            }

            setTimeout(modalShowFn,100);

            $(window).resize(function(){
                setTimeout(modalShowFn,100);
            })
            //최상단에서 100픽셀 이상 아래로 스크롤하면
            //goTop메뉴가 보이고
            //맨위로 올라가면 안보인다.
            $(window).scroll(function(){
                if($(this).scrollTop()>=100){
                    if(t==0){   //t변수 안쓰면 100px넘어가면 계속 발생함
                        t=1;
                        $goTopBtnWrap.stop().fadeIn(1000); //t변수쓰기싫으면 addClass이용해두됨
                    }
                    
                }
                else{
                    if(t==1){
                        t=0;
                        $goTopBtnWrap.stop().fadeOut(1000);
                    }
                }
            })
        },
        demoModalFn: function(){
            //버튼을 클릭하면
            //html toggleClass .addModal (전체페이지에 스크롤삭제)
            //header toggleClass .addHide (메뉴안보이게 하려고)
            //modalDeomo toggleClass .addModal (데모창이 우측에서 좌측으로 들어오고, 버튼이 바뀜)
            var $html       = $('html');
            var $header     = $('#header');
            var $modal      = $('#modalDemo');
            var $modalBtn   = $('#modalDemo .modal-btn');
            var $document = $(document);

            //target : 마우스 및 키보드 등 버튼 이벤트의 대상
            $modalBtn.on({
                click:function(e){
                    e.stopPropagation(); // 여기서 클릭이벤트일어난게 다른거에 전파되는걸 막기위해서
                    //console.log(e.currentTarget.nodeName); currentTarget의 태그이름를 nodeName이라함
                    $html.toggleClass('addModal');
                    $header.toggleClass('addHide');
                    $modal.toggleClass('addModal');
                }
            });

            $modal.on({
                click:function(e){
                    e.stopPropagation();
                    return false; //모달창 자체클릭햇을땐 안닫히게하려고!
                }
            });

            //웹문서의 전체를 클릭대상
            //위에 클릭 이벤트 대상이 아닌 이벤트를 찾기위해서
            $document.on({
                click:function(e){
                    console.log(e.target,e.currentTarget)
                    //닫고자하는 모달창 닫기버튼을 클릭해도 닫고,
                    //모든 클릭대상은 모달창을 닫게 해준다
                    //그래서 버튼 이벤트의 타켓과 현재 클릭한 이벤트 타겟이 다르면
                    //창을 닫는다
                    //클릭하고자하는 버튼이 아닌 다른 것을 클릭하면
                    //모달창이 닫힌다.
                    //위에 클릭 이벤트 대상이 아닌 모든것이 해당됨
                    //!== 같지않으면,, 즉 이벤트타겟들이 일어난게 지금현재의 $document.on({})의 타겟이 아닐때
                    if(e.target !== e.currentTarget){ 
                        $html.removeClass('addModal');
                        $header.removeClass('addHide');
                        $modal.removeClass('addModal');
                    }

                    // $html.removeClass('addModal');
                    // $header.removeClass('addHide');
                    // $modal.removeClass('addModal');
                    // 어차피 e.target은 내가 클릭한거고, e.currentTarget은 $document이니까 무조건 다르게 뜸 그래서 if문굳이 없어도되는듯
                }
            });
        }
    } //객체 끝

    litho.init();
})(jQuery);