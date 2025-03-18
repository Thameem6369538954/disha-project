import React from 'react'
import MM from "../Images/MM.png"
import Bri from "../FoodImg/Bri.jpg"
import family from "../FoodImg/family.jpg"
import Agre from "../FoodImg/Agre.jpg"
import Grain from "../FoodImg/Grain.jpg"
import Trans from "../FoodImg/Trans.jpg"
const Cate = () => {
  return (
    <div>
     
        <div>
        <div className=" py-10 px-4">
        <div className="flex flex-col items-center justify-around">
                          <h1 className="font-[Wonder] text-center  text-3xl sm:text-4xl md:text-5xl lg:text-8xl  text-[#9f0712]">
                          Rice Tales
                          </h1>
                    <img src={MM} className="w-90" alt="" />
                  </div>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card */}
    {[
      { title: "World's Favorite", tag: "World's Favorite", image: Bri },
      { title: "My Rice Story", tag: "My Rice Story", image: family },
      { title: "Ricing since Centuries", tag: "Ricing since Centuries", image: Agre },
      { title: "The Wonder Grain", tag: "The Wonder Grain", image: Grain },
      { title: "Our Special menu", tag: "Our Special menu", image: "/image5.jpg" },
      { title: "Transport", tag: "Transport", image: Trans },
    ].map((item, idx) => (
      <div key={idx} className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
        <div className="relative">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded">
            {item.tag}
          </span>
        </div>
        <div className="p-4 flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-600">Seamlessly visualize quality intellectual capital without superior collaboration and idea tically</p>
          <div className="mt-4 flex items-center justify-between text-sm">
            <a href="#" className="text-orange-500 font-semibold hover:underline">Read More →</a>
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>

        </div>
    </div>
  )
}

export default Cate