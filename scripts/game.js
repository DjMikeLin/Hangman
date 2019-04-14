class Game{
    constructor(){
        this.imagePaths = ['Images/Picture1.png', 'Images/Picture2.png', 'Images/Picture3.png', 
        'Images/Picture4.png', 'Images/Picture5.png', 'Images/Picture6.png', 'Images/Picture7.png'];
        this.words = ['Joker', 'Us', 'Aquaman', 'Hellboy', 'After', 'Bumblebee', 'Aladdin',
        'Venom', 'Hanna', 'Mirage', 'Split', 'Destroyer', 'It', 'Hereditary', 'Dumbo', 'Breakthrough',
        'Penguins', 'Snatch', 'Gladiator', 'Crash', 'Transformers', 'Limitless', 'Goodfellas', 'Ghostbusters'];
        this.changeImagePath = '';
        this.currLetter = '';
        this.currWord = this.words[Math.floor((Math.random() * this.words.length))].toUpperCase();
        this.guesses = 0;
        this.placeHolders = '';
    }
}