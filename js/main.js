function ajaxGet(url, callback) {
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
}

ajaxGet("http://localhost/exo4_poo/main.json", function (reponse) {

    var data = JSON.parse(reponse);

    data.person.forEach(user => {
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
});


function sw(){

var value = document.getElementById("selection").value;
    
    if(value === "Alphabetic"){

            // var x = a.firstname.toLowerCase();
            // var y = b.firstname.toLowerCase();
            // return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        
        }else if(value === "Age"){

            //  var x = a.age.toLowerCase();
            //  var y = b.age.toLowerCase();
            //  return ((x < y) ? -1 : ((x > y) ? 1 : 0));

        }
    }
