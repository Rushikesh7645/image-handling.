$(document).ready(function () {
    $('#Allcricketers').click(function () {
        $('.gallery div').show(1000);
    });

    $('#batsman').click(function () {
        $('.gallery div').hide();
        $('.batsman1, .batsman2, .batsman3').show(1000);
    });

    $('#bowler').click(function () {
        $('.gallery div').hide();
        $('.bowler1').show(1000);
    });

    $('#allRounder').click(function () {
        $('.gallery div').hide();
        $('.allrounder1, .allrounder2').show(1000);
    });
});