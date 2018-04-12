import React, {Component} from 'react';
import WorkoutCreate from './WorkoutCreate';

class WorkoutIndex extends Component {
    render() {
        return (
          <div>
              <WorkoutCreate token = {this.props.token} />
          </div>  
    )}
}

export default WorkoutIndex;