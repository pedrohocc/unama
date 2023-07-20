import 'dart:io';

void main(List<String> args) {
  print("Salario base:");
  double sal = double.parse(stdin.readLineSync()!);
  print("Valor das vendas:");
  double vendas = double.parse(stdin.readLineSync()!);

  comiss(sal, vendas);
}

void comiss(double sal, double vendas) {
  double calc = sal + (vendas * 0.12);
  print(calc);
}
