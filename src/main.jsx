import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
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
        <BrowserRouter>

            <Routes>
                <Route index element={<Header />} />
                <Route path='/contactus' element={<ContactUs />} />
                <Route path='/mediagallery' element={<Mediagallary />} />
                <Route path='/about' element={<Aboutus />} />
            </Routes>


            <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route path='/viewall/*' element={<View />} />
                <Route path='/bca/*' element={<Bca />} />
                <Route path='/bba/*' element={<Bba />} />
                <Route path='/ba/*' element={<Ba />} />
                <Route path='/bcom/*' element={<Bcom />} />
                <Route path='/bsc/*' element={<Bsc />} />
                <Route path='/ma/*' element={<Ma />} />
                <Route path='/mcom/*' element={<Mcom />} />
                <Route path='/msc/*' element={<Msc />} />
                <Route path='/ncc/*' element={<Ncc />} />
                <Route path='/nss/*' element={<Nss />} />
                <Route path='/scout/*' element={<Scout />} />
                <Route path='/adminreg/*' element={<Employregform />} />
                <Route path='/adminlog/*' element={<Employeelogin />} />
                <Route path='/AdminLogin/*' element={<AdminLogin/>} />



            </Routes>
            <Footer />
        </BrowserRouter>
    </>



)
