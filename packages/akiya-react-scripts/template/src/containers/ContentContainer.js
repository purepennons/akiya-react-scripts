import { connect } from 'react-redux'

import Content from '../components/Content/Content'
import { getHomeContent } from '../redux/modules/home'

const mapStateToProps = state => ({
  content: state.home.content 
})

const mapDispatchToProps = {
  getHomeContent
}

export default connect(mapStateToProps, mapDispatchToProps)(Content)
