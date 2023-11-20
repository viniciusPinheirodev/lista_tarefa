$(document).ready(function() {
    $('#form_tarefa').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#nome_tarefa').val();
        const novoItem = $('<li></li>').text(novaTarefa);
        $(novoItem).appendTo('#lista_tarefa');
        $('#nome_tarefa').val('');

    })
    $('#lista_tarefa').on('click', 'li', function() {
        $(this).toggleClass('feita');
    });
});