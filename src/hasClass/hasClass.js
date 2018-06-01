import M from '../mquery';


function hasClass(ele, className) {
    if (!M.isElement(ele)) {
        throw new Error('The first argument for the hasClass function must be a HTML element');
    }


    if (!M.isString(className)) {
        throw new Error('The second argument for the hasClass function must be a string');
    }


    if (ele.classList) {
        return ele.classList.contains(className);
    }
    else {
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(ele.className);
    }


};

export default hasClass;