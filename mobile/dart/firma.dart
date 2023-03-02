import 'dart:io';

final int diaria = 38;
final double impost = 0.06;
void main(List<String> args) {
  print("Informe os dias trabalhados:");
  final int dias = int.parse(stdin.readLineSync()!);

  final int salBruto = dias * diaria;
  final double valorDescont = (salBruto * impost);
  final double salLiquido = salBruto - valorDescont;

  print("Valor diaria: R\$ $diaria");
  print("Salario bruto: R\$ $salBruto");
  print("Porcentam Imposto de Renda: ${impost * 100}%");
  print("Valor descontado: R\$ $valorDescont");
  print("Salario liquido: R\$ $salLiquido");
}
