import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "First App",
      theme: ThemeData(
        primarySwatch: Colors.deepPurple
      ),

      home: MyHomePage(),

    );

  }
}

class MyHomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title : Text("앱 바 위치"),
      ),
      body: Center(
        child: Column(
          children:<Widget> [
            Text("hello"),
            Text("hello"),
            Text("hello"),
            Text("imnotcool"),


          ],
        ),
      ),

    );
  }
}
