import React from 'react'
import { Button } from 'bootstrap'
import Form from 'react-bootstrap/Form'

function Main() {
  return (
    <div>
      <div></div>
      <Form>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='name@example.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
      </Form>

      <Form.Select aria-label='Default select example'>
        <option>Open this select menu</option>
        <option value='1'>One</option>
        <option value='2'>Two</option>
        <option value='3'>Three</option>
      </Form.Select>
    </div>
  )
}

export default Main
