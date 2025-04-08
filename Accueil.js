var fenetres = document.getElementsByTagName('span');
// var CurrentWindow = document.getElementById('Fenetre0');
var CurrentWindow = document.querySelector("Fenetre0");


console.log("Current Window:", CurrentWindow);


function FermerFenetres(){
    for (let index = 1; index < fenetres.length; index++) {
        document.querySelector('#Fenetre' + index).style.display = 'none';
    }
}

document.querySelector('#Detail0').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";

    document.getElementById('Fenetre0').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    
    CurrentWindow = document.getElementById('Fenetre0');
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/5lzq_wxDQ5U?";
});

// document.querySelector('#Detail1').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
    
//     document.getElementById('Fenetre1').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.querySelector("#Fenetre1");
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/8EmOgfH3Kls";
// });

// document.querySelector('#Detail2').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
//     document.querySelector('#Fenetre18').style.display = "none";
//     document.querySelector('#Fenetre19').style.display = "none";

//     document.getElementById('Fenetre2').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre2');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/pJhhn2m_IbM?";
// });

// document.querySelector('#Detail3').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
//     document.querySelector('#Fenetre18').style.display = "none";
//     document.querySelector('#Fenetre19').style.display = "none";

//     document.getElementById('Fenetre3').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre3');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/ZXoFm49GuJ0?";
// });

// document.querySelector('#Detail4').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";

//     document.getElementById('Fenetre4').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre4');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/CaIymdQ6wag?";
// });

document.querySelector('#Detail5').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";
    
    document.getElementById('Fenetre5').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre5');
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/_LcAidsrq78?";
});

// document.querySelector('#Detail6').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";

//     document.getElementById('Fenetre6').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre6');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/B2qh610kYKI?";
// });

// document.querySelector('#Detail7').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
//     document.querySelector('#Fenetre18').style.display = "none";
//     document.querySelector('#Fenetre19').style.display = "none";

//     document.getElementById('Fenetre7').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre7');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/voCtycIbGm4?";
// });

// document.querySelector('#Detail8').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
//     document.querySelector('#Fenetre18').style.display = "none";
//     document.querySelector('#Fenetre19').style.display = "none";

//     document.getElementById('Fenetre8').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre8');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/0Msy2RCtsf4?";
// });

// document.querySelector('#Detail9').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
//     document.querySelector('#Fenetre18').style.display = "none";
//     document.querySelector('#Fenetre19').style.display = "none";

//     document.getElementById('Fenetre9').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre9');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/9rBorymxmm4?";
// });



document.querySelector('#Detail10').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";

    document.getElementById('Fenetre10').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre10');
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/uCBbueTDQH8?";
});

// document.querySelector('#Detail11').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
//     document.querySelector('#Fenetre18').style.display = "none";
//     document.querySelector('#Fenetre19').style.display = "none";

//     document.getElementById('Fenetre11').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre11');
   
// });

// document.querySelector('#Detail12').addEventListener('click', 
// function(){
//     FermerFenetres();
    // document.querySelector('#Fenetre0').style.display = "none";
    // document.querySelector('#Fenetre1').style.display = "none";
    // document.querySelector('#Fenetre2').style.display = "none";
    // document.querySelector('#Fenetre3').style.display = "none";
    // document.querySelector('#Fenetre4').style.display = "none";
    // document.querySelector('#Fenetre5').style.display = "none";
    // // document.querySelector('#Fenetre6').style.display = "none";
    // document.querySelector('#Fenetre7').style.display = "none";
    // document.querySelector('#Fenetre8').style.display = "none";
    // document.querySelector('#Fenetre9').style.display = "none";
    // document.querySelector('#Fenetre10').style.display = "none";
    // document.querySelector('#Fenetre11').style.display = "none";
    // // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    // document.querySelector('#Fenetre13').style.display = "none";
    // document.querySelector('#Fenetre14').style.display = "none";
    // document.querySelector('#Fenetre15').style.display = "none";
    // document.querySelector('#Fenetre16').style.display = "none";
    // document.querySelector('#Fenetre17').style.display = "none";


//     document.getElementById('Fenetre12').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";
// });

// document.querySelector('#Detail13').addEventListener('click', 
// function(){
//     // FermerFenetres();
//     document.querySelector('#Fenetre0').style.display = "none";
//     document.querySelector('#Fenetre1').style.display = "none";
//     document.querySelector('#Fenetre2').style.display = "none";
//     document.querySelector('#Fenetre3').style.display = "none";
//     document.querySelector('#Fenetre4').style.display = "none";
//     document.querySelector('#Fenetre5').style.display = "none";
//     // document.querySelector('#Fenetre6').style.display = "none";
//     document.querySelector('#Fenetre7').style.display = "none";
//     document.querySelector('#Fenetre8').style.display = "none";
//     document.querySelector('#Fenetre9').style.display = "none";
//     document.querySelector('#Fenetre10').style.display = "none";
//     document.querySelector('#Fenetre11').style.display = "none";
//     // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
//     document.querySelector('#Fenetre13').style.display = "none";
//     document.querySelector('#Fenetre14').style.display = "none";
//     document.querySelector('#Fenetre15').style.display = "none";
//     document.querySelector('#Fenetre16').style.display = "none";
//     document.querySelector('#Fenetre17').style.display = "none";
//     document.querySelector('#Fenetre18').style.display = "none";
//     document.querySelector('#Fenetre19').style.display = "none";


//     document.getElementById('Fenetre13').style.display = 'block';
//     document.querySelector('.bg-model').style.display = 'flex';
//     document.body.style.overflowY = "hidden";

//     CurrentWindow = document.getElementById('Fenetre13');
//     CurrentWindow.getElementsByTagName("iframe")[0].src = "https://sketchfab.com/models/691142ab3d4b44e0b72ed4ef9d443417/embed";
// });

document.querySelector('#Detail14').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";


    document.getElementById('Fenetre14').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre14');
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/zdlwYaWj0p4?";
});

document.querySelector('#Detail15').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";


    document.getElementById('Fenetre15').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre15');
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/3GOtgMSJW5I?";
});

document.querySelector('#Detail16').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";

    document.getElementById('Fenetre16').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre16');
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/stIlMzYC_c8?";
});

document.querySelector('#Detail17').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";

    document.getElementById('Fenetre17').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre17');
    //CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/3GOtgMSJW5I?";
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/EaLlH-bAAsE";
});

document.querySelector('#Detail18').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";


    document.getElementById('Fenetre18').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre18');
    CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/Rjlhu1zliq0";
});

document.querySelector('#Detail19').addEventListener('click', 
function(){
    // FermerFenetres();
    document.querySelector('#Fenetre0').style.display = "none";
    document.querySelector('#Fenetre1').style.display = "none";
    document.querySelector('#Fenetre2').style.display = "none";
    document.querySelector('#Fenetre3').style.display = "none";
    document.querySelector('#Fenetre4').style.display = "none";
    document.querySelector('#Fenetre5').style.display = "none";
    // document.querySelector('#Fenetre6').style.display = "none";
    document.querySelector('#Fenetre7').style.display = "none";
    document.querySelector('#Fenetre8').style.display = "none";
    document.querySelector('#Fenetre9').style.display = "none";
    document.querySelector('#Fenetre10').style.display = "none";
    document.querySelector('#Fenetre11').style.display = "none";
    // document.querySelector('#Fenetre12').style.display = "none"; // Garde celui là en Commentaire !!
    document.querySelector('#Fenetre13').style.display = "none";
    document.querySelector('#Fenetre14').style.display = "none";
    document.querySelector('#Fenetre15').style.display = "none";
    document.querySelector('#Fenetre16').style.display = "none";
    document.querySelector('#Fenetre17').style.display = "none";
    document.querySelector('#Fenetre18').style.display = "none";
    document.querySelector('#Fenetre19').style.display = "none";

    document.getElementById('Fenetre19').style.display = 'block';
    document.querySelector('.bg-model').style.display = 'flex';
    document.body.style.overflowY = "hidden";

    CurrentWindow = document.getElementById('Fenetre19');


    // CurrentWindow.getElementsByTagName("iframe")[0].src = "https://www.youtube.com/embed/3GOtgMSJW5I?";
});


// document.querySelector('.bg-model').addEventListener('click', 
// function(){
//     document.querySelector('.bg-model').style.display = 'none';
//     document.body.style.overflowY = "visible";

// ////////////////////////////////////////////////////////////
//     // var FrameVid = document.getElementsById('video');
    
//     // console.log("close window");
//     // FrameVid.stopVideo();
// });
// ////////////////////////////////////////////////////////////


var FenetreArray = ['Fenetre0','Fenetre1','Fenetre2','Fenetre3','Fenetre4','Fenetre5','Fenetre6','Fenetre7','Fenetre8','Fenetre9','Fenetre10','Fenetre11','Fenetre12','Fenetre13','Fenetre18', 'Fenetre19'];
var videosIframe = document.getElementsByTagName("iframe");

window.addEventListener('mouseup', function(event){



    for (var i = 0; i < FenetreArray.length; i++) {
        var fenetre = document.getElementById(FenetreArray[i]);
        if(event.target != CurrentWindow && event.target.parentNode != CurrentWindow && event.target.nodeName != 'IMG' && !isDescendant(event.target, CurrentWindow)){

            // CurrentWindow.style.display = 'none';
           
            

            document.getElementById('Fenetre0').style.display = 'none';
            document.getElementById('Fenetre1').style.display = 'none';
            document.getElementById('Fenetre2').style.display = 'none';
            document.getElementById('Fenetre3').style.display = 'none';
            document.getElementById('Fenetre4').style.display = 'none';
            document.getElementById('Fenetre5').style.display = 'none';
            // document.getElementById('Fenetre6').style.display = 'none';
            document.getElementById('Fenetre7').style.display = 'none';
            document.getElementById('Fenetre8').style.display = 'none';
            document.getElementById('Fenetre9').style.display = 'none';
            document.getElementById('Fenetre10').style.display = 'none';
            document.getElementById('Fenetre11').style.display = 'none';
            // document.getElementById('Fenetre12').style.display = 'none';
            document.getElementById('Fenetre13').style.display = 'none';
            document.getElementById('Fenetre14').style.display = 'none';
            document.getElementById('Fenetre15').style.display = 'none';
            document.getElementById('Fenetre16').style.display = 'none';
            document.getElementById('Fenetre17').style.display = 'none';
            document.getElementById('Fenetre18').style.display = 'none';
            document.getElementById('Fenetre19').style.display = 'none';

            for (var x = 0; x <= videosIframe.length; x++) {
                if(x != videosIframe.length){
                    document.getElementsByTagName("iframe")[x].src = "";
                }

            }


            document.querySelector('.bg-model').style.display = 'none';
            document.body.style.overflowY = "visible";


        }
    }

    function isDescendant(child, parent) {
    let node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

});




// (function(){
//     document.querySelector('.bg-model').style.display = 'flex';
//     print('hello');
// });