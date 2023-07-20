import 'package:flutter/material.dart';
import 'package:plugins/utils/compartilhar.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            children: [
              Text('Hello World!'),
              ElevatedButton(
                  onPressed: () {
                    comparilhar();
                  },
                  child: Text('Compartilhar'))
            ],
          ),
        ),
      ),
    );
  }
}
