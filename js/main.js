$(document).ready(function () {
    const words = ["Photographer", "Designer", "Developer"];
    const textElement = $(".changing-text"); 
    let currentIndex = 0;

    function typeWord(word, callback) {
        let i = 0;
        const interval = setInterval(() => {
            textElement.text(word.slice(0, i + 1)); 
            i++;
            if (i === word.length) {
                clearInterval(interval); 
                setTimeout(callback, 1000); 
            }
        }, 150); 
    }

    function deleteWord(callback) {
        let word = textElement.text();
        let i = word.length;
        const interval = setInterval(() => {
            textElement.text(word.slice(0, i - 1)); 
            i--;
            if (i === 0) {
                clearInterval(interval); 
                setTimeout(callback, 500); 
            }
        }, 150); 
    }

    function changeWord() {
        const word = words[currentIndex];
        typeWord(word, () => {
            deleteWord(() => {
                currentIndex = (currentIndex + 1) % words.length; 
                changeWord(); 
            });
        });
    }

  
    changeWord();
});



