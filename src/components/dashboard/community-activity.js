import React from 'react';
import {connect} from 'react-redux';
import CommunityItem from './community-item';

import './community-activity.css';

const CommunityActivity = (props) => {

  const community = props.community.map((item, index) => 
    <CommunityItem key={index} id={item.discussion.id} {...item} />
  )

  return (
      <section className="community-activity">
        <div className="wrapper">
          <ul>
            {community}
          </ul>
      	</div>
    	</section>
  );
}

const mapStateToProps = (state, props) => ({
  community: state.community
})

export default connect(mapStateToProps)(CommunityActivity);