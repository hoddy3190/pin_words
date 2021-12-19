document.getElementById('dump-pinned-words').onclick = () => {
    // eslint-disable-next-line no-undef
    chrome.storage.sync.get(null, function(obj) {
        let str = '';
        Object.keys(obj).forEach(key => {
            str += key + "\t" + obj[key] + "\n";
        })
        alert(str);
    });
};
