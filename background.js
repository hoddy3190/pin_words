const onClickPinWord = (info) => {
    // eslint-disable-next-line no-undef
    chrome.storage.sync.set({[info.selectionText]: info.pageUrl}, function() {
        console.log('Key is set to' + info.selectionText + 'Value is set to ' + info.pageUrl);
    });
}

// eslint-disable-next-line no-undef
chrome.contextMenus.create(
    {
        id: "pin_word",
        title: "pin_word",
        contexts: ["selection"]
    }
)

// eslint-disable-next-line no-undef
chrome.contextMenus.onClicked.addListener(
    // eslint-disable-next-line no-unused-vars
    (info, _tab) => {
        if (info.menuItemId === "pin_word") {
            onClickPinWord(info)
        }
    }
)
