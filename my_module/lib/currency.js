var canadianDollar = 0.91;

function roundTwoDecimmals(amount) {
    return Math.round(amount * 100) / 100;
}

exports.canadianToUs = function(canadian) {
    return roundTwoDecimmals(canadian * canadianDollar);
}

exports.USToCanadian = function(us) {
    return roundTwoDecimmals(us / canadianDollar);
}
