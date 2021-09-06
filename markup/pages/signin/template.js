import Handlebars from 'handlebars';

const markup = `
  <div class='form-container'>
    <div class='row center'>
      <h3>Sign in</h3>
    </div>
    <div class='row'>
      <div>Login</div>
      <div>
        <input type='text' class='full-width' name='login' id='login' validation-required validation-type='login' validation-label='loginError' value='123' />
        <label class='validation-error' id='loginError'>Validation error (restrictions: 3-20 symbols, latin, may contain digits, should have letters, no spaces, no spec symbols)</label >
      </div>
    </div>
    <div class='row'>
      <div>Password</div>
      <div>
        <input type='text' class='full-width' name='password' />
      </div>
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
  </div>
`;

export const template = Handlebars.compile(markup);
