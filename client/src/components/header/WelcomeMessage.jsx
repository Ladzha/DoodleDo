import PropTypes from 'prop-types'
const WelcomeMessage = ({username}) => {

  return (
    <div>Welcome {username}</div>
  )
}

WelcomeMessage.prototype = {
    username: PropTypes.string
}

WelcomeMessage.defaultProps = {
    username:'Guest'
}

export default WelcomeMessage