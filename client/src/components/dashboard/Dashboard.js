import React, {Fragment, useEffect} from 'react';
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getCurrentUserProfile, deleteAccount} from '../../actions/profile'
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';

const Dashboard = ({getCurrentUserProfile, deleteAccount, auth: {user}, profile: {profile, loading}}) => {
    useEffect(() => {
        getCurrentUserProfile();
    }, [getCurrentUserProfile]);

    // 로딩 중일 때 spinner 시
    return loading && profile === null ? <Spinner/> :
        <Fragment>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
                <i className="fas fas-user"> Welcome {user && user.name} </i>
            </p>
            {profile !== null ? (
                    <Fragment>
                        <DashboardActions/>
                        <Experience experience={profile.experience}/>
                        <Education education={profile.education}/>

                        <div className="my-2">
                            <button className="btn btn-danger" onClick={()=>deleteAccount()}>
                                <i className="fas fa-user-minus"></i>계정 삭제하기
                            </button>
                        </div>
                    </Fragment>) :
                (<Fragment>
                    <p> 등록된 프로필이 없습니다. 프로필 정보를 추가해주세요 </p>
                    <Link to='/create-profile' className='btn btn-primary my-1'>
                        Create Profile
                    </Link>

                </Fragment>)}

        </Fragment>
};

Dashboard.propTypes = {
    getCurrentUserProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, {getCurrentUserProfile, deleteAccount})(Dashboard);
