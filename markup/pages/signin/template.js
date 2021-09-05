import Handlebars from 'handlebars';

const markup = `
  <div class='form-container'>
    <div class='row center'>
      <h3>Sign in</h3>
    </div>
    <div class='row'>
      <div>Login</div>
      <div>
        <input type='text' class='req-prop' name='login' />
      </div>
    </div>
    <div class='row'>
      <div>Password</div>
      <div>
        <input type='text' class='req-prop' name='password' />
      </div>
    </div>
    <div class='row center'>
      <button id='signin-btn'>
        <a href='./chats'>Sign in</a>
      </button>
    </div>
    <div class='row center'>
      <span>
        Don't have an account yet?
      </span>
      <a href='./signup'>Sign up</a>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
