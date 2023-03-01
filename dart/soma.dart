import 'dart:io';

void main(List<String> args) {
  int soma = 0;
  int num1 = 0;
  int num2 = 0;

  print("digite o primeiro número:");
  String? input1 = stdin.readLineSync();
  if (input1 != null) {
    num1 = int.parse(input1);
  }

  print("digite o segundo número:");
  String? input2 = stdin.readLineSync();
  if (input2 != null) {
    num2 = int.parse(input2);
  }

  soma = num1 + num2;

  print("Resultado: $soma");
}
