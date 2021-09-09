import Handlebars from 'handlebars';

const markup = `
  <form class='form-container'>
    <div class='row center'>
      <h3>Change password</h3>
    </div>
    <div class='row flex'>
      <div class='row'>
        <div class='label'>Old password</div>
        <div class='flex'>
          {{{ oldPassword }}}
        </div>
        <label class='validation-error' id='old-password-error'></label>
      </div>
      <div class='row ml-2'>
        <div class='label'>New password</div>
        <div class='flex'>
          {{{ newPassword }}}
        </div>
        <label class='validation-error' id='new-password-error'></label>
      </div>
    </div>
    <div class='row'>
      <div class='row center'>
       {{{ saveButton }}}
      </div>
      <div class='row center'>
        <a class='link' href='/profile'>Back to Profile</a>
      </div>
    </div>
  </form>
`;

export const template = Handlebars.compile(markup);
