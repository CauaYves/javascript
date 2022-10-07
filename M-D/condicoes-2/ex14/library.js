function analisar (){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    
    newdate = year + "/" + month + "/" + day;
    console.log(newdate)
}