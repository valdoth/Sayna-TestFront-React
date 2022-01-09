import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { MobileNavigation } from "../navigation";
import "bootstrap/dist/css/bootstrap.css"

function Layout({ children }) {
  const classes = useStyles();
  return (
    <AnimateSharedLayout type="crossfade">
      <AnimatePresence exitBeforeEnter>
        <Fragment>

          <div id="background-wrap">
            <div className="bubble x1"></div>
            <div className="bubble x2"></div>
            <div className="bubble x3"></div>
            <div className="bubble x4"></div>
            <div className="bubble x5"></div>
            <div className="bubble x6"></div>
            <div className="bubble x7"></div>
            <div className="bubble x8"></div>
            <div className="bubble x9"></div>
            <div className="bubble x10"></div>
            <div className="bubble x1"></div>
            <div className="bubble x2"></div>
            <div className="bubble x3"></div>
            <div className="bubble x4"></div>
            <div className="bubble x5"></div>
            <div className="bubble x6"></div>
            <div className="bubble x7"></div>
            <div className="bubble x8"></div>
            <div className="bubble x9"></div>
            <div className="bubble x10"></div>
          </div>
        </Fragment>
        <div key={children} className={classes.upToSM}>
          <p style={{ color: "blue", textAlign: "center", zIndex: 999 }}>
            Please resize your navigator or navigate on your mobile
            phone to view the page
          </p>
          <img
            className="ft"
            src="/assets/screenshots/1.png"
            alt="screenshot 1"
            style={{ width: "200px" }}
          />
          <img
            className="one"
            src="/assets/screenshots/1.png"
            alt="screenshot 1"
            style={{ color: "blue", width: "200px" }}
          />
          <img
            className="two"
            src="/assets/screenshots/2.png"
            alt="screenshot 2"
            style={{ width: "200px" }}
          />
          <img
            className="three"
            src="/assets/screenshots/1.png"
            alt="screenshot 3"
            style={{ width: "200px" }}
          />
        </div>
        <div key={{ children } + "test"} className={classes.layout}>
          {children}
          <MobileNavigation className={classes.mobileNavigation} />
        </div>

      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

const useStyles = makeStyles((theme) => ({
  upToSM: {
    display: "flex",
    overflow: "hidden",
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    alignItems: "center",
    height: "100vh",
    width: "100vw",
    "& p": {
      zIndex: 1,
      color: "var(--primary)",
      marginLeft: "12px",
      width: 350,
      fontSize: "18px",
      fontWeight: 600,
    },
  },
  layout: {
    minHeight: "inherit",
    minWidth: "inherit",
    paddingBottom: 55,
    color: theme.palette.getContrastText(theme.palette.background.default),
    background: theme.palette.background.default,
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  mobileNavigation: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
  },
}));

export default Layout;
