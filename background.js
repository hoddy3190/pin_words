const API_KEY =
""
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
const SPREADSHEET_ID =
""
const SPREADSHEET_TAB_NAME = 'sy';

// インストール時のみ実行にしないとエラーが発生するらしいけど、その現象は起きていない
// https://qiita.com/r-40021/items/cd64894721a0e4723047#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB%E6%9B%B4%E6%96%B0%E6%99%82%E3%81%AB%E3%81%AE%E3%81%BF%E5%AE%9F%E8%A1%8C%E3%81%99%E3%82%8B
// eslint-disable-next-line no-undef
chrome.contextMenus.create(
  {
      id: "pin_word",
      title: "pin_word",
      contexts: ["selection"]
  }
);

function onClickPinWord(info) {
  // eslint-disable-next-line no-undef
  gapi.client.init({
    // Don't pass client nor scope as these will init auth2, which we don't want
    apiKey: API_KEY,
    discoveryDocs: DISCOVERY_DOCS
  }).then(function () {
    console.log('gapi initialized')
    // eslint-disable-next-line no-undef
    chrome.identity.getAuthToken({interactive: true}, function(token) {
      // eslint-disable-next-line no-undef
      gapi.auth.setToken({
        'access_token': token,
      });
      // eslint-disable-next-line no-undef
      gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: SPREADSHEET_ID,
        range: SPREADSHEET_TAB_NAME,
        valueInputOption: 'USER_ENTERED',
        resource: {
          values: [
            ['', info.selectionText, info.pageUrl]
          ]
        },
      // eslint-disable-next-line no-unused-vars
      }).then(function(response) {
        console.log('success')
      });
    })
  }, function(error) {
    alert(error);
  });
}


// eslint-disable-next-line no-undef
chrome.contextMenus.onClicked.addListener(
  // eslint-disable-next-line no-unused-vars
  (info, _tab) => {
      if (info.menuItemId === "pin_word") {
          onClickPinWord(info)
      }
  }
)
