// index.js


var updateView = async (button) => {

    if (button.dataset.querytype == 'by_instructor') {
        let queryValue = document.querySelector('#instructorQuery').value;
        api = `https://cus1172-final-project-api.herokuapp.com/api/by_instructor/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_code') {
        let queryValue = document.querySelector('#codeQuery').value;
        api = `https://cus1172-final-project-api.herokuapp.com/api/by_course_code/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_level') {
        let queryValue = document.querySelector('#levelQuery').value;
        api = `https://cus1172-final-project-api.herokuapp.com/api/by_level/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_title') {
        let queryValue = document.querySelector('#titleQuery').value;
        api = `https://cus1172-final-project-api.herokuapp.com/api/by_title/${queryValue}`;
    
    } else if (button.dataset.querytype == 'by_combination') {
        let nameValue = document.querySelector('#nameQuery').value;
        let levelValue = document.querySelector('#cLevelQuery').value;
        api = `https://cus1172-final-project-api.herokuapp.com/api/combined_query/${nameValue}/${levelValue}`; 
    }
    const data = await fetch(api,{"Access-Control-Allow-Origin": "*"});
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
