import Handlebars from 'handlebars';

const markup = `
  <div class='chats-container'>
    <div class='chats-list-container'>
      <div class='chats-profile-link-container'>
        <a href='/profile' class='chats-profile-link'>
          Profile >
        </a>
      </div>
      <div class='chats-input-container'>
        <input type='text' class='chats-input' placeholder='Search' />
      </div>
      <ul class='chats-list'>
        {{#each chats}}
          <li {{#if active}}class='chat-active'{{/if}}>
            <div class='chat-list-item'>
              <div class='chat-avatar-container'>
                <div class='chat-avatar'></div>
              </div>
              <div class='chat-list-item-1'>
                <div class='chat-list-item-title'>{{ title }}</div>
                <div class='chat-list-item-last'>{{ last }}</div>
              </div>
              <div class='chat-list-item-2'>
                <div class='chat-list-item-time'>{{ time }}</div>
                {{#if unread}}
                  <div class='chat-list-item-unread'>{{ unread }}</div>
                {{/if}}
              </div>
            </div>
          </li>
        {{/each}}
      </ul>
    </div>
    <div class='conversation-container'>
      <div>
        <div class='chat-list-item-head'>
          <div class='chat-avatar-container'>
            <div class='chat-avatar'></div>
          </div>
          <div class='chat-list-item-1-head'>
            <div class='chat-list-item-title'>{{ chatTitle }}</div>
          </div>
          <div class='chat-menu'>
            <div class='menu-dot'></div>
            <div class='menu-dot'></div>
            <div class='menu-dot'></div>
          </div>  
        </div>
        <div class='msg-list'>
          {{#each msg}}
            <div class='msg {{ flow }}'>
              <div>
                {{ text }}
              </div>
              <div class='msg-time'>
                {{ time }} {{#if read}}<span>v<span><span class='msg-read'>V</span>{{/if}}
              </div>
            </div>
          {{/each}}
        </div>
      </div>
      <div class='chats-input-container'>
        <input type='text' class='chats-input' placeholder='Message' />
      </div>
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
