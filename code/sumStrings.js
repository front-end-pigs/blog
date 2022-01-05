// 两大数相加
function sumStrings (a, b) {
    var res = '',
        c = 0;
    a = a.split('');
    b = b.split('');
    while (a.length || b.length || c) {
        c += ~~a.pop() + ~~b.pop(); // ~~a字符串转数字 
        res = c % 10 + res;
        c = c > 9; // 进1
    }
    return res.replace(/^0+/,'');
}
