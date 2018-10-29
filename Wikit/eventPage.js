var MenuItem = {
    "id":"wikit",
    "title":"Wikit",
    "contexts":["selection"]
};

chrome.contextMenus.create(MenuItem);

function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g,'[').replace(/%5D/g,']');
};

chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId =="wikit" && clickData.selectionText){
        var wikitUrl = "https://en.wikipedia.org/wiki/"+ fixedEncodeURI(clickData.selectionText);
        var createData = {
            "url":wikitUrl,
            "type":"popup",
            "top":5,
            "left": 5,
            "width": parseInt(screen.availWidth/2),
            "height": parseInt(screen.availHeight/2)
        };
        chrome.windows.create(createData, function(){});
    }
})