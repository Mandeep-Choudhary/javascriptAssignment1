var arr=[["Name","Age","DOB","Email","Company"],["Mandeep","21","25/09/2001","mandeepchoudhary@gmail.com","Gemini Solutions"],["Himanshu","20","01/01/2002","hiamnshu@gmail.com","Gemini Solutions"],["Radhika","22","12/05/2000","radhika@gmail.com","Gemini Solutions"],["Anmol","24","09/09/1998","anmol23@gmail.com","Gemini Solutions"],["Manav","23","25/08/1999","manav40@gmail.com","Gemini Solutions"]];


function createTable() {
    var b1 = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < 6; i++) {
      var row = document.createElement("tr");

      for (var j = 0; j < 5; j++) {
        var cell = document.createElement("td");
        var cellText = document.createTextNode(arr[i][j]);
        if(i==0)
            cell.style.fontWeight="Bold";
        cell.style.padding="10px";
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    b1.appendChild(tbl);
    tbl.style.border="1px solid";
    tbl.style.margin="20px auto 0 auto";
    b1.style.fontFamily="sans-serif";
  }


(function () {
    createTable();
  })();