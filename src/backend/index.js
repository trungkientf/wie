console.log('background !')
function openWi() {
    var top=(screen.height/2)-300;
        var left=(screen.width/2);
        window.open('/pages/popup.html','Wichart','scrollbars=no,width=640,height=800,top='+top+',left='+left);
}

  chrome.runtime.onInstalled.addListener(function() {
    chrome.contextMenus.create({
      "id": "wi",
      "title": "Wichart",
      "contexts": ["all"]
    });
  });

  chrome.contextMenus.onClicked.addListener(function(item, tab) {
    //let url =
    //  'https://google.' + item.menuItemId + '/search?q=' + item.selectionText;
    //chrome.tabs.create({url: url, index: tab.index + 1});
    openWi();
  });