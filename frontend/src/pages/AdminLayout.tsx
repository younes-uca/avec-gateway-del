import React, { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router'

import NavigationBar from '../components/menu/navbar/navbar.component'

import Sidebar from '../components/menu/sidebar/sidebar.component'

const AdminLayout = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [sidebarVisible, setSidebarVisible] = useState(true); 

    const toggleSidebar = () => {
      setSidebarVisible(!sidebarVisible); 
    };

      const closeSidebar = () => {
        setSidebarVisible(false);
    };

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth <= 960) {
            setSidebarVisible(false);
          } else {
            setSidebarVisible(true);
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => window.removeEventListener('resize', handleResize);
      }, []); 
  return (
    (sidebarVisible) ?(
  <div className=" flex  w-full m-0" style={{width:"100%", height:'100vh'}}>
      <div
        className="col-2 d-sm-none d-md-none d-lg-block  "
        style={{
          overflowY: "hidden",
 height: "100%",
          // width: "15%",
        }}
      >
        {/* <div ref={sidebarRef} className="layout-sidebar"> */}
                  
                    {sidebarVisible &&<Sidebar closeSidebar={closeSidebar} />}
                {/* </div> */}
      </div>
      <div
       
        style={{
          overflowY: "scroll",
         overflowX: "hidden",
          width: "100%",
           height:'100vh',
           marginRight:"0px"
        }}
      >
        
        <NavigationBar toggleSidebar={toggleSidebar} />
<div className='mx-6  ' style={{marginTop:'140px'}}>

          <Outlet />
</div>
     
      </div>
      </div>
      ):(<>
      <div className=" flex  w-full m-0" style={{width:"100%", height:'100vh'}}>
     
      <div
       
        style={{
          overflowY: "scroll",
         overflowX: "scroll",
          width: "100%",
           height:'100vh',
           marginRight:"0px"
        }}
      >
        
        <NavigationBar toggleSidebar={toggleSidebar} />
<div className='mx-1  ' style={{marginTop:'140px'}}>

          <Outlet />
</div>
     
      </div>
      </div>
        </>)
  )
}

export default AdminLayout
