import React from 'react'
import {withRouter} from 'react-router-dom'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
   /* if ((this.props.location !== prevProps.location) && 
      	((prevProps.location.pathname === '/') || (this.props.location === '/'))) {
      	console.log('current location: ', this.props.location);
      	console.log('prev location: ', prevProps.location);
        window.scrollTo(0, 0)
    }*/

    console.log('current location: ', this.props.location);
    console.log('prev location: ', prevProps.location);

    console.log(window.scrollY)

    if (this.props.location !== prevProps.location) {

      if (this.props.location.pathname !== '/') {
          if (window.scrollY > 135) {
            window.scrollTo(0, 135);
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