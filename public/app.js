const deleteItem = function (event) {
    event.preventDefault();
    const id = event.target.id;
    $.ajax({ url: `/delete/${id}`, method: "DELETE"}).then(function () {
        getItems();
    });
}

const submitItem = function (event) {
    event.preventDefault();
    const data = $('input').val().trim();
    $.ajax({ url: "/add", method: "POST", data: { itemName: data } }).then(function (res) {
        getItems();
    });
}

const getItems = function () {
    $.getJSON('/api/list').then(function (data) {       
        const variable = data.map((element) => `<li><input type="checkbox" class="checkbox" ${element.completed ? 'checked' : ''} data-id=${element._id}></input>${element.itemName}<i class="fas fa-times" id='${element._id}'></i></li><br>`)
        $('#todo-list').html(variable);
        $('.fa-times').on('click', deleteItem);
        $('.checkbox').on('click', function (event) {
            const ID = $(event.target).attr('data-id');
            const checked = event.target.checked;
            const data = {};
            if (checked) {
                 data.completed = true 
            } else {
                data.completed = false
            }
            $.ajax({ url: `/api/update/${ID}`, method: 'PUT', data: data})
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


