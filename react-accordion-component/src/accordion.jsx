import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { view: null };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (event.target.matches('.tab')) {
      const targetDataView = event.target.getAttribute('data-view');
      if (this.state.view !== targetDataView) {
        this.setState({ view: targetDataView });
      } else {
        this.setState({ view: null });
      }
    }
  }

  render() {
    const languages = this.props.languages;
    let divItems = null;
    if (this.state.view === null) {
      divItems = languages.map((language) => {
        return (
          <div onClick={this.handleClick} className='language' key={language.id}>
            <div className='tab' data-view={language.id} onClick={language.handleClick}>{language.name}</div>
            <div className='hidden tab-text' data-view={language.id}>{language.text}</div>
          </div>
        );
      });
    } else {
      divItems = languages.map((language) => {
        if (language.id === this.state.view) {
          return (
            <div onClick={this.handleClick} className='language' key={language.id}>
              <div className='tab' data-view={language.id} onClick={language.handleClick}>{language.name}</div>
              <div className='tab-text' data-view={language.id}>{language.text}</div>
            </div>
          );
        } else {
          return (
            <div onClick={this.handleClick} className='language' key={language.id}>
              <div className='tab' data-view={language.id} onClick={language.handleClick}>{language.name}</div>
              <div className='hidden tab-text' data-view={language.id}>{language.text}</div>
            </div>
          );
        }
      });
    }
    return <div className="tab-container">{divItems}</div>
  }
}

{/* <div className='tab' data-view='html'>{languages[0].name}</div>
          <div className='tab-text' data-view='html'>{languages[0].text}</div>
          <div className='tab' data-view='css'>{languages[1].name}</div>
          <div className='tab-text hidden' data-view='css'>{languages[1].text}</div>
          <div className='tab' data-view='javascript'>{languages[2].name}</div>
          <div className='tab-text hidden' data-view='javascript'>{languages[2].text}</div> */}
