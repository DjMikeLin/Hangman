class Game{
    constructor(){
        //alphabet();
    }

    alphabet(){
        for(let i = 65; i <= 90; i++){
            let item = $('<li><div>'+ String.fromCharCode(i) +'</div></li>');
            
            item.click(() => {
                console.log(item.text());
                item.unbind("click");
            });
    
            $('ol').append(item); 
        }
    }
}

$(() => {
    let currGame = new Game();
    currGame.alphabet();
});