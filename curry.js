// curry化参数
let catCurry = (fn) => {
    let _len = fn.length;
    let surplus = _len + 0;
    let allParam = [];

    let wrap = (...param) => {
        //如果一次传入3个函数
        if (param.length === _len) {
            return fn.apply(null, param);
        }
        //如果分开传
        let pArr = [...param];
        if (pArr.length < _len) {
            surplus = surplus - pArr.length;
            allParam = allParam.concat(pArr);
            if (surplus === 0) {
                return fn.apply(null, allParam);
            } else {
                return wrap;
            }
        }
    }
    return wrap;

}

let cat = catCurry((a, b, c) => {
    return a + b + c;
})

let dog = cat(1)(6)(3);

console.log(dog);
