# pin_words

webページ上の単語を選択し、それをpageurlとともに記録するchrome拡張。  
[main](https://github.com/hoddy3190/pin_words/tree/main)ブランチの成果物は、localstorageに記録する。  
[manifest_v2](https://github.com/hoddy3190/pin_words/tree/manifest_v2)ブランチの成果物は、スプレッドシートに記録する。  

## manifest version 3では、chrome拡張機能からgapiを使うのは厳しい

- gapiは、https://apis.google.com/js/client.js で提供されている
- manifest v3の[Content security policy](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-migration/#content-security-policy)の改変で、script-srcの属性には`self`か`none`かlocalhostしか指定できなくなった（https://apis.google.com を指定できなくなった）
  - action(popupなど)や、content scriptsからclient.jsを読み込むことはpolicy違反となる
- backgroundのservice_workerからclient.jsを読み込もうとしても、service_workerはDOMにアクセスできない（cf. [service workers don't have access to DOM](https://developer.chrome.com/docs/extensions/mv3/migrating_to_service_workers/)）ので、client.jsのようにDOM操作をしているコードを読み込めない

cf. https://github.com/google/google-api-javascript-client/issues/64


## manifest version 2なら、chrome拡張機能からgapiを楽に使える

v3と違って、`script-src`に`https://apis.google.com`を指定できるため。  
[manifest_v2](https://github.com/hoddy3190/pin_words/tree/manifest_v2)ブランチにコードを置いた。

cf. 
1. https://bumbu.me/gapi-in-chrome-extension
2. https://qiita.com/plumfield56/items/6fe255180739ba4b1a25 (1の記事の日本語解説)

