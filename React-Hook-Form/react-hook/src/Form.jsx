import {useForm} from 'react-hook-form'

const Form=()=>{

  const {register,handleSubmit,formState:{errors}}=useForm();

  function submitform(data){
    console.log(data);
  }

  return (
    <>
    <form onSubmit={handleSubmit(submitform)}>
      <div>
        <label>Name: 
        </label>
       <input id="first" {...register('name',{
        required:"Name can't be empty"
       })} />
       {errors.name && <span>{errors.name.message}</span>}
      </div>
      <div>
       <label>Age: </label>
       <input type="text" id='Second' {...register('age',{
        min:{
          value:18,
          message:"Minimum age is 18"
        },
        max:{
          value:80,
          message:"Maximum age is 80"
        }
       })} />
       {errors.age && <span>{errors.age.message}</span>}
      </div>
      <div>
       <label>Password: </label>
       <input type="text" id='third' {...register('password',
        {
          minLength:{
            value:8,
            message:"Minimum password length is 8"
          },
          maxLength:{
            value:15,
            message:"Maximum password length is 15"
          }
        }
       )}/>
       {errors.password && <span>{errors.password.message}</span>}
      </div>
      <button>submit</button>
    </form>
    </>
  )
}

export default Form