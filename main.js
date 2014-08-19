var polygon = require('./polygon');
var rightTriangle = require('./rightTriangle');
var sphere = require('./sphere');
var $ = require('jquery');

var myPolygon = polygon(7);
var myRightTriangle = rightTriangle(3, 4);
var mySphere = sphere(8);

$(document).ready(function() {
	$("#poly1").append("The number of diagonals of a polygon with 7 sides is " + myPolygon.diagonals());
	$("#right1").append("The area of a right triangle with a base of 3 and a height of 4 is " + myRightTriangle.area());
	$("#sphere").append("The volume of a sphere with radius 8 is " + mySphere.volume());
})