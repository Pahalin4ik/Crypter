$(".shifr").click(function(){
    var b =  new TextEncoder("utf-8").encode($(".input").val());
    var mask = parseInt($("#mask").val());
    for (var i = 0; i < b.length; i++){
        b[i] = parseInt(b[i]) ^ mask;
    }
    var g = new TextDecoder("utf-8").decode(b);
    $("#result").val(g);
    console.log(g);
});

