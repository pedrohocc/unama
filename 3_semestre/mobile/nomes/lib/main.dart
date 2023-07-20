import 'package:flutter/material.dart';
import 'package:nomes/nomes.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          toolbarHeight: 70,
          title: const Center(
            child: Text("Meus amigos"),
          ),
        ),
        body: Container(
          decoration: BoxDecoration(
            image: DecorationImage(
                image: NetworkImage(
                    "https://www.pontotel.com.br/wp-content/uploads/2022/05/imagem-corporativa.webp"),
                fit: BoxFit.cover),
          ),
          child: ListView(
            children: const [
              NomeCard(nome: "Pedro"),
              NomeCard(nome: "Lucas"),
              NomeCard(nome: "José"),
              NomeCard(nome: "Roberto"),
              NomeCard(nome: "Maria"),
              NomeCard(nome: "Ana"),
            ],
          ),
        ),
      ),
    );
  }
}
