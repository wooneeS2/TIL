import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert'; //json데이터 이

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: HttpApp(),
    );
  }
}

class HttpApp extends StatefulWidget {
  @override
  _HttpAppState createState() => _HttpAppState();
}

class _HttpAppState extends State<HttpApp> {
  String result = '';
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Http Example'),
      ),
      body: Center(
        child: Center(
          child: Text('$result'),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: ()  {
         getJSONData();

        },
        child: Icon(Icons.file_download),
      ),
    );
  }
}

Future<String> getJSONData() async{
  var url = Uri.parse("https://dapi.kakao.com/v3/search/book?target=title&query=doit");
  var response = await http.get((url),
                headers: {"Authorization": "KakaoAK 8a67d8239fea2f539e73684f665edc18"});
  print(response.body);
  return "성공";
}
