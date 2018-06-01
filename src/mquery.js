import forEach from 'lodash.foreach';
import isElement from 'lodash.iselement';
import isString from 'lodash.isstring';
import isBoolean from 'lodash.isboolean';
import assign from 'lodash.assign';
import merge from 'lodash.merge';
import isPlainObject from 'lodash.isplainobject';
import camelCase from 'lodash.camelcase';
import isArrayLike from 'lodash.isarraylike';
import isFunction from 'lodash.isfunction';

const tagRegex = /<(\w+)\s*\/?>/i;
const $ = document.querySelectorAll;
const doc = document;
const $$ = 'querySelectorAll';
const slice = Array.prototype.slice;
const filter = Array.prototype.filter;

const M = function (selector, context) {
    return new M.fn.init(selector, context);
};

M.fn = M.prototype;


M.fn.init = function (selector, context) {
    if (M.isString(selector)) {

        if (tagRegex.test(selector)) {
            const ele = doc.createElement(tagRegex.exec(selector)[1]);
            this.length = 1;
            this[0] = ele;
            return this;
            //end of tag checking
        }

        if (context) {
            if (!M.isElement(context) && !(context instanceof M.fn.init)) {
                throw new Error('Context must be an element or instance of M');
            }

            if (context instanceof M.fn.init) {
                const results = context[0][$$](selector);
                M.merge(this, slice.call(results, 0));
                return this;
            }
            const results = context[$$](selector);
            M.merge(this, slice.call(results, 0));
            return this;
            //end of if context
        }

        const results = $.call(doc, selector);
        M.merge(this, slice.call(results, 0));
        return this;

        //end of is string;
    }

    if (M.isElement(selector)) {
        this.length = 1;
        this[0] = selector;
        return this;
    }

    return this;
};

M.fn.init.prototype = M.prototype;


M.each = forEach;
M.isElement = isElement;
M.isString = isString;
M.isBoolean = isBoolean;
M.isPlainObject = isPlainObject;
M.camelCase = camelCase;
M.isArrayLike = isArrayLike;
M.isFunction = isFunction;
M.extend = function () {
    let output = arguments[0];
    let deep = false;

    if (M.isBoolean(output)) {
        deep = output;
        output = arguments[1];
    }

    const rest = slice.call(arguments, deep ? 2 : 1);
    return deep ? merge(output, ...rest) : assign(output, ...rest);
};

M.extend(M.fn, {
    length: 0,
    each: function (fn) {
        M.each(this, fn);
        return this;
    },
    get: function (index) {
        return M(this[index]);
    },
    add: function (arr) {
        if (!M.isArrayLike(arr)) {
            throw new Error('The add function requires an array like object');
        }
        M.merge(this, arr, this.length ? this.length : 0);
        return this;
    },
    filter: function (fn) {
        let results;
        if (M.isString(fn)) {
            results = this.filter(function (ele) {
                return M(ele).is(fn);
            })
            return results;
        }

        if(M.isFunction(fn)){
            results = filter.call(this, fn);
        }

        if(M.isElement(fn)){
            results = this.filter(function (ele) {
                return M(ele).is(M(fn));
            })

            return results;
        }

        return M().add(results);
    },
    push: function (item) {
        Array.prototype.push.call(this, item);
        return this;
    },
    reduce: function (fn, initialvalue) {
        return Array.prototype.reduce.call(this, fn, initialvalue);
    }
});

M.extend(M, {
    merge: function (merger, mergee, startIndex) {
        M.each(mergee, (m, i) => {
            merger[startIndex ? startIndex + i : i] = m;
            merger.length++;
        })
    }
});


export default M;