void converter(double temp) {
  double result = ((temp - 32) * (5 / 9));
  print(result.toStringAsFixed(1));
}

void main(List<String> args) {
  converter(20);
}
