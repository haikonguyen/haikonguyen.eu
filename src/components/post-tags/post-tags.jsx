import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'gatsby';
import CustomBtn from '../materialui/button.component';

class PostTags extends Component {
  render() {
    const { tags, className } = this.props;
    return (
      <div className={className}>
        {tags &&
          tags.map(tag => (
            <Link
              key={tag}
              style={{ textDecoration: 'none' }}
              to={`/tags/${_.kebabCase(tag)}`}
            >
              {/* TODO: adding dynamically with classes to glabalstyle  */}
              <CustomBtn text={tag} size='small' />
            </Link>
          ))}
      </div>
    );
  }
}

export default PostTags;
