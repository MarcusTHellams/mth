import M from '../mquery';


function addClass(ele, className) {
    if (!M.isElement(ele)) {
        throw new Error('The first argument for the addClass function must be a HTML element');
    }


    if (!M.isString(className)) {
        throw new Error('The second argument for the addClass function must be a string');
    }


    if (ele.classList) {
        className = className.split(' ');
        className.forEach((className)=>{
            ele.classList.add(className);
        });
    }
    else {
        ele.className += ' ' + className;
    }
};

export default addClass;