class Game{
    constructor(){

    }

    alphabet(){
        let obj = {};
        for(let i = 65; i <= 90; i++){
            //let item = $('<li><div>'+ String.fromCharCode(i) +'</div></li>')
            //obj[String.fromCharCode(i)] = 
        }
    }
}

$(() => {
    for(let i = 65; i <= 90; i++){
        let item = $('<li><div>'+ String.fromCharCode(i) +'</div></li>');
        
        item.click(() => {
            console.log(item.text());
            item.unbind("click");
        });

        $('ol').append(item); 
    }
});