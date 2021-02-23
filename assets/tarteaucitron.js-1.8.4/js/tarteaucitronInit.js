tarteaucitron.init({
  "privacyUrl": "", /* Privacy policy url */

  "hashtag": "#tarteaucitron", /* Open the panel with this hashtag */
  "cookieName": "tarteaucitron", /* Cookie name */

  "orientation": "middle", /* Banner position (top - bottom) */
                   
  "showAlertSmall": false, /* Show the small banner on bottom right */
  "cookieslist": false, /* Show the cookie list */
                   
  "closePopup": false, /* Show a close X on the banner */

  "showIcon": true, /* Show cookie icon to manage cookies */
  "iconPosition": "BottomRight", /* BottomRight, BottomLeft, TopRight and TopLeft */

  "adblocker": false, /* Show a Warning if an adblocker is detected */
                   
  "DenyAllCta" : true, /* Show the deny all button */
  "AcceptAllCta" : true, /* Show the accept all button when highPrivacy on */
  "highPrivacy": true, /* HIGHLY RECOMMANDED Disable auto consent */
                   
  "handleBrowserDNTRequest": false, /* If Do Not Track == 1, disallow all */

  "removeCredit": false, /* Remove credit link */
  "moreInfoLink": true, /* Show more info link */

  "useExternalCss": false, /* If false, the tarteaucitron.css file will be loaded */
  "useExternalJs": false, /* If false, the tarteaucitron.js file will be loaded */

  //"cookieDomain": ".my-multisite-domaine.fr", /* Shared cookie for multisite */
                  
  "readmoreLink": "", /* Change the default readmore link */

  "mandatory": true, /* Show a message about mandatory cookies */
});



// AT Internet
tarteaucitron.user.atLibUrl = 'SMARTTAG_JS_LINK';
tarteaucitron.user.atMore = function () { /* add here your optionnal ATInternet.Tracker.Tag configuration */ };
(tarteaucitron.job = tarteaucitron.job || []).push('atinternethightrack');

// Google Fonts
tarteaucitron.user.googleFonts = 'families';
(tarteaucitron.job = tarteaucitron.job || []).push('googlefonts');