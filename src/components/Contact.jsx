const Contact = () => {
    return (
        <div
            name='contact'
            className='w-full h-screen flex justify-center items-center p-4'>
            <form
                action='https://getform.io/f/a5478af3-52ef-479b-80c1-648e35c5cc46'
                method='POST'
                className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300 py-4'>
                        \\ Submit the form below or shoot me an email -
                        jackal3166@gmail.com
                    </p>
                </div>
                <input
                    type='text'
                    name='name'
                    placeholder='Name'
                    className='bg-[#ccd6f6] p-2'
                />
                <input
                    type='email'
                    name='email'
                    placeholder='Email'
                    className='bg-[#ccd6f6] p-2 my-4'
                />
                <textarea
                    name='message'
                    placeholder='Message'
                    rows='10'
                    className='bg-[#ccd6f6] p-2'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
};

export default Contact;
