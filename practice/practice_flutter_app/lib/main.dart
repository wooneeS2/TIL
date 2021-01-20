import 'package:flutter/material.dart';
import 'login_page.dart';

void main(){
  runApp(new MyApp());

}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context){
    return MaterialApp(
      title:'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.pink,
      ),
      home:MyHomePage(title:'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);
  final String title;

  @override
  _MyHomePageState createState()=> _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage>{
  int _counter = 0;
  void _incrementCounter(){
    setState(() {
      _counter++;
    });
  }
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    return Scaffold(
      appBar:AppBar(
        title:Text(widget.title),
      ),
      body:Center(

      )
    )
  }
}


//https://yoonjaepark.github.io/2020-01-19/flutter-bottom-navigation