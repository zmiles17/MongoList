const deleteItem = function (event) {
    console.log(event);
    event.preventDefault();
    const index = event.target.id;
    $.ajax({ url: "/delete", method: "DELETE", data: { index: index } }).then(function () {
        getItems();
    });
}

const submitItem = function (event) {
    console.log(event);
    event.preventDefault();
    const data = $('input').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { TodoItem: data } }).then(function () {
        getItems();
    });
}

const getItems = function () {
    $.getJSON('/api/list').then(function (data) {
        console.log(data);
        const variable = data.map((element, index) => `<li><input type="checkbox" class="checkbox" ${element.completed ? 'checked' : ''} data-id=${index}></input>${element.name}<i class="fas fa-times" id='${index}'></i></li><br>`)
        console.log(variable);
        $('#todo-list').html(variable);
        $('.fa-times').on('click', deleteItem);
        $('.checkbox').on('click', function (event) {
            const ID = $(event.target).attr('data-id');
            console.log(ID);
            $.ajax({ url: `/api/update/:${ID}`, method: 'PUT', data: { ID: ID } })
                .then(function (res) {
                    console.log(res);
                    getItems();
                })
                .catch(function (err) {
                    console.log(err);
                    alert(err);
                })
        })
    })

}

getItems();

$('form').on('submit', submitItem);


