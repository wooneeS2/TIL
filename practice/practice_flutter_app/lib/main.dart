import 'package:flutter/material.dart';

//flutter 함수 전달(call back) 연습
//출처 - 유튜브 코딩파파 (https://youtu.be/cuT1koj18yU)

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'flutter Demo',
      home: PracticepPassData(),
    );
  }
}

class PracticepPassData extends StatefulWidget {
  PracticepPassData({Key key}) : super(key: key);

  @override
  _PracticepPassDataState createState() => _PracticepPassDataState();
}

class _PracticepPassDataState extends State<PracticepPassData> {
  int dataToSend = 0;
  int returnData = -1;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("numbering"),
      ),
      body: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Container(
            child: Text('returnData - $returnData'),
          ),
          Container(
            child: TextButton(
              onPressed: () {
                setState(() {
                  dataToSend++;
                });
              },
              child: Text('dataToSend - $dataToSend'),
            ),
          ),
          OtherWidget(
            received: dataToSend,
            function: returnDataFunction,
          ),
        ],
      ),
    );
  }

  void returnDataFunction(int returnDt) {
    setState(() {
      returnData = returnDt;
    });
  }
}

class OtherWidget extends StatelessWidget {
  const OtherWidget({
    Key key,
    @required this.received,
    this.function,
  }) : super(key: key);

  final int received;
  final Function function;

  @override
  Widget build(BuildContext context) {
    return Container(
      child: TextButton(
          onPressed: () {
            function(received * 2);
          },
          child: Text('received Data - $received')),
    );
  }
}
