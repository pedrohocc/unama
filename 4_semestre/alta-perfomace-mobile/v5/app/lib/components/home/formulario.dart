import 'package:app/api/api_actions.dart';
import 'package:flutter/material.dart';

class Formulario extends StatefulWidget {
  const Formulario({super.key});

  @override
  State<Formulario> createState() => _FormularioState();
}

class _FormularioState extends State<Formulario> {
  TextEditingController nota1Controller = TextEditingController();
  TextEditingController nota2Controller = TextEditingController();
  final _keyForm = GlobalKey<FormState>();
  String resultado = '';
  String status = '';

  void mudarResultadoEStatus(value) {
    setState(() {
      resultado = value;
    });

    if (double.parse(resultado) >= 7) {
      setState(() {
        status = 'Aprovado!';
      });
    } else {
      setState(() {
        status = 'Estude mais!';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Form(
      key: _keyForm,
      child: Column(
        children: [
          Padding(
            padding: const EdgeInsets.only(bottom: 20, top: 20),
            child: SizedBox(
                width: 250,
                height: 80,
                child: TextFormField(
                  validator: (value) {
                    if (validar(value)) {
                      return 'Insira uma nota valida';
                    } else {
                      try {
                        double.parse(value!);
                      } catch (e) {
                        return 'Insira uma nota valida';
                      }
                      return null;
                    }
                  },
                  controller: nota1Controller,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                      labelText: 'Nota 1',
                      border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(10))),
                )),
          ),
          Padding(
            padding: const EdgeInsets.only(bottom: 20, top: 20),
            child: SizedBox(
                width: 250,
                height: 80,
                child: TextFormField(
                  validator: (value) {
                    if (validar(value)) {
                      return 'Insira uma nota valida';
                    } else {
                      try {
                        double.parse(value!);
                      } catch (e) {
                        return 'Insira uma nota valida';
                      }
                      return null;
                    }
                  },
                  controller: nota2Controller,
                  keyboardType: TextInputType.number,
                  decoration: InputDecoration(
                    labelText: 'Nota 2',
                    border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(10),
                    ),
                  ),
                )),
          ),
          SizedBox(
            width: 150,
            height: 70,
            child: ElevatedButton(
              onPressed: () {
                if (_keyForm.currentState!.validate()) {
                  APIActions()
                      .getResultado(nota1Controller.text, nota2Controller.text)
                      .then((value) => mudarResultadoEStatus(value));
                }
              },
              child: const Text('Calcular'),
            ),
          ),
          Padding(
            padding: const EdgeInsets.only(top: 20.0),
            child: Text(
              resultado == ''
                  ? 'Esperando notas...'
                  : 'Média: $resultado\nStatus: $status',
              style: const TextStyle(fontSize: 20),
              textAlign: TextAlign.center,
            ),
          )
        ],
      ),
    );
  }
}

bool validar(String? value) {
  if (value != null && value.isEmpty) {
    return true;
  } else {
    return false;
  }
}
