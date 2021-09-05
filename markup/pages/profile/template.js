import Handlebars from 'handlebars';

const markup = `
  <div class='form-container'>
    <div class='row center'>
      <h3>Profile</h3>
    </div>
    <div class='row center justify-center'>
      <img src='/avatar.png' width='100' height='100' alt='avatar' />
    </div>
    <div class='row center justify-center'>
      <input name='avatar' type='file'>
    </div>
    <div class='row flex'>
      <div class='row'>
        <div>First name</div>
        <div>
          <input type='text' class='req-prop' name='first_name' />
        </div>
      </div>    
      <div class='row ml-2'>
        <div>Second name</div>
        <div>
          <input type='text' class='req-prop' name='second_name' />
        </div>
      </div>    
    </div>
    <div class='row'>
      <div>Display name</div>
      <div>
        <input type='text' class='req-prop' name='display_name' />
      </div>
    </div>
    <div class='row'>
      <div>Email</div>
      <div>
        <input type='text' class='req-prop' name='email' />
      </div>
    </div>
    <div class='row'>
      <div>Login</div>
      <div>
        <input type='text' class='req-prop' name='login' />
      </div>
    </div>
    <div class='row'>
      <div>Phone</div>
      <div>
        <input type='text' class='req-prop' name='phone' />
      </div>
    </div>
    <div class='row center'>
      <a href='./change-pwd'>Change password</a>
    </div>
    <div class='row center'>
      <button>
        Update profile settings
      </button>
    </div>
    <div class='row center'>
      <a href='#'>Logout</a>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);