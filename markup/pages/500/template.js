import Handlebars from 'handlebars';

const markup = `
  <div class='form-container'>
    <h1>500 Internal Server Error</h1>
    <div>
      We are already working to fix it
    </div>
    <div class='row'>
      <a href='./chats'>Back to chats</a>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
