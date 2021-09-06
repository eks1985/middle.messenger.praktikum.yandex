import Handlebars from 'handlebars';

const markup = `
  <div class='chats-container'>
    <div class='chats-list-container'>
      <div class='chats-profile-link-container'>
        <a href='/profile' class='chats-profile-link'>
          Profile >
        </a>
      </div>
      <div class='chats-search-container'>
        <input type='text' class='chats-search-input' placeholder='Search' />
      </div>
      <ul class='chats-list'>
        {{#each chats}}
          <li>
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
      {{#each msg}}
      {{/each}}
    </div>
  </div>
`;

export const template = Handlebars.compile(markup);
