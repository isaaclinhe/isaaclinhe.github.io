import './modal';

var imageNodes = document.querySelectorAll('.image-link');
var modalContentNode = document.getElementById('modal-content');
var modalNode = document.getElementById('modal');

for (let node of imageNodes) {
    node.addEventListener('click', function (e) {
        e.preventDefault();

        modalNode.style.display = 'block';
        var src = node.getAttribute('href');
        modalContentNode.innerHTML = '<img src="' + src + '"></img>';
    });
}