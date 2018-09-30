const deleteItem = function (event) {
    event.preventDefault();
    const index = event.target.id;
    $.ajax({ url: "/delete", method: "DELETE", data: { index: index } }).then(function() {
        getItems();
    });
}

const submitItem = function (event) {
    event.preventDefault();
    const data = $('input').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { TodoItem: data } }).then(function() {
        getItems();
    });
}

const getItems = function () {
    $.getJSON('/api/list').then(function (data) {
        const variable = data.map((element, index) => `<li><input type="checkbox" class="checkbox" ${element.completed ? 'checked' : ''} data-id=${index}></input>${element.name}<i class="fas fa-times" id='${index}'></i></li><br>`)
        $('#todo-list').html(variable);
        $('.fa-times').on('click', deleteItem);
        $('.checkbox').on('click', function (event) {
            const ID = $(event.target).attr('data-id');
            $.ajax({ url: '/api/update', method: 'PUT', data: { ID: ID } })
                .then(function (res) {
                    getItems();
                })
                .catch(function (err) {
                    alert(err);
                })
        })
    })

}

getItems();

$('form').on('submit', submitItem);


