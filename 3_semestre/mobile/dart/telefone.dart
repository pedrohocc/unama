import 'dart:io';

final double tarifa_fixa = 4.59;
final double tarifa_add = 1.30;

void main(List<String> args) {
  print("Informe a duração da ligação(minutos):");
  final int minutos = int.parse(stdin.readLineSync()!);
  fatura(minutos);
}

void fatura(int minutos) {
  if (minutos > 0) {
    final int tempo = minutos - 3;
    if (tempo > 0) {
      final double adicional = tempo * tarifa_add;
      final double result = tarifa_fixa + adicional;
      print("Valor da fatura: R\$ $result");
    }  else {
      print("Valor da fatura: R\$ $tarifa_fixa");
    }  
  } else {
    print("ligação invalida");
  }
}
