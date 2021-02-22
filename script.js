//question 1

function onSubmitHandler1() {
    var userNum = document.getElementById("credit").value;
    if (userNum.length < 12 || userNum.length > 12) {
        alert("credit card number should be 0f 12 digits");
    } else {
        svalue = "*" ;
        for (let i = 0; i < userNum.length; i++) {
            if (i < 8) {
                svalue += "*";
            } else {
                svalue += userNum[i];
            }
        }
    }
     console.log(svalue);
    document.getElementById( "ans1").innerHTML = `Your last digits are ${svalue}`;
      document.getElementById("credit").value = "";
      return svalue;
}
//question 2 
function onSubmitHandler2(){

    const pstring = document.getElementById("potatoes");
     //   alert(value);
     if (pstring.value == "") {
      alert("Please enter a string");
     } else {
       const str = pstring.value;
       const rvalue = (str.match(/potato/g) || []).length;
       // console.log(str);
       // console.log(rvalue);
       document.getElementById("ans2").innerText = `no of potatoes = ${rvalue} `;
       pstring.value = "";
       return rvalue;
     }
   }; 
   //question 3
function onSubmitHandler3() {
    var dChar = document.getElementById("doubl");
    if (dChar.value == "") {
        alert("Enter string please");
      } else {
        const  result = double(dChar.value);
        // console.log(result);
        document.getElementById("ans3").innerText = ` ${result}`;
        dChar.value = "";
      }
};
const double = (v) => {
    let rvalue = "";
    for (let i = 0; i < v.length; i++) {
      rvalue += v[i] + v[i];
    }
    return rvalue;
  };
// question 4
function onSubmitHandler4() {
  var eSalary = document.getElementById("gross");
   //   alert(value);
   if (eSalary.value == "") {
    alert("Please enter salary amount");
  } else {
    console.log(eSalary.value);
    const b = eSalary.value;
    let HRA;
    let DA;
    if (b <= 10000) {
      HRA = 20;
      DA = 80;
    } else if (b <= 20000) {
      HRA = 25;
      DA = 90;
    } else if (b > 20000) {
      HRA = 30;
      DA = 95;
    }
    console.log(b);
    const grosssalary =
      Number(b) + Number((b * HRA) / 100) + Number((b * DA) / 100);

    // alert(result);
    document.getElementById("ans4").innerText = `${grosssalary} `;
    eSalary.value = "";
  }
};
//question no 5
function onSubmitHandler5(){
  var userUnits = document.getElementById("bill").value;
  if (userUnits == "" || userUnits < 0) {
    alert("unit shoubld be greater than zero");
  } else {
    let chrg;
    if (userUnits > 0 && userUnits <= 50) {
      chrg = 0.5;
    } else if (userUnits > 50 && userUnits <= 150) {
      chrg = 0.75;
    } else if (userUnits > 150 && userUnits <= 250) {
      chrg = 1.2;
    } else {
      chrg = 1.5;
    }
    const tbill = userUnits * chrg;
    const sr = (tbill * 20) / 100;
    const netbill = tbill + sr;

    document.getElementById("ans5").innerText = `Total unit =  ${userUnits} , cost per unit= ${chrg} Rsbill =${tbill} ,surcharge = ${sr} Rs and net bill = ${netbill} Rs`;
  }
};
// question 6
 function onSubmitHandler6() {
   var limit = document.getElementById("Mul").value;
   if (limit > 1000) {
    alert("limit should be smaller than 1000");
  } else {
    let multi = "";
    let sum = 0;
    for (let x = 0; x < limit; x++) {
      if (x % 3 === 0 || x % 5 === 0) {
        sum += x;
        if (x > 0) {
          multi += "*" + x;
        }
      }
    }

    document.getElementById("ans6").innerHTML = `${multi} and sum =${sum} `;
  }
};
// question no 7
function onSubmitHandler7() {
  var UN = document.getElementById("rep").value;
  if (UN > 0) {
    const array = [UN];
    const obj = {};

    for (let i = 0; i < UN; i++) {
      const e = i + 1;
      const v = prompt(`Enter number value for element ${e}`);
      array[i] = v;
      console.log(v);

      obj[v] = 0;
      // console.log(obj);
    }

    array.map((v, i) => {
      obj[v] = obj[v] + 1;
    });
    var myJSON = JSON.stringify(obj);
    document.getElementById("ans7").innerText = "array = " + array.toString() + "and obj =" + myJSON;
    document.getElementById("rep").value = "";
    return obj;
  } else {
    alert("no of elements should be greater than zero");
  }
};
// question 8
function onSubmitHandler8() {
  var char = document.getElementById("chr");
  var stri = document.getElementById("str");
  if (char.value.length > 0 && char.value.length < 2 && stri.value.length > 0) {
    let c = 0;
    for (let i = 0; i < stri.value.length; i++) {
      if (char.value == stri.value[i]) {
        c += 1;
      }
      console.log(char.value, stri.value[i]);
    }
    document.getElementById( "ans8" ).innerText = `given char is ${char.value} and string "${stri.value}" contain total char = ${c}`;
  } else {
    alert( `no of characters should be one and string should have atleast one character` );
  }
};
