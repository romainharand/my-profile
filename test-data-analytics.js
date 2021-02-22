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
        ATTag.mvTesting.set({
        test: 'First AB test MV testing',
        waveId: 1,
        creation: 'test-creation'
    });
    	ATTag.mvTesting.add({
        variable: 'test-variable',
        version: #TESTMVTESTING#})  
      ATTag.dispatch();
    }
    };
</script>
