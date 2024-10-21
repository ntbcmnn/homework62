import { Link } from 'react-router-dom';
import React from 'react';

interface Props {
  page: string;
}

const BackLink: React.FC<Props> = ({page}) => {

  return (
    <Link to={`/${page}`} className="d-flex align-items-center text-dark text-decoration-none">
      <i className="bi bi-arrow-left me-2"></i>
      {page ? 'Back to projects' : 'Back'}
    </Link>
  );
};

export default BackLink;