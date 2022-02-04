import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import DeleteIcon from "@material-ui/icons/Delete";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import docImage from "../../assests/images/image.jpg";
import { notification } from "antd";
import { Modal, Button, Space } from "antd";
import EditIcon from "@material-ui/icons/Edit";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { Tooltip } from "antd";

import { Row, Col, Divider } from "antd";

import { firestore } from "./../../Firebase/Firebase";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const MuiCard = ({ item, isAdmin, fetchCustomerList, auth }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [availibility, setAvailibility] = useState("");
  const [charges, setCharges] = useState("");
  const [specialization, setSpecialization] = useState("");

  const [Admin, setAdmin] = useState(false);

  useEffect(() => {
    if (auth?.email === "admin@gmail.com") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, []);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const errorMessage = () => {
    notification.error({
      message: "Access Denied",
      description: "Only Admin can Update and Delete",
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  const handleOk = (itemId) => {
    setIsModalVisible(false);
    updateDoc(itemId);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const deleteDoc = async (itemId) => {
    console.log("press", itemId);

    await firestore
      .collection("doctors")
      .doc(itemId)
      .delete()
      .then(() => {
        notification.error({
          message: "Deleted",
          description: "Account deleted successfully.",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
        fetchCustomerList();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  const updateDoc = async (itemId) => {
    console.log("press", itemId);

    // To update age and favorite color:

    await firestore
      .collection("doctors")
      .doc(itemId)
      .update({
        "doctorDetails.firstName": firstName
          ? firstName
          : item.doctorDetails.firstName,
        "doctorDetails.lastName": lastName
          ? lastName
          : item.doctorDetails.lastName,
        "personalInfo.availibility": availibility
          ? availibility
          : item.personalInfo.availibility,
        "personalInfo.charges": charges ? charges : item.personalInfo.charges,
        "doctorDetails.specialization": specialization
          ? specialization
          : item.doctorDetails.specialization,
      })

      .then(() => {
        notification.success({
          message: "Updated",
          description: "Account updated successfully.",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
        fetchCustomerList();
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  };

  return (
    <div>
      <Modal
        title="Basic Modal"
        visible={isModalVisible}
        onOk={() => handleOk(item.id)}
        onCancel={handleCancel}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              autoFocus
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="ContentRightSection"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              autoFocus
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="ContentRightSection"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="availibility"
              label="Availibility"
              name="availibility"
              autoComplete="availibility"
              autoFocus
              onChange={(e) => setAvailibility(e.target.value)}
            />
          </Col>

          <Col
            xs={24}
            sm={24}
            md={24}
            lg={12}
            xl={12}
            className="ContentRightSection"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="charges"
              label="Charges"
              name="charges"
              autoComplete="charges"
              autoFocus
              onChange={(e) => setCharges(e.target.value)}
            />
          </Col>
          <Col
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            className="ContentRightSection"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="specialization"
              label="Specialization"
              name="specialization"
              autoComplete="specialization"
              autoFocus
              onChange={(e) => setSpecialization(e.target.value)}
            />
          </Col>
        </Row>
      </Modal>
      <Link to={!isAdmin && "/appointment"}>
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={`${item.doctorDetails.firstName}  ${item.doctorDetails.lastName}`}
            subheader={item.personalInfo.availibility}
          />
          <CardMedia
            className={classes.media}
            image={docImage}
            title="Paella dish"
          />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              {item.doctorDetails.specialization}
            </Typography>
            <Typography
              variant="body2"
              style={{ color: "#00818F" }}
              component="p"
            >
              {`Rs : ${item.personalInfo.charges}`}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              {isAdmin ? (
                <EditIcon
                  style={{ color: "#004D8B" }}
                  onClick={Admin ? showModal : errorMessage}
                />
              ) : (
                <FavoriteIcon style={{ color: "#00818F" }} />
              )}
            </IconButton>
            <IconButton aria-label="share">
              {isAdmin ? (
                <DeleteIcon
                  style={{ color: "#004D8B" }}
                  onClick={Admin ? () => deleteDoc(item.id) : errorMessage}
                />
              ) : (
                <ShareIcon />
              )}
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit></Collapse>
        </Card>
      </Link>
    </div>
  );
};

var mapState = (state) => ({
  auth: state.auth,
});

export default connect(mapState)(MuiCard);
