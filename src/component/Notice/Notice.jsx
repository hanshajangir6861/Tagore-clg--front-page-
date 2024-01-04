import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../Notice/Notice.css'


const NoticeForm = ({ onFormSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form fields if needed

        // Pass the notice data to the parent component
        onFormSubmit({ title, content });

        // Clear form fields
        setTitle('');
        setContent('');
    };

    return (
        <>
            <div className='heder'>
                <h1>Tagore P.G College Gudha Gorji </h1>
                <h2>NOTICE</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formContent">
                        {/* <Form.Label>Content</Form.Label> */}
                        <Form.Control
                        className='textArea'
                            as="textarea"
                            rows={3}
                            placeholder="Enter notice content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Button className='but' type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default NoticeForm;
