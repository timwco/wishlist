;(function () {

  'use strict';

  const wishlist = [
    { title: 'Books', items: 
      [
        { link: 'http://l.timw.co/2g0yz94', title: 'Code & Quill Origin (Black)'},
        { link: 'http://l.timw.co/2glqKb2', title: 'Shake: A New Perspective on Cocktails'},
        { link: 'http://l.timw.co/2gloMYB', title: 'The 12 Bottle Bar'}
      ]
    },
    { title: 'Bar', items: 
      [
        { link: 'http://l.timw.co/2eHocpz', title: 'Glencairn Crystal'},
        { link: 'http://l.timw.co/2eHfXda', title: 'India Pale Ale Experiment'},
      ]
    },
    { title: 'Kitchen', items: 
      [
        { link: 'http://l.timw.co/2fBlWOm', title: 'Lodge Cast Iron Dutch Oven (6 Quart)'},
        { link: 'http://l.timw.co/2fBlmjl', title: 'Tramontina Non-Stick Pan (14")'},
        { link: 'http://l.timw.co/2fBjdnM', title: '3-Blade Spiralizer'}
      ]
    },
    { title: 'Tech', items: 
      [
        { link: 'http://l.timw.co/2eHjAQ1', title: 'Rosewill Mechanical Keyboard (Cherry MX Brown)'},
        { link: 'http://l.timw.co/2fBlGP1', title: 'Nintendo NES Classic'},
        { link: 'http://l.timw.co/2eB1CLT', title: 'Wireles NES Controller'}
      ]
    },
    { title: 'Misc', items: 
      [
        { link: 'http://l.timw.co/2fwlFNO', title: 'Amelie Poster'},
        { link: 'http://l.timw.co/2i8dxa6', title: 'Cotopaxi Trucker Hat'}
      ]
    }
  ];

  const wlCont = document.getElementById('wishlist');
  const headingTemplate = data => {
    return `<h4>${data}</h4>`;
  }
  const itemTemplate = data => {
    return `
      <li class="post">
        <h2><a target="_blank" href="${data.link}">${data.title}</a></h2>
      </li>
    `;
  };

  function init () {
    let html = '';
    wishlist.forEach( section => {
      html += headingTemplate(section.title);
      html += '<ul class="posts-list">';
      section.items.forEach( item => {
        html += itemTemplate(item);
      });
      html += '</ul>';
    });
    wlCont.innerHTML = html;
  }

  init();

}());
