"use strict";
let yourName=prompt('please inter your name')
let yourGender=prompt('you are Male or Female')
let yourAge=prompt('Your age is ')
if (yourAge<=0 ){
    alert('your age incorrect')
}


 function welcomimg( ) {
let welcom=confirm('Are you want to skip welcomimg messege')
if (welcom ==false){ 
    if(yourGender=='Male'){
        let x=alert('hello mr '+yourName) }
        else if(yourGender=='Female'){
            let x=alert('hello ms ' + yourName )}
        else{
        let x=alert('hello ' +yourName) }
        }}
        welcomimg( ) ;

        let arr1=[]

function  life() {
        let live=prompt('Do you live in Jordan,, yes or No')
        if(live==null|| live==""|| live==false  ){
            live ='invaled' ;}

    
            let eat=prompt('Do you like Mansaf  ,,yes or No ')
            if (eat==null || eat=="" || eat==false  ){
                eat='invaled';
            }
            let learn=prompt('Did you get abachelor degree ,,yes or No')
            if (learn==null || learn=="" || learn== false ){
                learn='invaled';
            }
           
    arr1.push(live,eat,learn) }



life();
    console.log(arr1);

    for (let i =0 ; i<arr1.length ; i++ ){
        console.log(arr1[i]);}

    
        

