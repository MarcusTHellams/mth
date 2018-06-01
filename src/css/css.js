import M from '../mquery';


function css(ele, property, value) {
    if (!M.isElement(ele)) {
        throw new Error('The first argument for the css function must be a HTML element');
    }


    if (!M.isString(property) && !M.isPlainObject(property)) {
        throw new Error('The second argument for the css function must be a string or plain object');
    }


    if (value && !M.isString(value)) {
        throw new Error('The value argument for the css function must be a string');
    }

    if(M.isString(property) && value){
        ele.style[M.camelCase(property)] = value;
    } else if(M.isString(property) && !value) {
        return ele.style[M.camelCase(property)];
    }

    if(M.isPlainObject(property)){
        M.each(property, (value, key)=>{
            ele.style[M.camelCase(key)] = value;

        });
    }

};

export default css;