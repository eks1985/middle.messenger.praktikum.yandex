import Handlebars from 'handlebars';

const markup = `
  <div class='form-container'>
    <div class='row center'>
      <h3>Change password</h3>
    </div>
    <div class='row flex'>
      <div class='row'>
        <div>Old password</div>
        <div>
          <input type='text' class='req-prop' name='oldPassword' />
        </div>
      </div>    
      <div class='row ml-2'>
        <div>New password</div>
        <div>
          <input type='text' class='req-prop' name='newPassword' />
        </div>
      </div>    
    </div>
    <div class='row flex justify-center'>
      <button>
        Update profile settings
      </button>
      <button class='ml-2'>
        <a href='./profile'>Back to Profile</a>
      </button>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
