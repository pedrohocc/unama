import 'package:flutter/material.dart';

class NomeCard extends StatelessWidget {
  final String nome;
  const NomeCard({super.key, required this.nome});
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(50.0),
      child: SizedBox(
        height: 80,
        width: 150,
        child: DecoratedBox(
          decoration: BoxDecoration(
            color: Colors.blue,
            border: Border.all(
                color: const Color.fromARGB(255, 136, 255, 253), width: 2),
            borderRadius: BorderRadius.circular(20),
          ),
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Center(
              child: Text(
                nome,
                style: const TextStyle(fontSize: 30, color: Colors.white),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
