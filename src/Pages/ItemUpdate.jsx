import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const ItemUpdate = () => {

    const updateItem = useLoaderData()
    console.log(updateItem)
    const { name, brand, type, description, price, photo, rating, _id } = updateItem || {};


const handleUpdate = e =>{
    e.preventDefault()

    const form = e.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;
    const photo = form.photo.value;

    const updatedItem = {name, brand, type, price, rating , description, photo} 
    console.log(updatedItem)

    fetch(`http://localhost:5000/products/${_id}`,{
        method: "PUT",
        headers: {
            'content-type': 'application/json'
        },
        body:JSON.stringify(updatedItem)
    })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount > 0){
                Swal.fire({
                  title: "Good job!",
                  text: "Product updated successfully!",
                  icon: "success"
                });
              }
        })
      


}


    return (
        <div className="mx-auto  md:mt-24">
      <div className=" bg-[#F4F3F0] max-w-7xl mx-auto pb-20">
        <h1 className="text-center text-2xl py-8 underline ">
          Update Your Product
        </h1>
        <form onSubmit={handleUpdate}>
          <div className="md:flex px-20 gap-x-4">
            <div className="form-control md:w-1/2">
              <label htmlFor="" className="label">
                <span className="label-text text-black">Product Name</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Product Name"
                  defaultValue={name}
                  type="text"
                  name="name"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label htmlFor="" className="label">
                <span className="label-text text-black">Brand</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Brand name"
                  defaultValue={brand}
                  type="text"
                  name="brand"
                />
              </label>
            </div>

          </div>
      
          <div className="md:flex px-20 gap-x-4">
            <div className="form-control md:w-1/2">
              <label htmlFor="" className="label">
                <span className="label-text text-black">Product Type</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Product type"
                  defaultValue={type}
                  type="text"
                  name="type"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2">
              <label htmlFor="" className="label">
                <span className="label-text text-black">Price</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Price"
                  type="text"
                  name="price"
                  defaultValue={price}
                />
              </label>
            </div>
          </div>
          
          <div className="md:flex px-20 gap-x-4">
            <div className="form-control md:w-1/2">
              <label htmlFor="" className="label">
                <span className="label-text text-black">Description</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Description"
                  type="text"
                  name="description"
                  defaultValue={description}
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label htmlFor="" className="label">
                <span className="label-text text-black">Rating</span>
              </label>
              <label className="input-group">
                <input
                  className="input input-bordered w-full"
                  placeholder="Rating"
                  type="text"
                  name="rating"
                  defaultValue={rating}
                />
              </label>
            </div>
          </div>
       
          <div className="px-20 mt-4">
            <label className="input-group">
              <span className="label-text text-black">Photo URL</span>
              <input
                className="input input-bordered w-full"
                placeholder="Photo url"
                type="text"
                name="photo"
                defaultValue={photo}
              />
            </label>
            <div className="mt-8">
              <input
                type="submit"
                value="Update Product"
                className="btn btn-block bg-red-400 text-white"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default ItemUpdate;