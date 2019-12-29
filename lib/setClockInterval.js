/**
*Used in an async function with await for a delay
*
*@param {Integer} ms
 */
function timeout(ms){
    return new Promise(res => setTimeout(res, ms));
}

/**
 * Creates a clock interval for the callback function
 *
 *@param {String} clock (HH:MM:SS)
 *@param {function} callback
 *@param.. arguments for the callback
  */
async function setClockInterval(clock, callback){
    // For the callback to take arguments
    var params = Array.prototype.slice.call(arguments, 2);
    function invokeCallback(){
        return callback.apply(this, params);
    }
    let dateNow = new Date();
    let time = clock.split(":").map(x => parseInt(x));
    var intervalId;
    const {hour, minute, second} = time;
    if (hour > 24){
        throw new Error('Cannot have hour greater than 24');
    }
    if (minute > 60 || second > 60){
        throw new Error('Cannot have minute or second greater than 60');
    }
    let dateFuture = new Date(`${dateNow.getFullYear()}-${dateNow.getMonth() + 1}-${dateNow.getDate()}T${clock}`);
    let dateFutureSecond = dateFuture.getTime() - dateNow.getTime();
    if (dateFutureSecond < 0){
        // If the clock time has already passed for today
        let startTime = dateFuture.getTime() + 86400000 - dateNow.getTime();
        await timeout(startTime);
        invokeCallback();
        intervalId = setInterval(invokeCallback, 86400000);
    }else{
        await timeout(dateFutureSecond);
        invokeCallback();
        intervalId = setInterval(invokeCallback, 86400000);
    }
    return intervalId;
}

module.exports = setClockInterval;
