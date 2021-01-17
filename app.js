
    $('body').on('click', '#submit', function(){
        const title = $('#title').val()
        const rating = $('#rating').val()
        console.log(title, rating)
        const newItem = $('ul').append(`<li>${title} ${rating}</li>`)
        newItem.append("<button type='button' id='delete'>Delete</button>")
    });

    $('body').on('click', '#delete', function(){
        $(this).prev().remove();
        $(this).remove();
    })
