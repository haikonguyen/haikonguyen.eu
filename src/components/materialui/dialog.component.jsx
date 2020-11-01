import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined";

const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2)
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
  const { handleModalClose, open } = props;

  const successIcon = {
    color: "green",
    width: "4rem",
    height: "4rem"
  };

  return (
    <div>
      <Dialog
        onClose={handleModalClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          className="mt4"
          onClose={handleModalClose}
        />
        <DialogContent dividers className="tc">
          <CheckCircleOutlinedIcon style={successIcon} />
          <h1>Thank you</h1>
          <Typography gutterBottom>
            Your form has been successfully submitted. I will reply to your
            message as soon as possible.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
