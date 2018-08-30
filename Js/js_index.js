/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function getAjax(url, success) 
{
    var xhr = window.XMLHttpRequest ? 
        new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('GET', url);
    xhr.onreadystatechange = 
        function() 
        {
            if (xhr.readyState>3 && xhr.status==200)
                success(xhr.responseText);
        };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
    return xhr;
}

function postAjax(url, data, success) 
{
    var params = typeof data == 'string' ? data : Object.keys(data).map(
        function(k)
        { 
            return encodeURIComponent(k) + '=' +    encodeURIComponent(data[k]) 
        }
    ).join('&');
    
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open('POST', url);
    xhr.onreadystatechange = 
        function() 
        {
           if (xhr.readyState>3 && xhr.status==200) { 
               success(xhr.responseText); 
           }
        };
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send(params);
    return xhr;
}

function chargerPage()
{
    var p = document.getElementById("p");
    p.addEventListener("click", function(e){
        e.preventDefault();
        var url = "action.php";
        postAjax(url, "nom=bob", function(data){
            let p = document.getElementById('output');
            p.innerHTML = data;
        });
    });
    
    var g = document.getElementById("g");
    g.addEventListener("click", function(e){
        e.preventDefault();
        var url = "action.php?a=a"; 
        getAjax(url, function(data){
            let p = document.getElementById('output');
            p.innerHTML = data;
        });  
    });
}

