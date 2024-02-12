export default function ImageUploadButton(){

  return (
    <div className="">
        <label htmlFor="uploadImage">Upload Image
        </label>
        <div className="border my-3 ">

          <div className='column-flex pl10'>
            <img src='/public/imageUpload.png' className="imageUpload"/>

            <button className='btn btn-primary'>Change Photo</button>
            {/* <input type="file" value="Change Image" /> */}
          </div>
        </div>
    </div>
  );
}

