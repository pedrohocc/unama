import 'package:flutter/material.dart';

class Teste extends StatefulWidget {
  const Teste({super.key});

  @override
  State<Teste> createState() => _TesteState();
}

class _TesteState extends State<Teste> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title:  Text("Teste"),
        actions: [
          IconButton(onPressed: () {}, icon: const Icon(Icons.replay)),
        ],
      ),
    );
  }
}
