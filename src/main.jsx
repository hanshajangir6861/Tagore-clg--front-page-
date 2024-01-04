import React from 'react'
// import App from './App'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'
// import Header from './component/Header/Header.jsx'
// import Header from'./Header'
// import View from './component/Courses/View-all.jsx'
// import Admin from './component/Admin-page/Admin.jsx'
// import Student from './component/Student-page/Student.jsx'
// import StudentDetails from './component/student-details/StudentDetails.jsx'
// import ComplaintBox from './component/Complaint-Box/ComplaintBox.jsx'
// import MarksTable from './component/Marks-table/marksTable.jsx'
// import StudentRecord from './component/Student-record/StudentRecord.jsx'
// import Result from './component/Result/Result.jsx'
// import BaResult from './component/Ba-Result/BaResult.jsx'
// import BscResult from './component/Bsc-Result/BscResult.jsx'
// import BcomResult from './component/Bcom-Result/BcomResult.jsx'
// import BcaResult from './component/Bca-Result/BcaResult.jsx'
// import BbaResult from './component/Bba-Result/BbaResult.jsx'
// import ShowDetails from  './component/Show-Details/ShowDetails.jsx'
// import MaResult from './component/Ma-Result/MaResult.jsx'
// import McomResult from './component/Mcom-Result/McomResult.jsx'
// import MscResult from './component/Msc-Result/MscResult.jsx'






// ReactDOM.createRoot(document.getElementById('root')).render(
  
    // <Header/> 
    // <View/>
    // <Admin/>
    // <Student/>
    // <studentDetails/>
    // <ComplaintBox/>
    // <MarksTable/>
    // <StudentRecord/>
    // <Result/>
    // <BaResult/>
    // <BscResult/>
    // <BcomResult/>
    // <BcaResult/>
    // <BbaResult/>
    // <ShowDetails/>
    // <MaResult/>
    // <McomResult/>
    // <MscResult/>
// )



   
import Header from './component/Header/Header.jsx'
import Home from './component/Home/Home.jsx'
import Footer from './component/Footer/Footer.jsx'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import ContactUs from './component/ContactUs/ContactUs.jsx'
import Mediagallary from './component/MediaGallery/Mediagallary.jsx'
import Aboutus from './component/Aboutus/Aboutus.jsx'
import Bca from './component/Studentpanel/BCA/Bca.jsx'
import Ba from './component/Studentpanel/BA/Ba.jsx'
import Bba from './component/Studentpanel/BBA/Bba.jsx'
import Bcom from './component/Studentpanel/BCOM/Bcom.jsx'
import Bsc from './component/Studentpanel/BSC/Bsc.jsx'
import Ma from './component/Studentpanel/MA/Ma.jsx'
import Mcom from './component/Studentpanel/MCOM/Mcom.jsx'
import Msc from './component/Studentpanel/MSC/Msc.jsx'
import Ncc from './component/Studentpanel/NCC/Ncc.jsx'
import Nss from './component/Studentpanel/NSS/Nss.jsx'
import Scout from './component/Studentpanel/SCOUT/Scout.jsx'
import View from './component/Courses/View-all.jsx'
import Employeelogin from './component/EmployeeLogin/Employeelogin.jsx'
import Employregform from './component/EmployeeRegistration/Employregform.jsx'
import AdminLogin from './component/AdminLogin/AdminLogin.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>

      


     <React.StrictMode>
       <App/>
        </React.StrictMode>

    </>


)
