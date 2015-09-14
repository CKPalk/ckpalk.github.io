/* Course Quote Array */
var courseQuotes = [
    "Icelandic Sagas are also known as 'Family Sagas'. They live up to this nickname with pages of family tree details for every character in every saga ... so many Olafs.", 
    "An in depth analysis of film history such as the American counterculture film 'Easy Rider' by Dennis Hopper, the Germany cinemas rebutal to Nazi and Heimatfilme cinema, and how Bollywood films reflect the culture of India. Truely eye opening.", 
    "This is a quote for Human Nature", 
    "This is a quote for Intro to Business", 
    "I thought maybe it would get better in Calculus II, then I made the same mistake when deciding to take Calculus III.", 
    "This is a quote for Linear Algebra"
];

function switchQuoteFor(self, classIndex) {
    if(self.className.indexOf("selected") == -1) {
        for (i = 1; i < classIndex; i++) {
            var button = document.getElementById("class-button-" + String(i));
            button.className = "class-button";
        }
        {
            var button = document.getElementById("class-button-" + String(classIndex));
            button.className = "class-button-selected";
            
            var quote = document.getElementById("quote-raw");
            quote.innerHTML = courseQuotes[classIndex - 1];
        }
        for (i = classIndex + 1; i <= 6; i++) {
            var button = document.getElementById("class-button-" + String(i));
            button.className = "class-button";
        }
    }
}