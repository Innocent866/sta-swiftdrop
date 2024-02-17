import Form from 'react-bootstrap/Form';
import '../../components/profileComponent/style/App.css';
export default function GeneralSettings (){
      return(
        <>
    <div className='user-container'style={{ width: '900%', height: '90%', right: '20', border: '1px groove', marginTop:'40px'}}>
        <h5 className='user-title'>Driver's info, image & Signature</h5>
      
    
      <Form className=' form-user'>
<div className='user-row'>
        <div className='custom-column-p'>
          <div className='lines'>
            <label htmlFor='name'>User Name</label>
            <input
              type='text'
              name='company'
              id='name'
              placeholder='User Name'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Full Name</label>
            <input
              type='text'
              name='phone-name'
              id='phone'
              placeholder='Full-Name'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Phone-Number</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='Phone-Number'
              autoComplete='family-name'
              className='text-5'
            />
          </div>
          <div className='lines'>
            <label htmlFor='name'>Email</label>
            <input
              type='text'
              name='email-address'
              id='emal'
              placeholder='Phone-Number'
              autoComplete='family-name'
              className='text-100'
            />
          </div>
        </div>
      </div>
      
    </Form>
     
     </div>
    </>
  );
}