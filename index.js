// index.js


var updateView = async (button) => {

    if (button.dataset.querytype == 'by_instructor') {
        let queryValue = document.querySelector('#instructorQuery').value;
        api = `http://localhost:3000/api/by_instructor/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_code') {
        let queryValue = document.querySelector('#codeQuery').value;
        api = `http://localhost:3000/api/by_course_code/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_level') {
        let queryValue = document.querySelector('#levelQuery').value;
        api = `http://localhost:3000/api/by_level/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_title') {
        let queryValue = document.querySelector('#titleQuery').value;
        api = `http://localhost:3000/api/by_title/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_combination') {
        let nameValue = document.querySelector('#nameQuery').value;
        let levelValue = document.querySelector('#cLevelQuery').value;
        api = `http://localhost:3000/api/combined_query/${nameValue}/${levelValue}`; 
    }
    const data = await fetch(api);
    const model = await data.json();
    render_view(model);
}

var render_view = (model) => {
    var source = document.querySelector("#show_results_view").innerHTML;
    var template = Handlebars.compile(source);
    var html = template(model);

    document.querySelector("#results").innerHTML = html;
}

function clear() {
    document.getElementById('instructorQuery').value="";
}
