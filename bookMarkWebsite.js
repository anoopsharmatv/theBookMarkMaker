// Example Valid URLs: https://learning.ccbp.in/, https://www.google.com/

let buttonEle = document.getElementById("submitBtn");
let siteNameInput = document.getElementById("siteNameInput");
let urlInput = document.getElementById("siteUrlInput");
let siteNameErr = document.getElementById("siteNameErrMsg");
let siteUrlErr = document.getElementById("siteUrlErrMsg")
let bookMarkCont = document.getElementById("bookmark")

let validatSiteeInput = function() {
    if (siteNameInput.value === "") {
        siteNameErr.textContent = "*REQUIRED"
    } else {
        siteNameErr.textContent = ""
    }
}

let validateUrlInput = function() {
    if (urlInput.value === "") {
        siteUrlErr.textContent = "REQUIRED*"
    } else {
        siteUrlErr.textContent = ""
    }
}
siteNameInput.addEventListener("blur", validatSiteeInput)
urlInput.addEventListener("blur", validateUrlInput)


let formEle = document.getElementById("bookmarkForm");

let createAndAppendBookMark = function() {
    let bookMarEle = document.getElementById("bookmarksList");
    let siteName = siteNameInput.value;
    let urlName = urlInput.value;
    let listEle = document.createElement("li");
    let urlNameHeading = document.createElement("h1");
    let urlLink = document.createElement("a");
    urlLink.href = urlName
    urlLink.textContent = urlName
    urlNameHeading.textContent = siteName
    listEle.appendChild(urlNameHeading)
    listEle.appendChild(urlLink)
    bookMarEle.appendChild(listEle);
    bookMarkCont.classList.remove("d-none")

}

formEle.addEventListener("submit", function(event) {
    event.preventDefault();
    createAndAppendBookMark()
})