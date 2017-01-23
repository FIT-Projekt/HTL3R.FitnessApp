Array.prototype.inArray = function(comparer) { 
    for(var i=0; i < this.length; i++) { 
        if(comparer(this[i])) return true; 
    }
    return false; 
}; 

Array.prototype.pushIfNotExist = function(element, comparer) { 
    if (!this.inArray(comparer)) {
        this.push(element);
    }
}; 

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    document.getElementById("settings").addEventListener("click",function(){
        navigator.notification.alert("Diese Funktion ist derzeit noch nicht verfuegbar", function(){}, "Fehler", "OK");    
    });
    document.getElementById("info").addEventListener("click",function(){
        window.location = "about.html";
    });
    createTable();
    document.addEventListener("backbutton", onBackKeyDown, false);
}

function onBackKeyDown() {
    window.location = "maintest.html";           
}

//Frauen Anfaenger uebungen
var brustUebungenFrauAnf = new Array("Butterfly","Kurzhantelschraegbankdr.","Reverse-Flies(G)");
var schulterUebungenFrauAnf = new Array("Seitheben","Frontheben(KZ)","Hanteldruecken");
var bizepsUebungenFrauAnf = new Array("Bizepscurls","Hammercurls");
var trizepsUebungenFrauAnf = new Array("Trizepsdruecken(KZ)","Arnold-Dips");
var rueckenUebungenFrauAnf = new Array("Lattzug","Rudern(KZ)","Rueckenstrecken");
var bauchUebungenFrauAnf = new Array("Crunches","Beinheben");
var beinPoUebungenFrauAnf = new Array("Beinpresse","Beinstrecker","Kickbacks","Ausfallschritt");

//Frauen Fortgeschritten uebungen
var brustUebungenFrauFort = new Array("Butterfly","Kurzhantelschraegbankdr.","Reverse-Flies(G)");
var schulterUebungenFrauFort = new Array("Seitheben","Frontheben(KZ)","Hanteldruecken");
var bizepsUebungenFrauFort = new Array("Bizepscurls","Hammercurls");
var trizepsUebungenFrauFort = new Array("Trizepsdruecken(KZ)","Arnold-Dips");
var rueckenUebungenFrauFort = new Array("Lattzug","Rudern(KZ)","Rueckenstrecken","Kreuzheben");
var bauchUebungenFrauFort = new Array("Crunches","Beinheben","Reverse-Crunch");
var beinPoUebungenFrauFort = new Array("Beinpresse","Beinstrecker","Kickbacks","Ausfallschritt","Kniebeugen","Abduktoren(G)");

//Mann Anfaenger uebungen
var brustUebungenMannAnf = new Array("Bankdruecken","Kurzhantelschraegbankdr.","Pull Over");
var schulterUebungenMannAnf = new Array("Reverse-Flies(KZ)","Frontheben(KZ)","Kurzhantelschulterdr.");
var bizepsUebungenMannAnf = new Array("Bizepscurls","Hammercurls","Langhantelcurls");
var trizepsUebungenMannAnf = new Array("Trizepsdruecken(KZ)","Trizeps-Dips","Stirndruecken");
var rueckenUebungenMannAnf = new Array("Lattzug","Rudern(KZ)","Klimmzuege");
var bauchUebungenMannAnf = new Array("Crunches","Sit-Ups");
var beinPoUebungenMannAnf = new Array("Beinpresse","Beinstrecker","Abduktion(KZ)");

//Mann Fortgeschritten uebungen
var brustUebungenMannFort = new Array("Bankdruecken","Kurzhantelschraegbankdr.","Pull Over","Reverse-Flies(G)");
var schulterUebungenMannFort = new Array("Reverse-Flies(KZ)","Frontheben(KZ)","Kurzhantelschulterdr.","Seitheben");
var bizepsUebungenMannFort = new Array("Bizepscurls","Hammercurls","Langhantelcurls","Kurzhantelbizepscurls");
var trizepsUebungenMannFort = new Array("Trizepsdruecken(KZ)","Trizeps-Dips","Stirndruecken");
var rueckenUebungenMannFort = new Array("Lattzug","Rudern(KZ)","Klimmzuege","Kreuzheben","Langhantelrudern");
var bauchUebungenMannFort = new Array("Crunches","Sit-Ups","Reverse-Crunch","Sit-Ups-negativ");
var beinPoUebungenMannFort = new Array("Beinpresse","Beinstrecker","Abduktion(KZ)","Kniebeugen","stehendes Wadenheben");

var brust = [];
var schulter = [];
var bizeps = [];
var trizeps = [];
var ruecken = [];
var bauch = [];
var beinPo = [];

var c, r, t, b, h;
var path = "";
var funktionFertig = false;

function checkArt(){
    if(localStorage.getItem("art") == "Muskelaufbau"){

        h = document.createElement("h1");
        h.appendChild(document.createTextNode("Wichtiges"));
        document.body.appendChild(h);

        t = document.createElement('table');
        t.id = "wichtig";

        r = t.insertRow(0); 
        c = r.insertCell(0);
        c.innerHTML = "Proteinhaltige Ernährung!";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Das beste Training nützt nichts, wenn der Körper nicht die nötige Energie erhält. Als Faustregel für den Muskelaufbau, kann man sich an 2-3g Eiweiß pro Kilo Körpergewicht halten, aufgeteilt auf zirka 6 Mahlzeiten am Tag.";

        r = t.insertRow(1); 
        c = r.insertCell(0);
        c.innerHTML = "Cardio nach dem Krafttraining!";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Wird in der Regel gerne am Anfang vom Training gemacht, sollte aber beim Ziel Muskelaufbau unbedingt nach dem Krafttraining erfolgen. So hast du maximale Energie/Kraft, um deine Muskeln zu reizen. Beim anschließenden Cardio benötigst du diese Maximalkraft nicht mehr. ";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = "Periodisierung des Trainings einführen ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Alle 6-8 Wochen regelmäßig die Trainingsart wechseln. Der Körper gewöhnt sich rasch an eine Anstrengung und danach stagniert der Trainingserfolg. ";

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = "Kalorienzufuhr beachten ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Für den Muskelaufbau braucht der Köper einen leichten Kalorienüberschuss von zirka 500 Kalorien. ";

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = "Trainiere den ganzen Körper! ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Oft vernachlässigen besonders Anfänger entscheidende Muskelgruppen (z.B. Bein-, Gesäß-, untere Rückenmuskeln). Das kann zu körperlichen Problemen führen, fehlender Rumpfstabilität und oder ab einem gewissen Punkt den Fortschritt stoppen. ";

        document.body.appendChild(t);

        t.style.marginTop = "8px";

    }else if(localStorage.getItem("art") == "Abnehmen"){

        h = document.createElement("h1");
        h.appendChild(document.createTextNode("Wichtiges"));
        document.body.appendChild(h);

        t = document.createElement('table');
        t.id = "wichtig";

        r = t.insertRow(0); 
        c = r.insertCell(0);
        c.innerHTML = "Kleine Ziele setzen ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Setzt euch beim Abnehmen realistische Ziele. 1/2 bzw. maximal 1 Kilo pro Woche sind machbar. Im Monat kann man 2 bis 3 Kilo schaffen.Von der Vorstellung 3 Kilo in 3 Tagen abzunehmen oder 15 Kilo in 6 Wochen, solltet ihr euch verabschieden, wenn ihr richtig und langfristig abnehmen wollt. ";

        r = t.insertRow(1); 
        c = r.insertCell(0);
        c.innerHTML = "Langsamer Gewichtsverlust ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Beim Abnehmen ist es wichtig, möglichst vielseitig zu essen. Tipp für kalorienarme Gerichte, die lange satt machen: Fleisch, Fisch oder Milchprodukte mit Salat, Gemüse und Obst kombinieren. Auch Vollkornlebensmittel sättigen lange. ";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = "Regelmäßige Mahlzeiten ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Wer abnehmen will, sollte regelmäßig essen. Das fängt beim Frühstück an.Mit dem täglichen Frühstück vermeidet man Leistungstiefs und Heißhunger. Wer nicht hungrig ist, sollte einen Saft oder ein Glas Milch trinken und später richtig frühstücken.Drei oder fünf Mahlzeiten? Entscheidet selbst. In der Wissenschaft gehen die Meinungen zu diesem Thema auseinander. Wichtig ist, dass ihr morgens, mittags und abends regelmäßig eine größere Mahlzeit esst, die sättigt und zufriedenstellt. ";

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = "Essauslöser finden ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Stress, Ärger, Langeweile: Es gibt viele Gründe, warum wir essen. Hunger ist nur ein kleiner Teil davon.Beobachtet euch mal ein paar Tage lang und notiert, wann und warum ihr esst. Mit diesem Wissen im Hinterkopf stellt ihr eure Gewohnheiten um. Neigt ihr zum Stress-Essen, legt ihr regelmäßig Entspannungspausen ein. Langeweile-Esser sollten aktiver werden und sich neue Hobbys suchen oder mehr mit Freunden unternehmen. ";

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = "Regelmäßige Bewegung ";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Wer dauerhaft abnehmen möchte, kommt um Sport bzw. mehr Bewegung nicht herum. Das fängt im Alltag an. Macht nach dem Mittagessen einen 20-minütigen Spaziergang, erledigt Einkäufe etc. zu Fuß oder mit dem Rad und nehmt Treppen statt Aufzug und Rolltreppe. Auf die Weise integriert ihr locker 30 Minuten mehr Bewegung pro Tag in euer Leben. Dazu solltet ihr regelmäßig drei bis vier Mal pro Woche Ausdauer- und Kraftsport betreiben, wenn ihr richtig und langfristig abnehmen wollt. ";

        document.body.appendChild(t);

        t.style.marginTop = "8px";

    }else if(localStorage.getItem("art") == "Fitness"){
        
        h = document.createElement("h1");
        h.appendChild(document.createTextNode("Wichtiges"));
        document.body.appendChild(h);

        t = document.createElement('table');
        t.id = "wichtig";

        r = t.insertRow(0); 
        c = r.insertCell(0);
        c.innerHTML = "Den Alltag als Fitnesscenter nutzen";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Statt den Aufzug oder die Rolltreppe zu nutzen, nehmen Sie einfach die Treppe. Denn besonders das regelmäßige Treppensteigen wirkt wahre Wunder. Ihr Kreislauf kommt in Schwung und gleichzeitig wirken sich Treppen positiv auf Ihre Gesäßmuskulatur aus. ";

        r = t.insertRow(1); 
        c = r.insertCell(0);
        c.innerHTML = "Warm-Up und Cool-Down";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Ihr Körper stellt dabei von der Alltagstätigkeit auf körperliche Betätigung um. Bewegen Sie sich während der ersten Minuten des Trainings langsam bzw. bei sehr niedrigem Puls. Zum Schluss des Trainings gilt es dann die Belastung wieder langsam zurückzufahren und dabei am besten nochmals kurz durchdehnen. ";
        
        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = "Stellen Sie Ihre Ernährung dauerhaft um";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Vermeiden Sie Fast Food und Fertigkost und verzichten Sie beim Frühstück nach und nach auf Brötchen und Weißbrot und essen Sie stattdessen Vollkornbrot. Essen Sie vermehrt Obst und Gemüse sowie fettarmes Fleisch. ";

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = "Trinken Sie sich fit";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Vermeiden Sie zuckerhaltige Getränke und trinken Sie zwischen 1,5 und 2 Liter Wasser pro Tag. Im Sommer oder bei körperlicher Betätigung dürfen es auch ein paar Liter mehr sein. ";

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = "Bleiben Sie am Ball";
        c.className = "name";
        c = r.insertCell(1);
        c.innerHTML = "Gerade was die sportliche Betätigung betrifft, empfiehlt es sich einen festen Plan aufzustellen. Setzen Sie sich immer wieder neue Ziele und halten Sie sich stets vor Augen, was Sie bisher alles erreicht haben. ";

        document.body.appendChild(t);

        t.style.marginTop = "8px";
    }
}

function checkData2(){
    if(localStorage.getItem("geschlaecht") == "Frau"){
        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 2){
                var element = brustUebungenFrauAnf[Math.round(Math.random()*(brustUebungenFrauAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenFrauAnf[Math.round(Math.random()*(schulterUebungenFrauAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauAnf[Math.round(Math.random()*(bizepsUebungenFrauAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauAnf[Math.round(Math.random()*(trizepsUebungenFrauAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenFrauAnf[Math.round(Math.random()*(rueckenUebungenFrauAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauAnf[Math.round(Math.random()*(bauchUebungenFrauAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenFrauAnf[Math.round(Math.random()*(beinPoUebungenFrauAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

           while(brust.length < 2){
                var element = brustUebungenFrauFort[Math.round(Math.random()*(brustUebungenFrauFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenFrauFort[Math.round(Math.random()*(schulterUebungenFrauFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauFort[Math.round(Math.random()*(bizepsUebungenFrauFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauFort[Math.round(Math.random()*(trizepsUebungenFrauFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenFrauFort[Math.round(Math.random()*(rueckenUebungenFrauFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauFort[Math.round(Math.random()*(bauchUebungenFrauFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenFrauFort[Math.round(Math.random()*(beinPoUebungenFrauFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    } else {

        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 2){
                var element = brustUebungenMannAnf[Math.round(Math.random()*(brustUebungenMannAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenMannAnf[Math.round(Math.random()*(schulterUebungenMannAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannAnf[Math.round(Math.random()*(bizepsUebungenMannAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenMannAnf[Math.round(Math.random()*(trizepsUebungenMannAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenMannAnf[Math.round(Math.random()*(rueckenUebungenMannAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannAnf[Math.round(Math.random()*(bauchUebungenMannAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenMannAnf[Math.round(Math.random()*(beinPoUebungenMannAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

            while(brust.length < 2){
                var element = brustUebungenMannFort[Math.round(Math.random()*(brustUebungenMannFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 2){
                var element = schulterUebungenMannFort[Math.round(Math.random()*(schulterUebungenMannFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannFort[Math.round(Math.random()*(bizepsUebungenMannFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenMannFort[Math.round(Math.random()*(trizepsUebungenMannFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 2){
                var element = rueckenUebungenMannFort[Math.round(Math.random()*(rueckenUebungenMannFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannFort[Math.round(Math.random()*(bauchUebungenMannFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 2){
                var element = beinPoUebungenMannFort[Math.round(Math.random()*(beinPoUebungenMannFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    }
}

function checkData3(){
    if(localStorage.getItem("geschlaecht") == "Frau"){
        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenFrauAnf[Math.round(Math.random()*(brustUebungenFrauAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauAnf[Math.round(Math.random()*(schulterUebungenFrauAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauAnf[Math.round(Math.random()*(bizepsUebungenFrauAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauAnf[Math.round(Math.random()*(trizepsUebungenFrauAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauAnf[Math.round(Math.random()*(rueckenUebungenFrauAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauAnf[Math.round(Math.random()*(bauchUebungenFrauAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenFrauAnf[Math.round(Math.random()*(beinPoUebungenFrauAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

           while(brust.length < 3){
                var element = brustUebungenFrauFort[Math.round(Math.random()*(brustUebungenFrauFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauFort[Math.round(Math.random()*(schulterUebungenFrauFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauFort[Math.round(Math.random()*(bizepsUebungenFrauFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauFort[Math.round(Math.random()*(trizepsUebungenFrauFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauFort[Math.round(Math.random()*(rueckenUebungenFrauFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauFort[Math.round(Math.random()*(bauchUebungenFrauFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 3){
                var element = beinPoUebungenFrauFort[Math.round(Math.random()*(beinPoUebungenFrauFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    } else {

        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenMannAnf[Math.round(Math.random()*(brustUebungenMannAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannAnf[Math.round(Math.random()*(schulterUebungenMannAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannAnf[Math.round(Math.random()*(bizepsUebungenMannAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannAnf[Math.round(Math.random()*(trizepsUebungenMannAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannAnf[Math.round(Math.random()*(rueckenUebungenMannAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannAnf[Math.round(Math.random()*(bauchUebungenMannAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 3){
                var element = beinPoUebungenMannAnf[Math.round(Math.random()*(beinPoUebungenMannAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

            while(brust.length < 3){
                var element = brustUebungenMannFort[Math.round(Math.random()*(brustUebungenMannFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannFort[Math.round(Math.random()*(schulterUebungenMannFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 3){
                var element = bizepsUebungenMannFort[Math.round(Math.random()*(bizepsUebungenMannFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannFort[Math.round(Math.random()*(trizepsUebungenMannFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannFort[Math.round(Math.random()*(rueckenUebungenMannFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 3){
                var element = bauchUebungenMannFort[Math.round(Math.random()*(bauchUebungenMannFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenMannFort[Math.round(Math.random()*(beinPoUebungenMannFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    }
}

function checkData4(){
    if(localStorage.getItem("geschlaecht") == "Frau"){
        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenFrauAnf[Math.round(Math.random()*(brustUebungenFrauAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauAnf[Math.round(Math.random()*(schulterUebungenFrauAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauAnf[Math.round(Math.random()*(bizepsUebungenFrauAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauAnf[Math.round(Math.random()*(trizepsUebungenFrauAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauAnf[Math.round(Math.random()*(rueckenUebungenFrauAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenFrauAnf[Math.round(Math.random()*(bauchUebungenFrauAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenFrauAnf[Math.round(Math.random()*(beinPoUebungenFrauAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

           while(brust.length < 3){
                var element = brustUebungenFrauFort[Math.round(Math.random()*(brustUebungenFrauFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenFrauFort[Math.round(Math.random()*(schulterUebungenFrauFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenFrauFort[Math.round(Math.random()*(bizepsUebungenFrauFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 2){
                var element = trizepsUebungenFrauFort[Math.round(Math.random()*(trizepsUebungenFrauFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenFrauFort[Math.round(Math.random()*(rueckenUebungenFrauFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 3){
                var element = bauchUebungenFrauFort[Math.round(Math.random()*(bauchUebungenFrauFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 5){
                var element = beinPoUebungenFrauFort[Math.round(Math.random()*(beinPoUebungenFrauFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    } else {

        if(localStorage.getItem("erfahrung") == "Anfanger"){

            while(brust.length < 3){
                var element = brustUebungenMannAnf[Math.round(Math.random()*(brustUebungenMannAnf.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannAnf[Math.round(Math.random()*(schulterUebungenMannAnf.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 2){
                var element = bizepsUebungenMannAnf[Math.round(Math.random()*(bizepsUebungenMannAnf.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannAnf[Math.round(Math.random()*(trizepsUebungenMannAnf.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannAnf[Math.round(Math.random()*(rueckenUebungenMannAnf.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 2){
                var element = bauchUebungenMannAnf[Math.round(Math.random()*(bauchUebungenMannAnf.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 3){
                var element = beinPoUebungenMannAnf[Math.round(Math.random()*(beinPoUebungenMannAnf.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

        } else {

            while(brust.length < 3){
                var element = brustUebungenMannFort[Math.round(Math.random()*(brustUebungenMannFort.length-1))];
                brust.pushIfNotExist(element, function(e) { 
                    return e === element; 
                });
            }

            while(schulter.length < 3){
                var element = schulterUebungenMannFort[Math.round(Math.random()*(schulterUebungenMannFort.length-1))];
                schulter.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bizeps.length < 3){
                var element = bizepsUebungenMannFort[Math.round(Math.random()*(bizepsUebungenMannFort.length-1))];
                bizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(trizeps.length < 3){
                var element = trizepsUebungenMannFort[Math.round(Math.random()*(trizepsUebungenMannFort.length-1))];
                trizeps.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(ruecken.length < 3){
                var element = rueckenUebungenMannFort[Math.round(Math.random()*(rueckenUebungenMannFort.length-1))];
                ruecken.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(bauch.length < 3){
                var element = bauchUebungenMannFort[Math.round(Math.random()*(bauchUebungenMannFort.length-1))];
                bauch.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }

            while(beinPo.length < 4){
                var element = beinPoUebungenMannFort[Math.round(Math.random()*(beinPoUebungenMannFort.length-1))];
                beinPo.pushIfNotExist(element, function(e){
                    return e === element;
                });
            }
        }
    }
}

function showFile(){
    cordova.plugins.fileOpener2.open(
                                     path, // You can also use a Cordova-style file uri: cdvfile://localhost/persistent/Download/starwars.pdf
                                     'application/pdf',
                                     {
                                     error : function(e) {
                                     console.log('Error status: ' + e.status + ' - Error message: ' + e.message);
                                     },
                                     success : function () {
                                     console.log('file opened successfully');
                                     }
                                     }
                                     );
}

function createFile(){
    var doc = new jsPDF("p","pt","a4");
    if(document.getElementsByTagName("table").length == 3){
        var res1 = doc.autoTableHtmlToJson(document.getElementById("table1"));
        var res2 = doc.autoTableHtmlToJson(document.getElementById("table2"));

        doc.autoTable(res1.columns, res1.data, {
            startY:20,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
        doc.autoTable(res2.columns, res2.data, {
            startY:doc.autoTable.previous.finalY + 15,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
        
    }else if(document.getElementsByTagName("table").length == 4){
        var res1 = doc.autoTableHtmlToJson(document.getElementById("table1"));
        var res2 = doc.autoTableHtmlToJson(document.getElementById("table2"));
        var res3 = doc.autoTableHtmlToJson(document.getElementById("table3"));
        doc.autoTable(res1.columns, res1.data, {
            startY:20,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
        doc.autoTable(res2.columns, res2.data, {
            startY:doc.autoTable.previous.finalY + 15,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
        doc.autoTable(res3.columns, res3.data, {
            startY:doc.autoTable.previous.finalY + 15,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
    }else if(document.getElementsByTagName("table").length == 5){
        var res1 = doc.autoTableHtmlToJson(document.getElementById("table1"));
        var res2 = doc.autoTableHtmlToJson(document.getElementById("table2"));
        var res3 = doc.autoTableHtmlToJson(document.getElementById("table3"));
        var res4 = doc.autoTableHtmlToJson(document.getElementById("table4"));
        doc.autoTable(res1.columns, res1.data, {
            startY:20,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
        doc.autoTable(res2.columns, res2.data, {
            startY:doc.autoTable.previous.finalY + 15,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
        doc.autoTable(res3.columns, res3.data, {
            startY:doc.autoTable.previous.finalY + 15,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
        doc.autoTable(res4.columns, res4.data, {
            startY:doc.autoTable.previous.finalY + 15,
            drawCell: function(cell, data) {
                var rows = data.table.rows;
                if (data.row.index == 0) {
                    doc.setFillColor(63, 199, 241);
                    doc.setTextColor(255,255,255);
                }
            },
            drawHeaderCell: function(cell, data){
                doc.setFillColor(63, 199, 241);

            }
        });
    }

    var pdfOutput = doc.output();
    if(device.platform == "Android"){
        window.resolveLocalFileSystemURL(cordova.file.externalDataDirectory, function(dir){
            dir.getFile("Trainingsplan.pdf", {create: true}, function (file){
                file.createWriter(function(writer){
                    writer.write( pdfOutput );
                },function(error){
                    alert("Error" + error);
                });
                path = file.toURL();
                /*navigator.notification.alert("Dein Trainingsplan befinet sich nun unter: " + "\n\n" + file.toURL(), function(){}, "Erfolgreich als PDF exportiert", "OK");*/
                        showFile();
            });
        });
    }else if(device.platform == "iOS"){
        window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir){
            dir.getFile("Trainingsplan.pdf", {create: true}, function (file){
                file.createWriter(function(writer){
                    writer.write( pdfOutput );
                },function(error){
                    alert("Error" + error);
                });
                path = file.toURL();
                /*navigator.notification.alert("Dein Trainingsplan befinet sich nun unter: " + "\n\n" + file.toURL(), function(){}, "Erfolgreich als PDF exportiert", "OK");*/
                        
                        showFile();
                        
                        
            });
        });
    }
    
    
}

function createTable(){
    if(localStorage.getItem("split") == "2er-Split"){
        checkData2();
        t = document.createElement('table');
        t.id = "table1";

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1);
        r.className = "desc"; 
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = brust[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = brust[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = schulter[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = schulter[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(7); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(8); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(9); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);


        t = document.createElement('table');
        t.id = "table2";
        
        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 2";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1); 
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = bauch[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = bauch[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(7); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

       

        document.body.appendChild(t);

        t.style.marginTop = "8px";

    }else if(localStorage.getItem("split") == "3er-Split"){ 
        checkData3();

        t = document.createElement('table');
        t.id = "table1";
        
        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = brust[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = brust[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = brust[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = schulter[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = schulter[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(7); 
        c = r.insertCell(0);
        c.innerHTML = schulter[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t = document.createElement('table');
        t.id = "table2";

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 2";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";


        t = document.createElement('table');
        t.id = "table3";

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 3";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";
        
    }else if(localStorage.getItem("split") == "4er-Split"){
        checkData4();

        t = document.createElement('table');
        t.id = "table1";

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 1";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);
        
        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = brust[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = brust[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = brust[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = bizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;        

        document.body.appendChild(t);

        t = document.createElement('table');
        t.id = "table2";

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 2";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = beinPo[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";

        t = document.createElement('table');
        t.id = "table3";

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 3";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1);
        r.className = "desc";
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = schulter[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = schulter[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = schulter[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = trizeps[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";


        t = document.createElement('table');
        t.id = "table4";

        r = t.insertRow(0);
        r.className = "day";
        c = r.insertCell(0);
        c.innerHTML = "Tag 4";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c = r.insertCell(2);

        r = t.insertRow(1);
        r.className = "desc"; 
        c = r.insertCell(0);
        c.innerHTML = "Uebung";
        c.style.fontWeight = "bold";
        c = r.insertCell(1);
        c.innerHTML = "Saetze";
        c.style.fontWeight = "bold";
        c = r.insertCell(2);
        c.innerHTML = "Wdh.";
        c.style.fontWeight = "bold";

        r = t.insertRow(2); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(3); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(4); 
        c = r.insertCell(0);
        c.innerHTML = ruecken[2];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(5); 
        c = r.insertCell(0);
        c.innerHTML = bauch[0];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        r = t.insertRow(6); 
        c = r.insertCell(0);
        c.innerHTML = bauch[1];
        c = r.insertCell(1);
        c.innerHTML = 3;
        c = r.insertCell(2);
        c.innerHTML = 12;

        document.body.appendChild(t);

        t.style.marginTop = "8px";      
    }
    checkArt();
    createButton();
}

function createButton(){
    b = document.createElement("button");
    b.id = "export";
    b.appendChild(document.createTextNode("Export to PDF"));
    document.body.appendChild(b);
    b.addEventListener("click",function(){
        createFile();
    });
}
