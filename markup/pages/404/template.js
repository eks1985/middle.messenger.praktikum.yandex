import Handlebars from 'handlebars';

const markup = `
  <div>
    Page 404
  </div>
`;

export const template = Handlebars.compile(markup);
