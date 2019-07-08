import React, { useState } from 'react'
import moment from 'moment';

import AddSprintButton from './AddSprintButton'
import SprintListEmpty from './SprintListEmpty';
// import moment from 'moment'

import "./style.css"


const SprintList = ({ sprints, selectSprint, openAddSprintModal, openSprintModal, currentSprintId }) => {

  // click handler for when a user selects a sprint
  const handleClick = sprintId => {
    selectSprint(sprintId);
  }

  return (
    <div className="sprintlist-wrapper">
      <div className="sprintlist-container">
        <div className="sprintlist-header">
          <h1>Sprints</h1>
          <AddSprintButton openAddSprintModal={() => openAddSprintModal()} />
        </div>

        {/* As of now, no longer need to show status buttons on sprint list */}

        {/* <div className="status-buttons">
          <div className="status">
            <button id="open">open</button>
          </div>
          <div className="status">
            <button id="in-progress">in progress</button>
          </div>
          <div className="status">
            <button id="done">done</button>
          </div>
          <div className="status">
            <button id="closed">closed</button>
          </div>
        </div> */}

        <div className="sprintlist">
          {
            sprints.length ?
              sprints.map((sprint, i) => {
                return (
<<<<<<< HEAD
                  <div className="sprint-item" key={i} onClick={() => handleClick(sprint._id)}>
=======
                  <div className={`sprint-item ${currentSprintId === sprint._id ? 'active' : ''}`}
                    key={i}
                    onClick={() => handleClick(sprint._id)}
                  >
                    <div className="expand-btn">
                      <img
                        className="options"
                        src={require('../../assets/img/options.png')}
                        alt=""
                        onClick={() => openSprintModal(sprint)}
                      />
                    </div>
>>>>>>> 27bf5b9250b5ddba3d177a4190b2941ed0467706
                    <div className="sprint-header">
                      <span className="sprint-name">{sprint.name}</span>
                      <span className="sprint-status">{sprint.status}</span>
                    </div>
                    <div className="sprint-body">
                      <span className="sprint-date">start date: {moment(sprint.start_date).format('MMM D, YYYY')}</span>
                    </div>
                  </div>
                )
              })
              :
              <SprintListEmpty />
          }
        </div>
      </div>
    </div>
  )
}

export default SprintList


