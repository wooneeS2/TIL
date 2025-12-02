import 'dart:io';

void main(){
  stdout.write("첫번째 숫자 : ");
  var num1 = stdin.readLineSync();
  var sign = stdin.readLineSync();
  var num2 = stdin.readLineSync();

var NewNum1 = int.parse(num1) ;
var NewNum2 = int.parse(num2);


  if (sign == '+'){
    print(NewNum1+NewNum2);
  }
  else if (sign == '-'){
    print(NewNum1+NewNum2);
  }
  else if (sign == '*'){
    print(NewNum1+NewNum2);
  }
  else if (sign == '/'){
    print(NewNum1+NewNum2);
  }
  else{
    print("잘못입력하셨습니다.");
  }
    
  
}