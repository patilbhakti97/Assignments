// let a=10;
// console.log("odd numbers: ");
// for(let i=0 ;i<=10;i++){
//     if(i%2!==0){
//         console.log(i);
//     }
// }
// let i=1;
// do{
//     i++;
//     if(i%2==0){
//         console.log("Even numbers : "+i);
//     }
//     else{
//         console.log("Odd Numbers: "+i);
//     }
// }while(i<=10)
// let num=prompt("Enter your number");
// let a=0;
// do{
//     a++;
//     if (a%2==0) {
//     document.write("It is even number");
//     }
//     else{
//         document.write("It is odd number");
//     }
// }while(a<=10);
// function even()
// {
//     let a;
//     a=parseInt(input.value);
//     if (a%2==0){
//         document.write("Number is even");
//     }
//     else{
//         document.write("Number is odd");
//     }
// } 
let i;
let j=0;
let num;
let num1;
while (num<=num1)
{
    f=0;
    for(i=1;i<=num;i++)
    {
        if(num%i==0)
        {
            f++;
        }
        if(f==2)
        {
            document.write(+num);
        }
        console.log(num);
        num++;
    }
}