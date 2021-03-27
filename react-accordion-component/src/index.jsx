import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from './accordion';

const languages = [
  {
    id: 'html',
    name: 'Hypertext Markup Language',
    text: 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'
  },
  {
    id: 'css',
    name: 'Cascading Style Sheets',
    text: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    text: 'JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

class CustomAccordion extends React.Component {
  render() {
    return <Accordion languages={languages}/>
  }
}

ReactDOM.render(<CustomAccordion />, document.querySelector('#root'));
