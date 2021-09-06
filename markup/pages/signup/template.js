import Handlebars from 'handlebars';

const markup = `
  <div class='form-container'>
    <div class='row center'>
      <h3>Sign up</h3>
    </div>
    <div class='row flex'>
      <div class='row'>
        <div>First name</div>
        <div>
          <input type='text' class='full-width'/>
        </div>
      </div>    
      <div class='row ml-2'>
        <div>Second name</div>
        <div>
          <input type='text' class='full-width'/>
        </div>
      </div>    
    </div>
    <div class='row'>
      <div>Email</div>
      <div>
        <input type='text' class='full-width'/>
      </div>
    </div>
    <div class='row'>
      <div>Login</div>
      <div>
        <input type='text' class='full-width'/>
      </div>
    </div>
    <div class='row'>
      <div>Phone</div>
      <div>
        <input type='text' class='full-width'/>
      </div>
    </div>
    <div class='row'>
      <div>Password</div>
      <div>
        <input type='text' class='full-width'/>
      </div>
    </div>
    <div class='row'>
      <div>Repeat password</div>
      <div>
        <input type='text' class='full-width'/>
      </div>
    </div>
    <div class='row center'>
      <button id='signin-btn'>
        <a href='./profile/>Sign up</a>
      </button>
    </div>
    <div class='row center'>
      <a href='/'>Sign in</a>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
