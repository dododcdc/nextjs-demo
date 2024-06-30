import Image from "next/image";

import apng from '@/public/images/a.png'

export default function Home() {
  return (
    <main >



      <div className="w-2/3 flex justify-center items-center bg-black">

        <div className="w-64 bg-pink-400" >gg</div>


        <div className='text-white bg-blue-500'>
          <strong>Andrew Alfred</strong><br></br>
          <span>Technical advisor</span>
        </div>
      </div>

      <div className="w-full  flex   justify-center ">
        <div className="table  w-2/3 bg-gradient-to-r from-pink-500 to-blue-400  rounded-lg ...">
          <div className="table-header-group font-bold  bg-gray-500 ...">
            <div className="table-row rounded-lg ">
              <div className="table-cell text-left rounded-tl-lg ...">Song</div>
              <div className="table-cell text-left ...">Artist</div>
              <div className="table-cell text-left rounded-tr-lg  ...">Year</div>
            </div>
          </div>
          <div className="table-row-group ">
            <div className="table-row hover:bg-yellow-300 ">
              <div className="table-cell ...">The Sliding Mr. Bones (Next Stop, Pottersville)</div>
              <div className="table-cell ...">Malcolm Lockyer</div>
              <div className="table-cell ...">1961</div>
            </div>
            <div className="table-row">
              <div className="table-cell ...">Witchy Woman</div>
              <div className="table-cell ...">The Eagles</div>
              <div className="table-cell ...">1972</div>
            </div>
            <div className="table-row">
              <div className="table-cell ...">Shining Star</div>
              <div className="table-cell ...">Earth, Wind, and Fire</div>
              <div className="table-cell ...">1975</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
