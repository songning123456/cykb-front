let common = {};
common.getGender = function (type) {
    let result = '';
    switch (type) {
        case 0:
            result = '未知';
            break;
        case 1:
            result = '男';
            break;
        case 2:
            result = '女';
            break;
        default:
            result = '未知'
    }
    return result;
};
common.getSex = function (sex) {
    let result = '';
    switch (sex) {
        case 'male':
            result = '男频';
            break;
        case 'female':
            result = '女频';
            break;
        default:
            result = '未知';
            break;
    }
    return result;
};
common.getCover = function (url) {
    let result = '';
    if (url) {
        result = url;
    } else {
        let param = (Math.random() + '').slice(2, 3);
        result = 'https://ossweb-img.qq.com/images/lol/web201310/skin/big1000' + param + '.jpg';
    }
    return result;
};
export default common;
