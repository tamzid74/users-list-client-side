import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UserAddedModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newUser = {
      image: data.image,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      street: data.street,
      suite: data.suite,
      city: data.city,
      companyName: data.companyName,
    };
    console.log(newUser);
    const toastId = toast.loading("Users Creating...");
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Successfully added the Users!", { id: toastId });
        reset();
        // setIsOpen(false);
        console.log(data);
      });
  };
  return (
    <div>
      <div className="relative flex justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="sticky mb-5 px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add a User
        </button>

        {isOpen && (
          <div
            className="fixed inset-0 z-10 overflow-y-auto"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                <h3
                  className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                  id="modal-title"
                >
                  Add A User
                </h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* {row-1} */}
                  <div className="md:flex gap-4">
                    <div className="form-control w-full">
                      <label className="label">
                        <span className="label-text text-white">Image Url</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          placeholder="Avatar"
                          {...register("image", { required: true })}
                          className="input input-bordered w-full rounded-2xl "
                        />
                      </label>
                    </div>
                  </div>

                  {/* {row-2} */}
                  <div className="md:flex gap-4">
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text text-white">FirstName</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          placeholder="FirstName"
                          {...register("firstName", { required: true })}
                          className="input input-bordered w-full rounded-2xl "
                        />
                      </label>
                    </div>
                    <div className="form-control md:w-1/2">
                      <label className="label">
                        <span className="label-text text-white">LastName</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          placeholder="LastName"
                          {...register("lastName", { required: true })}
                          className="input input-bordered w-full rounded-2xl "
                        />
                      </label>
                    </div>
                  </div>
                  {/* {row-3} */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text text-white">Email</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="input input-bordered w-full rounded-2xl "
                      />
                    </label>
                  </div>
                  {/* {row-5} */}
                  <div className="md:flex gap-4">
                    <div className="form-control ">
                      <label className="label">
                        <span className="label-text text-white">Address</span>
                      </label>
                      <label className="input-group">
                        <input
                          type="text"
                          className="input input-bordered w-[45%] rounded-2xl mr-2 mb-2"
                          placeholder="street"
                          {...register("street", { required: true })}
                        />
                        <input
                          type="text"
                          className="input input-bordered w-[50%] rounded-2xl"
                          placeholder="suite"
                          {...register("suite", { required: true })}
                        />
                        <input
                          type="text"
                          className="input input-bordered w-full rounded-2xl "
                          placeholder="City"
                          {...register("city", { required: true })}
                        />
                      </label>
                    </div>
                  </div>
                  {/* {row-6} */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Company Name</span>
                    </label>
                    <label className="input-group">
                      <input
                        type="text"
                        placeholder="company name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full rounded-2xl "
                      />
                    </label>
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                      <button
                        onClick={() => setIsOpen(false)}
                        type="button"
                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                      >
                        Cancel
                      </button>

                      <input
                        type="submit"
                        value="Add "
                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                      />
                    </div>
                    ;
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserAddedModal;
