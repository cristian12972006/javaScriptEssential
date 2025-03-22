var xhr = new XMLHttpRequest();

var url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload=function () {

    var articles = xhr.response.articles;

    var articleDiv = document.getElementById('articulos');

    articles.forEach(function (article) {

        var artcleDiv = document.createElement('div');
        artcleDiv.classList.add('article');
        var title = document.createElement('h2');
        title.textContent = article.title;

        var drescripcion = document.createElement('p');
        drescripcion.textContent = article.description;

        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Formas de lograrlo';

        var wayslist = document.createElement('ul');
        article.ways_to_achieve.forEach(function (way) {

            var lisItem = document.createElement('li');
            lisItem.textContent = way;
            wayslist.appendChild(lisItem);
        });
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Beneficios:';

        var benefits = document.createElement('ul');

        article.benefits.forEach(function (benefit) {

            var lisItem = document.createElement('li');
            lisItem.textContent = benefit;
            benefits.appendChild(lisItem);
        });

        artcleDiv.appendChild(title);
        artcleDiv.appendChild(drescripcion);
        artcleDiv.appendChild(waysHeader);
        artcleDiv.appendChild(wayslist);
        artcleDiv.appendChild(benefitsHeader);
        artcleDiv.appendChild(benefits)  ;
        
        articleDiv.appendChild(artcleDiv);



    });
    

};
xhr.send();