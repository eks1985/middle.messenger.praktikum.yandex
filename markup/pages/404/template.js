import Handlebars from 'handlebars';

const markup = `
  <div class='form-container'>
    <h1>404 Page not found</h1>
    <div>
      <a href='./chats'>Back to chats</a>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
