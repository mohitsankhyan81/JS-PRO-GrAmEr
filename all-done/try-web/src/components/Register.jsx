import {useForm} from 'react-hook-form'

const Register=()=>{
    const {register,handleSubmit,watch,formState:{errors}}=useForm();
    const password=watch("password");
    const submitform=(data)=>{
        console.log(data);
    }
    return (
        <>
        <form onSubmit={handleSubmit(submitform)}>
            <label>Email: </label>
            <input type="email" placeholder='Enter Email' {...register('email',
                {
                    required:{
                        value:true,
                        message:"Enter email is necessary"
                    },
                }
            )}/>
            {errors.email && <span>{errors.email.message}</span>}
            <br/>
            <label>Roll No: </label>
            <input type="text" placeholder='Enter RollNo' {...register('rollno',
                {
                    required:"Roll no is required",
                    pattern:{
                        value: /^[0-9]{2,15}$/,
                        message:"minmum 15 number"
                    }
                }
            )} />
            {errors.rollno && <span>{errors.rollno.message}</span>}
            <br/>
            <label>Password: </label>
            <input type="password" placeholder='Enter Password' {...register('password',
                {
                    required:"Enter the valid Password",
                    minLength:{
                        value:8,
                        message:"Minimum length require"
                    },
                    maxLength:{
                        value:15,
                        message:"Maximum length require"
                    }
                }
            )}/>
            {errors.password && <span>{errors.password.message}</span>}
            <br/>
            <label>ReEnter Password: </label>
            <input type="password" placeholder='Enter Password' {...register('repassword',
                {
                    required:"Please enter password",
                    validate:(value)=>
                        value===password||"Password not match"
                }
            )}/>
            {errors.repassword&& <span>{errors.repassword.message}</span>}
            <br/>
            <label>Data</label>
            <select {...register('select')}>
                <option>Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
            </select>
            <br/>
            <label>Student of Chitkara</label>
            <input type="checkbox" {...register('cheackbox')} />
            <button>Submit</button>
        </form>
        </>
    )
}

export default Register