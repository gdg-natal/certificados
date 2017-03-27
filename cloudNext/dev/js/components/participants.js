import participants from '../../../static/data/participants'
import _ from 'lodash'
console.log(participants);
class Participants {
  filterParticipants(name) {
    return _.filter(participants.results, (participant) => {
      return participant.member.name.toLowerCase().indexOf(name.toLowerCase()) >= 0;
    })
  }
  getParticipants(email) {

  }
}

export default new Participants();
