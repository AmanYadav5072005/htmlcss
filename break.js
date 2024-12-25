let a= parseInt(prompt("Enter number 1:"))
let b= parseInt(prompt("Enter number 2:"))
let operation = prompt("Enter any operation(+,-,/,*)")


switch(operation){
    case'+':
    alert(a+b)
    break;
    case'-':
    alert(a-b)
    break;
    case'/':
    alert(a/b)
    break;

    case'*':
    alert(a*b)
    break;

    default :
    alert("Invalid choice")
    break;

}