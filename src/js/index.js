import moment from 'moment';
import momentDurationFormatSetup from 'moment-duration-format';

momentDurationFormatSetup(moment);

var ageNode = document.getElementById('age');
var birthDateTime = moment('2018-05-16:17:45');

window.setInterval(function () {
    var now = moment();

    var age = moment.duration(now.diff(birthDateTime));

    ageNode.innerText = age.format('y [years], M [months], w [weeks], d [days], h [hours], m [minutes], s [seconds]');
}, 1000);