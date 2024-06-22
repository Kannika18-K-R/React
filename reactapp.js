import React from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log(data);
    alert('Table booked successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name', { required: true })} aria-invalid={errors.name ? "true" : "false"} />
        {errors.name && <span role="alert">This field is required</span>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" {...register('email', { required: true, pattern: /^\S+@\S+$/i })} aria-invalid={errors.email ? "true" : "false"} />
        {errors.email && <span role="alert">Enter a valid email</span>}
      </div>

      <div>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" {...register('date', { required: true })} aria-invalid={errors.date ? "true" : "false"} />
        {errors.date && <span role="alert">This field is required</span>}
      </div>

      <div>
        <label htmlFor="time">Time</label>
        <input id="time" type="time" {...register('time', { required: true })} aria-invalid={errors.time ? "true" : "false"} />
        {errors.time && <span role="alert">This field is required</span>}
      </div>

      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input id="guests" type="number" {...register('guests', { required: true, min: 1, max: 10 })} aria-invalid={errors.guests ? "true" : "false"} />
        {errors.guests && <span role="alert">Enter between 1 and 10 guests</span>}
      </div>

      <button type="submit">Book Table</button>
    </form>
  );
};

export default BookingForm;
