bool validar(String? value) {
  if (value != null && value.isEmpty) {
    if (double.parse(value) < 0 || double.parse(value) > 10) {
      return false;
    }
    return true;
  } else {
    return false;
  }
}
