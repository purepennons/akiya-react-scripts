import { connect } from 'react-redux'

import PingPong from '../components/PingPong/PingPong'
import { pingPong } from '../redux/modules/pingPong'

const mapStateToProps = state => ({
  isPinging: state.pingPong.isPinging
})

const mapDispatchToProps = {
  onClick: pingPong
}

export default connect(mapStateToProps, mapDispatchToProps)(PingPong)
