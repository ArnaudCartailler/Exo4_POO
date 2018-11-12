// function ajaxGet(url, callback) {
//     var req = new XMLHttpRequest();
//     req.open("GET", url);
//     req.addEventListener("load", function () {
//         if (req.status >= 200 && req.status < 400) {
//             // Appelle la fonction callback en lui passant la réponse de la requête
//             callback(req.responseText);
//         } else {
//             console.error(req.status + " " + req.statusText + " " + url);
//         }
//     });
//     req.addEventListener("error", function () {
//         console.error("Erreur réseau avec l'URL " + url);
//     });
//     req.send(null);
// }

// ajaxGet("http://localhost/exo4_poo/main.json", function (reponse) {

//     var data = JSON.parse(reponse);

//     data.person.forEach(user => {
//         const addline = document.getElementById('addLine');

//         const tr = document.createElement('tr');

//         const td1 = document.createElement('td');
//         const td2 = document.createElement('td');
//         const td3 = document.createElement('td');

//         td1.innerHTML = user.firstname;
//         td2.innerHTML = user.lastname;
//         td3.innerHTML = user.age;

//         addline.appendChild(tr);
//         tr.appendChild(td1);
//         tr.appendChild(td2);
//         tr.appendChild(td3);
//     });

// });


// value = document.getElementById("selection").value;

// function change(value) {


//     if(value === "name"){

//             this.user.sort(function (a, b) {
//             return a.firstname > b.firstname;
//             });

//         } else if(value === "age"){

//             this.user.sort(function (a, b) {
//              return a.age > b.age;
//         });
//     }
// }

//Trying and learning an other way

var itemType;

var HtmlManager = {
    data: "",
    getData: function () {
        HtmlManager.ajaxGet("main.json", function (reponse) {
            HtmlManager.data = JSON.parse(reponse);

            HtmlManager.createDashboard();
        });
    },
    ajaxGet: function (url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url);
        req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
                // Appelle la fonction callback en lui passant la réponse de la requête
                callback(req.responseText);
            } else {
                console.error(req.status + " " + req.statusText + " " + url);
            }
        });
        req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
        });
        req.send(null);
    },

    //JSON request for managing HTML

    sortJson: function () {
        HtmlManager.ajaxGet("main.json", function (reponse) {

            HtmlManager.data = JSON.parse(reponse);

            itemType = document.getElementById("selection").value;

            HtmlManager.checkSelect(itemType);

            HtmlManager.data.person.sort();

            HtmlManager.removeDashboard();

            HtmlManager.createDashboard();
        });
    },

    //Allow sort by

    checkSelect: function (itemType) {
        if (itemType == "firstname") {
            HtmlManager.data.person.sort(function (a, b) {
                return a.firstname > b.firstname;
            });
        } else if (itemType == "lastname") {
            HtmlManager.data.person.sort(function (a, b) {
                return a.lastname > b.lastname;
            });
        } else if (itemType == "age") {
            HtmlManager.data.person.sort(function (a, b) {
                return a.age - b.age;
            });
        }
    },
    removeDashboard: function () {
        let dashboard = document.getElementById("addLine");
        while (dashboard.hasChildNodes()) {
            dashboard.removeChild(dashboard.firstChild);
        }
    },

    //create and display person

    createDashboard: function () {
        HtmlManager.data.person.forEach(user => {
            const addline = document.getElementById('addLine');

            const tr = document.createElement('tr');

            const td1 = document.createElement('td');
            const td2 = document.createElement('td');
            const td3 = document.createElement('td');

            td1.innerHTML = user.firstname
            td2.innerHTML = user.lastname
            td3.innerHTML = user.age

            addline.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
        });
    }

}

HtmlManager.getData();
