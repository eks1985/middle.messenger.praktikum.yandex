import Handlebars from 'handlebars';

const markup = `
  <input
    type='text'
    {{#if id}}id='{{ id }}'{{/if}}
    {{#if class}}class='{{ class }}'{{/if}}
    {{#if name}}name='{{ class }}'{{/if}}
    {{#if validation}}validation-required validation-type='{{ vtype }}' validation-label='{{ vlabel }}'{{/if}}
  />
`;

export const template = Handlebars.compile(markup);
