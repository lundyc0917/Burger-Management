$(function(){
  // Create new Burger
  $('#createBurger').on('submit', (event) => {
    event.preventDefault();
    
    var burger_name = $('#newBurger').val().trim();
    
    if (burger_name != "") {
      var addBurger = {
        burger_name: $('#newBurger').val().trim(),
        devoured: false
      }
      $.ajax('/api/burgers',{
        type: 'POST',
        data: addBurger
      }).then(() => {
        location.reload();
      });
    } else {
      alert('Please enter a burger name!');
    }
  });

  // Eat Burger
  //TODO: Make it so that you can devour any item, not just the first one
  $('#devourItBtn').on('click', function() {
    var eatIt = {
      devoured: true
    }

    var id = $(this).data("id");
    console.log("BURGER ID ="+id);
    $.ajax('/api/burgers/'+id, {
      type: 'PUT',
      data: eatIt,
    }).then(() => {
      location.reload();
    });
  });
});