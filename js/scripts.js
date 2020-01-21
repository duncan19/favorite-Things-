$(document).ready(function() {
  $("#itemForm").submit(function() {
    $("#formdiv").addClass("none");
    $("#results").removeClass("none");
    var items = ["item1","item2","item3","item4","item5","item6"]
    var newItems = items.map(function(item) {
      return $("input#" + item).val().toUpperCase()
    })
    newItems.sort()
    newItems.forEach(function(item) {
      $("#resultList").append("<li>" + item + "</li>")
    })
  console.log(newItems)
  event.preventDefault()
  });
});
