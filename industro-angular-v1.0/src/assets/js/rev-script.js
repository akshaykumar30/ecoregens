// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 1 START

var tpj = jQuery;
var revapi318;
var revapi26;
			
function load_rev_slider_1() {
	if(tpj("#welcome").revolution === undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		revapi318 = tpj("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"metis",
					enable:true,
					hide_onmobile:false,
					//hide_under:778,
					hide_onleave:false,
					//tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"right",
						v_align:"bottom",
						h_offset:90,
						v_offset:20,
					},
					right: {
						h_align:"right",
						v_align:"bottom",
						h_offset:20,
						v_offset:20,
					}
				}
				,
				bullets: {
					enable:false,
					hide_onmobile:false,
					//hide_over:479,
					style:"hades",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:60,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[720,720,720,720],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 1 END
			
// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 2 START

function load_rev_slider_2() {
	if(tpj("#welcome_two").revolution === undefined){
		revslider_showDoubleJqueryError("#welcome_two");
	}else{
		revapi318 = tpj("#welcome_two").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"metis",
					enable:true,
					hide_onmobile:false,
					hide_under:778,
					hide_onleave:false,
					//tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:20,
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:20,
						v_offset:20,
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					hide_over:778,
					style:"hades",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[720,720,720,720],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 2 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 3 START

function load_rev_slider_3() {
	if(tpj("#welcome").revolution == undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		revapi318 = tpj("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"hades",
					enable:false,
					hide_onmobile:false,
					hide_under:778,
					hide_onleave:false,
					tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:50,
						v_offset:-42
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:50,
						v_offset:-42
					}
				}
				,
				bullets: {
					enable:false,
					hide_onmobile:false,
					//hide_over:479,
					style:"hades",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:70,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[840,700,700,700],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 3 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 4 START

function load_rev_slider_4() {
	if(tpj("#welcome").revolution == undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		revapi318 = tpj("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"hades",
					enable:true,
					hide_onmobile:false,
					hide_under:778,
					hide_onleave:false,
					tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					hide_over:778,
					style:"hades",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[840,700,700,700],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "-50px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 4 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 5 START

function load_rev_slider_5() {
	if(tpj("#welcome").revolution === undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		revapi318 = tpj("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"metis",
					enable:true,
					hide_onmobile:false,
					//hide_under:778,
					hide_onleave:false,
					//tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"right",
						v_align:"bottom",
						h_offset:90,
						v_offset:20,
					},
					right: {
						h_align:"right",
						v_align:"bottom",
						h_offset:20,
						v_offset:20,
					}
				}
				,
				bullets: {
					enable:false,
					hide_onmobile:false,
					//hide_over:479,
					style:"hades",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:60,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[720,720,720,720],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 5 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 6 START

function load_rev_slider_6() {
	if(tpj("#welcome_two").revolution === undefined){
		revslider_showDoubleJqueryError("#welcome_two");
	}else{
		revapi318 = tpj("#welcome_two").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"metis",
					enable:false,
					hide_onmobile:false,
					hide_under:778,
					hide_onleave:false,
					//tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:20,
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:20,
						v_offset:20,
					}
				}
				,
				bullets: {
					enable:true,
					//hide_onmobile:false,
					//hide_over:778,
					style:"zeus",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:10,
			        tmp: '<span class="tp-bullet-image"></span><span class="tp-bullet-imageoverlay"></span><span class="tp-bullet-title">{{title}}</span>'
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[720,720,720,720],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 6 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 7 START

function load_rev_slider_7() {
	if(tpj("#welcome").revolution == undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		revapi318 = tpj("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"hades",
					enable:false,
					hide_onmobile:false,
					hide_under:778,
					hide_onleave:false,
					tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					//hide_onmobile:false,
					//hide_over:778,
					style:"hermes",
					hide_onleave:false,
					direction:"vertical",
					h_align:"right",
					v_align:"center",
					h_offset:30,
					v_offset:30,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[840,700,700,700],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "-50px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 7 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 8 START

function load_rev_slider_8() {
	if(tpj("#welcome-8").revolution == undefined){
		revslider_showDoubleJqueryError("#welcome-8");
	}else{
		revapi318 = tpj("#welcome-8").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"hades",
					enable:false,
					hide_onmobile:false,
					hide_under:778,
					hide_onleave:false,
					tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					//hide_onmobile:false,
					//hide_over:778,
					style:"hermes",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:30,
					v_offset:30,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[966,700,700,700],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "-50px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 8 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 9 START

function load_rev_slider_9() {
	if(tpj("#webmax-two").revolution === undefined){
		revslider_showDoubleJqueryError("#webmax-two");
	}else{
		revapi318 = tpj("#webmax-two").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"metis",
					enable:true,
					hide_onmobile:false,
					//hide_under:778,
					hide_onleave:false,
					//tmp:'<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
					left: {
						h_align:"right",
						v_align:"bottom",
						h_offset:90,
						v_offset:20,
					},
					right: {
						h_align:"right",
						v_align:"bottom",
						h_offset:20,
						v_offset:20,
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					hide_under:480,
					style:"bullet-bar",
					hide_onleave:false,
					direction:"vertical",
					h_align:"left",
					v_align:"center",
					h_offset:30,
					v_offset:0,
					space:5,
					tmp:''
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[840,700,700,700],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "-50px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 9 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 10 START

function load_rev_slider_10() {
	if(tpj("#rev_slider_26_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_26_1");
	}else{
		revapi26 = tpj("#rev_slider_26_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"revolution/js/",
			sliderLayout:"fullscreen",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				 mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"Gyges",
					enable:false,
					hide_onmobile:true,
					hide_under:778,
					hide_onleave:false,
					tmp:'',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:15,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:15,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					style:"bullet-bar",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:5,
					tmp:''
				}
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[868,768,960,720],
			lazyType:"none",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:2000,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"off",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "0px",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 10 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 11 START

function load_rev_slider_11() {
	if(tpj("#welcome_two").revolution === undefined){
		revslider_showDoubleJqueryError("#welcome_two");
	}else{
		revapi318 = tpj("#welcome_two").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"au",
			dottedOverlay:"none",
			delay:5000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 				mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style: "hermes",
					enable:true,
					hide_onmobile:false,
					hide_under:778,
					hide_onleave:false,
					tmp: '<div class="tp-arr-allwrapper">	<div class="tp-arr-imgholder"></div>	<div class="tp-arr-titleholder">{{title}}</div>	</div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:0,
						v_offset:0,
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:0,
						v_offset:0,
					}
				}
				,

				bullets: {
					enable:true,
					hide_onmobile:false,
					hide_over:778,
					style:"hades",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:30,
					space:10,
					tmp:'<span class="tp-bullet-image"></span>',
				}
			
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1240,1024,778,480],
			gridheight:[720,720,720,720],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: ".site-header",
			fullScreenOffset: "0px",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 11 END

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 12 START

function load_rev_slider_12() {
	if(tpj("#welcome").revolution == undefined){
		revslider_showDoubleJqueryError("#welcome");
	}else{
		revapi318 = tpj("#welcome").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
				onHoverStop:"off",
				touch:{
					touchenabled:"on",
					touchOnDesktop:"off",
					swipe_threshold: 75,
					swipe_min_touches: 1,
					swipe_direction: "horizontal",
					drag_block_vertical: false
				}
				,
				arrows: {
					style:"new-bullet-bar",
					enable:true,
					hide_onmobile:true,
					hide_under:778,
					hide_onleave:false,
					tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div>    <div class="tp-arr-img-over"></div> </div>',
					left: {
						h_align:"left",
						v_align:"center",
						h_offset:20,
						v_offset:0
					},
					right: {
						h_align:"right",
						v_align:"center",
						h_offset:20,
						v_offset:0
					}
				}
				,
				bullets: {
					enable:true,
					hide_onmobile:false,
					hide_over:479,
					style:"hermes",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:20,
					space:5,
					tmp:''
				}
			},
			viewPort: {
				enable:true,
				outof:"wait",
				visible_area:"80%",
				presize:true
			},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1310,1024,778,480],
			gridheight:[820,700,700,700],
			lazyType:"single",
			parallax: {
				type:"scroll",
				origo:"slidercenter",
				speed:400,
				levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
			},
			shadow:0,
			spinner:"spinner3",
			stopLoop:"on",
			stopAfterLoops:0,
			stopAtSlide:1,
			shuffle:"off",
			autoHeight:"off",
			fullScreenAutoWidth:"off",
			fullScreenAlignForce:"off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
	try{initSocialSharing("318")} catch(e){}
};

// REVOLUTION SLIDER FUNCTION FOR HOME PAGE STYLE 12 END