import 'dart:ffi';
import 'dart:io';

void main(List<String> args) {
  bool continuar = true;
  List<int> lista = [];

  while (continuar != false) {
    print("Digite um número: ");
    int num = int.parse(stdin.readLineSync()!);
    lista.add(num);
    if (num == 0) {
      continuar = false;
    }
  }

  lista.sort();

  print("Maior número: ${lista[lista.length - 1]}");
  print("Menor número: ${lista[1]}");
  print(lista);
}
