import Handlebars from 'handlebars';

const markup = `
  <form class='form-container'>
    <div class='row center'>
      <h3>Sign in</h3>
    </div>
    <div class='row'>
      <div class='label'>Login</div>
      <div>
        {{{ login }}}
      </div>
      <label class='validation-error' id='login-error'></login>
    </div>
    <div class='row'>
      <div class='label'>Password</div>
      <div>
        {{{ password }}}
      </div>
      <label class='validation-error' id='password-error'></label>
    </div>
    <div class='row center'>
      {{{ signinButton }}}
    </div>
    <div class='row center'>
      <span>
        Don't have an account yet?
      </span>
      <a class='link' href='/sign-up'>Sign up</a>
    </div>
  </form>
`;

export const template = Handlebars.compile(markup);
