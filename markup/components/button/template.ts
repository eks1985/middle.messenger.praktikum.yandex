import Handlebars from 'handlebars';

const markup = `
  <button id={{ id }} class="{{ className }}">
    {{ child }}
  </button>
`;

export const template = Handlebars.compile(markup);
