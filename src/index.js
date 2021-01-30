exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let minOfArray = array.reduce(
        (min, item) => (item < min ? item : min),
        array[0]
    );

    return minOfArray;
};

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let maxOfArray = array.reduce(
        (max, item) => (item > max ? item : max),
        array[0]
    );

    return maxOfArray;
};

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    }

    let sum = array.reduce((sum, item) => sum + item, 0);
    return sum / array.length;
};
