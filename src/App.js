import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardOverview from './components/DashboardOverview';
import ActivityFeed from './components/ActivityFeed';
import CalendarView from './components/CalendarView';
import UpcomingSchedule from './components/UpcomingSchedule';

import { useEffect, useState } from 'react';

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  console.log('WInd: ', windowSize);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {windowSize.width < 480 ? (
        <div className='d-flex flex-column'>
          <Header />
          <div className='row'>
            <div className='col-4' style={{ backgroundColor: '#f7f9fc' }}>
              <Sidebar />
            </div>
            <div className='col-8'>
              <div className='d-flex flex-column'>
                <DashboardOverview />
                <ActivityFeed />
              </div>
            </div>
            <div className='col-4' style={{ backgroundColor: '#f7f9fc' }}>
            </div>
            <div className='col-8'>
              <div className='d-flex flex-column'>
                <CalendarView />
                <UpcomingSchedule />
              </div>
            </div>
          </div>
        </div>
      ) : windowSize.width < 768 ? (
        <div className='d-flex flex-column'>
          <Header />
          <div className='row'>
            <div className='col-3' style={{ backgroundColor: '#f7f9fc' }}>
              <Sidebar />
            </div>
            <div className='col-9'>
              <div className='d-flex flex-column'>
                <DashboardOverview />
                <ActivityFeed />
              </div>
            </div>
            <div className='col-3' style={{ backgroundColor: '#f7f9fc' }}>
            </div>
            <div className='col-9'>
              <div className='d-flex flex-column'>
                <CalendarView />
                <UpcomingSchedule />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='d-flex flex-column'>
          <Header />
          <div className='row'>
            <div className='col-2' style={{ backgroundColor: '#f7f9fc' }}>
              <Sidebar />
            </div>
            <div className='col-5'>
              <div className='d-flex flex-column'>
                <DashboardOverview />
                <ActivityFeed />
              </div>
            </div>
            <div className='col-5'>
              <div className='d-flex flex-column'>
                <CalendarView />
                <UpcomingSchedule />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
