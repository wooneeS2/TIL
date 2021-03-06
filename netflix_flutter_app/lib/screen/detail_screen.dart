import 'package:flutter/material.dart';
import 'package:netflix_flutter_app/model/model_movie.dart';
import 'dart:ui';

class DetailScreen extends StatefulWidget {
  final Movie movie;
  @override
  DetailScreen({this.movie});
  _DetailScreenState createState() => _DetailScreenState();
}

class _DetailScreenState extends State<DetailScreen> {

  bool like = false;

  @override
  void initState(){
    super.initState();
    like = widget.movie.like;
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: SafeArea(
          child: ListView(
            children: <Widget> [
              Stack(
                children: <Widget> [
                  Container(width: double.maxFinite,
                  decoration: BoxDecoration(image: DecorationImage(image: AssetImage('images/'+widget.movie.poster),
                    fit:BoxFit.cover,
                  ),

                  ),


                  )

                ],
              )
            ],
          ),
        ),
      ),
    );
  }
}
