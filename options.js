function saveOptions(e) {
    localStorage.setItem("pstName", document.querySelector("#userName").value);
    localStorage.setItem("selfColor", document.querySelector("#colorChoice").value);
//    browser.storage.local.set({
//        pstName: document.querySelector("#userName").value,
//        selfColor: document.querySelector("#colorChoice").value
//    });
    e.preventDefault();
}

function updateUI(res) {
    document.querySelector("#userName").value = res.pstName || "";
    document.querySelector("#colorChoice").value = res.selfColor || "";
}

function onError(e) {
    console.error(e);
}

function restoreOptions() {
//    var gettingItem = browser.storage.local.get();
//    gettingItem.then(updateUI, onError);
    document.querySelector("#userName").value = localStorage.getItem("pstName") || "";
    document.querySelector("#colorChoice").value = localStorage.getItem("selfColor") || "";
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector("#submit_form").addEventListener("submit", saveOptions);