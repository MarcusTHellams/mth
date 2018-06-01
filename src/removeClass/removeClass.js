import M from '../mquery';


function removeClass(ele, className) {
    if (!M.isElement(ele)) {
        throw new Error('The first argument for the removeClass function must be a HTML element');
    }


    if (!M.isString(className)) {
        throw new Error('The second argument for the removeClass function must be a string');
    }


    if (ele.classList) {
        className = className.split(' ');
        className.forEach((className) => {
            ele.classList.remove(className);
        });
    }
    else {
        ele.className = ele.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }


};

export default removeClass;