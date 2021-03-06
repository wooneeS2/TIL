import 'package:flutter/material.dart';
import 'package:netflix_flutter_app/model/model_movie.dart';
import 'package:netflix_flutter_app/widget/carousel_slider.dart';

class HomeScreen  extends StatefulWidget {
  @override
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  //영화 더미 데이터 만들기
  List<Movie> movies = [
    Movie.fromMap({
     'title': '승리호,',
      'keyword':'판타지/SF/디스토피아',
      'poster':'images/poster_1.jpg',
      'like': true

    })
  ];



  @override
  void initState(){
    super.initState();
  }


  @override
  Widget build(BuildContext context) {
    return ListView(children: <Widget> [
      Stack(children: <Widget> [
        CarouselImage(movies: movies),
        TopBar(),

      ],)


    ],);
  }

}


class TopBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.fromLTRB(20, 7, 20, 7),
      child:  Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: <Widget>[
        Image.asset('images/logo.png',
          fit: BoxFit.contain,
          height: 25,
        ),
        Container(
          padding: EdgeInsets.only(right: 1),
          child: Text(
            'TV 프로그램',
            style: TextStyle(fontSize: 14),
          ),
        ),

        Container(
          padding: EdgeInsets.only(right: 1),
          child: Text(
            '영',
            style: TextStyle(fontSize: 14),
          ),
        ),

        Container(
          padding: EdgeInsets.only(right: 1),
          child: Text(
            '내가 찜 프로그램화',
            style: TextStyle(fontSize: 14),
          ),
        ),


      ],),

    );
  }
}
