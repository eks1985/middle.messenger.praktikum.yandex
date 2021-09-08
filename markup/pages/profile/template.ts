import Handlebars from 'handlebars';

const markup = `
  <form class='form-container'>
    <div class='row center'>
      <h3>Profile</h3>
    </div>
    <div class='row center justify-center'>
      <img src='/avatar.png' width='100' height='100' alt='avatar' />
    </div>
    <div class='row center justify-center'>
      <input name='avatar' type='file'>
    </div>
    <div class='row flex justify-between'>
      <div>
        <div>First name</div>
        <div>
          {{{ firstName }}}
        </div>
        <label class='validation-error' id='first-name-error'></label>
      </div>    
      <div class='ml-2'>
        <div>Second name</div>
        <div>
          {{{ secondName }}}
        </div>
        <label class='validation-error' id='second-name-error'></label>
      </div>    
    </div>
    <div class='row'>
      <div>Display name</div>
      <div class='flex'>
        {{{ displayName }}}
      </div>
      <label class='validation-error' id='display-name-error'></label>
    </div>
    <div class='row'>
      <div>Email</div>
      <div class='flex'>
        {{{ email }}}
      </div>
      <label class='validation-error' id='email-error'></label>
    </div>
    <div class='row'>
      <div>Login</div>
      <div class='flex'>
        {{{ login }}}
      </div>
      <label class='validation-error' id='login-error'></label>
    </div>
    <div class='row'>
      <div>Phone</div>
      <div class='flex'>
        {{{ phone }}}
      </div>
      <label class='validation-error' id='phone-error'></label>
    </div>
    <div class='row center'>
      <a href='./change-pwd'>Change password</a>
    </div>
    <div class='row center'>
      {{{ saveButton }}}
    </div>
    <div class='row center'>
      <a href='#'>Logout</a>
    </div>
  </form>
`;

export const template = Handlebars.compile(markup);