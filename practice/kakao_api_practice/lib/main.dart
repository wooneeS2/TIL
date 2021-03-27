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
  List data;

  @override
  void initState(){
    super.initState();
    data = new List();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Http Example'),
      ),
      body: Container(
        child: Center(
          child: data.length ==0 ? Text('데이터가 없습니다.',style: TextStyle(fontSize: 20),textAlign:  TextAlign.center,)
              : ListView.builder(itemBuilder: (context, index){
                return Card(
                  child: Container(
                    //행 하나하나
                    
                    child:Row(
                      children:<Widget> [
                        Image.network(
                          data[index]['thumbnail'],
                          height: 100,
                          width: 100,
                          fit: BoxFit.contain,
                        ),
                        Column(
                          children: <Widget> [
                            Container(
                              width: MediaQuery.of(context).size.width - 150,
                              //화면에서 이미지 크기 제외

                              child: Text(
                                data[index]['title'].toString(),
                                textAlign: TextAlign.center,
                              ),
                            ),
                            Text('저자 : ${data[index]['authors'].toString()}'),
                            Text('가격 : ${data[index]['sale_price'].toString()}'),
                            Text('판매중 : ${data[index]['status'].toString()}'),
                          ],
                        )
                      ],
                      mainAxisAlignment: MainAxisAlignment.start,
                    ),
                  ),
                );
          },
          itemCount: data.length),
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

  Future<String> getJSONData() async{
    var url = Uri.parse("https://dapi.kakao.com/v3/search/book?target=title&query=doit");
    var response = await http.get((url),
        headers: {"Authorization": "KakaoAK 8a67d8239fea2f539e73684f665edc18"});
    setState(() {
      var dataConvertedToJSON = json.decode(response.body);
      List result = dataConvertedToJSON['documents'];
      data.addAll(result);
    });
    return response.body;
  }
}


