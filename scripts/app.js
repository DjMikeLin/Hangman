$(() => {
    let currGame = new Game();
    changeImage(currGame.imagePaths[0]);
    makeAlphabet(currGame);
    currGame.placeHolders = makePlaceholders(currGame.currWord);
});
//Creates the alphabet for the user to click on
function makeAlphabet(game){
    for(let i = 65; i <= 90; i++){
        let item = $('<li><div>'+ String.fromCharCode(i) +'</div></li>');
        
        item.click(() => {
            item.unbind("click");
            item.attr('class', 'postClick');
            game.currLetter = item.text();

            if(!game.currWord.includes(game.currLetter)){
                changeImage(game.imagePaths[game.guesses + 1]);
                game.guesses++;
            }
            else{
                game.placeHolders.forEach(e => {
                    if(e.value === game.currLetter)
                        e.tag.text(e.value).addClass('animateWord');
                });
            }
            checkGameEnd(game);
        });

        $('ol').append(item); 
    }
}
//Make a paragragh tag for every character in word and append it to the .currWord container
//Returns Array of Objects [{tag: , value: }...]
function makePlaceholders(word){
    let arr = word.split('');
    let items = [];
    
    arr.forEach(e => {
        let item = $('<p></p>');
        items.push({tag: item, value: e});
        $('.currWord').append(item);
    });
    return items;
}
//End game conditions: if guessedWord is the hidden word and if user guessed wrong 6 times
//Run game.endGame(boolean) if any of these conditions are true
function checkGameEnd(game){
    if($('.currWord').text() === game.currWord)
        endGame(true);
    else if(game.guesses === 6)
        endGame(false);
}
//Change 'src' of the only image to path
function changeImage(path){
    $('img').attr("src", path);
}
//Hides the alphabet UI and replaces it with a game ending message
function endGame(win){
    $('ol').hide();
    
    if(win)
        $('aside').append('<p>You\'ve Won!</p>').attr('class', 'won');
    else
        $('aside').append('<p>You\'ve Lost! The movie was: '+ this.currWord +'</p>').attr('class', 'lose');
}