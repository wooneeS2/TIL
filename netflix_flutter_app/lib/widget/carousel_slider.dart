import 'package:flutter/material.dart';
import 'package:netflix_flutter_app/model/model_movie.dart';
import 'package:carousel_slider/carousel_slider.dart';
import 'package:netflix_flutter_app/screen/detail_screen.dart';

class CarouselImage extends StatefulWidget {

  final List<Movie> movies;
  CarouselImage({this.movies});
  _CarouselImageState createState() => _CarouselImageState();
}

class _CarouselImageState extends State<CarouselImage> {
  List<Movie> movies;
  List<Widget> images;
  List<String> keyword;
  List<bool> likes;
  int _currentPage = 0;
  String _currentKeyword;


@override
void initState(){
  super.initState();
  movies = widget.movies;
  images = movies.map((m) => Image.asset('./images'+m.poster)).toList();
  keyword = movies.map((m) => m.keyword).toList();
  likes = movies.map((m) => m.like).toList();
  _currentKeyword = keyword[0];


}

  @override
  Widget build(BuildContext context) {
    return Container(
      child:Column(
        children: <Widget> [
          Container(
            padding: EdgeInsets.all(20),
          ),
          CarouselSlider(
            items: images,
            onPageChanged:(index){
            setState(() {
              _currentPage = index;
              _currentKeyword = keyword[_currentPage];
            });
          },
          ),

          Container(
            padding: EdgeInsets.fromLTRB(0, 10, 0, 3),
            child: Text(_currentKeyword,
            style: TextStyle(fontSize: 11),
            ),
          ),
          Container(
            child: Row(
              children: <Widget> [
                Container(child:Column(children: <Widget>[
                  likes[_currentPage]
                  ? IconButton(icon: Icon(Icons.check), onPressed: () {},)
                      : IconButton(icon:Icon(Icons.add),onPressed: (){},),
                  Text('내가 찜한 콘텐츠', style: TextStyle(fontSize: 11),),


                ],),),

                Container(
                  padding:  EdgeInsets.only(right: 10),
                  child:TextButton(
                    //Color: Colors.white60,
                    onPressed: () {},
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: <Widget>[
                        Icon(Icons.play_arrow, color:Colors.black,),
                        Padding(
                          padding: EdgeInsets.all(3),
                        ),
                        Text(
                          '재생',
                          style:TextStyle(color:Colors.black),
                        ),
                      ],
                    ),
                  ),
                ),


              ],
            ),
          ),
          Container(
            padding:  EdgeInsets.only(right: 10),
            child: Column(
              children: <Widget>[
                IconButton(icon: Icon(Icons.info),
                  onPressed: (){
                  Navigator.of(context).push(MaterialPageRoute<Null>(
                    fullscreenDialog: true,
                    builder: (BuildContext context) {
                      return DetailScreen(
                        movie:movies[_currentPage],
                      );
                    }
                  ));


                },),
                Text('정보',style: TextStyle(fontSize: 11),)
              ],
            ),
          ),
          Container(
            child: Row(mainAxisAlignment: MainAxisAlignment.center,
            children: makeIndicator(likes, _currentPage),),
          ),


        ],
      )
    );

  }
}



List<Widget> makeIndicator(List list, int _currentPage){
  List<Widget> result=[];
  for(var i =0; i<list.length; i++){
    result.add(Container(
      width: 0,
      height: 0,
      margin:  EdgeInsets.symmetric(vertical: 10.0, horizontal: 2.0),
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: _currentPage == i
          ? Color.fromRGBO(255, 255, 255, 0.9)
            :Color.fromRGBO(255, 255, 255, 0.4),
      ),
    ));
  }

  return result;
}