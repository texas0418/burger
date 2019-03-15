$(document).ready(function() {
  $(".devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");
    var newDevourState = {
      devoured: newDevour
    };
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(function() {
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger")
        .val()
        .trim()
    };
    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger
    }).then(function() {
      location.reload();
    });
  });
});