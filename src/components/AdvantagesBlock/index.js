import { connect } from 'react-redux';
import AdvantagesBlock from './AdvantagesBlock';

const mapStateToProps = state => ({
  links: state.advantagesLink,
});

export default connect(mapStateToProps)(AdvantagesBlock);
