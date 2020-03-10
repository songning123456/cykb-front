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
export default common;
