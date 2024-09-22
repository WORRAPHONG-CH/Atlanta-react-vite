import {useState,useEffect} from "react";
import {motion} from "framer-motion";



// framer motion
const containerVariants={
    hidden:{
        opacity:0
    },
    visible:{
        opacity:1,
        transition:{
            delay:0.2,
            duration:0.75
        }
    }
}

export default function Reservation() {

    // [date,setDate] = useState("");
    // [name,setName] = useState("");
    // [email,setEmail] = useState("");

    // state for fetch api obtain array(obj)
    const [data,setData] = useState([]);
    const [count,setCount] = useState(0);


    // useEfftect [] => ทำแค่ครั้งเดียวหลัง component didMount เอาไว้ fetch ข้อมูลมารอบเดียว
    // side effect => ให้ทำอะไรหลัง render ครั้งแรก ผลข้างเคียงภายนอก ex fetch api, update DOM
    useEffect(()=>{
            fetch(`https://jsonplaceholder.typicode.com/users/${count}`)
            .then(res => res.json()) // แปลง response ที่ได้มา เป้็น json (javascirpt object)
            .then(data => setData(data)); // รับข้อมูลมาจริงๆ เอาเข้า state
        },[count]); //array dependencies => ให้ useEffect ทำงานทุกครั้งที่ตัวใน array มีการเปลี่ยนแปลง

    console.log(data.name);

    const handleSubmit = (event) =>{
        // กำหนดให้ไม่ clear ค่า เวลาที่มีการ render ใหม่
        console.log(event);

        // บันทึกค่า


        // reset ค่าใน State
        setCount(0);
    }

    return (
    <motion.div className="min-h-screen min-w-full"
    variants={containerVariants} initial={"hidden"} animate={"visible"}
    >
        <div className="flex flex-row justify-center mb-3 md:mb-10">
            <h1 className="text-4xl text-[#E79E4F] font-bold my-5">Reservation</h1>
        </div>

        <div className="card bg-white w-3/4 mx-auto md:w-4/12">
            <h2 className="text-2xl p-2 text-center font-semibold text-slate-600 mb-3 md:text-2xl">Custumer Contact{count}</h2>
            
            <form onSubmit={handleSubmit} className="grid grid-cols-2 text-slate-600 gap-2">
                {/* row1 */}
            
                <div className="px-3 md:ps-5">
                    <label htmlFor="date" className="text-lg md:text-xl font-semibold">Date</label>
                    <input type="date" className="block w-full border-solid text-sm  text-gray-600 bg-[#EEEEEE] rounded-md
                    md:w-full md:text-lg"/>
                </div>
                <div className="px-3 md:pe-5">
                <label htmlFor="time" className="text-lg md:text-xl font-semibold ">Time</label>
                <select name="time" id="time" className="block bg-[#EEEEEE] w-full text-sm sm:text-md font-semibold border-solid border-2 rounded-md
                        md:w-3/4 md:text-md">
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                    <option value="9:00 PM">9:00 PM</option>
                    <option value="10:00 PM">10:00 PM</option>
                    <option value="11:00 PM">11:00 PM</option>

                </select>
                </div>
                {/* row2 */}
                <div className="col-span-2 px-3 md:px-5">
                    <label htmlFor="name" className="text-lg font-semibold  md:text-xl ">Name</label>
                    <input type="text" placeholder="Please enter name" value={data.name}
                    className="bg-[#EEEEEE] w-full p-1 border-solid rounded-md" />
                </div>

                {/* row3 */}
                <div className="col-span-2 px-3 md:px-5">
                <label htmlFor="email" className="text-lg font-semibold  md:text-xl ">Email</label>
                    <input type="" placeholder="Please enter your email" value={data.email}
                    className="bg-[#EEEEEE] w-full p-1 border-solid rounded-md" />
                </div>
                {/* row4 */}
                <div className="col-span-2 px-3 md:px-5">
                <label htmlFor="tel" className="text-lg font-semibold  md:text-xl ">Phone</label>
                    <input type="tel" placeholder="Please enter your phone number" value={data.phone}
                    className="bg-[#EEEEEE] w-full p-1 border-solid rounded-md" />
                </div>
                {/* row5 */}
                <div className="col-span-2 px-3 md:px-5">
                <label htmlFor="address" className="text-lg font-semibold  md:text-xl ">Address</label>
                    <textarea type="" rows={3} placeholder="Please enter your address" value={data.address} 
                    className="bg-[#EEEEEE] w-full p-1 border-solid rounded-md" />
                </div>
                
                <div></div>
                <div></div>
                <div></div>
                <div className="col-span-2 flex justify-center px-3 my-4 md:px-5 ">
                    <button type="submit" className="btn btn-success text-white text-lg md:text-xl" >Submit</button>
                    <button type="button" onClick={()=>setCount((count)=> count+1)}
                    className="btn btn-warning text-white mx-2 text-lg">Add</button>
                </div>
            </form>
        </div>
    </motion.div>
    )
}

