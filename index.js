let remove = document.getElementById('main');
remove.remove();
//removes 'main' by id from html in dom using javascript method
let newHeader = document.createElement("h1");
//defines newHeader as dom element in h1
newHeader.id +="victory";
//logs the id for newHeader as victory
newHeader.textContent = 'David is the champion'
//inserts text content for h1 id #vicotry all within the dom 