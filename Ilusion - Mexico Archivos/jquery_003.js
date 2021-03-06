(function($) {
	$.fn.sooperfish=function(a){
		var b=$.fn.sooperfish;
		b.o=[];		
		b.op={};
		b.c={menuClass:"sf-js-enabled",isParent:"sf-parent",arrowClass:"sf-arrow"};
		if($.easing.easeOutOvershoot){
			sooperEasingShow="easeOutOvershoot"
		} else {
			sooperEasingShow="linear"
		}
		if($.easing.easeInTurbo){
			sooperEasingHide="easeInTurbo"
		} else {
			sooperEasingHide="linear"
		}
		b.defaults={ 
			multiColumn:true,dualColumn:6,tripleColumn:12,hoverClass:"sfHover",delay:500,animationShow:{height:"show"},
			speedShow:600,
			easingShow:sooperEasingShow,
			animationHide:{height:"hide",opacity:"hide"},
			speedHide:200,
			easingHide:sooperEasingHide,
			autoArrows:true,
			onShow:function(){},
			onHide:function(){}
		};
		var c=$.extend({},b.defaults,a);
		if(!c.sooperfishWidth){
			c.sooperfishWidth=$("ul:first li:first",this).width()
		} else {
			$("ul li",this).width(c.sooperfishWidth)
		}
		this.each(function(){
			function g(a){
				if(a.nodeName.toLowerCase()=="li"){
					var b=$("> ul",a);
					return b.length?b[0]:null
				} else if(a.nodeName.toLowerCase()=="span"){
					var b=$(a).parent().find("ul");
					return b.length?b[0]:null
				} else { 
					return a 
				}
			}
			function h(a){
				if(a.nodeName.toLowerCase()=="ul"){
					return $(a).parents("li")[0]
				} else {
					return a
				}
			}
			function i(){
				var a=g(this);
				if(!a) return;
				$.data(a,"cancelHide",false);
				setTimeout(function(){
					if(!$.data(a,"cancelHide")){
						$(a).animate(c.animationHide,c.speedHide,c.easingHide,function(){
							c.onHide.call(a);
							$(this).parent().removeClass("sf-open")
						})
					}
				},
				c.delay)
			}
			function j(){
				var a=g(this);
				if(!a) return;
				$.data(a,"cancelHide",true);
				$(a).css({zIndex:f++}).animate(c.animationShow,c.speedShow,c.easingShow,function(){
					c.onShow.call(a);
					$(this).parent().addClass("sf-open")})
			}
			var a=$("li:has(ul)",this);
			a.each(function(){
				if(c.autoArrows){
					$("> a, > span",this).append('')
				}
				$(this).addClass(b.c.isParent)
			});
			$("ul",this).css({left:"auto",display:"none"});
			if(c.multiColumn){
				var d=$("ul",this);
				d.each(function(){
					var a=$(">li:not(.backLava)",this).length;
					if(a>=c.dualColumn){
						if(a>=c.tripleColumn){
							$(this).width(3*c.sooperfishWidth).addClass("multicolumn triplecolumn")
						} else {
							$(this).width(2*c.sooperfishWidth).addClass("multicolumn dualcolumn")
						}
					}
				})
			}			
			var e=this,f=1e3;		
			if(!!("ontouchstart"in window)==false){
				$("li",this).unbind().hover(j,i)
			} else {
				if($("li > span",this).length>0){
					$("li > span",this).unbind().toggle(j,i)
				}
			}
		})
	} 
})(jQuery);