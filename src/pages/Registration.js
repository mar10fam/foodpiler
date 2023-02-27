import { React } from "react";
import { useForm } from "react-hook-form"; 

export default function Registration() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }

    return ( 
        
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
            {...register("mail", { required: true })}
            aria-invalid={errors.mail ? "true" : "false"}
        />
        {errors.mail?.type === 'required' && <p role="alert">Invalid Email</p> }
        <input
            {...register("password", { required: true, minLength: 6 })}
            aria-invalid={errors.password ? "true" : "false"}s
        />
        {errors.password?.type === 'required' && <p role="alert">Password must be at least 6 characters</p> }
        <input type="submit" />
      </form>
      
    );
}