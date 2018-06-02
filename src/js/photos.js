import 'intersection-observer';
import './modal';

var imageNodes = document.querySelectorAll('.image-img');
var modalContentNode = document.getElementById('modal-content');
var modalNode = document.getElementById('modal');
var imageLink = document.querySelectorAll('.image-link');

imageLink.forEach((node) => {
    node.addEventListener('click', function (e) {
        e.preventDefault();

        modalNode.style.display = 'block';
        var src = node.getAttribute('href');
        modalContentNode.innerHTML = '<img src="' + src + '"></img>';
    });
});

var observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            observer.unobserve(entry.target);
            
            var target = entry.target;
            target.src = target.getAttribute('data-src');
        }
      });
}, {
    rootMargin: '0px 0px',
});

imageNodes.forEach((node) => {
    observer.observe(node);
});