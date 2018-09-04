import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';

const styles = theme => ({
  root: {
    height: 100,
  },
  wrapper: {
  },
  paper: {
    zIndex: 1,
    position: 'fixed',
    left: 0,
    width: '90vw',
    'margin-left': '5vw',
    top: 0,
    'max-height': '90vh',
    'margin-top': '5vh',
  },
});

class SimpleSlide extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <div className={classes.wrapper}>
          <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
          <Slide direction="right" in={checked} mountOnEnter unmountOnExit>
            <Paper elevation={4} className={classes.paper}>
              <h1>Testing Card</h1>
              <p>
                lorum ipsum latin <br />
                lorum ipsum latin <br />
                lorum ipsum latin <br />
                lorum ipsum latin <br />
                lorum ipsum latin <br />
                lorum ipsum latin <br />
              </p>
            </Paper>
          </Slide>
        </div>
      </div>
    );
  }
}

SimpleSlide.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleSlide);
