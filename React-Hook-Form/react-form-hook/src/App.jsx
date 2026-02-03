import {useForm} from 'react-hook-form'

const App=()=>{
  const {register,handleSubmit}=useForm();
  const submitform=(data)=>{
    console.log(data);
  }
  console.log('render');
  return (
    <>
      <form onSubmit={handleSubmit(submitform)}>
        <div>
        <label>Name: </label>
        <input type="text" id='first' {...register('name')}/>
        </div>
        <div>
          <label>Email: </label>
          <input type="text" id='second' {...register('Email')}/>
        </div>
        <div>
          <label>Password: </label>
          <input type="text" id='third' {...register('password')}/>
        </div>
        <div>
          <label>Confirm Password: </label>
          <input type="text"  id='forth'
          {...register('confirmpassword')}/>
        </div>
        <div>
          <label htmlFor="gender">Gender: </label>
          <select id="gender" {...register('gender')}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>You are aligible: </label>
          <input type="checkbox" {...register('eligible')}/>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </>
  )
}

export default App