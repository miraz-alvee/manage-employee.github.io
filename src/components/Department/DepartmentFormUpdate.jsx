import React from 'react'

const DepartmentFormUpdate = () => {

  const handleUpdateForm = e =>{
    e.preventDefault();
    const form = e.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const password = form.password.value;
    const date = form.date.value;
    const month = form.month.value;
    const time = form.time.value;
    const week = form.week.value;
    const details = form.details.value;
    const number = form.number.value;
    const url = form.url.value;


    const newEmployee = {firstName, lastName, email, password, date, month, time, week, details, number, url}
    console.log(newEmployee);
  }

  return (
    <div className="bg-[#eee1e1d2] p-16 w-full px-10">
      <h2 className="text-3xl font-extrabold text-center mb-10">Employees Update Form</h2>
      <form onSubmit={handleUpdateForm}>
        {/* row 1 */}
        <div className="md:flex mb-8">
          <div className="form-control md:flex md:w-1/2">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input type="text" name="firstName"  placeholder="First Name" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered w-full" />
          </div>
        </div>
        {/* row 2 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="text" name="password" placeholder="**********" className="input input-bordered w-full" />
          </div>
        </div>
        {/* row 3 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input type="date" name="date" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Month</span>
            </label>
            <input type="month" name="month" className="input input-bordered w-full" />
          </div>
        </div>
        {/* row 4 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Time</span>
            </label>
            <input type="time" name="time" className="input input-bordered w-full" />
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Week</span>
            </label>
            <input type="week" name="week" className="input input-bordered w-full" />
          </div>
        </div>
        {/* row 5 */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-full">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <textarea name="details" placeholder="Details" className="textarea textarea-bordered w-full" rows="4"></textarea>
          </div>
          <div className='md-1/3 w-full'>
            <div className="form-control ml-4">
              <label className="label">
                <span className="label-text">Number</span>
              </label>
              <input type="number" name="number" className="input input-bordered w-full" />
            </div>
            <div className="form-control ml-4">
              <label className="label">
                <span className="label-text">URL</span>
              </label>
              <input type="url" name="url" placeholder="URL" className="input input-bordered w-full" />
            </div>
          </div>
        </div>

        <input type="submit" value="Add Form" className="btn btn-block" />
      </form>
    </div>
  )
}

export default DepartmentFormUpdate
