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
  $('#devourItBtn').on('click', (event) => {
    event.preventDefault();
    var eatIt = {
      devoured: true
    }

    var id = $(this).data('id');
    $.ajax('/api/burgers/'+id, {
      method: 'PUT',
      data: eatIt,
    }).then(() => {
      location.reload();
    });
  });
});