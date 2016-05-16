"use strict";

let common = {};

module.exports = common;

/**
 *
 * @param arr       检验的数组
 * @param number    检验的数字
 * @param scope     需要偏差范围
 */
common.near = function(arr, number, scope){
    for(let a of arr){
        if(((a - scope) < number) && ((a + scope) > number)){
            return a;
        }
    }
    return false;
};