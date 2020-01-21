$(document).ready(function() {
  $("#favoritForm").submit(function() {
    var favorits = [];
    var leastFav = [];
    var userInput1 = $("input#item1").val();
    var userInput2 = $("input#item2").val();
    var userInput3 = $("input#item3").val();
    var userInput4 = $("input#item4").val();
    var userInput5 = $("input#item5").val();
    var userInput6 = $("input#item6").val();
    leastFav.push(userInput4, userInput5, userInput6);
    favorits.push(userInput1, userInput2, userInput3);
    // leastFav.push(favorits.splice(1, 0, leastFav.toString()).toString())
    console.log(favorits);
    console.log(leastFav);
    $("#resultList").append("<li>" + favorits.splice(0,1)+ "</li>")
    $("#resultList").append("<li>" + favorits.splice(0,1)+ "</li>")   
    $("#resultList").append("<li>" + favorits.splice(0,1)+ "</li>")
    $("#leastResultList").append("<li>" + leastFav.splice(0,1)+ "</li>")
    $("#leastResultList").append("<li>" + leastFav.splice(0,1)+ "</li>")   
    $("#leastResultList").append("<li>" + leastFav.splice(0,1)+ "</li>")
    event.preventDefault();
  });
});
