import 'package:flutter/material.dart';
import 'converter.dart';

class TelaUsuario extends StatefulWidget {
  const TelaUsuario({super.key});
  @override
  State<TelaUsuario> createState() => _TelaUsuarioState();
}

class _TelaUsuarioState extends State<TelaUsuario> {
  late String _valor;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Conversor"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Padding(
              padding: EdgeInsets.only(bottom: 10),
              child: Text(
                "Insira uma temperatura(Fº):",
                style: TextStyle(fontSize: 18),
              ),
            ),
            SizedBox(
              width: 200,
              height: 40,
              child: TextField(
                onChanged: (value) {
                  _valor = value;
                },
                decoration: const InputDecoration(
                  labelText: "Temperatura",
                  border: OutlineInputBorder(),
                ),
                keyboardType: TextInputType.number,
              ),
            ),
            Padding(
              padding: const EdgeInsets.only(top: 20.0),
              child: SizedBox(
                width: 150,
                height: 40,
                child: ElevatedButton(
                  onPressed: () {
                    try {
                      final double temp = double.parse(_valor);
                      final double result = converter(temp);
                      showDialog(
                        context: context,
                        builder: (BuildContext context) => AlertDialog(
                          content: Text(result.toStringAsFixed(1)),
                          title: const Text("Conversor"),
                          actions: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                ElevatedButton(
                                  onPressed: () =>
                                      {Navigator.pop(context, "OK")},
                                  child: Text("OK"),
                                )
                              ],
                            )
                          ],
                        ),
                      );
                    } catch (e) {
                      showDialog(
                        context: context,
                        builder: (BuildContext context) => AlertDialog(
                          content: Text("Valor inválido"),
                          title: Text("Conversor"),
                          actions: [
                            Row(
                              mainAxisAlignment: MainAxisAlignment.center,
                              children: [
                                ElevatedButton(
                                  onPressed: () =>
                                      {Navigator.pop(context, "OK")},
                                  child: Text("OK"),
                                )
                              ],
                            )
                          ],
                        ),
                      );
                    }
                  },
                  child: const Text(
                    "Converter",
                    style: TextStyle(fontSize: 18),
                  ),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
