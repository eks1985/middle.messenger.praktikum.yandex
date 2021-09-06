import Handlebars from 'handlebars';

const markup = `
  <form class='form-container'>
    <div class='row center'>
      <h3>Sign in</h3>
    </div>
    <div class='row'>
      <div>Login</div>
      <div>
        {{{ login }}}
      </div>
      <label class='validation-error' id='login-error'></login>
    </div>
    <div class='row'>
      <div>Password</div>
      <div>
        {{{ password }}}
      </div>
      <label class='validation-error' id='password-error'></login>
    </div>
    <div class='row center'>
      {{{ signinButton }}}
    </div>
    <div class='row center'>
      <span>
        Don't have an account yet?
      </span>
      <a href='./signup'>Sign up</a>
    </div>
  </form>
`;

export const template = Handlebars.compile(markup);
