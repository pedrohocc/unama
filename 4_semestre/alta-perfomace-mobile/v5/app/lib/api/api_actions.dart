import 'package:app/api/connection.dart';
import 'package:http/http.dart' as http;

class APIActions {
  Future<String> getResultado(String nota1, String nota2) async {
    final path = 'media/$nota1/$nota2';
    final urlWithPath = ConnectionAPI().buildUrl(path);
    final response = await http.get(
      Uri.parse(urlWithPath),
    );

    if (response.statusCode == 200) {
      return response.body.toString();
    } else {
      throw Exception('Falha na comunicação');
    }
  }
}
