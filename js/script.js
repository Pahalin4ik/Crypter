function SepNumb(text){
    var ret = "";
    for(var i = 0; i<text.length; i++){
        if(text[i]>= '0' && text[i]<='9'){
            ret+=text[i];
        }
    }
    return ret;
}

$("#mask").on("keydown",function(){    
    var s = SepNumb($("#mask").val());
    if(parseInt(s)>147){
        $("#mask").val("147");
    }
    else{
        $("#mask").val(s);
    }
});
$("#mask").on("keyup",function(){    
    var s = SepNumb($("#mask").val());
    if(parseInt(s)>147){
        $("#mask").val("147");
    }
    else{
        $("#mask").val(s);
    }
});
