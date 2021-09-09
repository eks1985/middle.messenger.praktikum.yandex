import Handlebars from 'handlebars';

const markup = `
  <form class='form-container'>
    <div class='row center'>
      <h3>Profile</h3>
    </div>
    <div class='row center justify-center'>
      <img src='/avatar.png' width='100' height='100' alt='avatar' />
    </div>
    <div class='row flex choice-file'>
      <label for='select-avatar' class='select-avatar-label'>Select avatar</label>
      <input id='select-avatar' name='avatar' type='file' class='hide-file'>
    </div>
    <div class='row flex justify-between mt-2'>
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
      <div class='label'>Display name</div>
      <div class='flex'>
        {{{ displayName }}}
      </div>
      <label class='validation-error' id='display-name-error'></label>
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
    <div class='row center'>
      <a class='link' href='/change-pwd'>Change password</a>
    </div>
    <div class='row center'>
      {{{ saveButton }}}
    </div>
    <div class='row center'>
      <a class='link' href='#'>Logout</a>
    </div>
  </form>
`;

export const template = Handlebars.compile(markup);