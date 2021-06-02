import React from 'react';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class SimpleSlide extends React.Component {
  state = {
    open: false,
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open,
    }));
  };

  handleClickAway = () => {
    this.setState({
      open: false,
    });
  };

  render(props) {
    const { open } = this.state;

    return (
      <ClickAwayListener onClickAway={this.handleClickAway}>
        <div>
          <Button onClick={this.handleClick}>Contributions</Button>
            {open ? (
              <Slide direction="right" in={open} mountOnEnter unmountOnExit>
                <div className='paper'>
                  {this.props.title}
                  {this.props.body}
                </div>
              </Slide>
          ) : null}
        </div>
      </ClickAwayListener>
    );
  }
}

export default SimpleSlide;
