var chartLink = document.getElementById('modal-link');
var modalWindow = document.getElementById('modal-window');
var closable;

$(function () {
    $('.close').css({ 'color': '#FFCB39' });
});
// mithril component
var modal = {
    show: function () {
        modalWindow.classList.add('is-visible');
    },
    close: function (e) {
        var elem = e.target;
        var tag = elem.tagName.toLowerCase();
        if (tag == 'img' || tag == 'button') {
            return false;
        }
        else {
            modalWindow.classList.remove('is-visible');
        }
    },
    next: function () {
        var images = document.querySelectorAll('.compare-item');
        var last = images[images.length - 1];
        var next;
        for (var i = 0; i < images.length; i++) {
            // only move on to the next item if it's not the last item in the array
            if (images[i].classList.contains('is-visible') && images[i] !== images[images.length - 1]) {
                var current = images[i];
                next = images[i + 1];
                current.classList.remove('is-visible');
            }
        }
        next.classList.add('is-visible');
    },
    prev: function () {
        var images = document.querySelectorAll('.compare-item');
        var prev;
        // only go to previous is it is not the first item in the array
        for (var i = images.length; i--;) {
            if (images[i].classList.contains('is-visible') && images[i] !== images[0]) {
                var current = images[i];
                prev = images[i - 1];
                current.classList.remove('is-visible');
            }
        }
        prev.classList.add('is-visible');
    },
    controller: function () {
        chartLink.addEventListener('click', modal.show);
        return [
            {
                img: 'Artbook-images/Digital-draw-1.png',
                classes: ['mars is-visible compare-item']
            },
            {
                img: 'Artbook-images/Digital-draw-1.png',
                classes: ['middle compare-item']
            },
            {
                img: 'Artbook-images/Digital-draw-1.png',
                classes: ['yosemite compare-item']
            },
            {
                img: 'Artbook-images/Digital-draw-1.png',
                classes: ['stars compare-item']
            },
            {
                img: 'Artbook-images/Digital-draw-1.png',
                classes: ['yosemite compare-item']
            },
            {
                img: 'Artbook-images/Digital-draw-1.png',
                classes: ['yosemite compare-item']
            },




        ];
    },

    view: function (ctrl) {
        return m('.container', [
            m('.next', { onclick: modal.next }, 'NEXT'),
            m('.prev', { onclick: modal.prev }, 'PREV'),
            m('.close', { onclick: modal.close }, 'X'),
            ctrl.map(function (image) {
                var classes = image.classes;
                return m('img', { src: image.img, class: classes })
            })
        ])
    }
};

m.mount(modalWindow, modal);

