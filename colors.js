function colorPage() {

    var colors = {
        'complete': {
            'text': 'white',
            'background': 'black',
    
            'headers': 'white',
            'links': 'red'
        },
    
        'red-green': {
            'text': 'white',
            'background': '#184890',
    
            'headers': 'white',
            'links': '#ffd800'
        },
    
        'blue-yellow': {
            'text': 'white',
            'background': '#BF692C',
    
            'headers': '#01D4B4',
            'links': 'yellow'
        }
    };
    

    chrome.storage.sync.get(["color"], function(result) {
        var color = result.color;

        document.body.style.color = colors[color].text;
        document.body.style.background = colors[color].background;


        var all = document.getElementsByTagName('*');

        for(var i = 0; i < all.length; i++) {
            all[i].style.background = colors[color].background;
            all[i].style.color = colors[color].text;
        }

        var headers = document.getElementsByTagName('h1');
        for(var i = 0; i < headers.length; i++) {
            headers[i].style.color = colors[color].headers;
        }

        var links = document.getElementsByTagName('a');
        for(var i = 0; i < links.length; i++) {
            links[i].style.color = colors[color].links;
        }

    });
}

export {colorPage};


//document.getElementById('red-green').addEventListener('click', () => change_colors('red-green'));
//document.getElementById('blue-yellow').addEventListener('click', () => change_colors('blue-yellow'));
//document.getElementById('invert').addEventListener('click', () => change_colors('inverted'));