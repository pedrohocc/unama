import 'dart:io';

void main(List<String> args) {
  int? soma, num1 = 0, num2 = 0, num3 = 0, num4 = 0, num5 = 0;
  double media = 0;

  print("Digite o primeiro número:");
  String? input1 = stdin.readLineSync();
  if (input1 != null) {
    num1 = int.parse(input1);
  }

  print("Digite o segundo número:");
  String? input2 = stdin.readLineSync();
  if (input2 != null) {
    num2 = int.parse(input2);
  }

  print("Digite o terceiro número:");
  String? input3 = stdin.readLineSync();
  if (input3 != null) {
    num3 = int.parse(input3);
  }

  print("Digite o quarto número:");
  String? input4 = stdin.readLineSync();
  if (input4 != null) {
    num4 = int.parse(input4);
  }

  print("Digite o quinto número:");
  String? input5 = stdin.readLineSync();
  if (input5 != null) {
    num5 = int.parse(input5);
  }

  soma = num1 + num2 + num3 + num4 + num5;

  media = soma / 5;

  print("A média é: $media");
}
