import '../../profileComponent/style/App.css'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Account() {
  return(
    <>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
       <div className='pay-container' style={{ width: '730px', height: '60%', right: '50px', border: '1px groove' }}>
    <h2 className='company-info-heading'>PayPal</h2>
 
<form>
  <div className="pay-spacing">

<div className="custom-border">
    <div className="custom-space-y-10">
        <fieldset>
            <div className="custom-space-y-5">
                <div className="custom-flex">
                    <label className="custom-label">Set as Primary</label>
                    <input id="push-everything" name="push-notifications" type="radio" className="custom-radio"/>
                    <label className="custom-label">sales@gridgum.com</label>
                </div>
                <div className="custom-flex-2">
                    <label className="custom-label">Set as Primary</label>
                    <input id="push-email" name="push-notifications" type="radio" className="custom-radio"/>
                    <label className="custom-label">paypal@itechnology.ge</label>
                </div>
            </div>
        </fieldset>
        <input
                  type="text"
                  name="Payment"
                  id="last-name"
                  placeholder="Input PayPal Address"
                  autoComplete="family-name"
                  className="custom-inputs" style={{ paddingLeft: '10px' }}
                />
      </div>
  </div>


  </div>

  <div className="custom-flex custom-pay">
    <button type="button" className="custom-button-1">+ Add a new PayPal Address</button>
    <button type="submit" className="custom-button-2">Save</button>
</div>
</form>
</div>

{/*Credit Card*/}
<div className='custom-credit' style={{ width: '730px', height: '90%', right: '20px', border: '1px groove' }}>
    <h2 className='company-info-heading'>Credit Card</h2>
    <form>
  <div className="pay-spacing">
    <div className="credit-border">
      <div className="credit-spacing">
        <fieldset>
          <div className="credit-spacing">
            <div className="custom-flex">
            <label  className="custom-label">Set as Primary</label>
              <input id="push-everything" name="push-notifications" type="radio" className="custom-radio"/>
              <label className="custom-label">sales@gridgum.com</label>
            </div>
            <div className="custom-flex">
            <label  className="custom-label">Set as Primary</label>
              <input id="push-email" name="push-notifications" type="radio" className="custom-radio"/>
              <label className="custom-label">paypal@itechnology.ge</label>
            </div>
          </div>
        </fieldset>
        <label className="block text-bg font-large leading-6 text-gray-900">Card Name</label>
        <input
                  type="text"
                  name="Payment"
                  id="last-name"
                  placeholder="Input PayPal Address"
                  autoComplete="family-name"
                  className="custom-inputs " style={{ paddingLeft: '10px' }}
                />

<Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Expiration Date/Month</Form.Label>
          <Form.Control type='date' placeholder='Expiration Date/Month'/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Year</Form.Label>
          <Form.Control type='number' placeholder='Year' />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CW/CVC</Form.Label>
          <Form.Control type='number' placeholder='CW/CVC' />
        </Form.Group>
      </Row>

<label className="card-holder">Card Holder Name</label>


  <input
                  type="text"
                  name="Payment"
                  id="last-name"
                  placeholder="Input PayPal Address"
                  autoComplete="family-name"
                  className="custom-inputs" style={{ paddingLeft: '10px' }}
                />
      </div>
    </div>
  </div>

  <div className="custom-flex-3">
    <button type="button" className="custom-button-1">+ Add a new PayPal Address</button>
    <button type="submit" className="custom-button-2">Save</button>
</div>
</form>
        </div>
        </div>
</>
)
}