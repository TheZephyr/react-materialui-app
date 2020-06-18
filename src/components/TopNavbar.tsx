import React from "react";
import {
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Select,
  Button,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const offsets = [
  "UTC-12",
  "UTC-11",
  "UTC-10",
  "UTC-9",
  "UTC-8",
  "UTC-7",
  "UTC-6",
  "UTC-5",
  "UTC-4",
  "UTC-3",
  "UTC-2",
  "UTC-1",
  "UTC+0",
  "UTC+1",
  "UTC+2",
  "UTC+3",
  "UTC+4",
  "UTC+5",
  "UTC+6",
  "UTC+7",
  "UTC+8",
  "UTC+9",
  "UTC+10",
  "UTC+11",
  "UTC+12",
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  input: {},
  inputSelect: {
    minWidth: 150,
  },
}));

interface NavbarProps {
  title: string;
}

function TopNavbar(props: NavbarProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.title}
          </Typography>
          <div className={classes.input}>
            <Select className={classes.inputSelect} placeholder={offsets[12]}>
              {offsets.map((o) => (
                <MenuItem key={o} value={o}>
                  {o}
                </MenuItem>
              ))}
            </Select>
            <Button color="inherit">Add</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default TopNavbar;
