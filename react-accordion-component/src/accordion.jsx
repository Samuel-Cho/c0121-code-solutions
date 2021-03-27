import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: null };
    this.handleClick = this.handleClick.bind(this);
  }

  TabItems(props) {
    return (
      <>
        <div className='tab' data-view={props.key} onClick={this.handleClick}>{props.name}</div>
        <div className='tab-text' data-view={props.key}>{props.text}</div>
      </>
    );
  }

  handleClick() {

  }

  render(props) {
    const languages = props.languages;
    const divItems = languages.map((language) => {
      return <TabItems key={language.id} name={language.name} text={language.text} />
    });
    return <div className="tab-container">{divItems}</div>
  }
}

{/* <div className='tab' data-view='html'>{languages[0].name}</div>
          <div className='tab-text' data-view='html'>{languages[0].text}</div>
          <div className='tab' data-view='css'>{languages[1].name}</div>
          <div className='tab-text hidden' data-view='css'>{languages[1].text}</div>
          <div className='tab' data-view='javascript'>{languages[2].name}</div>
          <div className='tab-text hidden' data-view='javascript'>{languages[2].text}</div> */}
