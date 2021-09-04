import Handlebars from 'handlebars';

const markup = `
  <div>
    <button id={{ id }} class="{{ className }}">
      sing in
    </button>
    <div>
      <a href="./foo">Profile</a>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
