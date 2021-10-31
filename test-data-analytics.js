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