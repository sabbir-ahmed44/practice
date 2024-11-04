import React from 'react'

import PropTypes from 'prop-types';

const User = (props) => {
  return (
    <div>
        <h1>{props.user.name}</h1>
        <h3>{props.user.id}</h3>


    </div>
  )
}
User.protoType ={
  user: PropTypes.object.isRequired,
};


export default User;