/**
 * Created by fengpan on 16/5/8.
 */
"use strict";
const util = require('util');
const Events = require('events');
const request = require('request');
const qs = require('querystring');

let reqMap = new Map();
class Req{
    constructor(){
        Events.call(Req);
    };

    reget(options, interval, name){
        let me = this;

        function carry(){
            let result = '';
            request(options, function (error, response, body) {
                if (!error && response.statusCode == 200) {
                }
            }).on('data', function(data) {
                result += data;
            }).on('end', function() {
                if(result){
                    me.emit(name, JSON.parse(result));
                }
            });
        }
        carry();
        interval && setInterval(carry, interval);
        return this;
    }
}
util.inherits(Req, Events);

module.exports = new Req();