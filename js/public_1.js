jQuery(document).ready((function(e){function l(l){var f=l.data("storylink"),o=l.data("linktext"),p=l.data("caption"),i=l.data("imagelink"),_=l.data("videolink"),a=l.data("video"),t=l.data("itemnumber");window.innerWidth,window.innerHeight;e(".white-popup .efbl_popup_left_container").css({width:"auto",height:"auto"}),e(".efbl_popup_image").css("height","auto"),i&&(e("#efblcf_holder .efbl_popup_image").attr("src",i),e("#efblcf_holder .efbl_popup_image").css("display","block")),_&&(e("#efblcf_holder .efbl_popup_if_video").attr("src",_),e("#efblcf_holder .efbl_popup_if_video").css({display:"block",width:"720px",height:"400px"})),a&&(e("#efblcf_holder .efbl_popup_video").attr("src",a),e("#efblcf_holder .efbl_popup_video").css("display","block"),setTimeout((function(){e("#efblcf_holder .efbl_popup_video")[0].play()}),500)),e(".efbl_feed_wraper #item_number").val(t),p&&(e("#efblcf_holder .efbl_popupp_footer").html("<p>"+p+' <br> <a class="efbl_popup_readmore" href="'+f+'" target="_blank">'+o+"</a></p>"),e("#efblcf_holder .efbl_popupp_footer").css("display","block"))}function f(){e("#efblcf_holder .efbl_popup_image").attr("src",""),e("#efblcf_holder .efbl_popup_image").css("display","none"),e("#efblcf_holder .efbl_popup_if_video").attr("src",""),e("#efblcf_holder .efbl_popup_if_video").css("display","none"),e("#efblcf_holder .efbl_popup_video").attr("src",""),e("#efblcf_holder .efbl_popup_video").css("display","none"),e("#efblcf_holder .efbl_popupp_footer").html(""),e("#efblcf_holder .efbl_popupp_footer").css("display","none")}(e(".efbl_feed_wraper .efbl_custom_likebox")[0]||e(".widget_easy_facebook_page_plugin .efbl-like-box")[0])&&("undefined"==typeof FB||null===FB?setTimeout((function(){e(".efbl-loader").remove()}),3e3):FB.Event.subscribe("xfbml.render",(function(l){var f=e(".efbl-like-box .fb-page").data("animclass");e(".efbl-loader").remove(),e(".efbl-like-box iframe").addClass("animated "+f)}))),e(".efbl_feed_popup").magnificPopup({type:"ajax",tLoading:"Loading...",preloader:!1,mainClass:"mfp-fade",callbacks:{ajaxContentAdded:function(){l(this.st.el)},beforeOpen:function(){},beforeClose:function(){f()}}}),e(".efbl_share_links").click((function(){e(this).next(".efbl_links_container").slideToggle("slow")})),e(".efbl_info").click((function(){e(this).siblings(".efbl_comments_wraper").slideToggle("slow")})),e("body").on("click",".efbl-popup-next",(function(){f();var o=e(".efbl_feed_wraper #item_number").val();o=parseInt(o)+1;var p=e(this).parents("#efblcf_holder").data("rand_id");o>e("#efbl_feed_"+p+" .efbl_feed_popup").length&&(o=1),l(e(".efbl-cff-item_number-"+o))})),e("body").on("click",".efbl-popup-prev",(function(){f();var o=e(".efbl_feed_wraper #item_number").val(),p=e(this).parents("#efblcf_holder").data("rand_id"),i=e("#efbl_feed_"+p+" .efbl_feed_popup").length;o=1==o?i:parseInt(o)-1,l(e(".efbl-cff-item_number-"+o))}))}));