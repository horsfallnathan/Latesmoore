import React from "react";

import { withStyles } from "@material-ui/core/styles";
import MuiExpansionPanel from "@material-ui/core/ExpansionPanel";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import MuiExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import s from "./Accordion.scss";

const ExpansionPanel = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0
    },
    "&:before": {
      display: "none"
    },
    "&$expanded": {
      margin: "auto"
    }
  },
  expanded: {}
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  }
}))(MuiExpansionPanelDetails);

interface passedProps {
  title: String;
  description: React.ReactNode;
  icon: React.ReactNode;
}

interface AccordionProps {
  content: passedProps[];
}

export default function Accordion({ content }: AccordionProps) {
  const [expanded, setExpanded] = React.useState<string | false>("panel1");
  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    newExpanded: boolean
  ) => {
    setExpanded(newExpanded ? panel : false);
  };
  return (
    <>
      {content &&
        content.map((item, i) => {
          return (
            <ExpansionPanel
              key={i}
              square
              expanded={expanded === `panel1${i}`}
              onChange={handleChange(`panel1${i}`)}
            >
              <ExpansionPanelSummary
                aria-controls={`panel1${i}-content`}
                id={`panel1${i}d-header`}
              >
                <div className={s.title}>
                  {item.icon}
                  <h2>{item.title}</h2>
                </div>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <div className={s.accordionText}>{item.description}</div>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
    </>
  );
}
