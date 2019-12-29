var chai = require('chai');
var expect = chai.expect;
var clockInterval = require('../lib/setClockInterval');

function timeNowParam(one, two){
    let dateNow = new Date();
    console.log("inside timenow " + one + " " + two);
    console.log("Printing time: " + dateNow + " arguments " + one + " " + two + " = " + add(one, two));
}

function add(one, two){
    return one+two;
}


clockInterval('22:59:00', timeNowParam, 5, 5);
clockInterval('23:05:00', timeNowParam, 5, 5);
clockInterval('17:15:00', timeNowParam, 10, 10);
clockInterval('03:00:00', timeNowParam, 20, 20);
clockInterval('18:00:00', timeNowParam, 50, 50);