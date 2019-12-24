import React, { Component } from 'react';
import T from 'prop-types';
import Controls from './Controls/Controls';
import Progress from './Progress/Progress';
import Publication from './Publication/Publication';

export default class Reader extends Component {
  static propTypes = {
    items: T.arrayOf(
      T.shape({
        title: T.string.isRequired,
        text: T.string.isRequired,
      }),
    ).isRequired,
  };

  state = {
    publicationIndex: 0,
  };

  handlePrevClick = () => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex - 1,
    }));
  };

  handleNextClick = () => {
    this.setState(state => ({
      publicationIndex: state.publicationIndex + 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];

    return (
      <>
        <Controls
          onPrevClick={this.handlePrevClick}
          onNextClick={this.handleNextClick}
          prevBtnDisabled={publicationIndex === 0}
          nextBtnDisabled={publicationIndex === items.length - 1}
        />
        <Progress currentPage={publicationIndex + 1} totalPages={items.length} />
        <Publication title={publication.title} text={publication.text} />
      </>
    );
  }
}
