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

    const classes = className.split(' ');

    if (force === undefined) {
        M.each(classes, function (i, cla) {
            if (hasClass(ele, cla)) {
                removeClass(ele, cla);
            } else if (!hasClass(ele, cla)) {
                addClass(ele, cla);
            }
        });

    } else if (force === true) {
        M.each(classes, function (i, cla) {
            addClass(ele, cla);
        });
    } else {
        M.each(classes, function (i, cla) {
            removeClass(ele, cla);
        });
    }
};

export default toggleClass;