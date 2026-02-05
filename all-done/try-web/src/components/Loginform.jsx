import {useForm} from 'react-hook-form'

const Loginform=()=>{
   const {register,handleSubmit,formState:{errors}}= useForm()
   const submitlogin=(data)=>{
    console.log(data);
   }
    return (
        <>
            <form onSubmit={handleSubmit(submitlogin)}>
                <label>Email: </label>
                <input type="email" placeholder='Enter Email' {...register('email',{
                    required:true,
                    message:"Email is required"
                })}/>
                {errors.email&&<span>{errors.email.message}</span>}
                <label>Password: </label>
                <input type="password" placeholder='Password' {...register('password',{
                    minLength:{
                        value:6,
                        message:"Enter At least 6 char/Number/symbol"
                    }
                })}></input>
                {errors.password && <span>{errors.password.message}</span>}
                <button type='submit'>Login</button>
            </form>
            
        </>
    )
}

export default Loginform