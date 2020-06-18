import React, { useState } from "react";
import {
  Container,
  Fab,
  makeStyles,
  ListItemIcon,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  IconButton,
  List,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ScheduleIcon from "@material-ui/icons/Schedule";
import DeleteIcon from "@material-ui/icons/Delete";
import Clock from "./Clock";

interface Item {
  id: number;
  time: Date;
  offset: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  itemList: {
    background: "colors.navy",
    padding: theme.spacing(5),
  },
  clock: {},
  clockName: {
    padding: theme.spacing(2),
  },
  add: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(10),
  },
}));

function Content() {
  const classes = useStyles();
  const [list, setList] = useState([
    {
      id: 0,
      offset: "+0",
      time: new Date(),
    },
    {
      id: 1,
      offset: "+2",
      time: new Date(),
    },
  ]);

  const onChange = (i: Item[]) => {
    setList(i);
  };

  const onDelete = (deleteIndex: number) => {
    onChange(list.filter((x, index) => deleteIndex !== index));
  };

  const renderList = list.map((i: Item, index: number) => {
    return (
      <ListItem className={classes.itemList} key={i.id}>
        <ListItemIcon>
          <ScheduleIcon className="clock" color="secondary" />
        </ListItemIcon>
        <ListItemText className={classes.clockName}>
          UTC {i.offset}
        </ListItemText>
        <ListItemText>
          <Clock offset={i.offset} />
        </ListItemText>
        <ListItemSecondaryAction>
          <IconButton
            onClick={() => {
              onDelete(index);
            }}
            edge="end"
            aria-label="delete"
            color="secondary"
          >
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <Container maxWidth="lg">
        <List>{renderList}</List>
        <Fab className={classes.add} color="primary" aria-label="add" onClick={
          () => {}
        }>
          <AddIcon />
        </Fab>
      </Container>
    </div>
  );
}

export default Content;
