const changerCor = () =>  {
    const numeroDecimal     = Math.floor(Math.random() * 16777216);
    const numeroHexadecimal = numeroDecimal.toString(16).toUpperCase().padStart(6, '0');
    let valorConvertido     = '#' + numeroHexadecimal;
    
    $("body").css("background-color", valorConvertido);
    // $(".container h1").css("color", 'blue');

    $(".container h1").html(`Background-color: ${valorConvertido}`);
}