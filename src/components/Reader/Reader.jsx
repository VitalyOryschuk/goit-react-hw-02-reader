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

  handleNextPrevClick = e => {
    const targetName = e.target.name;
    this.setState(({ publicationIndex }) => ({
      publicationIndex:
        targetName === 'next' ? publicationIndex + 1 : publicationIndex - 1,
    }));
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    const publication = items[publicationIndex];
    const btnNextDisable = publicationIndex === items.length - 1;

    return (
      <>
        <Controls
          onNextPrevClick={this.handleNextPrevClick}
          prevBtnDisabled={!publicationIndex}
          nextBtnDisabled={btnNextDisable}
        />
        <Progress currentPage={publicationIndex + 1} totalPages={items.length} />
        <Publication title={publication.title} text={publication.text} />
      </>
    );
  }
}
