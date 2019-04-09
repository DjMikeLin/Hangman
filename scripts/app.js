class Game{
    constructor(){
        this.imagePaths = ['Images/Picture1.png', 'Images/Picture2.png', 'Images/Picture3.png', 
        'Images/Picture4.png', 'Images/Picture5.png', 'Images/Picture6.png', 'Images/Picture7.png'];
        this.words = ['Joker', 'Us', 'Aquaman', 'Hellboy', 'After', 'Bumblebee', 'Aladdin',
        'Venom', 'Hanna', 'Mirage', 'Split', 'Destroyer', 'It', 'Hereditary'];
        this.changeImage(this.imagePaths[0]);
        this.currLetter = '';
        this.currWord = this.words[Math.floor((Math.random() * this.words.length))].toUpperCase();
        this.guesses = 0;
    }
    
    changeImage(path){
        $('img').attr("src", path);
    }
}

$(() => {
    let currGame = new Game();
    makeAlphabet(currGame);
    console.log(currGame.currWord);
});

function makeAlphabet(game){
    for(let i = 65; i <= 90; i++){
        let item = $('<li><div>'+ String.fromCharCode(i) +'</div></li>');
        
        item.click(() => {
            item.unbind("click");
            game.currLetter = item.text();

            if(!game.currWord.includes(game.currLetter)){
                game.changeImage(game.imagePaths[game.guesses + 1]);
                game.guesses++;
            }
        });

        $('ol').append(item); 
    }
}