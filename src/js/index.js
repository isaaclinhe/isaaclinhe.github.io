import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

var ageNode = document.getElementById('age');
var introNode = document.getElementById('age-intro');
var birthDateTime = moment('2018-05-16T17:45', 'YYYY-MM-DDThh:mm');

window.setInterval(function () {
    var now = moment();

    var age = moment.duration(now.diff(birthDateTime));

    ageNode.innerText = age.format('y [years], M [months], w [weeks], d [days], h [hours], m [minutes], s [seconds]');
    if (introNode.style.display === 'none') {
        introNode.style.display = 'block';
    }
}, 1000);
