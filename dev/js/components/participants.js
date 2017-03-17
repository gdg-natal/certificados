import participants from '../../../static/data/participants'
import _ from 'lodash'
function getParticipants(email) {
  return _.get(participants, email);
}

export default getParticipants;
