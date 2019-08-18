function my$(id) {
    return document.getElementById(id);
}


function setInnnerText(element,text) {
    if(typeof element.textContent=="undefined"){
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}

function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}



function getFirstElementChild(element) {
    if(element.firstElementChild){
        return element.firstElementChild;
    }else{
        var node=element.firstChild;
        while (node&&node.nodeType!=1){
            node=node.nextSibling;
        }
        return node;
    }
}

function getLastElementChild(element) {
    if(element.lastElementChild){
        return element.lastElementChild;
    }else{
        var node=element.lastChild;
        while (node&&node.nodeType!=1){
            node=node.previousSibling;
        }
        return node;
    }
}


function addEventListener(element,type,fn) {

    if (element.addEventListener) {
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent) {
        element.attachEvent("on" + type, fn);
    } else {
        element["on" + type] = fn;
    }

}