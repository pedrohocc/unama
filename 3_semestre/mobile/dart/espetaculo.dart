import 'dart:io';

void main(List<String> args) {
  print("Valor do evento:");
  double custo = double.parse(stdin.readLineSync()!);
  print("Valor dos ingressos");
  double ingresso = double.parse(stdin.readLineSync()!);
  
  calc(custo, ingresso);
}

void calc(double custo, double ingresso) {
  final double _result = custo / ingresso;
  print("O número de ingressos necessarios é $_result");
}
