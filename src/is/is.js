import M from '../mquery';


function is(ele, selector) {
    if (!M.isElement(ele)) {
        throw new Error('The first argument for the is function must be a HTML element');
    }


    if (!M.isString(selector) && !(selector instanceof M.fn.init)) {
        throw new Error('The second argument for the is function must be a string or an instance of M');
    }

    if (M.isString(selector)) {
        return (ele.matches || ele.matchesSelector || ele.msMatchesSelector || ele.mozMatchesSelector || ele.webkitMatchesSelector || ele.oMatchesSelector).call(ele, selector);
    } else {
        return ele === selector[0];
    }


};

export default is;