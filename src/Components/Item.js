import React, {useState} from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Popover from '@material-ui/core/Popover';
import AddIcon from '@material-ui/icons/Add';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import PopoverBody from "./PopoverBody"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  divider: {
    marginLeft: 10,
    marginRight: 10,
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function DetailedExpansionPanel({name, selected, idx, handleSelect}) {
  const classes = useStyles();
  const [openPopover, setOpenPopover] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const togglePopover = (event) => {
    // event.stopPropagation()
    if(!openPopover) handlePopoverOpen(event)
    if(openPopover) handlePopoverClose(event)
    setOpenPopover(!openPopover)
  }

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  }; 

  console.log("selected - 1 == idx", selected - 1, idx)

  return (
    <div className={classes.root}>
      <ExpansionPanel
            className={classes.summaryHeader}
            onClick={() => {handleSelect(idx + 1)}}
            style={{ backgroundColor: selected - 1 === idx ? "white" : "lightGrey" }} >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>{name}</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select your team</Typography>
          </div>
        </ExpansionPanelSummary>
        <Divider className={classes.divider} />
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Typography variant="caption">
              DIRECTOR
            </Typography>
          </div>
          <div className={classes.column}>
          </div>
          <div className={clsx(classes.column, classes.helper)} >
          <Grid container direction="column" spacing={2}>
              <Grid item>
                <Chip 
                    label="Leos"
                    color="primary"
                    onDelete={() => {}} 
                    />
              </ Grid>
              <Grid item>
                <Chip 
                    label="Add"
                    aria-owns='mouse-over-popover' 
                    // onDelete={() => {}} 
                    onClick={togglePopover}
                    icon={<AddIcon />}
                    />
              </ Grid>
            </ Grid>
          </div>
        </ExpansionPanelDetails>
        <Divider className={classes.divider} />
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Typography variant="caption">
              3D Graphic
            </Typography>
          </div>
          <div className={classes.column}>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Chip label="Jan" color="primary" onDelete={() => {}} />
              </Grid>
              <Grid item>
                <Chip label="Pepa" color="primary" onDelete={() => {}} />
              </Grid>
              <Grid item>
                <Chip 
                    label="Add"
                    aria-owns='mouse-over-popover' 
                    // onDelete={() => {}} 
                    onClick={togglePopover}
                    icon={<AddIcon />}
                    />
              </ Grid>
            </ Grid>
          </div>
          <Divider />
        </ExpansionPanelDetails>
        <Divider className={classes.divider} />
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column}>
            <Typography variant="caption">
              2D Render
            </Typography>
          </div>
          <div className={classes.column}>
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <Chip label="Aron" color="primary" onDelete={() => {}} />
              </Grid>
              <Grid item>
                <Chip label="Xerox" color="primary" onDelete={() => {}} />
              </Grid>
              <Grid item>
                <Chip 
                    label="Add"
                    aria-owns='mouse-over-popover' 
                    // onDelete={() => {}} 
                    onClick={togglePopover}
                    icon={<AddIcon />}
                    />
              </ Grid>
            </ Grid>
          </div>
          <Divider />
        </ExpansionPanelDetails>
    
      </ExpansionPanel>
    <Popover 
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
            id="mouse-over-popover"
            open={openPopover}
            anchorEl={anchorEl}
            onClick={togglePopover}
          >
            <PopoverBody/>
      </Popover>
    </div>
  );
}