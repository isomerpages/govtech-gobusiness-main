function copylink() {
    /* Get the text field */
    var copyText = document.getElementById("clipboard");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    return navigator.clipboard.writeText(copyText.value);
  
  }