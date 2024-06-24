import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SkeletonTheme } from 'react-loading-skeleton';

const SkeletonLoader = ({ type }) => {
  let content = null;

  switch (type) {
    case 'post':
      content = (
      <div className="card-skeleton">
        <div className="left-col">
        <h2>
            <Skeleton circle height={100} width={100} />
          </h2>
          <p>
            <Skeleton style={{marginBottom:'1rem', height:'40px'}} count={2} />
          </p>
        </div>
        <div className="right-col">
        <h2>
            <Skeleton circle height={100} width={100} />
          </h2>
          <p>
            <Skeleton style={{marginBottom:'1rem',height:'40px'}} count={2} />
          </p>
        </div>
      </div>

      );
      break;
    case 'user':
      content = (
        <div className="user">
           <h2>
            <Skeleton height={50} width={300} />
          </h2>
          <p>
            <Skeleton style={{marginBottom:'1rem'}} height={50} width={300} count={2} />
          </p>
          
        </div>
      );
      break;
    default:
      content = (
        <div>
           <h2>
            <Skeleton height={40} width={100} />
          </h2>
          <p>
            <Skeleton style={{marginBottom:'1rem'}} count={4} height={50} width={200} />
          </p>
          
        </div>
      );
  }

  return <div>{content}</div>;
};

export default SkeletonLoader;
