function init(){silkNav(),heroes(),harmonicas(),modals(),slideshows(),triggers(),instagram(),twitter()}function heroes(){var hero=document.querySelectorAll(".hero img");if(document.body.contains(hero[0]))for(var i=0;i<hero.length;i++){var image=hero[i].getAttribute("src");hero[i].parentNode.style.backgroundImage="url("+image+")"}}function harmonicas(){harmonica({container:".silk-harmonica--condensed",header:".silk-harmonica__header"}),harmonica({container:".silk-harmonica--expanded",header:".silk-harmonica__header"})}function slideshows(){var swiftSlide=document.querySelector(".swift-slide");document.body.contains(swiftSlide)&&swift({container:".swift-slide",elements:"li",prevSymbol:"chevron-left",nextSymbol:"chevron-right"})}function modals(){var modal=document.querySelector(".silk-modal");document.body.contains(modal)&&silkModal()}function triggers(){triggerParent({trigger:".silk-modal__trigger"}),triggerParent({trigger:".nav-tier__trigger"})}function instagram(){var instagramFeed=document.querySelector("#instagram-feed");if(document.body.contains(instagramFeed)){var feed=new Instafeed(instagramConfig);feed.run()}}function twitter(){var twitterFeed=document.querySelector("#twitter-feed");document.body.contains(twitterFeed)&&twitterFetcher.fetch(twitterConfig)}function twitterTemplate(tweets){for(var element=document.getElementById("twitter-feed"),i=0;i<tweets.length;)element.innerHTML+='<li class="twitter-item">'+tweets[i]+"</li>",i++}var instagramConfig={get:"user",userId:"1288755802",accessToken:"31863373.d8d1d50.272aa08df34a412aa98bcfd58f8e49d1",target:"instagram-feed",limit:1,resolution:"standard_resolution",sortBy:"most-recent",template:'<li class="instagram-item"><a class="instagram-item__link" href="{{link}}"><img class="instagram-item__image" src="{{image}}" alt="{{caption}}"/><div class="instagram-item__details"><p class="instagram-item__caption">{{caption}}</p></div></a></li>'},twitterConfig={id:"347099293930377217",domId:"twitter-feed",maxTweets:1,enableLinks:!0,showInteraction:!1,showUser:!1,showTime:!1,lang:"en",customCallback:twitterTemplate};init();