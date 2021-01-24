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
        child:Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              'counts: ',
            ),
            Text(
              '$_counter',
              style:Theme.of(context).textTheme.display1,
            ),
          ],
        )

      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ),
      bottomNavigationBar: BottomNavigationBar(
        type: BottomNavigationBarType.fixed,
        onTap:(index) => {},
        currentIndex: 0,
        items: [
          new BottomNavigationBarItem(
            icon:Icon(Icons.mail),
            title:Text('First'),
          ),
          new BottomNavigationBarItem(
            icon: Icon(Icons.person),
            title:Text('Second')
          )
        ]
      ),
    );
  }
}


