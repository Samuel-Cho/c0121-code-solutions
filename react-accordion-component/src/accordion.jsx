import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (event.target.matches('.tab')) {
      if (this.state.view !== event.target['data-view']) {
        this.setState({ view: event.target['data-view'] });
        const textBox = event.target.closest('.tab-text');

      }

    }
  }

  render() {
    const languages = this.props.languages;
    const divItems = languages.map((language) => {
      return (
        <div onClick={this.handleClick} className='language' key={language.id}>
          <div className='tab' data-view={language.id} onClick={language.handleClick}>{language.name}</div>
          <div className='hidden tab-text' data-view={language.id}>{language.text}</div>
        </div>
      );
    });
    // add divItems to state??
    return <div className="tab-container">{divItems}</div>
  }
}

{/* <div className='tab' data-view='html'>{languages[0].name}</div>
          <div className='tab-text' data-view='html'>{languages[0].text}</div>
          <div className='tab' data-view='css'>{languages[1].name}</div>
          <div className='tab-text hidden' data-view='css'>{languages[1].text}</div>
          <div className='tab' data-view='javascript'>{languages[2].name}</div>
          <div className='tab-text hidden' data-view='javascript'>{languages[2].text}</div> */}
