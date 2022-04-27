import CloseIcon from "@mui/icons-material/Close";
import { Fade, Grid, Slug } from "mauerwerk";
import React from "react";

import { ProjectslDataProps, proyectsData } from "./data";

const Cell = ({
  toggle,
  month,
  role,
  location,
  city,
  title,
  height,
  event,
  description,
  css,
  imgProject,
  bgpos,
  color,
  maximized,
}: ProjectslDataProps) => (
  <div
    style={{ backgroundImage: css, cursor: !maximized ? "pointer" : "auto" }}
    onClick={!maximized ? toggle : undefined}
  >
    <div
      className="car"
      style={{ backgroundImage: imgProject, backgroundPosition: bgpos }}
    ></div>
    <Fade show={maximized} delay={maximized ? 400 : 0}>
      <Slug delay={600}>
        <div className="circle">
          <h2 style={{ letterSpacing: -4, marginLeft: 50, marginTop: 70 }}>
            {title}
          </h2>
          <h4>{month}</h4>
          <p>{role}</p>
        </div>
        <div className="close ">
          <CloseIcon
            type="close"
            style={{ cursor: "pointer", marginTop: 65, marginRight: -15 }}
            onClick={toggle}
          />
        </div>
        <h1 className="location">{location}</h1>
        <p>{description}</p>
      </Slug>
    </Fade>
    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: "translate3d(0,140px,0)" }}
      enter={{ opacity: 1, transform: "translate3d(0,0px,0)" }}
      leave={{ opacity: 0, transform: "translate3d(0,-50px,0)" }}
      delay={maximized ? 0 : 400}
    >
      <div className="default">
        <span className="layerProject"></span>
        <h1>{title}</h1>
      </div>
    </Fade>
  </div>
);
const GridProjects = () => {
  return (
    <div className="main">
      <Grid
        style={{ overflow: "hidden", height: "150vh" }}
        data={proyectsData}
        keys={(d: { event: any }) => d.event}
        heights={(d: { height: any }) => d.height}
        columns={3}
        margin={1}
        lockScroll={true}
        closeDelay={300}
      >
        {(proyectsData: ProjectslDataProps, maximized: any, toggle: any) => (
          <Cell {...proyectsData} maximized={maximized} toggle={toggle} />
        )}
      </Grid>
    </div>
  );
};

export default GridProjects;
