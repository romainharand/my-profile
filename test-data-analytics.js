<script type="text/javascript"> 
  (function(){
            var at = document.createElement('script');
            at.type = 'text/javascript';
            at.async = true;
            at.src = '//tag.aticdn.net/617553/smarttag.js';
            (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] || document.getElementsByTagName('script')[0].parentNode).insertBefore(at, null);
        })(); 
  window.ATInternet = {
    onTrackerLoad:function(){
      var ATconfig = {};
      ATconfig.site = 617553;
      var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
      ATTag.page.set({
        name: #PAGE_NAME#,
        level2: 1,
    	chapter1: "chapter1",
    	chapter2: "chapter2",
    	chapter3: "chapter3",
        customObject: {
    	param1: {
      	param11: 'testCustomObject1',
      	param12: 'testCustomObject2'
    }  
  }});
	ATTag.customVars.set({
    site: {
        1: "prod",
        2: "rouge",
        3: "grande",
      	4: 3,
      	5: 1.3,
    page: {
        1: "pagevariable1",
        2: "pagevariable2",
        3: "pagevariable3"}
    }});
       if (typeof mvTesting && set !== "undefined"){
        ATTag.mvTesting.set({
        test: 'First AB test MV testing',
        waveId: 1,
        creation: 'test-creation'
    });
    	ATTag.mvTesting.add({
        variable: 'test-variable',
        version: 'test-version'
        })}
ATTag.selfPromotion.set({
   impression:{
      adId: '1',
      format: 'test-auto-promo-format'
   }
});   
      ATTag.dispatch();
    }
    };
</script>
