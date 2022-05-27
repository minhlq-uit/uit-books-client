import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../components/Sidebar/index';
import Navbar from '../components/Navbar/index';

// import AdminStatistics from '../components/Admin/AdminStatistics/index'
import AdminStatistics from "../components/Admin/AdminStatistics/index"
const AdminStatisticsPage = props => {
  return (
    <div className='AdminStatistics__container'>
      <div style={{ display: "flex", width: "100%" }} >
            <Sidebar />
            <div style={{ flex: "4" }}>
                <Navbar />
                <AdminStatistics/>
                {/* <UserEdit /> */}
            </div>
        </div>
        
    </div>
  )
}

AdminStatisticsPage.propTypes = {}

export default AdminStatisticsPage