import 'dart:io';

void main(List<String> args) {
  try {
    print("Horas:");
    int horas = int.parse(stdin.readLineSync()!);
    print("Minutos:");
    int minutos = int.parse(stdin.readLineSync()!);
    print("Segundos:");
    int segundos = int.parse(stdin.readLineSync()!);

    int calc = (horas * 3600) + (minutos * 60) + segundos;

    print(calc);
  } catch (e) {
    if (e is FormatException) {
      print("Insira um valor válido!");
    }
  }
}
