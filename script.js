users=[ {account:"123",p:"123",balance:4000},{account:"12",p:"12",balance:7000}]

function login(){
    let founduser=null;
    let acc=document.getElementById("accountnumber").value;
    let p=document.getElementById("pswd").value;
    for(let i=0;i<users.length;i++){
        if (users[i].account === acc && users[i].p===p){
            founduser=users[i]
            alert("LOGIN SUCCESSFUL");
            break;
        }
    
    }
    if (founduser!==null){
        localStorage.setItem("curruser",JSON.stringify(founduser));
        localStorage.setItem("users",JSON.stringify(users));
        window.location.href="f.html";
    }
    else{
        alert("invalid account/password");
    }

}


function showdetails(){
    let c=JSON.parse(localStorage.getItem("curruser"));
    let u=JSON.parse(localStorage.getItem("users"));
    document.getElementById("output").innerHTML="Balance"+c.balance+"<br>Account: "+c.account;
}
showdetails()
function deposit(){
    let c=JSON.parse(localStorage.getItem("curruser"));
    let u=JSON.parse(localStorage.getItem("users"));
    let amount=parseInt(document.getElementById("dep").value);
    if (amount%100 === 0 && amount>0) {
        c.balance=c.balance+amount;
        for(let i=0;i<u.length;i++){
            if (u[i].account===c.account){
                u[i].balance=c.balance
                alert("balance updated: "+u[i].balance);
            }
        }
        localStorage.setItem("curruser", JSON.stringify(c));
        localStorage.setItem("users", JSON.stringify(u));
        showdetails();
        
    }
    else{
        alert("amount invalid");
    }

    
}


