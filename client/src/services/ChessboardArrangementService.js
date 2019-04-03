import Api from '@/services/Api'

export default {
  saveArrangement (data) {
    return Api().post('api.php?action=savedistances', data)
  },
  saveCoordinates (data) {
    return Api().post('api.php?action=savecoords', data)
  },
  getDistanceData () {
    return Api().get('api.php?action=readdistances')
  },
  getCoordData () {
    return Api().get('api.php?action=readcoords')
  }
}
