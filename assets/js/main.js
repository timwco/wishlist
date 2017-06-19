;(function () {

  'use strict';

  const wishlist = [
    { title: 'Books', items: 
      [
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
      ]
    },
    { title: 'Tech', items: 
      [
        { link: 'http://l.timw.co/2stTPZ3', title: 'Xbox One Games & Stuff'}
      ]
    },
    { title: 'Misc', items: 
      [
        { link: 'http://l.timw.co/2fwlFNO', title: 'Amelie Poster'},
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
