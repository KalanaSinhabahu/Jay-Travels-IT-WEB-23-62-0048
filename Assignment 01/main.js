function myFunction() {

    const FNAME = document.getElementById("Fname").value;
    const LNAME = document.getElementById("Lname").value;
    const EMAIL = document.getElementById("emailt").value;
    const TP = document.getElementById("tp").value;
    //document.getElementById("Fname").value()
    if (FNAME === '') {
        alert("Please Enter First Name");
        // return true;
        window.open("./Index.html", "blank");

    } else if (LNAME === '') {
        alert("Please Enter Last Name");
        // return true;
        window.open("./Index.html")
    } else if (EMAIL === '') {
        alert("Please Enter Email");
        // return true;
        window.open("./Index.html")
    } else if (TP === '') {
        alert("Please Enter Telephone Number");
        // return true;
        window.open("./Index.html")

    } else {

        alert(FNAME + "  " + LNAME + "Are you sure to Subscribe ?");
        alert("Your Email is " + EMAIL + " and Telephone is " + TP + " has Subscribed");

        //////////////////////////////////////
        let myWindow = window.open("./contact.html", "width=500,height=500");
        myWindow.document.write("<h2> Your Subscribe Details </h2>");
        myWindow.document.write("<br>");
        myWindow.document.write("<h3> Your First Name is </h3>");
        myWindow.document.write(FNAME);
        myWindow.document.write("<br>");
        myWindow.document.write("<h3> Your Last Name is</h3>");
        myWindow.document.write(LNAME);
        myWindow.document.write("<br>");
        myWindow.document.write("<h3> Your Email is </h3>");
        myWindow.document.write(EMAIL);
        myWindow.document.write("<br>");
        myWindow.document.write("<h3> Your Telephone is </h3>");
        myWindow.document.write(TP);


        let myWindow2 = window.open("./Index.html", "balnk", "width = 500, height = 500 ");


        // window.open("./Index.html", "KMS", _blank, false)
    }
}

//location.href = location.href;


//localStorage.setItem('SubmitObj', FNAME);

//if (FNAME === "") {
//  alert("Please input a Value");
//  return false;
//} else {
//  alert('Code has accepted : you can try another');
// return true;
//}
//  alert(LNAME);
//  alert(EMAIL);
// alert(TP);
//window.open(./conta);





// document.getElementById("Fname").innerHTML = "You enterted: " + FNAME;

// let myWindow2 = window.open("./contact.html", "Test2", "width=250,height=150");



//  if (FNAME = "") {
// alert("Fill Your Names");
//   } else if (LNAME = "") {
//     alert("Fill Your Names");
//  } else if (EMAIL = "") {
//     alert("Fill Your Email");
//   } else if (TP = "") {
//      alert("Fill Your Telephone");





// window.console(LNAME);
// window.console(EMAIL);
// window.console(TP);
// window.console(FNAME, LNAME, EMAIL, TP);