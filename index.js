function showAlert() {
    alert("今日も楽しく開発しよう！");
}
// document.getElementById("alertButton").onclick = function() {
// 	showAlert();
// };
chrome.runtime.onInstalled.addListener(function (details) {
const parent = chrome.contextMenus.create({
    id: "registrrr",
    title: "用語を登録",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
      case "registrrr":
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (url, selectionText) => {
            alert("url: " + url + "select: " + selectionText);


            chrome.storage.local.set({[selectionText]: url}, function() {
                console.log('Value is set to ' + selectionText);
            });
        // chrome.storage.local.get(['key'], function(result) {
        //     console.log('Value currently is ' + result.key);
        // });

        chrome.storage.local.get(null, function(items) {
            console.log(items);
        });


          },
          args: [info.pageUrl, info.selectionText]
        });
        break;
    }});








