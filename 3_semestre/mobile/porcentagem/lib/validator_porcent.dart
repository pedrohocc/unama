bool validarPorcentagem(String? valor) {
  final double? porcentagem = double.parse(valor!);
  if (porcentagem! < 0 || porcentagem > 100) {
    return true;
  }
  return false;
}
