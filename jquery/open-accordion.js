var hash = window.location.hash;
var anchor = $('a[href$="'+hash+'"]');
if (anchor.length > 0){
anchor.click();
}