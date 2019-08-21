ko.bindingHandlers.mousemoves = {
    init: function(id, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
        var value = ko.utils.unwrapObservable(valueAccessor());

        $(id).mousemove(function( event ) {
            var msg = "Handler for .mousemove() called at ";
            msg += event.pageX + ", " + event.pageY;
            console.log(msg);
            //$( "#log" ).append( "<div>" + msg + "</div>" );
        });
    }
};
