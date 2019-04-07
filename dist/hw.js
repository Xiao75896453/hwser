$(document).ready(function() {
    $('#listallbtn').on('click',function(){
      listall();
    });

function listall(){
  $.ajax({
    url:"../students.sample.json",
    type:"post",
    datatype:"json",
    success: function(response){
    $.each(response, function(key,value) {
        $('#ajax-listall').append(
            &('<div>',{text:[key]+","+[valut]};
        )
        });
    },
    error:function(){
      alert("ERROR");}
  });

 
