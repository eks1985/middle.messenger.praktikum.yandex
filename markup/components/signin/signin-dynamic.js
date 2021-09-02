import Handlebars from 'handlebars';
import somept from './somep';

Handlebars.registerPartial('somep', somept);

const markup = `
  <div class='red'>
    {{bar}}
    <div>
      Some title
    </div>
    <div>
      {{>somep this}}
    </div>
  </div>
`;

const template = Handlebars.compile(markup);

export default template;


