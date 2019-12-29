#Set Clock Interval
Set an interval based on the local time for callbacks
#####Usage
```
const setClockInterval = require('set-clock-interval')
setClockInterval('HH:MM:SS', callback, params1,params2,..)
```
The time has to be a string with hours:minutes:seconds in 24 hour clock that you want
the callback to occur. Time of callback is based on your current
server's clock.
 
The callback is the function that is to be called, and params are the callback's
parameters.

#####Example
```
const setClockInterval = require('set-clock-interval')

function add(one, two, three){
    return one + two + three
}

setClockInterval('03:00:00', add, 1, 2, 3)
```
At 3 am system clock, the function 'add' will be called with
the parameters 1, 2, and 3. The function 'add' will keep being
called at 3 am until the program is cancelled.

```
const setClockInterval = require('set-clock-interval')

function sayHello(){
    console.log("Hello World!")
}

var hello = setClockInterval('20:30:00', sayHello)
clearInterval(hello)
```
At 8:30 pm system clock, the function 'sayHello' will be called once.
The clearInterval stop the execution of the interval from being called every 24 hours,
but does not clear the first execution.