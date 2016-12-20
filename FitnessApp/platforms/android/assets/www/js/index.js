var application = document.getElementsByClassName("app")[0];
function loadingScreen(){
    application.style.background = "url('img/logo.svg') center center no-repeat";
    application.style.backgroundSize = "50vw";

    var slogan = document.createElement("p");
    var content = document.createTextNode("Die App wird hergerichtet ...");
    slogan.setAttribute("id","slogan");
    slogan.appendChild(content);
    document.body.appendChild(slogan);
    slogan.style.position = "fixed";
    slogan.style.bottom = "0";
    slogan.style.width = "100vw";
    slogan.style.textAlign = "center"; 

    setTimeout(function(){
        showHomeScreen();
    },3000);
}

function showHomeScreen(){
    application.style.background = "none";
    document.body.removeChild(document.getElementById("slogan"));
}








var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

loadingScreen();