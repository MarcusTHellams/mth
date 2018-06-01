import M from '../mquery';
import is from '../is/';


function parents(ele, selector) {
    if (!M.isElement(ele)) {
        throw new Error('The first argument for the is function must be a HTML element');
    }


    if (selector && !M.isString(selector)) {
        throw new Error('The second argument for the parents function must be a string.');
    }

    let m = M();
    while (ele.parentNode) {
        if (ele.parentNode.nodeType !== 9) {
            m.push(ele.parentNode);
        }
        ele = ele.parentNode;
    }

    if (selector) {
        m = m.filter(function (ele) {
            return is(ele, selector);
        })
    }

    return m;


};

export default parents;