init();

$("#filtro").keyup(function () {
    buscar($(this));
    if ($("#filtro").hasClass("validar-grupos")) {
        visualizargrupos();
    }
});
$("#buscar").click(function () {
    buscar($("#filtro"));
    if ($("#filtro").hasClass("validar-grupos")) {
        visualizargrupos();
    }
});


$("label[title='Exibir em lista']").click(function () {
    $("#filtro").removeClass("validar-grupos");
    $("#lista").removeClass("d-none");
    $("#porgrupos").addClass("d-none");
    $("#porgrupos *").remove()
})
$("label[title='Exibir em grupos']").click(function () {
    $("#filtro").addClass("validar-grupos");
    $("#lista").addClass("d-none");
    $("#porgrupos").removeClass("d-none");
    visualizargrupos();
})

function buscar(a) {

    var lista = $("#lista");

    var search = a.val().toLowerCase(); //No futuro deve se verificar se não existem resultados e aí quebrar essa variavel e testar por palavras.

    for (var i = 0; i <= lista.children(".item").length - 1; i++) {
        var conteudoItem = lista.children(".item")[i].innerText.toLowerCase();
        var corresponde = conteudoItem.toLowerCase().indexOf(search) >= 0;


        if (corresponde) {
            $("#lista .item").eq(i).removeClass("esconder");
        } else {
            $("#lista .item").eq(i).addClass("esconder");
        }

    }
}

$("[data-toggle='modal']").click(function () {
    location.href = $(this).attr("data-target");
});

$("[data-dismiss='modal']").click(function () {
    location.href = "#home";
});


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function bto_modal_titulo(id_grupo) {
    return $("[data-target='" + id_grupo + "']").text()
}

function init() {
    // Caso alguém copie a url cm uma modal aberta e passe para outra pessoa, 
    // Essa outra pessoa irá visualizar a modal aberta tbm ao executar a url
    // graças a esse script abaixo.
    if (location.href.indexOf("#")) {
        if (location.href.split("#")[1] != "") {
            if (location.href.split("#")[1] != "home") {
                $("#" + location.href.split("#")[1]).modal("show");
            }
        }
    }

    // // Zera o botão de visualizar em grupos
    // $("#grupos_radio").parent("label").removeClass("active");
    // $("#grupos_radio").prop("checked", "");
}

// function visualizargrupos() {
//     $("#porgrupos *").remove();
//     // captura os itens para a array itens
//     var itens = $('.item').filter(function () {
//         return $(this).css('display') !== 'none';
//     });

//     // captura o nome dos grupos para a array grupos
//     var grupos_bruto = new Array;
//     itens.each(function (i) {
//         var teste = grupos_bruto.indexOf(itens.eq(i).attr("data-grupo"));
//         if (teste == -1) {
//             grupos_bruto[i] = itens.eq(i).attr("data-grupo");
//         }
//     });

//     // limpa a array grupos tirando o que é vazio ou undefined
//     var grupos = grupos_bruto.filter(function (el) {
//         return el != null;
//     });

//     grupos.forEach(function (nome, i) {
//         console.log(nome, i);
//         var divcontainer = $("<div></div>");
//         divcontainer.addClass("container");
//         var titulogrupo = $("<h4></h4>");
//         titulogrupo.text(nome);
//         var divrow = $("<div></div>");
//         divrow.addClass("row mb-5");


//         $('.item[data-grupo="' + nome + '"').filter(function () {
//             if (!$(this).hasClass("esconder")) {
//                 var divcol = $("<div></div>");
//                 divcol.addClass("col-12 col-md-6 col-lg-3");
//                 $(this).clone().appendTo(divcol);
//                 divrow.append(divcol);
//             }
//         });

//         divcontainer.append(titulogrupo, divrow);
//         $("#porgrupos").append(divcontainer);
//         $("#porgrupos").removeClass("d-none");
//         $("#lista").addClass("d-none");

//         $("#filtro").addClass("validar-grupos")
   
//     });
// }