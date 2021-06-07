;(function($){
    
    var litho = {
        btn:0,
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
        scrollEventFn:  function(){
            var scrollPrev = 0;
            var scrollCurrent = 0;
            var $window = $(window);
            var result = null;
            var that = this;

            function wheelPositionFn(){
                result = scrollPrev - scrollCurrent > 0 ? 'up' : 'down'
                return {
                    result,
                    scrollPrev,
                    scrollCurrent
                }
            }

            $window.scroll(function(){
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
            var click = true;

            var $logo = $('#header #logo > a > img');

            var that = this; //litho 객체에 선언한 전역변수를 쓰려면 this로 불러와야하는데 이 함수안에서 this를 쓰면 이함수로 인식하니 변수 that으로 받아줘야함
            //자세한 설명 및 주석 (03_10_project_themezza_litho_네비반응형,스크롤이벤트)
            function pcEventFn(){
                // $nav.stop().show();
                $sub.css({display:'none',height:'auto'})
                $subSub.css({display:'none'});
                $subSubSub.css({display:'none'});
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
                $nav.css({display:'none'});

                $logo.attr('src','./img/logo-yellow-ochre-alt.png');

                //pcEvent 설정해둔거 삭제하기
                $mainBtn.off('mouseenter');
                $navArea.off('mouseleave');
                $subBtn.off('mouseenter');
                $subSubBtn.off('mouseenter');
                $subSub.off('mouseleave');

                $mainBtn.on({
                    click: function(event){
                        event.preventDefault();
                        if(click===true){
                            click = false;
                            $sub.css({height:'auto'});
                            $sub.stop().slideUp();
                            $subSub.stop().slideUp();
                            $subSubSub.stop().slideUp();
                            $(this).next().stop().slideToggle(300);

                            setTimeout(function(){
                                click=true;
                            },500)
                        }
                    }
                });
                $subBtn.on({
                    click: function(event){
                        event.preventDefault();
                        if(click===true){
                            click = false;
                            $sub.css({height:'auto'});
                            $subSub.stop().slideUp();
                            $subSubSub.stop().slideUp();
                            $(this).next().stop().slideToggle(300);
                        }

                        setTimeout(function(){
                            click = true;
                        },500)
                    }
                });
                $subSubBtn.on({
                    click: function(event){
                        event.preventDefault();
                        if(click===true){
                            click=false;
                            $sub.css({height:'auto'});
                            $subSubSub.stop().slideUp();
                            $(this).next().stop().slideToggle(300);
                        }

                        setTimeout(function(){
                            click = true;
                        },500)
                    }
                });
            }

            function pcMobileFn(){
                if($window.innerWidth() > 980){
                    pc =1;
                    mobile=0;
                    pcEventFn();
                    that.btn = 0 ;
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

            var $slideWrap = $('#section1 .slide-wrap'); 
            var $slideView = $('#section1 .slide-view');
            var $nextBtn = $('#section1 .next-btn');
            var $prevBtn = $('#section1 .prev-btn');
            var $pageBtn = $('#section1 .page-btn');
            var cnt = 0;
            var n = $('#section1 .slide').length; 
            var k = null;
            var setId = null;
            var setId2 = null;

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

                setTimeout(resizeFn,100);

                $window.resize(function(){
                    setTimeout(resizeFn,100);
                });

                //1-1.메인 fadeIn fadeOut 함수
                //(1)다음 슬라이드 함수
                function mainNextSlideFn(){
                    if(k===null){
                        k= cnt===0?n-1:cnt-1;
                    }
                    $slide.css({ zIndex:1 , opacity:1});   //초기화
                    $slide.eq(k).css({ zIndex:2 });     //이전슬라이드
                    $slide.eq(cnt).css({ zIndex:3 }).stop().animate({opacity:0},0).animate({opacity:1},1500);   //현재슬라이드
                    pageBtnColorEventFn();
                    k=null;
                }
                //(2)이전 슬라이드 함수
                function mainPrevSlideFn(){
                    if(k===null){
                        k = cnt===n-1?0:cnt+1;
                    }
                    $slide.css({ zIndex:1, opacity:1 }); 
                    $slide.eq(cnt).css({ zIndex:2 }); 
                    $slide.eq(k).css({ zIndex:3 }).stop().animate({opacity:1},0).animate({opacity:0},1500);
                    pageBtnColorEventFn();
                    k = null;
                }

                //2.다음 슬라이드 카운트 함수
                function nextSlideCountFn(){
                    cnt ++;
                    if(cnt>n-1){cnt=0}
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
                }
                pageBtnColorEventFn(); 

                //4-2.페이지 버튼 클릭 이벤트 
               $pageBtn.each(function(idx){
                    $(this).on({ 
                        click:  function(){
                            pauseTimerFn();
                            k = cnt;
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


                //터치스와이프
                var touchStart = 0;
                var touchEnd = 0;
                var mouseDown = false;
                var touchYstart = 0;
                var touchYend = 0;
                $slideView.on({
                    mousedown:function(e){
                        mouseDown = 1;
                        e.preventDefault();
                        touchStart = e.pageX;
                        touchYstart = e.pageY;
                    },
                    touchstart:function(e){
                        mouseDown = 1;
                        e.preventDefault();
                        touchStart = e.originalEvent.changedTouches[0].pageX;
                        touchYstart = e.originalEvent.changedTouches[0].pageY;
                    },
                    mouseup:function(e){
                        e.preventDefault();
                        mouseDown = 0;
                        touchEnd = e.pageX;
                        touchYend = e.pageY;
                        touchSwipeFn();

                        if(touchYstart - touchYend < -50){
                            $('html,body').stop().animate({scrollTop:0},1000);
                        }
                        if(touchYstart - touchYend > 50){
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
                        if(touchYstart - touchYend < -50){
                            $('html,body').stop().animate({scrollTop:0},1000);
                        }
                        //아래에서 위로 터치
                        if(touchYstart - touchYend > 50){
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
                    if(touchStart-touchEnd>0){
                            pauseTimerFn();
                            if(!$slide.is(':animated')){
                                nextSlideCountFn();
                            }
                    }
                    if(touchStart-touchEnd<0){
                            pauseTimerFn();
                            if(!$slide.is(':animated')){
                                prevSlideCountFn();
                            }
                    }
                }

                //슬라이드 자동 재생
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
        section3Fn: function(){
                                                
            var $sec3SlideW = $('#section3 .slide').innerWidth();
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


            //1. 반응형 함수
            function responseFn(){
                $sec3SlideW = $('#section3 .slide').innerWidth();
                $slideWrap.stop().animate({left:-$sec3SlideW*cnt},0) ;
            }

            setTimeout(responseFn,10);

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
        section4Fn: function(){
            var $left     = $('#section4 .left-wrap');
            var $right    = $('#section4 .right-wrap');
            var $smallImg = $('#section4 .small-img ');
            var $largeImg = $('#section4 .large-img');
            var $section4 = $('#section4');
            var bottom = 60; /* css에서 준 기본값 */
            var left = 0;   /* css에서 준 기본값 */
            var x = 0;
            var y = 0;

            var scr = 0;
            var sec4T = $('#section4').offset().top;

            function scrollFn(){
                $left.addClass('addAni');
                setTimeout(function(){
                    $right.addClass('addAni');
                },300);
            }
            
            $(window).scroll(function(){
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
            });

            //마우스무브이벤트
            $smallImg.on({
                mousemove:function(event){
                    bottom = event.clientY*.04+60;
                    left = event.clientX*.04;
                    $(this).css({bottom:bottom+'px',left:left+'px'});
                }
            });

            $section4.on({
                mousemove:function(event){
                    x = ($smallImg.offset().left-event.pageX)*.03;
                    y = ($smallImg.offset().top-event.pageY)*.03;

                    $smallImg.css({bottom: y+60,left:x});
                    $largeImg.css({top: -y*1.2,left:-x*1.2});
                }
            });
        },
        section5Fn: function(){
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
        section6Fn: function(){
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

            $(window).scroll(function(){
                if($(window).scrollTop() >= $('#section5').offset().top-400){ 
                    if(t==0){
                        t=1;

                        $('#section6 .container > ul').addClass('addCounter');
                        st1 = setTimeout(formatFn,100);
                        clearTimeout(st1);
                        st2 = setTimeout(countFn,500);
                        clearTimeout(st1);
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
        section7Fn: function(){
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
        section8Fn: function(){
            var $sec8      = $('#section8');
            var sec7Top      = $('#section7').offset().top+300;
            var $slideView = $('#section8 .slide-view');
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
                if($(this).scrollTop()>sec7Top){
                    if(scr==0){
                        scr = 1;
                        scrollFn();
                    }
                }
            });

            mainNextSlideFn();
            function mainNextSlideFn(){

                for(var i=0;i<n;i++){
                    next[i] = i;
                }

                var imsi = next.pop();
                    next.unshift(imsi);   //next = [2,0,1];

                for(var i=0;i<cnt;i++){
                    var imsi =  next.shift();
                                next.push(imsi);
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
                    mouseDown = 1;
                    e.preventDefault();
                    mD = e.pageX;
                },
                touchstart:function(e){
                    mouseDown = 1;
                    e.preventDefault();
                    mD = e.originalEvent.changedTouches[0].pageX;
                    console.log(e.originalEvent.changedTouches)
                },
                mouseup:function(e){
                    mouseDown = 0;
                    e.preventDefault();
                    mU = e.pageX;
                    touchEventFn();
                },
                touchend:function(e){
                    mouseDown = 0;
                    e.preventDefault();
                    mU = e.originalEvent.changedTouches[0].pageX;
                    touchEventFn();
                },
                mouseleave:function(e){
                    e.preventDefault();
                    if(mouseDown==1){
                        mouseDown = 0; 
                        mU = e.pageX;
                        touchEventFn();
                        console.log(mU,mD);
                    }
                }
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
                setTimeout(resizeFn,10);
            });
            
            setTimeout(resizeFn,10);
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