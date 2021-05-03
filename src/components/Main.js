const Main = () => {
  return (
    <div>
      <div className='row justify-content-center w-100'>
        <div className='col-md-5 shadow p-3 mb-5 bg-white rounded'>
          <h1>Form validation</h1>
          <input
            className='form-control'
            placeholder='username'
            type='text'
          />
          <input
            className='form-control'
            placeholder='email'
            type='text'
          />
          <input
            className='form-control'
            placeholder='password'
            type='text'
          />
          <input
            className='form-control'
            placeholder='confirm password'
            type='text'
          />
          <button
            className='btn btn-primary'
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
