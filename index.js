let email="username@websitename.com";

let arr=email.split(".");

for (i in email){
    let kntrl=false;
    if(email[i]=="@"){
        kntrl=true;
        // console.log("uygun");
        if(arr[1].length==2 || arr[1].length==3){
            console.log("Your mail is valid",+email);
        }
        else{
            console.log("Your mail is invalid",+email);
        }
    }
    else{
        false; 
    }

}