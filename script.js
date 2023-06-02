// alert("*******");
// console.log("*********" + document.getElementsByClassName('sc-1kj39fw-0 bPflYs')[0].innerHTML);

chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    replacePageWords(items.keywordsArray);
  });
  function replacePageWords(keywordsArray){
    //...
    for (var i = 0; i < keywordsArray.length; i++) {
      replaceWord(keywordsArray[i]);
    }
  }
  function replaceWord(obj){
    console.log('replace checks for obj', obj);
    var allElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, a, div, caption, span, td');
    for (var i = 0; i < allElements.length; i++) {
      if(allElements[i].innerText.toLowerCase().includes(obj.keyword.toLowerCase())){
        if(obj.type == '0'){
          //remove
          allElements[i].innerHTML = allElements[i].innerHTML.replace(obj.keyword, '');
        }else if(obj.type == '1'){
          //replace
          allElements[i].innerHTML = allElements[i].innerHTML.replace(obj.keyword, obj.replace);
        }
      }
    }
  }

// var email = document.getElementsByClassName('sc-1kj39fw-0 bPflYs').innerHTML;

// function obfuscateEmail(email) {
//     var splitEmail = email.split('@');
//     var firstTwoChars = splitEmail[0].substring(0, 2);
//     return firstTwoChars + '*****@' + splitEmail[1]; 
// }

// email = obfuscateEmail(email);