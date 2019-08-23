import React, {Fragment} from 'react';

const NotFound = () => {
    return (
        <Fragment>
            <h1 className="x-large text-primary">
                <i className="fas fa-exclamation-triangle"/> Page Not Found
            </h1>
            <p className="large">존재하지 않는 페이지 입니다.</p>
        </Fragment>

    );
};

export default NotFound;
