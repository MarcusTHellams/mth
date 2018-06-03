import M from './mquery';
import css from './css/';
import addClass from './addClass/';
import removeClass from './removeClass/';
import hasClass from './hasClass/';
import toggleClass from './toggleClass/';
import is from './is/';
import parents from './parents/';

M.fn.css = function (prop, value) {
    if ((M.isString(prop) && value) || M.isPlainObject(prop)) {
        this.each(function (i, ele) {
            css(ele, prop, value);
        });
        return this;
    } else if(!value) {
        return css(this[0], prop);
    }

}

M.fn.addClass = function (className) {
    this.each(function (i, ele) {
        addClass(ele, className);
    });

    return this;
}

M.fn.removeClass = function (className) {
    this.each(function (i, ele) {
        removeClass(ele, className);
    });

    return this;
}

M.fn.hasClass = function (className) {
       return hasClass(this[0], className);
}

M.fn.toggleClass = function (className, force) {
    this.each(function (i, ele) {
        toggleClass(ele, className, force);
    });

    return this;
}


M.fn.is = function (selector) {
    return is(this[0],  selector);
}

M.fn.parents = function (selector) {
    return parents(this[0],  selector);
}


export default M;
