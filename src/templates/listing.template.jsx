import React from 'react';
import { Link } from 'gatsby';
import PostListing from '../components/post-listing/post-listing.component';

class Listing extends React.Component {
  renderPaging() {
    const { currentPageNum, pageCount } = this.props;
    const prevPage = currentPageNum - 1 === 1 ? '/' : `/${currentPageNum - 1}/`;
    const nextPage = `/${currentPageNum + 1}/`;
    const isFirstPage = currentPageNum === 1;
    const isLastPage = currentPageNum === pageCount;

    return (
      <div className='paging-container'>
        {!isFirstPage && <Link to={prevPage}>Previous</Link>}
        {[...Array(pageCount)].map((_val, index) => {
          const pageNum = index + 1;
          return (
            <Link
              key={`listing-page-${pageNum}`}
              to={pageNum === 1 ? '/' : `/${pageNum}/`}
            >
              {pageNum}
            </Link>
          );
        })}
        {!isLastPage && <Link to={nextPage}>Next</Link>}
      </div>
    );
  }

  render() {
    const { data } = this.props;

    const postEdges = data.allMarkdownRemark.edges;

    return (
      <div className='listing-container'>
        <div className='posts-container'>
          <PostListing postEdges={postEdges} />
        </div>
        {/* {this.renderPaging()} */}
      </div>
    );
  }
}

export default Listing;
