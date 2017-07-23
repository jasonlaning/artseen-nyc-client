import React from 'react'
import { withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {

    if (this.props.location !== prevProps.location) {

      if (this.props.location.pathname !== '/') {
          if ((window.scrollY > 135) && (window.innerWidth <= 600)) {
            window.scrollTo(0, 135);
          } else if (window.scrollY > 215) {
            window.scrollTo(0, 215);
          }
      } else {
        window.scrollTo(0, 0)
      }
    }


  }

  render() {
    return this.props.children
  }
}

export default withRouter(ScrollToTop)