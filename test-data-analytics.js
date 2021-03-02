window.ATInternet = {
  onTrackerLoad:function(){
    var ATconfig = {};
    ATconfig.site = 617553;
    var ATTag = new window.ATInternet.Tracker.Tag(ATconfig);
          ATTag.page.set({
      name: #PAGE_NAME#,
      level2: 1,
    chapter1: #CHAPTER1#,
    chapter2: #CHAPTER2#,
    chapter3: #CHAPTER3#,
      customObject: {
    param1: {
      param11: #TESTCUSTOMOBJECT1#,
      param12: #TESTCUSTOMOBJECT2#}  
}});
    ATTag.mvTesting.set({
      test: #mvTestingKameleoonTest#,
      waveId: #mvTestingKameleoonWaveId#,
      creation: #mvTestingKameleoonCreation#
  });
    ATTag.mvTesting.add({
      variable: #mvTestingKameleoonVariable#,
      version: #mvTestingKameleoonVersion#})  
    ATTag.dispatch();
  }
  };





	
var tarteaucitron = document.cookie;
if (tarteaucitron.includes('kameleoon=true')) {
  console.log("optin");
  Kameleoon.API.Core.enableLegalConsent();
} else if (tarteaucitron.includes('kameleoon=wait')) { 
  console.log("optout");
  Kameleoon.API.Core.disableLegalConsent();
}



  var str = document.cookie;
  var res = str.split(!);