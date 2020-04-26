import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
}));

export default function PopoverBody() {
  const classes = useStyles();
  const [openPopover, setOpenPopover] = useState(false);

  const people = ["Jan", "Alan", "Dilan"]


  return (
    <div className={classes.root}>
        {people.map(value => {
          const labelId = `transfer-list-item-${value}-label`;
            return <ListItem key={value} 
                            role="listitem" 
                            button 
                            onClick={(e) => {e.stopPropagation()}}
                            >
                <ListItemIcon>
                <Checkbox
                    // checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
            </ListItem>
        })
        }
          <Button size="small" color="primary" variant="contained">
            Save
          </Button>
          <Button size="small" color="primary">
            Close
          </Button>
    </div>
  );
}