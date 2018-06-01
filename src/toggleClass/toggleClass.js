import M from '../mquery';
import addClass from '../addClass/';
import hasClass from '../hasClass/';
import removeClass from '../removeClass/';


function toggleClass(ele, className, force) {
    if (!M.isElement(ele)) {
        throw new Error('The first argument for the toggleClass function must be a HTML element');
    }


    if (!M.isString(className)) {
        throw new Error('The second argument for the toggleClass function must be a string');
    }


    if (force !== undefined && !M.isBoolean(force)) {
        throw new Error('The third argument for the toggleClass function must be a boolean');
    }

    if (force === undefined) {
        if (hasClass(ele, className)) {
            removeClass(ele, className);
            return hasClass(ele, className);
        } else if (!hasClass(ele, className)) {
            addClass(ele, className);
            return hasClass(ele, className);
        }
    } else if (force === true) {
        addClass(ele, className);
        return hasClass(ele, className);
    } else {
        removeClass(ele, className);
        return hasClass(ele, className);
    }


};

export default toggleClass;