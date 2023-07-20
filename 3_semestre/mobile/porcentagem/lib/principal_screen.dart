import 'package:flutter/material.dart';
import 'package:porcentagem/validator.dart';
import 'package:porcentagem/validator_porcent.dart';

class PrincipalScreen extends StatefulWidget {
  const PrincipalScreen({super.key});

  @override
  State<PrincipalScreen> createState() => _PrincipalScreenState();
}

class _PrincipalScreenState extends State<PrincipalScreen> {
  final TextEditingController _valorController = TextEditingController();
  final TextEditingController _porcentagemController = TextEditingController();

  final _chaveForm = GlobalKey<FormState>();

  double? _valorUser;
  double? _porcentagemUser;

  void calcular() {
    setState(() {
      _porcentagemUser = _porcentagemUser! / 100;
      _valorUser = (_valorUser! + (_valorUser! * _porcentagemUser!));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Porcentagem"),
      ),
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
              image: NetworkImage(
                  "https://img.freepik.com/vetores-gratis/fundo-branco-abstrato_23-2148810113.jpg?w=900&t=st=1683207027~exp=1683207627~hmac=cfccba668fd69a7a8f3589a4a0d887c846c739ab9cef7f4e521c3004920147e3"),
              fit: BoxFit.cover),
        ),
        child: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Form(
                key: _chaveForm,
                child: Column(
                  children: [
                    SizedBox(
                      width: 200,
                      child: TextFormField(
                        validator: (value) {
                          if (isNullOrEmpty(value)) {
                            return "Insira um valor";
                          }
                          return null;
                        },
                        keyboardType: TextInputType.number,
                        decoration: InputDecoration(
                          labelText: "Valor",
                          hintText: "Ex: 100",
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(10),
                          ),
                          prefixIcon: Icon(Icons.onetwothree),
                        ),
                        controller: _valorController,
                      ),
                    ),
                    Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: SizedBox(
                        width: 200,
                        child: TextFormField(
                          validator: (value) {
                            if (isNullOrEmpty(value)) {
                              return "Insira um valor";
                            } else {
                              if (validarPorcentagem(value)) {
                                return "Entre 0 e 100";
                              } else {
                                return null;
                              }
                            }
                          },
                          keyboardType: TextInputType.number,
                          decoration: InputDecoration(
                            labelText: "Porcentagem",
                            hintText: "Ex: 10",
                            border: OutlineInputBorder(
                              borderRadius: BorderRadius.circular(
                                10,
                              ),
                            ),
                            prefixIcon: const Icon(Icons.onetwothree),
                          ),
                          controller: _porcentagemController,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(20.0),
                child: ElevatedButton(
                  onPressed: () {
                    if (_chaveForm.currentState!.validate()) {
                      setState(() {
                        _valorUser = double.parse(_valorController.text);
                        _porcentagemUser =
                            double.parse(_porcentagemController.text);
                      });
                      calcular();
                    }
                  },
                  child: Text("Calcular"),
                ),
              ),
              (_valorUser == null)
                  ? const Text("Aguardando valor...")
                  : Text(
                      "O valor com o aumento de ${_porcentagemUser! * 100}% é igual a $_valorUser"),
            ],
          ),
        ),
      ),
    );
  }
}
