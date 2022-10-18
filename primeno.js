let a;
let b;
for(a=2;a<=50;a++){
    let c=true;
    for(b=2;b<a;b++){
        if(a%b==0){
            c=false;
            break;
        }
    }
    if(c){
        console.log(+a);
    }
}