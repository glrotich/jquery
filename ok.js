$('date').datepicker({});

$("#selectable").selectable();

$(".ui-selected").text();

$("#sortable").sortable();
$("#sortable").disableSelection();

$(document).tooltip({

    items: "[title],[class]",
    content: function() {
        var element = $(this);
        if (element.is("[tittle]")) {
            return element.attr("tittle");
        }
        if (element.is("[class]")) {
            if (element.attr("class") == "ui-state-default") {
                var text = element.text(); // in this case will be desired color
                return "<div class= 'color_swatch' style='background:" + text + "'></div>";
            }
        }
    }
});