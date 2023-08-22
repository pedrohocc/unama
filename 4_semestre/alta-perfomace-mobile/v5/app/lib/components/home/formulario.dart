import 'dart:ffi';

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
                    if (validar(value) ||
                        double.parse(value!) < 0 ||
                        double.parse(value) > 10) {
                      return 'Insira uma nota valida';
                    } else {
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
                _keyForm.currentState!.validate();
              },
              child: Text('Calcular'),
            ),
          )
        ],
      ),
    );
  }
}

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
