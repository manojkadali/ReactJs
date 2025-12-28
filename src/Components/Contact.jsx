const Contact=()=>{
    return(
        <div >
        <div>
            <h1 className="font-bold text-4xl p-4 m-4">Contanct US</h1>
            <p className="text-2xl p-2 m-2">This is the contact us Page</p>
        </div><div className="h-screen">
                <form>
                    <input type="text" className="border border-black p-2 m-2 rounded-md" placeholder="name"/>
                    <input type="text" className="border border-black p-2 m-2" placeholder="message"/>
                    <button className="border border-black p-2 m-2 bg-yellow-200 rounded-lg">Submit</button>
                </form>
            </div>
           </div>
    )
};

export default Contact;
