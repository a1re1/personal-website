import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const styles = theme => ({
  root: {
    height: 100,
  },
  wrapper: {
  },
  paper: {
    zIndex: 10,
    position: 'fixed',
    left: 0,
    top: 0,
    width: '90vw',
    'max-width': '1200px',
    'max-height': '90vh',
    'margin-left': '5vw',
    'margin-top': '5vh',
    'overflow-y': 'auto',
  },
});

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

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <ClickAwayListener onClickAway={this.handleClickAway}>
            <div>
              <Button onClick={this.handleClick}>Contributions</Button>
                {open ? (
                  <Slide direction="right" in={open} mountOnEnter unmountOnExit>
                    <Paper elevation={4} className={classes.paper}>
                      <h1>Testing Card</h1>
                      <p>
                        lorum ipsum latin <br />
                        lorum ipsum latin <br />
                        lorum ipsum latin <br />
                      </p>
                    </Paper>
                  </Slide>
              ) : null}
            </div>
          </ClickAwayListener>
        </div>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide);
