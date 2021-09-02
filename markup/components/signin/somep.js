import Handlebars from 'handlebars';

const markup = `
  <div class='green'>
    somep
    <div>
      {{bar}}
    </div>
    <div id={{title.id}} class='btn'>
      {{title.descr}}
    </div>
  </div>
`;

const template = Handlebars.compile(markup);

export default template;