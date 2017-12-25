import React from 'react'
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from 'react-bootstrap'
import DISPLAYS from './CONSTS.js'

const ControlPanel = ({display, changeDisplay}) => {
   return (
      <section className = "ControlPanel">
               <ToggleButtonGroup className="display-control" bsSize="large" type="radio" name="options" value={display} onChange={(val) => changeDisplay(val)}>
                  <ToggleButton value={DISPLAYS.DAYS30}>
                     30 Days
                  </ToggleButton>
                  <ToggleButton value={DISPLAYS.ALLTIMES}>
                     All Times
                  </ToggleButton>
               </ToggleButtonGroup>
      </section>
   )
}

export default ControlPanel
