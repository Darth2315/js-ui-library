import $ from '../core';

$.prototype.setAttribute = function(name, value) {
    if (!name || !value) {
        return this;
    }

    for (let i = 0; i < this.length; i++) {
        this[i].setAttribute(name, value);
    }
    return this;
};

$.prototype.getAttribute = function(name) {
    if (!name) {
        return this;
    }
    
    for (let i = 0; i < this.length; i++) {
        console.log(this[i].getAttribute(name));
    }
    return this;
};

$.prototype.removeAttribute = function(name) {
    if (!name) {
        return this;
    }
    
    for (let i = 0; i < this.length; i++) {
        this[i].removeAttribute(name);
    }
    return this;
};