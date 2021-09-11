import Handlebars from 'handlebars';

const markup = `
  <form class='form-container'>
    <div class='row center'>
      <h3>Sign up</h3>
    </div>
    <div class='row full-width flex justify-between'>
      <div>
        <div class='label'>First name</div>
        <div>
          {{{ firstName }}}
        </div>
        <label class='validation-error' id='first-name-error'></label>
      </div>    
      <div>
        <div class='label'>Second name</div>
        <div>
          {{{ secondName }}}
        </div>
        <label class='validation-error' id='second-name-error'></label>
      </div>    
    </div>
    <div class='row'>
      <div class='label'>Email</div>
      <div class='flex'>
        {{{ email }}}
      </div>
      <label class='validation-error' id='email-error'></label>
    </div>
    <div class='row'>
      <div class='label'>Login</div>
      <div class='flex'>
        {{{ login }}}
      </div>
      <label class='validation-error' id='login-error'></label>
    </div>
    <div class='row'>
      <div class='label'>Phone</div>
      <div class='flex'>
        {{{ phone }}}
      </div>
      <label class='validation-error' id='phone-error'></label>
    </div>
    <div class='row'>
      <div class='label'>Password</div>
      <div class='flex'>
        {{{ password }}}
      </div>
      <label class='validation-error' id='password-error'></label>
    </div>
    <div class='row'>
      <div class='label'>Repeat password</div>
      <div class='flex'>
        {{{ repeatPassword }}}
      </div>
      <label class='validation-error' id='repeat-password-error'></label>
    </div>
    <div class='row center'>
      {{{ saveButton }}}
    </div>
    <div class='row center'>
      <a class='link' href='/'>Sign In</a>
    </div>
  </form>
`;

export const template = Handlebars.compile(markup);
