import React, { useState ,useContext } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Notice/Notice.css'
import axios from "axios"
import { context } from '../../App';



const NoticeForm = () => {
    const {serverLink} = useContext(context) 
    const [content, setContent] = useState('');

   

    const student =async()=>{
        let result =await axios.post(`${serverLink}/AdminNotice/notice`,{
            Content:content
        })
        result=result.data
        setContent(result)
        alert("Your Notice has been send")
        setContent('')
    }

    return (
        <>
            <div className='heder'>
                <h1>Tagore P.G College Gudha Gorji </h1>
                <h2>NOTICE</h2>
                <Form>
                    <Form.Group controlId="formContent">
                        {/* <Form.Label>Content</Form.Label> */}
                        <Form.Control
                        className='textArea'
                            as="textarea"
                            // rows={3}
                            placeholder="Enter notice content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required

                        />  
                        <div className="btn2">
                   <Button onClick={(e)=>{
                    e.preventDefault()
                    student()
                  }}
                  type='submit'>Send</Button>
                  </div>
                    </Form.Group>
                
                </Form>
            </div>
        </>
    );
};

export default NoticeForm;
