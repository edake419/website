
//displaying current live date and time
function renderTime(){
    var mydate=new Date();
    var year=mydate.getYear();
    if(year <1000){
        year+=1900
    }
    var day=mydate.getDay();
    var month=mydate.getMonth();
    var daym=mydate.getDate();
    var dayarray=new Array("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    
    //Time
    var currentTime=new Date();
    var h= currentTime.getHours();
    var m= currentTime.getMinutes();
    var s= currentTime.getSeconds();
    if (h==24){
        h=0;
    } else if(h>12){
        h=h-0;
    }
    if (h<10){
        h="0"+h;
    }
    if (m<10){
        m="0"+m;
    }
    if (s<10){
        s="0"+s;
    }
    var livedate=document.getElementById("currentdate");
    livedate.textcontent="" +dayarray[day] + "" +daym + " "+ montharray[month] +" "+ year + "|"+ h+":"+m+":"+s; 
    livedate.innerText="" +dayarray[day]+ " "+daym+ " "+ montharray[month] +" "+ year+ "|"+ h+":"+m+":"+s;  

    setTimeout("renderTime()",1000);
}
renderTime();

document.getElementById('timesheet');
//Creating of time sheet
function newElement() {
    var table = document.getElementById("myTable");
    var tbdy = document.createElement('tbody');

    //creation of first cell
    var tr = document.createElement('tr');
    var td = document.createElement('td');
    var name = document.getElementById("name").value;
    var txt = document.createTextNode(name);
    td.appendChild(txt);
    tr.appendChild(td);
    tbdy.appendChild(tr);
    table.appendChild(tbdy);

    //creation of second cell
    var td2 = document.createElement('td');
    var signIn = document.getElementById("signIn").checked;
    var txt2 = document.createTextNode(signIn);
    td2.appendChild(txt2);
    tr.appendChild(td2);
    tbdy.appendChild(tr);
    table.appendChild(tbdy);

    //creation of third cell
    var td3 = document.createElement('td');
    var time = document.getElementById("time").value;
    var txt3 = document.createTextNode(time);
    td3.appendChild(txt3);
    tr.appendChild(td3);
    tbdy.appendChild(tr);
    table.appendChild(tbdy);

    //creation of fourth cell
    var td4 = document.createElement('td');
    var signOut = document.getElementById("signOut").checked;
    var txt4 = document.createTextNode(signOut);
    td4.appendChild(txt4);
    tr.appendChild(td4);
    tbdy.appendChild(tr);
    table.appendChild(tbdy);

    //creation of fifth cell
    var td5 = document.createElement('td');
    var ctime = document.getElementById("ctime").value;
    var txt5 = document.createTextNode(ctime);
    td5.appendChild(txt5);
    tr.appendChild(td5);
    tbdy.appendChild(tr);
    table.appendChild(tbdy);

    edit();
   
    // //creating close button
    // var myNodelist = document.getElementsByTagName("tr");

    // for (var i = 3; i < myNodelist.length; i++) {
    //     var span = document.createElement("BUTTON");
    //     var txt = document.createTextNode("\u00D7");
    //     span.className = "closebtn";
    //     span.appendChild(txt);
    //     myNodelist[i].appendChild(span);
    // }
}

function edit(){
     //creating edit button
     var myRowlist = document.getElementsByTagName("tr");

     for (var i = 3; i < myRowlist.length; i++) {
         var editbutton = document.createElement("BUTTON");
         var buttontext = document.createTextNode("Edit");
         editbutton.className = "editbtn";
         editbutton.appendChild(buttontext);
         myRowlist[i].appendChild(editbutton);
         console.log(editbutton);
     }
 
}