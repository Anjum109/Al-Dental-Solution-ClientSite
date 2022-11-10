import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import 'react-toastify/dist/ReactToastify.css';



const AddServices = () => {

    const { user } = useContext(AuthContext);
    useTitle('AddService');
    const notify = () => toast("Successfully added")

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const Service_name = form.Service_name.value;
        const title = form.title.value;
        const image_url = form.image_url.value;
        const structure_img = form.structure_img.value;
        const description = form.description.value;
        const BenefitsAndRisks = form.BenefitsAndRisks.value;
        const Total_Cost = form.Total_Cost.value;
        console.log(Service_name, title, image_url, structure_img, description, BenefitsAndRisks, Total_Cost);

        const service = {
            Service_name, title, image_url, structure_img, description, BenefitsAndRisks, Total_Cost
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {

                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className='mt-12 bg-neutral-600 p-5 grid grid-cols-1 gap-6'>
                <h1 className='text-4xl text-center mb-12'>Add Your New Service</h1>

                <form className='lg:mx-28' onSubmit={handleAddService}>
                    <input type="text"
                        name="Service_name"
                        placeholder="Service name" defaultValue=""
                        className="input input-bordered w-full mb-5" />
                    <input name="title"
                        type="text"
                        placeholder="Enter the title"
                        className="mb-5 input input-bordered w-full" />
                    <input name="Total_Cost"
                        type="text"
                        placeholder="Enter the Total_Cost"
                        className="mb-5 input input-bordered w-full" />
                    <input name="image_url"
                        type="text"
                        placeholder="Thumble URL Link"
                        className="input mb-5 input-bordered w-full" />
                    <input name="structure_img"
                        type="text"
                        placeholder="Website URL link"
                        className="input mb-5 input-bordered w-full" />
                    <textarea name="description"
                        type="text"
                        placeholder="Type Service description"
                        className="input mb-5 input-bordered w-full h-36" />
                    <textarea name="BenefitsAndRisks"
                        type="text"
                        placeholder="Type the service BenefitsAndRisks"
                        className="input mb-5 input-bordered w-full h-36" />
                    <div>                    <button type="submit" onClick={notify} className="input text-black input-bordered w-full" value="Add Service">
                        Submit</button>    <ToastContainer /></div>

                </form>
            </div>
        </div>
    );
};

export default AddServices;